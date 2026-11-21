/* Escape 18 platform: browser transports (SPEC "Wire protocol", "Offline fallback" level 1).
   Needs core/protocol.js and core/relay-core.js loaded first (globals E18P_Protocol, E18P_RelayCore).
   - ws mode: relay = 'wss://host' -> POST https://host/api/class, socket wss://host/ws?code=..&role=..&key=..|team=..
   - local mode: relay = '' -> the window that calls createClass (or hostLocal) runs a RelayCore and serves it to
     same-origin windows: directly (same window, parent, top, sibling frames), over BroadcastChannel('e18p-local') (other tabs)
     and over window.postMessage (frames whose host window cannot be reached directly).
   The client sends hello itself on every (re)connect; callers never send hello. Outgoing 'events' frames get a seq (when they have
   none), are kept in memory + sessionStorage until the relay acks them, and are resent after a reconnect (backoff 1 to 15 s). */
(function (root) {
  'use strict';
  var P = root.E18P_Protocol, RC = root.E18P_RelayCore;
  var CHANNEL = 'e18p-local', ENV = 'e18pl';
  var FATAL = ['no-class', 'ended', 'full', 'key', 'team', 'role'];

  function jclone(o) { return JSON.parse(JSON.stringify(o)); }
  function ss() { try { return root.sessionStorage; } catch (e) { return null; } }
  function ssGet(k) { try { var s = ss(); return s ? s.getItem(k) : null; } catch (e) { return null; } }
  function ssSet(k, v) { try { var s = ss(); if (s) { if (v == null) s.removeItem(k); else s.setItem(k, v); } } catch (e) { /* private mode */ } }
  function isWs(relay) { return typeof relay === 'string' && /^wss?:\/\//i.test(relay); }
  function httpBase(relay) { return relay.replace(/^ws/i, 'http').replace(/\/ws\/?$/, '').replace(/\/+$/, ''); }

  // ---------------- local host ----------------
  var HOST = null;
  function LocalHost(opts) {
    opts = opts || {};
    var self = this, KEY = 'e18p.localhost', roomMap = {};
    function setCatalog(c) {
      if (!c || !c.lessons) return;
      c.lessons.forEach(function (l) { roomMap[l.slug] = (l.rooms || []).map(function (r) { return r.id; }); });
      ssSet(KEY + '.rooms', JSON.stringify(roomMap));
    }
    try { roomMap = JSON.parse(ssGet(KEY + '.rooms') || '{}') || {}; } catch (e) { roomMap = {}; }
    setCatalog(opts.catalog);
    var core = RC.create({ rooms: function (slug) { return roomMap[slug] || []; }, known: function (slug) { return !Object.keys(roomMap).length || Object.prototype.hasOwnProperty.call(roomMap, slug); } });
    // A reloaded teacher tab gets its classes back (sessionStorage of this tab only).
    try { var saved = JSON.parse(ssGet(KEY) || 'null'); if (saved) core.load(saved); } catch (e) { /* fresh */ }
    var links = {};   // core conn -> {deliver(msg)}
    var byCid = {};   // cid -> core conn
    var bc = null, saveT = 0;
    function save() { if (saveT) return; saveT = setTimeout(function () { saveT = 0; ssSet(KEY, JSON.stringify(core.dump())); }, 500); }
    function route(outs) {
      outs.forEach(function (o) {
        core.conns(o.code, o.to).forEach(function (c) {
          var L = links[c]; if (!L) return;
          try { L.deliver(jclone(o.msg)); } catch (e) { /* window gone */ }
          if (o.close) self._drop(c, true);
        });
      });
      save();
    }
    this.core = core;
    this.setCatalog = setCatalog;
    this.createClass = function (a) { var r = core.createClass(a); save(); return r; };
    // Attach a client. deliver(msg) receives relay messages. Returns {ok, err, send(msg), close()}.
    this.attach = function (p, deliver) {
      var r = core.connect(p.code, { role: p.role, key: p.key, team: p.team });
      if (!r.ok) return { ok: false, err: r.err };
      var conn = r.conn;
      links[conn] = { deliver: deliver };
      return {
        ok: true, err: null, conn: conn,
        send: function (msg) { if (links[conn]) route(core.receive(conn, jclone(msg))); },
        close: function () { self._drop(conn, false); }
      };
    };
    this._drop = function (conn, already) { if (!links[conn]) return; delete links[conn]; if (!already) route(core.disconnect(conn)); else core.disconnect(conn); };
    // Messaging links (BroadcastChannel and postMessage) use envelopes {e18pl:1, kind, cid, ...}.
    function onEnvelope(d, reply) {
      if (!d || d[ENV] !== 1 || typeof d.cid !== 'string') return;
      if (d.kind === 'connect') {
        if (byCid[d.cid]) return; // already attached on another channel
        if (!core.hasClass(d.code)) { reply({ kind: 'refused', err: 'no-class' }); return; } // another host may still answer 'open'
        var a = self.attach(d, function (msg) { reply({ kind: 'msg', msg: msg }); });
        if (!a.ok) { reply({ kind: 'refused', err: a.err }); return; }
        byCid[d.cid] = a; reply({ kind: 'open' });
      } else if (d.kind === 'frame') { var a2 = byCid[d.cid]; if (a2) a2.send(d.msg); }
      else if (d.kind === 'close') { var a3 = byCid[d.cid]; if (a3) { a3.close(); delete byCid[d.cid]; } }
    }
    if (typeof BroadcastChannel === 'function') {
      try {
        bc = new BroadcastChannel(CHANNEL);
        bc.onmessage = function (ev) { var d = ev.data; onEnvelope(d, function (m) { m[ENV] = 1; m.cid = d.cid; m.to = 'client'; bc.postMessage(m); }); };
        bc.postMessage({ e18pl: 1, kind: 'host-up', cid: '-', to: 'client' });
      } catch (e) { bc = null; }
    }
    root.addEventListener('message', function (ev) {
      if (ev.origin !== location.origin || !ev.data || ev.data[ENV] !== 1 || ev.data.to === 'client') return;
      var src = ev.source, d = ev.data;
      onEnvelope(d, function (m) { m[ENV] = 1; m.cid = d.cid; m.to = 'client'; try { src.postMessage(m, location.origin); } catch (e) { /* gone */ } });
    });
    var sweepT = setInterval(function () { route(core.sweep()); }, 60000);
    this.stop = function () { clearInterval(sweepT); if (bc) bc.close(); };
    root.__E18P_LOCALHOST = this;
  }
  function hostLocal(opts) {
    if (HOST) { if (opts && opts.catalog) HOST.setCatalog(opts.catalog); return HOST; }
    HOST = new LocalHost(opts);
    return HOST;
  }
  // Find a host object directly in this same-origin window tree.
  function findHost() {
    var seen = [], list = [];
    function add(w) { try { if (w && seen.indexOf(w) < 0) { seen.push(w); list.push(w); } } catch (e) { /* cross-origin */ } }
    add(root); try { add(root.parent); add(root.top); add(root.opener); } catch (e) { /* ignore */ }
    try { var t = root.top; for (var i = 0; i < t.frames.length; i++) add(t.frames[i]); } catch (e) { /* ignore */ }
    for (var j = 0; j < list.length; j++) { try { var h = list[j].__E18P_LOCALHOST; if (h && typeof h.attach === 'function') return h; } catch (e) { /* cross-origin */ } }
    return null;
  }

  // ---------------- createClass ----------------
  function createClass(o) {
    o = o || {};
    if (isWs(o.relay)) {
      return fetch(httpBase(o.relay) + '/api/class', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lesson: o.lesson, minutes: o.minutes, research: o.research === true }) })
        .then(function (r) { if (!r.ok) throw new Error('relay ' + r.status); return r.json(); });
    }
    try { return Promise.resolve(hostLocal({ catalog: o.catalog }).createClass({ lesson: o.lesson, minutes: o.minutes, research: o.research === true })); }
    catch (e) { return Promise.reject(e); }
  }

  // ---------------- client ----------------
  function connect(o) {
    o = o || {};
    var code = P.normCode(o.code), role = o.role === 'teacher' ? 'teacher' : 'pupil', team = o.team || null, key = o.key || null;
    var qkey = 'e18p.q.' + code + '.' + (team || 'teacher'), skey = 'e18p.seq.' + code + '.' + (team || 'teacher');
    var handlers = {}, closed = false, fatal = false, status = '', attempt = 0, retryT = 0, pingT = 0, lastRx = 0;
    var offset = 0, bestRtt = Infinity, pingAt = {};
    var queue = []; try { queue = JSON.parse(ssGet(qkey) || '[]'); if (!Array.isArray(queue)) queue = []; } catch (e) { queue = []; }
    var other = []; // non-event frames waiting for a connection (memory only)
    var seq = parseInt(ssGet(skey) || '0', 10) || 0;
    queue.forEach(function (f) { if (f.seq > seq) seq = f.seq; });
    var link = null; // {send(msg), close()}
    var ws = isWs(o.relay), PING_MS = ws ? 20000 : 4000, DEAD_MS = ws ? 60000 : 12000;

    function emit(type, data) { (handlers[type] || []).slice().forEach(function (fn) { try { fn(data); } catch (e) { setTimeout(function () { throw e; }); } }); }
    function setStatus(s) { if (s !== status) { status = s; emit('status', s); } }
    function persist() { ssSet(qkey, queue.length ? JSON.stringify(queue) : null); ssSet(skey, String(seq)); }
    function rawSend(msg) { if (!link) return false; try { link.send(msg); return true; } catch (e) { return false; } }
    function ping() { var id = Date.now(); pingAt.last = id; rawSend({ t: 'ping' }); }
    function onMsg(msg) {
      if (!msg || typeof msg.t !== 'string') return;
      lastRx = Date.now();
      if (msg.t === 'pong' && typeof msg.now === 'number' && pingAt.last) {
        var t1 = Date.now(), rtt = t1 - pingAt.last; pingAt.last = 0;
        if (rtt <= bestRtt * 1.5 || bestRtt === Infinity) { bestRtt = Math.min(bestRtt, rtt); offset = msg.now - (t1 - rtt / 2); }
      }
      if ((msg.t === 'welcome' || msg.t === 'snapshot') && typeof msg.now === 'number' && bestRtt === Infinity) offset = msg.now - Date.now();
      if (msg.t === 'ack') { var n = queue.length; queue = queue.filter(function (f) { return f.seq !== msg.seq; }); if (queue.length !== n) persist(); }
      if (msg.t === 'welcome' || msg.t === 'snapshot') { attempt = 0; flushQueue(); }
      if (msg.t === 'error' && FATAL.indexOf(msg.code) >= 0) { fatal = true; }
      emit(msg.t, msg);
      if (fatal) { stop(); setStatus('offline'); }
    }
    function flushQueue() {
      queue.forEach(function (f) { rawSend(f); });
      var o2 = other; other = []; o2.forEach(function (f) { if (!rawSend(f)) other.push(f); });
    }
    function onOpen() {
      setStatus('online'); lastRx = Date.now();
      rawSend(role === 'pupil' ? { t: 'hello', team: team, v: P.V } : { t: 'hello', v: P.V });
      ping();
      clearInterval(pingT);
      pingT = setInterval(function () {
        if (Date.now() - lastRx > DEAD_MS) { drop(); return; }
        ping();
      }, PING_MS);
    }
    function drop() { // connection lost: go offline and retry
      clearInterval(pingT); pingT = 0;
      var l = link; link = null;
      if (l) { try { l.close(); } catch (e) { /* ignore */ } }
      if (closed || fatal) return;
      setStatus('offline');
      schedule();
    }
    function stop() { clearInterval(pingT); pingT = 0; clearTimeout(retryT); var l = link; link = null; if (l) { try { l.close(); } catch (e) { /* ignore */ } } }
    function schedule() {
      clearTimeout(retryT);
      var d = Math.min(15000, 1000 * Math.pow(2, attempt++)) * (0.8 + Math.random() * 0.4);
      retryT = setTimeout(open, Math.max(1000, Math.min(15000, d)));
    }
    function open() {
      if (closed || fatal) return;
      setStatus('connecting');
      if (ws) openWs(); else openLocal();
    }
    function openWs() {
      var q = 'code=' + encodeURIComponent(code) + '&role=' + role + (role === 'teacher' ? '&key=' + encodeURIComponent(key || '') : '&team=' + encodeURIComponent(team || ''));
      var sock;
      try { sock = new WebSocket(o.relay.replace(/\/+$/, '').replace(/\/ws$/, '') + '/ws?' + q); } catch (e) { drop(); return; }
      var mine = { send: function (m) { if (sock.readyState !== 1) throw new Error('closed'); sock.send(JSON.stringify(m)); }, close: function () { try { sock.close(); } catch (e) { /* ignore */ } } };
      sock.onopen = function () { link = mine; onOpen(); };
      sock.onmessage = function (ev) { var p = P.parseFrame(String(ev.data)); if (p.ok) onMsg(p.msg); };
      sock.onclose = function () { if (link === mine || !link) { link = null; drop(); } };
      sock.onerror = function () { /* onclose follows */ };
    }
    function openLocal() {
      var params = { code: code, role: role, key: key, team: team };
      var h = findHost();
      if (!h && role === 'teacher') h = hostLocal({}); // the teacher window is the host (also after a reload)
      if (h) {
        var a = h.attach(params, function (msg) { setTimeout(function () { onMsg(msg); }, 0); });
        if (!a.ok) { onMsg({ t: 'error', code: a.err }); return; }
        link = { send: a.send, close: a.close };
        onOpen();
        return;
      }
      // Messaging: BroadcastChannel and postMessage to parent/top/opener; the first channel that answers 'open' wins.
      var cid = P.randomString(12), chosen = null, bc = null, timer = 0, refused = null;
      var targets = [];
      try { if (root.parent && root.parent !== root) targets.push(root.parent); if (root.top && root.top !== root && root.top !== root.parent) targets.push(root.top); if (root.opener) targets.push(root.opener); } catch (e) { /* ignore */ }
      function post(via, m) {
        m[ENV] = 1; m.cid = cid; m.to = 'host';
        if ((via === 'bc' || via === 'all') && bc) { try { bc.postMessage(m); } catch (e) { /* closed */ } }
        if (via === 'pm' || via === 'all') targets.forEach(function (w) { try { w.postMessage(m, location.origin); } catch (e) { /* gone */ } });
      }
      function handle(via, d) {
        if (!d || d[ENV] !== 1 || d.to !== 'client') return;
        if (d.kind === 'host-up') { // a (re)started host: connect to it now instead of waiting for the backoff or the dead timer
          clearTimeout(timer); cleanup(); attempt = 0;
          if (!chosen) open(); else if (link) { link = null; drop(); }
          return;
        }
        if (d.cid !== cid) return;
        if (d.kind === 'open' && !chosen) {
          chosen = via; clearTimeout(timer);
          link = { send: function (m) { post(chosen, { kind: 'frame', msg: m }); }, close: function () { post(chosen, { kind: 'close' }); cleanup(); } };
          onOpen();
        } else if (d.kind === 'refused') { refused = refused || d.err; }
        else if (d.kind === 'msg' && chosen === via) onMsg(d.msg);
      }
      var onPm = function (ev) { if (ev.origin === location.origin) handle('pm', ev.data); };
      function cleanup() { if (bc) { try { bc.close(); } catch (e) { /* ignore */ } bc = null; } root.removeEventListener('message', onPm); }
      if (typeof BroadcastChannel === 'function') { try { bc = new BroadcastChannel(CHANNEL); bc.onmessage = function (ev) { handle('bc', ev.data); }; } catch (e) { bc = null; } }
      root.addEventListener('message', onPm);
      post('all', { kind: 'connect', code: code, role: role, key: key, team: team });
      // No host answered: keep the channel open for 'host-up', retry with backoff.
      // Refusals count only when no host opened within the window (several teacher tabs may each host a class).
      timer = setTimeout(function () { if (chosen) return; cleanup(); if (refused) onMsg({ t: 'error', code: refused }); else drop(); }, 1500);
    }

    var client = {
      code: code, role: role, team: team,
      on: function (type, fn) { (handlers[type] = handlers[type] || []).push(fn); return function () { handlers[type] = (handlers[type] || []).filter(function (f) { return f !== fn; }); }; },
      send: function (msg) {
        if (!msg || typeof msg.t !== 'string' || msg.t === 'hello') return false;
        if (msg.t === 'events') {
          var f = { t: 'events', seq: typeof msg.seq === 'number' ? msg.seq : ++seq, batch: msg.batch || [] };
          if (f.seq > seq) seq = f.seq;
          queue.push(f); if (queue.length > 500) queue = queue.slice(-500);
          persist();
          return rawSend(f);
        }
        if (rawSend(msg)) return true;
        if (msg.t !== 'ping') other.push(msg);
        return false;
      },
      close: function () { closed = true; netOff(); stop(); setStatus('offline'); },
      clockOffset: function () { return offset; },
      serverNow: function () { return Date.now() + offset; },
      status: function () { return status; },
      pending: function () { return queue.length; }
    };
    // A dropped wifi leaves a half-open socket that the heartbeat only notices after DEAD_MS: react to the browser's own
    // offline/online events so the pupil sees the offline badge at once and reconnects (queue resent) as soon as it is back.
    function onNetOff() { if (link) drop(); }
    function onNetOn() { if (closed || fatal || link) return; attempt = 0; clearTimeout(retryT); open(); }
    function netOff() { try { root.removeEventListener('offline', onNetOff); root.removeEventListener('online', onNetOn); } catch (e) { /* no window */ } }
    if (ws && root.addEventListener) { root.addEventListener('offline', onNetOff); root.addEventListener('online', onNetOn); }
    setTimeout(open, 0);
    return client;
  }

  // Pupil team id kept in sessionStorage e18p.team.<code> (reconnect = same team).
  function teamId(code) {
    var k = 'e18p.team.' + P.normCode(code), t = ssGet(k);
    if (!t || !P.TEAM_RE.test(t)) { t = P.newTeamId(); ssSet(k, t); }
    return t;
  }

  root.E18P_Transport = { createClass: createClass, connect: connect, hostLocal: hostLocal, LocalHost: LocalHost, findHost: findHost, teamId: teamId, isWs: isWs, httpBase: httpBase };
})(typeof window !== 'undefined' ? window : this);
