/* Escape 18 platform: pure relay state machine (SPEC "relay-core API"). No I/O, no timers, no logging of frames.
   Used by relay/worker.js (Durable Object), relay/dev-server.mjs and the local transport (core/transport.js).
   Every output is {to, code, msg[, close]}: to = a conn id | 'teacher' | 'pupils' | 'all' (within class `code`);
   core.conns(code, to) resolves it to conn ids. close: true means the host should close those sockets after sending. */
(function (root, f) { if (typeof module === 'object' && module.exports) module.exports = f(require('./protocol.js')); else root.E18P_RelayCore = f(root.E18P_Protocol); })(typeof self !== 'undefined' ? self : this, function (P) {
  'use strict';
  var SEQ_KEEP = 2000; // seqs remembered per team for dedup

  function clone(o) { return o == null ? o : JSON.parse(JSON.stringify(o)); }
  function clampMin(m) { m = Math.round(Number(m)); return isFinite(m) && m >= 1 && m <= 180 ? m : 30; }

  function newTeam(team, n, t) {
    return { team: team, n: n, label: P.teamLabel(n), colour: P.teamColour(n), online: true, joinedAt: t, lastSeen: t, room: null, roomsDone: [],
      answers: { n: 0, firstRight: 0, hints: 0, tries: 0 }, perRoom: {}, lock: null, pre: null, post: null, finished: false, sec: 0, fun: null, learned: null };
  }

  function create(opts) {
    opts = opts || {};
    var now = opts.now || function () { return Date.now(); };
    var roomsOf = opts.rooms || function () { return []; };
    var rand = opts.rand || P.randomString;
    // Optional catalog check: a slug is accepted only if known(slug) is true (the HTTP relay also checks this on create).
    var known = opts.known || function () { return true; };
    var classes = {};   // code -> {cls, key, teams:{id:TeamState}, order:[ids], seqs:{id:[seq]}, endedAt, counter}
    var conns = {};     // conn -> {code, role, team, hello}
    var connN = 0;

    function out(to, code, msg) { return { to: to, code: code, msg: msg }; }
    function teamMsg(C, id) { return out('teacher', C.cls.code, { t: 'team', team: clone(C.teams[id]) }); }

    function createClass(args) {
      args = args || {};
      var lesson = String(args.lesson || '');
      if (!P.SLUG_RE.test(lesson) || !known(lesson)) throw new Error('les');
      var code;
      do code = P.newClassCode(rand); while (classes[code]);
      var t = now();
      var minutes = clampMin(args.minutes);
      var C = {
        cls: { code: code, lesson: lesson, minutes: minutes, research: args.research === true, state: 'lobby', timer: { running: false, endsAt: null, leftMs: minutes * 60000 }, createdAt: t, expiresAt: t + P.HARD_TTL_MS },
        key: P.newKey(rand), teams: {}, order: [], seqs: {}, endedAt: null, counter: 0
      };
      classes[code] = C;
      return { code: code, key: C.key, expiresAt: C.cls.expiresAt };
    }

    function connect(code, o) {
      o = o || {};
      code = P.normCode(code);
      var C = classes[code];
      if (!C) return { ok: false, err: 'no-class', conn: null };
      if (o.role === 'teacher') { if (typeof o.key !== 'string' || o.key !== C.key) return { ok: false, err: 'key', conn: null }; }
      else if (o.role === 'pupil') { if (!P.TEAM_RE.test(String(o.team || ''))) return { ok: false, err: 'team', conn: null }; }
      else return { ok: false, err: 'role', conn: null };
      var conn = 'c' + (++connN);
      conns[conn] = { code: code, role: o.role, team: o.role === 'pupil' ? o.team : null, hello: false };
      return { ok: true, err: null, conn: conn };
    }

    function teamConnCount(code, team) {
      var n = 0; for (var k in conns) if (conns[k].code === code && conns[k].team === team && conns[k].hello) n++; return n;
    }

    function applyEvent(C, T, ev) {
      var d = ev.data, rooms = roomsOf(C.cls.lesson) || [];
      switch (ev.type) {
        case 'start': T.room = rooms.length ? rooms[0] : null; break;
        case 'answer':
          T.answers.n++; if (d.first) T.answers.firstRight++; if (d.hint) T.answers.hints++; T.answers.tries += d.tries || 1;
          if (d.room && T.roomsDone.indexOf(d.room) < 0) T.room = d.room;
          if (d.room) { // per room, for the hardest room by first-try %
            var pr = T.perRoom || (T.perRoom = {}), R = pr[d.room] || (pr[d.room] = { n: 0, firstRight: 0, hints: 0 });
            R.n++; if (d.first) R.firstRight++; if (d.hint) R.hints++;
          }
          break;
        case 'room': {
          if (T.roomsDone.indexOf(d.room) < 0) T.roomsDone.push(d.room);
          var next = null, i = rooms.indexOf(d.room);
          for (var j = (i < 0 ? 0 : i + 1); j < rooms.length; j++) if (T.roomsDone.indexOf(rooms[j]) < 0) { next = rooms[j]; break; }
          T.room = next;
          break;
        }
        case 'lock': T.lock = { opened: !!d.opened }; break;
        case 'check': if (d.phase === 'start') T.pre = { score: d.score, max: d.max }; else T.post = { score: d.score, max: d.max }; break;
        case 'end': T.finished = true; T.room = null; T.sec = typeof d.sec === 'number' ? d.sec : T.sec; break;
        case 'pupil_feedback': T.fun = d.fun; T.learned = d.learned; break;
        default: return false; // teacher_start: no team state
      }
      return true;
    }

    function pupilFrame(conn, c, C, m) {
      var res = [], t = now(), code = C.cls.code;
      if (m.t === 'ping') return [out(conn, code, { t: 'pong', now: t })];
      if (m.t === 'hello') {
        if (C.cls.state === 'ended') return [out(conn, code, { t: 'error', code: 'ended' })];
        var T = C.teams[c.team];
        if (!T) {
          if (C.order.length >= P.MAX_TEAMS) return [out(conn, code, { t: 'error', code: 'full' })];
          T = C.teams[c.team] = newTeam(c.team, ++C.counter, t); C.order.push(c.team); C.seqs[c.team] = [];
        }
        c.hello = true; T.online = true; T.lastSeen = t;
        res.push(out(conn, code, { t: 'welcome', team: T.team, n: T.n, label: T.label, colour: T.colour, lesson: C.cls.lesson, minutes: C.cls.minutes, research: !!C.cls.research, timer: clone(C.cls.timer), state: C.cls.state, now: t }));
        res.push(teamMsg(C, c.team));
        return res;
      }
      if (!c.hello) return [];
      var T2 = C.teams[c.team];
      if (!T2) return [];
      T2.lastSeen = t;
      if (m.t === 'events') {
        var seq = m.seq;
        if (typeof seq !== 'number' || Math.floor(seq) !== seq || seq < 0) return [out(conn, code, { t: 'error', code: 'bad-frame' })];
        var seen = C.seqs[c.team] || (C.seqs[c.team] = []);
        if (seen.indexOf(seq) >= 0) return [out(conn, code, { t: 'ack', seq: seq })];
        seen.push(seq); if (seen.length > SEQ_KEEP) seen.splice(0, seen.length - SEQ_KEEP);
        var batch = Array.isArray(m.batch) ? m.batch.slice(0, P.MAX_BATCH) : [];
        var product = 'escape18-' + C.cls.lesson, changed = false;
        for (var i = 0; i < batch.length; i++) {
          var ev = P.cleanEvent(batch[i]);
          if (!ev || ev.product !== product) continue;
          if (ev['class'] !== 'GEEN' && ev['class'] !== code) continue; // stale queue from another class
          if (applyEvent(C, T2, ev)) changed = true;
        }
        res.push(out(conn, code, { t: 'ack', seq: seq }));
        if (changed) res.push(teamMsg(C, c.team));
        return res;
      }
      return [];
    }

    function setTimer(C, m) {
      var tm = C.cls.timer, t = now();
      var left = tm.running ? Math.max(0, tm.endsAt - t) : Math.max(0, tm.leftMs);
      if (m.action === 'start' || m.action === 'resume') {
        if (tm.running) return false;
        if (left <= 0) left = C.cls.minutes * 60000;
        C.cls.timer = { running: true, endsAt: t + left, leftMs: left };
      } else if (m.action === 'pause') {
        if (!tm.running) return false;
        C.cls.timer = { running: false, endsAt: null, leftMs: left };
      } else if (m.action === 'add') {
        var sec = Number(m.sec);
        if (!isFinite(sec) || sec === 0 || Math.abs(sec) > 3600) return false;
        left = Math.max(0, left + Math.round(sec) * 1000);
        C.cls.timer = tm.running ? { running: true, endsAt: t + left, leftMs: left } : { running: false, endsAt: null, leftMs: left };
      } else return false;
      return true;
    }

    function teacherFrame(conn, c, C, m) {
      var code = C.cls.code, t = now();
      if (m.t === 'ping') return [out(conn, code, { t: 'pong', now: t })];
      if (m.t === 'hello') {
        c.hello = true;
        return [out(conn, code, { t: 'snapshot', cls: clone(C.cls), teams: C.order.map(function (id) { return clone(C.teams[id]); }), now: t })];
      }
      if (!c.hello) return [];
      if (m.t === 'timer') {
        // No timer changes once the lesson has ended.
        if (C.cls.state === 'ended' || P.TIMER_ACTIONS.indexOf(m.action) < 0 || !setTimer(C, m)) return [];
        return [out('all', code, { t: 'timer', timer: clone(C.cls.timer), now: t })];
      }
      if (m.t === 'state') {
        if (P.STATES.indexOf(m.state) < 0 || C.cls.state === 'ended' || m.state === C.cls.state) return [];
        C.cls.state = m.state;
        var res = [];
        if (m.state === 'ended') {
          C.endedAt = t;
          if (C.cls.timer.running) { C.cls.timer = { running: false, endsAt: null, leftMs: Math.max(0, C.cls.timer.endsAt - t) }; res.push(out('all', code, { t: 'timer', timer: clone(C.cls.timer), now: t })); }
        }
        res.unshift(out('all', code, { t: 'state', state: m.state }));
        return res;
      }
      if (m.t === 'lesson') {
        if (C.cls.state !== 'lobby' || !P.SLUG_RE.test(String(m.slug || '')) || !known(String(m.slug))) return [];
        C.cls.lesson = m.slug;
        if (m.minutes !== undefined) {
          C.cls.minutes = clampMin(m.minutes);
          if (!C.cls.timer.running) C.cls.timer = { running: false, endsAt: null, leftMs: C.cls.minutes * 60000 };
        }
        return [out('all', code, { t: 'lesson', slug: C.cls.lesson, minutes: C.cls.minutes })];
      }
      return [];
    }

    function receive(conn, frame) {
      var c = conns[conn];
      if (!c) return [];
      var C = classes[c.code];
      if (!C) return [];
      var p = P.parseFrame(frame);
      if (!p.ok) return [out(conn, c.code, { t: 'error', code: 'bad-frame' })];
      return c.role === 'teacher' ? teacherFrame(conn, c, C, p.msg) : pupilFrame(conn, c, C, p.msg);
    }

    function disconnect(conn) {
      var c = conns[conn];
      if (!c) return [];
      delete conns[conn];
      var C = classes[c.code];
      if (!C || c.role !== 'pupil' || !c.hello) return [];
      var T = C.teams[c.team];
      if (!T) return [];
      T.lastSeen = now();
      if (teamConnCount(c.code, c.team) === 0) { T.online = false; return [teamMsg(C, c.team)]; }
      return [];
    }

    function sweep() {
      var res = [], t = now();
      Object.keys(classes).forEach(function (code) {
        var C = classes[code];
        var gone = t >= C.cls.expiresAt || (C.endedAt != null && t - C.endedAt >= P.ENDED_TTL_MS);
        if (!gone) return;
        var o = out('all', code, { t: 'error', code: C.cls.state === 'ended' ? 'ended' : 'no-class' });
        o.close = true;
        if (conns && Object.keys(conns).some(function (k) { return conns[k].code === code; })) res.push(o);
        resolveDelete(code);
      });
      return res;
    }
    var pendingClose = {};
    function resolveDelete(code) {
      // Keep conn ids resolvable for the close output of this sweep, then forget them.
      pendingClose[code] = Object.keys(conns).filter(function (k) { return conns[k].code === code; });
      pendingClose[code].forEach(function (k) { delete conns[k]; });
      delete classes[code];
    }

    function conns_(code, to) {
      if (to && to !== 'teacher' && to !== 'pupils' && to !== 'all') return conns[to] || (pendingClose[code] || []).indexOf(to) >= 0 ? [to] : [];
      var ids = Object.keys(conns).filter(function (k) {
        var c = conns[k];
        if (c.code !== code) return false;
        if (to === 'teacher') return c.role === 'teacher' && c.hello;
        if (to === 'pupils') return c.role === 'pupil' && c.hello;
        return c.hello;
      });
      if (!classes[code] && pendingClose[code]) { ids = pendingClose[code].slice(); delete pendingClose[code]; }
      return ids;
    }

    function exportClass(code) {
      var C = classes[P.normCode(code)];
      if (!C) return null;
      return { cls: clone(C.cls), teams: C.order.map(function (id) { return clone(C.teams[id]); }) };
    }

    // Persistence for a Durable Object or a reloading local host: plain JSON, conns are not kept.
    function dump() { return clone({ v: 1, classes: classes }); }
    function load(obj) {
      if (!obj || obj.v !== 1 || !obj.classes) return false;
      classes = clone(obj.classes);
      Object.keys(classes).forEach(function (code) { var C = classes[code]; C.order.forEach(function (id) { C.teams[id].online = false; }); });
      return true;
    }

    return {
      createClass: createClass, connect: connect, receive: receive, disconnect: disconnect, sweep: sweep, exportClass: exportClass,
      conns: conns_, classOf: function (conn) { return conns[conn] ? conns[conn].code : null; },
      roleOf: function (conn) { return conns[conn] ? conns[conn].role : null; },
      hasClass: function (code) { return !!classes[P.normCode(code)]; }, dump: dump, load: load
    };
  }

  // rooms option from a catalog object: (slug) => [roomIds]
  function roomsFromCatalog(cat) {
    var map = {};
    ((cat && cat.lessons) || []).forEach(function (l) { map[l.slug] = (l.rooms || []).map(function (r) { return r.id; }); });
    return function (slug) { return map[slug] || []; };
  }

  return { create: create, roomsFromCatalog: roomsFromCatalog };
});
