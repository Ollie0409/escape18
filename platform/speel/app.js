/* Escape 18 platform: pupil shell (speel/) and the code field on the landing page.
   Online: joins a class through E18P_Transport, shows the team label, runs the lesson in a
   same-origin iframe and forwards the lesson's events to the relay.
   Offline (speel/?les=<slug>&offline=1): runs the lesson without a relay, tracks progress
   locally and shows a result code (E18P_ResultCode) for the teacher. */
(function () {
  'use strict';

  var ALPH = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var CODE_RE = /^[A-HJ-NP-Z2-9]{5}$/;
  var COLOURS = ['Oranje', 'Blauw', 'Groen', 'Paars', 'Geel', 'Rood', 'Turquoise', 'Roze', 'Grijs', 'Bruin'];
  var HEX = ['#d9660b', '#1f5fbf', '#1f7a4a', '#6b3fa0', '#e3ad1d', '#b3261e', '#0e8a8a', '#c2417f', '#69737a', '#7a4a24'];
  var SLOW_MS = 8000;

  // ---------- small helpers ----------
  function $(id) { return document.getElementById(id); }
  function show(el, on) { if (el) el.hidden = !on; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function ss(key, val) {
    try {
      if (val === undefined) return sessionStorage.getItem(key);
      if (val === null) sessionStorage.removeItem(key); else sessionStorage.setItem(key, val);
    } catch (e) { /* storage blocked: work in memory */ }
    return null;
  }
  function randStr(n, alphabet) {
    var out = '', buf = new Uint32Array(n);
    try { crypto.getRandomValues(buf); } catch (e) { for (var j = 0; j < n; j++) buf[j] = Math.floor(Math.random() * 4294967296); }
    for (var i = 0; i < n; i++) out += alphabet.charAt(buf[i] % alphabet.length);
    return out;
  }
  function normCode(v) { return String(v || '').toUpperCase().replace(/[\s\-_.]/g, ''); }
  function digitCount(c) { return (c.match(/[2-9]/g) || []).length; }
  function codeOk(c) { return CODE_RE.test(c) && digitCount(c) < 4; }
  function codeError(c) {
    if (!c) return 'Vul de klascode in.';
    if (/[OI01]/.test(c)) return 'In een klascode staan geen O, I, 0 of 1. Kijk nog eens op het bord.';
    if (!/^[A-Z2-9]*$/.test(c)) return 'Een klascode heeft alleen letters en cijfers.';
    if (c.length !== 5) return 'Een klascode heeft 5 tekens. Je hebt er nu ' + c.length + '.';
    if (digitCount(c) >= 4) return 'Deze code bestaat niet. Kijk nog eens op het bord.';
    return '';
  }
  function offlineCode() {
    // Random code that satisfies the SPEC regex and has fewer than 4 digits (so the engine logs).
    var c;
    do { c = randStr(5, ALPH); } while (!codeOk(c));
    return c;
  }
  function mmss(ms) {
    var s = Math.max(0, Math.ceil(ms / 1000));
    var m = Math.floor(s / 60), r = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }
  function spaced(code) { return String(code).split('').map(function (ch) { return ch === '-' ? 'streepje' : ch; }).join(' '); }

  // Team swatch: colour plus a distinct pattern so the colour is never the only cue.
  var swatchSeq = 0;
  function swatchSvg(n, size) {
    var i = ((n || 1) - 1) % 10, id = 'tp' + (++swatchSeq), fg = i === 4 ? '#2a1d00' : '#ffffff';
    var p = [
      '<path d="M0 8L8 0" stroke="' + fg + '" stroke-width="2.2"/>',
      '<circle cx="4" cy="4" r="1.8" fill="' + fg + '"/>',
      '<path d="M0 4H8" stroke="' + fg + '" stroke-width="2"/>',
      '<rect x="0" y="0" width="4" height="4" fill="' + fg + '" opacity=".85"/><rect x="4" y="4" width="4" height="4" fill="' + fg + '" opacity=".85"/>',
      '<path d="M4 0V8" stroke="' + fg + '" stroke-width="2"/>',
      '<path d="M0 8L8 0M0 0L8 8" stroke="' + fg + '" stroke-width="1.4"/>',
      '<circle cx="4" cy="4" r="2.4" fill="none" stroke="' + fg + '" stroke-width="1.3"/>',
      '<path d="M0 6L2 2L4 6L6 2L8 6" fill="none" stroke="' + fg + '" stroke-width="1.4"/>',
      '<path d="M0 4H8M4 0V8" stroke="' + fg + '" stroke-width="1.3"/>',
      '<path d="M1 1H3V3H1Z M5 5H7V7H5Z" fill="' + fg + '"/>'
    ][i];
    return '<svg viewBox="0 0 32 32" width="' + size + '" height="' + size + '" focusable="false" aria-hidden="true">' +
      '<defs><pattern id="' + id + '" width="8" height="8" patternUnits="userSpaceOnUse">' + p + '</pattern></defs>' +
      '<rect x="1" y="1" width="30" height="30" rx="7" fill="' + HEX[i] + '"/>' +
      '<rect x="1" y="1" width="30" height="30" rx="7" fill="url(#' + id + ')"/>' +
      '<rect x="1" y="1" width="30" height="30" rx="7" fill="none" class="swatch-edge" stroke-width="2"/></svg>';
  }
  function teamText(n, label) {
    var colour = COLOURS[((n || 1) - 1) % 10];
    if (label) { for (var k = 0; k < COLOURS.length; k++) if (label.indexOf(COLOURS[k]) >= 0) colour = COLOURS[k]; }
    var base = label && /^Team \d+/.test(label) ? label.match(/^Team \d+/)[0] : 'Team ' + (n || '?');
    return { base: base, colour: colour, full: base + ' · ' + colour };
  }

  var ICON = {
    online: '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    offline: '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8 2v7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="8" cy="12.8" r="1.4" fill="currentColor"/></svg>',
    clock: '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 4.5V8l2.4 1.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    pause: '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><rect x="3.5" y="3" width="3" height="10" rx=".8" fill="currentColor"/><rect x="9.5" y="3" width="3" height="10" rx=".8" fill="currentColor"/></svg>'
  };

  // ---------- code field (landing and speel) ----------
  function attachCodeForm(form, input, errEl, onCode) {
    if (!form || !input) return;
    input.addEventListener('input', function () {
      var before = input.value, v = normCode(before);
      if (v !== before) {
        var pos = input.selectionStart == null ? v.length : normCode(before.slice(0, input.selectionStart)).length;
        input.value = v;
        try { input.setSelectionRange(pos, pos); } catch (e) { /* ignore */ }
      }
      if (input.getAttribute('aria-invalid') === 'true' && codeOk(v)) clearErr();
    });
    function clearErr() { input.removeAttribute('aria-invalid'); if (errEl) { errEl.textContent = ''; errEl.hidden = true; } }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var c = normCode(input.value);
      input.value = c;
      var msg = codeError(c);
      if (msg) {
        input.setAttribute('aria-invalid', 'true');
        if (errEl) { errEl.textContent = msg; errEl.hidden = false; }
        input.focus();
        return;
      }
      clearErr();
      onCode(c);
    });
  }

  // ---------- page boot ----------
  var page = document.documentElement.getAttribute('data-page');
  if (page === 'landing') {
    var boot = function () {
      attachCodeForm($('join-form'), $('join-code'), $('join-err'), function (c) {
        location.href = 'speel/?klas=' + encodeURIComponent(c);
      });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
    return;
  }
  if (page !== 'speel') return;

  // ---------- pupil shell ----------
  // Marker for the lesson bridge (config.js): only a lesson whose same-origin parent sets this hands its events to the shell.
  window.E18P_SHELL = true;
  var params = new URLSearchParams(location.search);
  var CFG = window.E18P_CONFIG || { relay: '' };
  var LOCAL_WAIT_MS = 1500; // relay '': how long to look for a local host (teacher tab on this computer) before going offline
  // Platform root (the folder that holds speel/ and core/); lessons and catalog are resolved against it.
  function rootUrl() { return new URL('../', location.href); }
  function lessonBase() {
    try { if (window.E18P_Catalog && window.E18P_Catalog.lessonBase) return window.E18P_Catalog.lessonBase(); } catch (e) { /* fall through */ }
    var b = CFG.lessonBase; return typeof b === 'string' && b ? (b.charAt(b.length - 1) === '/' ? b : b + '/') : 'lessons/';
  }
  var P = {
    mode: 'online',          // 'online' | 'offline'
    code: '',                // class code (online) or random local code (offline)
    team: '', n: 0, label: '',
    lesson: params.get('les') || '', minutes: 0, research: false,
    state: 'connecting',     // connecting | lobby | running | ended
    timer: null, offset: 0, lastMin: null, paused: false,
    conn: null, online: false, welcomed: false, everOnline: false,
    loaded: '',              // slug currently loaded in the iframe
    catalog: null, slowTimer: 0, seq: 0, outbox: [], lostClass: false
  };
  var T = null; // progress tracker (same mapping as SPEC TeamState)

  function screen(id) {
    ['s-join', 's-wait', 's-error', 's-pick', 's-play'].forEach(function (s) { show($(s), s === id); });
    document.body.classList.toggle('is-playing', id === 's-play');
    show($('bar'), id === 's-play');
    if (id !== 's-play') {
      var h = document.querySelector('#' + id + ' h1');
      if (h) try { h.focus({ preventScroll: true }); } catch (e) { h.focus(); }
    }
  }
  function say(text) {
    var live = $('live');
    live.textContent = '';
    setTimeout(function () { live.textContent = text; }, 60);
  }

  // ---------- catalog ----------
  function loadCatalog() {
    if (P.catalog) return Promise.resolve(P.catalog);
    var p;
    try {
      var C = window.E18P_Catalog;
      if (C && typeof C.load === 'function') p = Promise.resolve(C.load());
    } catch (e) { p = null; }
    if (!p) p = fetch(new URL(CFG.catalog || 'lessons/catalog.json', rootUrl()).href, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error('catalog'); return r.json(); });
    return p.then(function (c) {
      var list = c && (c.lessons || (Array.isArray(c) ? c : null));
      P.catalog = { lessons: list || [] };
      return P.catalog;
    }).catch(function () { P.catalog = { lessons: [] }; return P.catalog; });
  }
  function lessonMeta(slug) {
    var l = P.catalog && P.catalog.lessons;
    if (!l) return null;
    for (var i = 0; i < l.length; i++) if (l[i].slug === slug) return l[i];
    return null;
  }
  function roomIds(slug) {
    var m = lessonMeta(slug);
    return m && Array.isArray(m.rooms) ? m.rooms.map(function (r) { return typeof r === 'string' ? r : r.id; }) : [];
  }

  // ---------- progress tracker ----------
  function trackKey() { return 'e18p.track.' + (P.mode === 'offline' ? 'off.' + P.lesson : P.code); }
  function newTrack() {
    return { slug: P.lesson, t0: null, room: null, roomsDone: [], answers: { n: 0, firstRight: 0, hints: 0, tries: 0 },
      lock: null, pre: null, post: null, finished: false, sec: 0, fun: null, learned: null };
  }
  function loadTrack() {
    T = null;
    try { T = JSON.parse(ss(trackKey()) || 'null'); } catch (e) { T = null; }
    if (!T || typeof T !== 'object' || T.slug !== P.lesson) T = newTrack();
  }
  function saveTrack() { ss(trackKey(), JSON.stringify(T)); }
  function track(ev) {
    if (!ev || typeof ev !== 'object' || !T) return;
    var d = ev.data && typeof ev.data === 'object' ? ev.data : {};
    var rooms = roomIds(P.lesson);
    switch (ev.type) {
      case 'start':
        if (!T.t0) T.t0 = Date.now();
        T.room = rooms[0] || null;
        break;
      case 'answer':
        T.answers.n++;
        if (d.first) T.answers.firstRight++;
        if (d.hint) T.answers.hints++;
        T.answers.tries += Math.max(0, Math.min(20, +d.tries || 0));
        break;
      case 'room':
        if (d.room && T.roomsDone.indexOf(d.room) < 0) T.roomsDone.push(d.room);
        var idx = rooms.indexOf(d.room);
        T.room = idx >= 0 && idx + 1 < rooms.length ? rooms[idx + 1] : null;
        break;
      case 'lock':
        T.lock = { opened: !!d.opened };
        break;
      case 'check':
        if (d.phase === 'start') T.pre = { score: +d.score || 0, max: +d.max || 0 };
        else if (d.phase === 'end') T.post = { score: +d.score || 0, max: +d.max || 0 };
        break;
      case 'end':
        T.finished = true; T.sec = +d.sec || 0; T.room = null;
        break;
      case 'pupil_feedback':
        if (d.fun) T.fun = d.fun;
        if (d.learned) T.learned = d.learned;
        break;
      default: return;
    }
    if (!T.t0) T.t0 = Date.now();
    saveTrack();
    if (ev.type === 'end') onLessonEnd();
  }
  function resultFields() {
    var meta = lessonMeta(P.lesson) || {};
    var a = T.answers;
    var minutes = T.finished && T.sec ? Math.round(T.sec / 60) : (T.t0 ? Math.round((Date.now() - T.t0) / 60000) : 0);
    return {
      slug: P.lesson,
      roomsDone: T.roomsDone.length,
      roomsTotal: roomIds(P.lesson).length || T.roomsDone.length,
      firstRightPct: a.n ? Math.round(100 * a.firstRight / a.n) : 0,
      hints: a.hints,
      pre: T.pre ? T.pre.score : null,
      post: T.post ? T.post.score : null,
      checkMax: (T.pre && T.pre.max) || (T.post && T.post.max) || meta.checkMax || 4,
      minutes: minutes,
      finished: !!T.finished
    };
  }
  function resultCode() {
    var RC = window.E18P_ResultCode;
    if (!RC || typeof RC.encode !== 'function' || !T) return '';
    try {
      var out = RC.encode(resultFields());
      return typeof out === 'string' ? out : (out && out.code) || '';
    } catch (e) { return ''; }
  }

  // ---------- end overlay ----------
  function renderSummary() {
    var f = resultFields(), rows = [];
    rows.push(['Kamers klaar', f.roomsDone + ' van ' + f.roomsTotal]);
    if (T.answers.n) rows.push(['In een keer goed', f.firstRightPct + '% van ' + T.answers.n + ' vragen']);
    rows.push(['Hints gebruikt', String(f.hints)]);
    if (T.pre) rows.push(['Vragen aan het begin', T.pre.score + ' van ' + T.pre.max + ' goed']);
    if (T.post) rows.push(['Vragen aan het eind', T.post.score + ' van ' + T.post.max + ' goed']);
    if (f.minutes) rows.push(['Speeltijd', f.minutes + (f.minutes === 1 ? ' minuut' : ' minuten')]);
    rows.push(['Les uitgespeeld', f.finished ? 'ja' : 'nog niet']);
    $('end-summary').innerHTML = rows.map(function (r) { return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('');
  }
  function showCode() {
    var code = resultCode();
    show($('end-code-box'), true);
    show($('btn-show-code'), false);
    var el = $('end-code');
    if (code) {
      el.textContent = code;
      el.setAttribute('aria-label', 'Code: ' + spaced(code));
      $('end-code-note').textContent = 'Schrijf de code op of laat je scherm zien.';
    } else {
      el.textContent = '----';
      el.removeAttribute('aria-label');
      $('end-code-note').textContent = 'De code kon niet worden gemaakt. Laat je docent dit scherm zien.';
    }
  }
  var lastFocus = null;
  function openEnd(kind) {
    // kind: 'ended' (teacher ended the class), 'done' (offline, lesson finished or pupil tapped)
    var o = $('o-end');
    renderSummary();
    $('h-end').textContent = kind === 'ended' ? 'De les is afgelopen' : (T && T.finished ? 'Goed gedaan, de les is klaar' : 'Jullie resultaat tot nu toe');
    $('end-team').textContent = P.mode === 'online' && P.n ? teamText(P.n, P.label).full : '';
    show($('end-team'), !!$('end-team').textContent);
    if (P.mode === 'offline' || P.lostClass || (kind === 'done' && !P.online)) showCode();
    else { show($('end-code-box'), false); show($('btn-show-code'), true); }
    show($('btn-end-close'), kind !== 'ended');
    if (o.hidden) lastFocus = document.activeElement;
    o.hidden = false;
    $('shell').inert = true;
    try { $('h-end').focus({ preventScroll: true }); } catch (e) { $('h-end').focus(); }
  }
  function closeEnd() {
    $('o-end').hidden = true;
    $('shell').inert = false;
    var f = lastFocus && document.contains(lastFocus) ? lastFocus : $('lesson');
    try { f.focus(); } catch (e) { /* ignore */ }
  }
  function onLessonEnd() {
    // Offline, or online without a connection to the class: hand the result over as a code.
    if (P.mode === 'offline' || P.lostClass || !P.online) { setTimeout(function () { openEnd('done'); }, 600); }
  }

  // ---------- lesson iframe ----------
  function loadLesson() {
    if (!P.lesson) return;
    var meta = lessonMeta(P.lesson);
    var frame = $('lesson');
    var mins = P.minutes || (meta && meta.minutes) || 45;
    if (P.loaded !== P.lesson) {
      var url = new URL(lessonBase() + encodeURIComponent(P.lesson) + '/index.html', rootUrl()).href + '?klas=' + encodeURIComponent(P.code) + '&tijd=' + encodeURIComponent(mins) + (P.research ? '&r=1' : '');
      frame.title = 'Les: ' + ((meta && meta.title) || P.lesson);
      frame.src = url;
      P.loaded = P.lesson;
    }
    screen('s-play');
    renderBar();
    setTimeout(function () { try { frame.focus(); } catch (e) { /* ignore */ } }, 50);
  }

  window.addEventListener('message', function (ev) {
    var frame = $('lesson');
    if (!frame || ev.source !== frame.contentWindow) return;
    if (ev.origin !== location.origin) return;
    var d = ev.data;
    if (!d || d.e18p !== 'events' || !Array.isArray(d.batch)) return;
    var batch = d.batch.filter(function (e) { return e && typeof e === 'object' && typeof e.type === 'string'; }).slice(0, 500);
    if (!batch.length) return;
    batch.forEach(track);
    if (P.mode === 'online') sendEvents(batch);
  });

  // ---------- transport (core/transport.js: connect() -> {on, send, close, clockOffset, status}) ----------
  function sendEvents(batch) {
    var c = P.conn;
    if (!c || typeof c.send !== 'function') return;
    // Chunk so a frame stays well under 64 KB. The transport adds seq, queues and resends until acked.
    for (var i = 0; i < batch.length; i += 40) {
      try { c.send({ t: 'events', batch: batch.slice(i, i + 40) }); } catch (e) { /* transport keeps the queue */ }
    }
  }
  function setOnline(on) {
    if (P.online === on) return;
    P.online = on;
    if (on) P.everOnline = true;
    renderBar();
  }
  function syncOffset() {
    try { if (P.conn && typeof P.conn.clockOffset === 'function') P.offset = +P.conn.clockOffset() || 0; } catch (e) { /* keep last */ }
  }

  function connectOnline() {
    P.mode = 'online';
    var TR = window.E18P_Transport;
    try { P.team = TR && typeof TR.teamId === 'function' ? TR.teamId(P.code) : ''; } catch (e) { P.team = ''; }
    if (!/^[A-Za-z0-9]{10}$/.test(P.team || '')) {
      P.team = ss('e18p.team.' + P.code) || '';
      if (!/^[A-Za-z0-9]{10}$/.test(P.team)) { P.team = randStr(10, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'); ss('e18p.team.' + P.code, P.team); }
    }
    var known = ss('e18p.lesson.' + P.code);
    if (known && !P.lesson) P.lesson = known;
    if (P.lesson) loadTrack(); // events may arrive before the welcome after a reload
    $('wait-code').textContent = 'Klas ' + P.code;
    screen('s-wait');
    clearTimeout(P.slowTimer);
    var local = !CFG.relay;
    P.slowTimer = setTimeout(function () { if (!P.welcomed) show($('wait-slow'), true); }, SLOW_MS);
    if (local) {
      // No relay configured (live site without a relay): a class can only exist in a teacher tab on this computer (demo, ?lokaal=1).
      // The transport looks for one for 1.5 s; if none answers, go straight to the result-code flow instead of waiting.
      clearTimeout(P.slowTimer);
      P.slowTimer = setTimeout(function () { autoOffline(); }, LOCAL_WAIT_MS + 400);
    }
    if (!TR || typeof TR.connect !== 'function') { if (local) autoOffline(); else show($('wait-slow'), true); return; }
    try { P.conn = TR.connect({ relay: CFG.relay || '', code: P.code, role: 'pupil', team: P.team }); } catch (e) { P.conn = null; show($('wait-slow'), true); return; }
    var c = P.conn;
    if (!c || typeof c.on !== 'function') { show($('wait-slow'), true); return; }
    // The transport sends hello itself on every (re)connect.
    ['welcome', 'error', 'state', 'timer', 'lesson'].forEach(function (t) { c.on(t, onMsg); });
    c.on('error', function () { P.replied = true; });
    c.on('status', function (s) { setOnline(s === 'online'); if (local && s === 'offline' && !P.welcomed) autoOffline(); });
  }
  function autoOffline() {
    // Only before the class answered: once welcomed (or refused with an error screen) the normal flow owns the page.
    if (P.welcomed || P.replied || P.mode !== 'online' || CFG.relay) return;
    clearTimeout(P.slowTimer);
    try { if (P.conn && typeof P.conn.close === 'function') P.conn.close(); } catch (e) { /* ignore */ }
    P.conn = null;
    var slug = P.lesson || ss('e18p.lesson.' + P.code) || '';
    location.replace(slug ? '?les=' + encodeURIComponent(slug) + '&offline=1' : '?offline=1');
  }

  function onMsg(m) {
    if (typeof m === 'string') { try { m = JSON.parse(m); } catch (e) { return; } }
    if (!m || typeof m !== 'object') return;
    if (m.data && typeof m.data === 'string' && !m.t) { try { m = JSON.parse(m.data); } catch (e) { return; } }
    switch (m.t) {
      case 'welcome': onWelcome(m); break;
      case 'error': onError(m); break;
      case 'state': setState(m.state); break;
      case 'timer': setTimer(m.timer); break;
      case 'lesson':
        if (P.state !== 'running') {
          P.lesson = m.slug || P.lesson; if (m.minutes) P.minutes = m.minutes;
          ss('e18p.lesson.' + P.code, P.lesson); renderWait();
        }
        break;
      default: break;
    }
  }
  function onWelcome(m) {
    var first = !P.welcomed;
    P.welcomed = true;
    clearTimeout(P.slowTimer);
    show($('wait-slow'), false);
    P.n = m.n || P.n; P.label = m.label || P.label;
    syncOffset();
    if (m.team && /^[A-Za-z0-9]{10}$/.test(m.team) && m.team !== P.team) { P.team = m.team; ss('e18p.team.' + P.code, P.team); }
    if (m.lesson) { P.lesson = m.lesson; ss('e18p.lesson.' + P.code, P.lesson); }
    if (m.minutes) P.minutes = m.minutes;
    var cls = m.cls || {};
    P.research = !!(m.research || m.r || cls.research || cls.r);
    loadCatalog().then(function () {
      if (!T || T.slug !== P.lesson) loadTrack();
      setTimer(m.timer || cls.timer || null, true);
      setState(m.state || cls.state || 'lobby', first);
    });
  }
  function onError(m) {
    var code = m && typeof m === 'object' ? (m.code || m.err) : m;
    clearTimeout(P.slowTimer);
    if (P.state === 'ended') return;
    if (code === 'ended' && P.loaded) { setState('ended'); return; }
    if (P.state === 'running' && P.loaded) {
      // Class vanished while playing (for example relay restarted): keep playing, offer the result code.
      P.lostClass = true;
      renderBar();
      return;
    }
    var title = 'Er ging iets mis', text = 'Probeer het opnieuw of vraag je docent om hulp.';
    if (code === 'no-class') { title = 'Deze code bestaat niet'; text = 'Kijk nog eens naar de klascode op het bord en vul hem opnieuw in. Let op: geen O, I, 0 of 1.'; }
    else if (code === 'ended') { title = 'Deze les is al afgelopen'; text = 'Je docent heeft de les gestopt. Vraag je docent om een nieuwe klascode.'; }
    else if (code === 'full') { title = 'Deze klas is vol'; text = 'Er doen al 60 teams mee. Speel samen met een ander team, of vraag je docent wat je kunt doen.'; }
    $('h-error').textContent = title;
    $('error-text').textContent = text;
    try { if (P.conn && typeof P.conn.close === 'function') P.conn.close(); } catch (e) { /* ignore */ }
    P.conn = null;
    screen('s-error');
  }
  function setState(st, initial) {
    if (!st) return;
    P.state = st;
    if (st === 'lobby') {
      renderWait();
    } else if (st === 'running') {
      if (!P.lesson) { renderWait(); return; }
      loadLesson();
      updatePause(initial);
    } else if (st === 'ended') {
      setPause(false);
      if (P.loaded) openEnd('ended');
      else { $('h-error').textContent = 'De les is afgelopen'; $('error-text').textContent = 'Je docent heeft de les gestopt.'; screen('s-error'); show($('btn-retry'), false); }
    }
  }
  function renderWait() {
    var tt = teamText(P.n, P.label);
    show($('wait-connecting'), !P.welcomed);
    show($('wait-team'), P.welcomed);
    if (P.welcomed) {
      $('wait-swatch').innerHTML = swatchSvg(P.n, 72);
      $('wait-label').textContent = tt.full;
      var meta = lessonMeta(P.lesson);
      $('wait-lesson').textContent = meta ? 'Les: ' + meta.title : '';
      var st = P.state === 'running' && !P.lesson ? 'Even wachten op de les.' : 'Wacht tot je docent start.';
      $('wait-status').innerHTML = '<span class="sr">Jullie zijn ' + esc(tt.full) + '. </span>' + esc(st);
    }
    if (!$('s-wait').hidden) return;
    screen('s-wait');
  }

  // ---------- timer ----------
  function leftMs() {
    var t = P.timer;
    if (!t) return null;
    syncOffset();
    if (t.running && typeof t.endsAt === 'number') return Math.max(0, t.endsAt - (Date.now() + P.offset));
    return Math.max(0, +t.leftMs || 0);
  }
  function setTimer(t, initial) {
    if (!t || typeof t !== 'object') return;
    var was = P.timer;
    P.timer = { running: !!t.running, endsAt: typeof t.endsAt === 'number' ? t.endsAt : null, leftMs: +t.leftMs || 0, paused: t.paused };
    if (!initial && was && was.running && !P.timer.running && P.timer.leftMs > 0) P.pausedByTeacher = true;
    if (P.timer.running) P.pausedByTeacher = false;
    P.lastMin = null;
    renderTimer(true);
    updatePause(initial);
  }
  function updatePause(initial) {
    var t = P.timer;
    var paused = false;
    // The dashboard starts the timer together with state 'running', so a stopped timer with time left
    // during 'running' means the teacher paused.
    if (P.state === 'running' && t && !t.running && t.leftMs > 0) paused = true;
    clearTimeout(P.pauseT);
    if (!paused || P.paused) { setPause(paused); return; }
    // Debounce: state 'running' and the timer start arrive as two frames; do not flash the overlay in between.
    P.pauseT = setTimeout(function () {
      var t2 = P.timer;
      setPause(P.state === 'running' && !!t2 && !t2.running && t2.leftMs > 0);
    }, 900);
  }
  function setPause(on) {
    var o = $('o-pause');
    if (!o || P.paused === on) return;
    P.paused = on;
    o.hidden = !on;
    $('lesson').inert = on;
    if (on) {
      try { $('h-pause').focus({ preventScroll: true }); } catch (e) { $('h-pause').focus(); }
    } else {
      try { $('lesson').focus(); } catch (e) { /* ignore */ }
      say('Je docent gaat verder. Jullie kunnen weer spelen.');
    }
    renderTimer(true);
  }
  function renderTimer(force) {
    var wrap = $('bar-timer');
    var ms = leftMs();
    if (P.mode !== 'online' || ms === null || P.state !== 'running') { show(wrap, false); return; }
    show(wrap, true);
    var txt = mmss(ms);
    var el = $('bar-timer-txt');
    if (el.textContent !== txt) el.textContent = txt;
    var running = P.timer.running;
    var iconKey = running ? 'clock' : 'pause';
    if (force || wrap.getAttribute('data-icon') !== iconKey) {
      $('bar-timer-icon').innerHTML = ICON[iconKey];
      wrap.setAttribute('data-icon', iconKey);
      $('bar-timer-sr').textContent = running ? '' : ' (gepauzeerd)';
    }
    wrap.classList.toggle('low', running && ms <= 5 * 60000);
    // Announce only at whole-minute changes while the timer runs, never every second.
    var mins = Math.ceil(ms / 60000);
    if (!running) { P.lastMin = mins; return; }
    if (P.lastMin === null) { P.lastMin = mins; return; }
    if (mins !== P.lastMin) {
      P.lastMin = mins;
      if (mins === 0 || ms === 0) say('De tijd is om.');
      else if (mins === 1) say('Nog 1 minuut.');
      else if (mins === 5) say('Nog 5 minuten.');
      else say('Nog ' + mins + ' minuten.');
    }
  }
  setInterval(function () { if (P.timer && P.timer.running) renderTimer(false); }, 500);

  // ---------- bar ----------
  function renderBar() {
    var teamTxt = $('bar-team-txt');
    if (P.mode === 'offline') {
      $('bar-swatch').innerHTML = '';
      show($('bar-swatch'), false);
      teamTxt.innerHTML = '<span>Zonder verbinding</span>';
      show($('bar-conn'), false);
      show($('bar-done'), true);
    } else {
      var tt = teamText(P.n, P.label);
      show($('bar-swatch'), !!P.n);
      if (P.n && $('bar-swatch').getAttribute('data-n') !== String(P.n)) { $('bar-swatch').innerHTML = swatchSvg(P.n, 22); $('bar-swatch').setAttribute('data-n', String(P.n)); }
      teamTxt.innerHTML = esc(tt.base) + '<span class="bar-colour"> · ' + esc(tt.colour) + '</span>';
      var conn = $('bar-conn');
      show(conn, true);
      var on = P.online && !P.lostClass;
      conn.className = 'badge bar-conn ' + (on ? 'ok' : 'warn');
      conn.innerHTML = on ? ICON.online + '<span>online</span>'
        : ICON.offline + (P.lostClass ? '<span>geen klas</span>' : '<span>offline<span class="bar-more">, wordt bewaard</span></span>');
      show($('bar-done'), P.lostClass);
    }
    renderTimer(true);
  }

  // ---------- offline flow ----------
  function startOffline(slug) {
    P.mode = 'offline';
    P.lesson = slug;
    try { if (P.conn && typeof P.conn.close === 'function') P.conn.close(); } catch (e) { /* ignore */ }
    P.conn = null;
    clearTimeout(P.slowTimer);
    var key = 'e18p.offcode.' + slug;
    P.code = ss(key) || '';
    if (!codeOk(P.code)) { P.code = offlineCode(); ss(key, P.code); }
    loadCatalog().then(function () {
      if (!lessonMeta(slug) && P.catalog.lessons.length) { showPicker('Deze les staat niet in de lijst. Kies een les.'); return; }
      var meta = lessonMeta(slug);
      P.minutes = (meta && meta.minutes) || 45;
      loadTrack();
      P.state = 'running';
      loadLesson();
    });
  }
  function showPicker(msg) {
    screen('s-pick');
    $('pick-status').textContent = msg || 'Lessen laden...';
    loadCatalog().then(function (c) {
      var list = c.lessons.filter(function (l) { return l && l.slug; });
      if (!list.length) { $('pick-status').textContent = 'De lessen zijn niet gevonden op dit apparaat. Vraag je docent om hulp.'; return; }
      $('pick-status').textContent = msg || '';
      $('pick-list').innerHTML = list.map(function (l) {
        return '<li><a class="pick btn ghost block" href="?les=' + encodeURIComponent(l.slug) + '&amp;offline=1"><span class="pick-title">' + esc(l.title || l.slug) + '</span>' +
          (l.minutes ? '<span class="pick-min muted">' + esc(l.minutes) + ' min</span>' : '') + '</a></li>';
      }).join('');
    });
  }

  // ---------- wiring ----------
  function goOffline() {
    var slug = P.lesson || ss('e18p.lesson.' + P.code) || '';
    location.href = slug ? '?les=' + encodeURIComponent(slug) + '&offline=1' : '?offline=1';
  }
  $('btn-offline').addEventListener('click', goOffline);
  $('btn-retry-slow').addEventListener('click', function () { location.reload(); });
  $('btn-retry').addEventListener('click', function () { location.reload(); });
  $('bar-done').addEventListener('click', function () { openEnd('done'); });
  $('btn-show-code').addEventListener('click', function () { showCode(); try { $('end-code').focus(); } catch (e) { /* ignore */ } });
  $('btn-end-close').addEventListener('click', closeEnd);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !$('o-end').hidden && !$('btn-end-close').hidden) closeEnd();
  });

  function boot() {
    try { if (window.E18P_SW && typeof window.E18P_SW.register === 'function') window.E18P_SW.register(); } catch (e) { /* ignore */ }
    attachCodeForm($('join-form'), $('join-code'), $('join-err'), function (c) { location.search = '?klas=' + encodeURIComponent(c); });
    var offline = params.get('offline') === '1';
    var klas = normCode(params.get('klas'));
    if (offline) {
      var slug = (params.get('les') || '').toLowerCase();
      if (/^[a-z0-9-]{1,40}$/.test(slug)) startOffline(slug); else showPicker();
      return;
    }
    if (!klas) { screen('s-join'); return; }
    if (!codeOk(klas)) {
      $('join-code').value = klas;
      screen('s-join');
      $('join-code').setAttribute('aria-invalid', 'true');
      $('join-err').textContent = codeError(klas) || 'Deze code bestaat niet.';
      $('join-err').hidden = false;
      return;
    }
    P.code = klas;
    loadCatalog();
    connectOnline();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

  // Test hook (no data leaves the page).
  window.E18P_Pupil = { state: function () { return { mode: P.mode, code: P.code, team: P.team, n: P.n, state: P.state, lesson: P.lesson, online: P.online, paused: P.paused, track: T }; }, resultCode: resultCode };
})();
