/* Escape 18 platform: teacher dashboard (docent/).
   Flow: pick lesson -> create class -> lobby -> running -> results -> end. Offline mode: type result codes.
   Uses E18P_Transport (core/transport.js), E18P_ResultCode, E18P_Catalog, E18QR (qr.js). No external requests. */
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var CFG = window.E18P_CONFIG || { relay: '' };
  var P = window.E18P_Protocol || {};
  var RC = window.E18P_ResultCode;
  var COLOURS = P.COLOURS || ['Oranje', 'Blauw', 'Groen', 'Paars', 'Geel', 'Rood', 'Turquoise', 'Roze', 'Grijs', 'Bruin'];
  // Swatch fill per colour name; a pattern per index makes teams distinguishable without colour.
  var HEX = ['#e8770e', '#2463c9', '#2f9a43', '#7d4cc2', '#e3bb00', '#cf2e2e', '#119c9c', '#e0559a', '#868c92', '#87562a'];
  var STORE_KEY = 'e18p.docent.v1';
  // No relay configured (live site for now): do not pretend live. Default to the result-code flow; local mode (class hosted in this
  // browser) stays available as "Demo op deze computer", and is the default inside the demo page (?attach=) or with ?lokaal=1.
  var QS0 = new URLSearchParams(location.search);
  var CODES_MODE = !CFG.relay && !QS0.get('attach') && QS0.get('lokaal') !== '1';
  var CODES_NOTE = 'Live meekijken staat nog uit. Leerlingen spelen de les en geven aan het eind hun resultaatcode.';
  var STUCK_MS = 4 * 60 * 1000;

  var S = {
    catalog: null, lesson: null, mode: 'pick', research: false,
    code: null, key: null, conn: null, cls: null, teams: {}, offset: 0,
    minutes: 45, track: {}, roomStats: {}, offline: [], attached: false, net: 'idle'
  };

  /* ---------- small helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function store(obj) { try { if (obj) sessionStorage.setItem(STORE_KEY, JSON.stringify(obj)); else sessionStorage.removeItem(STORE_KEY); } catch (e) { /* storage blocked */ } }
  function loadStore() { try { return JSON.parse(sessionStorage.getItem(STORE_KEY) || 'null'); } catch (e) { return null; } }
  function now() { return Date.now(); }
  function serverNow() { try { if (S.conn && S.conn.serverNow) return S.conn.serverNow(); } catch (e) { /* ignore */ } return Date.now(); }
  function show(id, on) { var el = $(id); if (el) el.hidden = !on; }
  function focusHeading(id) { var h = $(id); if (h) { try { h.focus({ preventScroll: false }); } catch (e) { h.focus(); } } }
  function mmss(ms) { var s = Math.max(0, Math.ceil(ms / 1000)); var m = Math.floor(s / 60); s = s % 60; return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s; }
  function lessonBySlug(slug) { var l = S.catalog && S.catalog.lessons || []; for (var i = 0; i < l.length; i++) if (l[i].slug === slug) return l[i]; return null; }
  function rooms() { return (S.lesson && S.lesson.rooms) || []; }
  function roomTitle(id) { var r = rooms(); for (var i = 0; i < r.length; i++) if (r[i].id === id) return r[i].title; return id || ''; }
  function colourIdx(n) { return ((Number(n) || 1) - 1) % 10; }
  function baseUrl() { return new URL('../', location.href); }
  // Lesson folder relative to the platform root (E18P_CONFIG.lessonBase: 'lessons/' in the bundle, '../' on the live site).
  function lessonBase() {
    try { if (window.E18P_Catalog && window.E18P_Catalog.lessonBase) return window.E18P_Catalog.lessonBase(); } catch (e) { /* fall through */ }
    var b = CFG.lessonBase; return typeof b === 'string' && b ? (b.charAt(b.length - 1) === '/' ? b : b + '/') : 'lessons/';
  }
  function lessonFile(slug, file) { return new URL(lessonBase() + encodeURIComponent(slug || '') + '/' + file, baseUrl()).href; }
  function pdfUrl(l) { return l && l.teacherPdf ? lessonFile(l.slug, 'docent.pdf') : null; }
  function joinUrl(code) { return new URL('speel/?klas=' + encodeURIComponent(code), baseUrl()).href; }
  function offlineUrl(slug) { return new URL('speel/?les=' + encodeURIComponent(slug) + '&offline=1', baseUrl()).href; }
  function shortUrl(u) { return String(u).replace(/^https?:\/\//, ''); }
  function lessonPaperUrl(l) {
    if (l && l.teacherPdf) return pdfUrl(l);
    return lessonFile(l ? l.slug : '', 'index.html#papier');
  }

  /* ---------- polite live region (joins + minute changes only, throttled) ---------- */
  var liveQ = [], liveT = null;
  function announce(text) {
    liveQ.push(text);
    if (liveT) return;
    liveT = setTimeout(function () {
      var msg = liveQ.length > 3 ? liveQ.slice(-3).join(' ') : liveQ.join(' ');
      liveQ = []; liveT = null;
      var el = $('live'); el.textContent = ''; setTimeout(function () { el.textContent = msg; }, 60);
    }, 2500);
  }
  var joinBuf = [], joinT = null;
  function announceJoin(label) {
    joinBuf.push(label);
    if (joinT) return;
    joinT = setTimeout(function () {
      var total = teamList().length;
      announce(joinBuf.length === 1 ? joinBuf[0] + ' doet mee. Nu ' + total + (total === 1 ? ' team.' : ' teams.') : joinBuf.length + ' teams erbij. Nu ' + total + ' teams.');
      joinBuf = []; joinT = null;
    }, 1500);
  }

  /* ---------- swatch with pattern ---------- */
  var PATTERNS = [
    '',
    '<path d="M0 8h30M0 15h30M0 22h30" stroke="#fff" stroke-width="3"/>',
    '<path d="M8 0v30M15 0v30M22 0v30" stroke="#fff" stroke-width="3"/>',
    '<path d="M-5 10l20-20M-5 25l35-35M5 35l30-30M20 35l15-15" stroke="#fff" stroke-width="3"/>',
    '<g fill="#fff"><circle cx="9" cy="9" r="3"/><circle cx="21" cy="9" r="3"/><circle cx="9" cy="21" r="3"/><circle cx="21" cy="21" r="3"/></g>',
    '<path d="M15 4v22M4 15h22" stroke="#fff" stroke-width="5"/>',
    '<g fill="#fff"><rect x="0" y="0" width="15" height="15"/><rect x="15" y="15" width="15" height="15"/></g>',
    '<circle cx="15" cy="15" r="7" fill="none" stroke="#fff" stroke-width="4"/>',
    '<path d="M0 12l7.5-6 7.5 6 7.5-6 7.5 6M0 22l7.5-6 7.5 6 7.5-6 7.5 6" fill="none" stroke="#fff" stroke-width="3"/>',
    '<path d="M15 5l11 20H4z" fill="#fff"/>'
  ];
  function swatch(n) {
    var i = colourIdx(n);
    return '<span class="swatch" aria-hidden="true"><svg viewBox="0 0 30 30" focusable="false"><rect width="30" height="30" fill="' + HEX[i] + '"/>' + PATTERNS[i] + '</svg></span>';
  }

  /* ---------- QR ---------- */
  function qrSvg(text) {
    try {
      var M = window.E18QR && window.E18QR.qr(text);
      if (!M) return '';
      var n = M.length + 8;
      return '<svg viewBox="0 0 ' + n + ' ' + n + '" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" focusable="false"><rect width="' + n + '" height="' + n + '" fill="#fff"/><path fill="#000" d="' + window.E18QR.qrPath(M) + '"/></svg>';
    } catch (e) { return ''; }
  }

  /* ---------- big class code with read-aloud label ---------- */
  function codeHtml(code) {
    var spelled = String(code).split('').join(' ');
    return '<span class="sr">Klassencode: ' + esc(spelled) + '</span><span aria-hidden="true">' + esc(code) + '</span>';
  }

  /* ---------- catalog ---------- */
  function catalogPath() { return typeof CFG.catalog === 'string' && CFG.catalog ? CFG.catalog : 'lessons/catalog.json'; }
  function loadCatalog() {
    var p;
    if (window.E18P_Catalog && typeof window.E18P_Catalog.load === 'function') {
      p = Promise.resolve(window.E18P_Catalog.load(new URL(catalogPath(), baseUrl()).href));
    } else {
      p = fetch(new URL(catalogPath(), baseUrl()).href, { credentials: 'same-origin' }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
    }
    return p.then(function (c) { S.catalog = c && c.lessons ? c : { lessons: [] }; return S.catalog; });
  }

  function renderLessons() {
    var list = $('lessonList');
    var ls = S.catalog.lessons || [];
    list.setAttribute('aria-busy', 'false');
    if (!ls.length) { list.innerHTML = '<p class="err">Er zijn geen lessen gevonden.</p>'; return; }
    list.innerHTML = ls.map(function (l) {
      var pdf = l.teacherPdf ? '<a href="' + esc(pdfUrl(l)) + '" target="_blank" rel="noopener">Docentenblad<span class="sr"> van ' + esc(l.title) + '</span> (pdf)</a>' : '';
      var test = l.status === 'test' ? '<span class="badge warn">Testversie</span>' : '';
      return '<article class="card lesson-card" aria-labelledby="lt-' + esc(l.slug) + '">' +
        '<h2 id="lt-' + esc(l.slug) + '">' + esc(l.title) + '</h2>' +
        '<p class="muted">' + esc(l.lead || '') + '</p>' +
        '<div class="meta"><span class="badge">' + esc(l.minutes) + ' minuten</span><span class="badge">' + (l.rooms || []).length + ' kamers</span>' + test + '</div>' +
        (pdf ? '<p class="small">' + pdf + '</p>' : '') +
        '<div class="actions">' +
        (CODES_MODE
          ? '<button type="button" class="btn" data-offline="' + esc(l.slug) + '">Zonder internet<span class="sr">: ' + esc(l.title) + '</span></button>' +
            '<button type="button" class="btn ghost" data-start="' + esc(l.slug) + '">Demo op deze computer<span class="sr">: ' + esc(l.title) + '</span></button>'
          : '<button type="button" class="btn" data-start="' + esc(l.slug) + '">Start klas<span class="sr">: ' + esc(l.title) + '</span></button>' +
            '<button type="button" class="btn ghost" data-offline="' + esc(l.slug) + '">Zonder internet<span class="sr">: ' + esc(l.title) + '</span></button>') +
        '</div></article>';
    }).join('');
  }

  /* ---------- network adapter (core/transport.js) ---------- */
  function T() { return window.E18P_Transport; }

  function netCreate(lesson, minutes) {
    var tr = T();
    if (!tr || typeof tr.createClass !== 'function') return Promise.reject(new Error('geen transport'));
    var args = { relay: CFG.relay, lesson: lesson.slug, minutes: minutes, catalog: S.catalog, research: S.research };
    if (!CFG.relay && typeof tr.findHost === 'function') {
      // Local mode: reuse a host that already runs in a parent or sibling frame (demo page) instead of starting a second one.
      var h = null; try { h = tr.findHost(); } catch (e) { h = null; }
      if (h && typeof h.createClass === 'function') {
        try { if (h.setCatalog) h.setCatalog(S.catalog); return Promise.resolve(h.createClass({ lesson: lesson.slug, minutes: minutes, research: S.research })); }
        catch (e) { return Promise.reject(e); }
      }
    }
    return Promise.resolve(tr.createClass(args));
  }

  function ensureLocalHost() {
    // After a reload in local mode the host (kept in this window) must come back before we connect; never start a second one.
    var tr = T();
    if (CFG.relay || !tr || typeof tr.hostLocal !== 'function') return;
    try { if (!(tr.findHost && tr.findHost())) tr.hostLocal({ catalog: S.catalog }); } catch (e) { /* connect will report */ }
  }

  function netConnect() {
    var tr = T();
    if (!tr || typeof tr.connect !== 'function') throw new Error('geen transport');
    if (S.conn) { try { S.conn.close(); } catch (e) { /* ignore */ } }
    if (!S.attached) ensureLocalHost();
    var c = tr.connect({ relay: CFG.relay, code: S.code, role: 'teacher', key: S.key });
    S.conn = c;
    ['snapshot', 'team', 'timer', 'state', 'lesson', 'error'].forEach(function (t) { c.on(t, function (m) { if (S.conn === c) onMsg(m); }); });
    c.on('status', function (st) { if (S.conn === c) onNet(st); });
  }

  function send(msg) {
    if (!S.conn) return;
    try { S.conn.send(msg); } catch (e) { /* transport queues or drops */ }
  }

  function onNet(st) {
    var s = typeof st === 'string' ? st : (st && (st.status || st.state)) || '';
    S.net = s;
    var b = $('netBadge');
    if (!b || S.mode !== 'live') { if (b) b.hidden = true; return; }
    b.hidden = false;
    var local = !CFG.relay;
    if (s === 'open' || s === 'online' || s === 'connected') { b.className = 'badge ok'; b.textContent = local ? 'Verbonden (lokaal)' : 'Verbonden'; }
    else if (s === 'connecting') { b.className = 'badge'; b.textContent = 'Verbinden...'; }
    else { b.className = 'badge warn'; b.textContent = 'Verbinding weg, opnieuw verbinden'; }
  }

  function onMsg(m) {
    if (!m || typeof m !== 'object') return;
    if (m.t === 'snapshot') {
      S.cls = m.cls || S.cls;
      if (S.cls && S.cls.lesson && (!S.lesson || S.lesson.slug !== S.cls.lesson)) S.lesson = lessonBySlug(S.cls.lesson) || S.lesson;
      if (S.cls && S.cls.minutes && S.cls.state === 'lobby') S.minutes = S.cls.minutes;
      var fresh = {};
      (m.teams || []).forEach(function (t) { fresh[t.team] = t; trackTeam(t, true); });
      S.teams = fresh;
      if (S.cls && S.cls.state === 'ended') onEnded(false);
      renderClass();
      return;
    }
    if (m.t === 'team' && m.team) {
      var t = m.team, prev = S.teams[t.team];
      S.teams[t.team] = t;
      trackTeam(t, !prev);
      if (!prev) announceJoin(t.label || ('Team ' + t.n));
      scheduleRender();
      return;
    }
    if (m.t === 'timer' && m.timer) { if (S.cls) S.cls.timer = m.timer; lastMin = null; renderTimerButtons(); tick(); return; }
    if (m.t === 'state' && m.state) { if (S.cls) S.cls.state = m.state; if (m.state === 'ended') onEnded(false); renderClass(); return; }
    if (m.t === 'lesson' && m.slug) {
      if (S.cls) {
        S.cls.lesson = m.slug;
        if (m.minutes) { S.cls.minutes = m.minutes; S.minutes = m.minutes; if (S.cls.timer && !S.cls.timer.running) S.cls.timer = { running: false, endsAt: null, leftMs: m.minutes * 60000 }; }
      }
      S.lesson = lessonBySlug(m.slug) || S.lesson; renderClass(); return;
    }
    if (m.t === 'error') { onRelayError(m.code); return; }
  }

  function onRelayError(code) {
    if (S.mode !== 'live') return;
    if (code === 'no-class' || code === 'ended' || code === 'key' || code === 'role') {
      var why = code === 'ended' ? 'Deze klas is al afgerond.' : 'Deze klas bestaat niet meer, of de link klopt niet.';
      if (S.conn) { try { S.conn.close(); } catch (e) { /* ignore */ } }
      S.conn = null; store(null);
      goPick(why);
    }
  }

  /* ---------- per-team progress tracking (client side, for "stuck" and hardest room) ---------- */
  function progKey(t) { return (t.roomsDone || []).length + '|' + ((t.answers && t.answers.n) || 0) + '|' + (t.finished ? 1 : 0) + '|' + (t.room || ''); }
  function trackTeam(t, first) {
    var k = progKey(t), tr = S.track[t.team];
    if (!tr) { S.track[t.team] = { key: k, at: now(), room: t.room, roomAt: now() }; return; }
    if (tr.key !== k) { tr.key = k; tr.at = now(); }
    if (tr.room !== t.room) {
      if (tr.room) { var rs = S.roomStats[tr.room] || (S.roomStats[tr.room] = { ms: 0, n: 0 }); rs.ms += now() - tr.roomAt; rs.n++; }
      tr.room = t.room; tr.roomAt = now();
    }
    void first;
  }
  function isStuck(t) {
    if (!S.cls || S.cls.state !== 'running' || t.finished) return false;
    var tr = S.track[t.team];
    return !!tr && now() - tr.at > STUCK_MS;
  }
  function teamList() {
    return Object.keys(S.teams).map(function (k) { return S.teams[k]; }).sort(function (a, b) { return (a.n || 0) - (b.n || 0); });
  }

  /* ---------- timer ---------- */
  function leftMs() {
    var t = S.cls && S.cls.timer;
    if (!t) return S.minutes * 60000;
    if (P.timerLeft) { try { var v = P.timerLeft(t, serverNow()); if (typeof v === 'number') return v; } catch (e) { /* fall through */ } }
    if (t.running && t.endsAt) return Math.max(0, t.endsAt - serverNow());
    return Math.max(0, t.leftMs || 0);
  }
  var lastMin = null, lastClock = '';
  function tick() {
    if (S.mode !== 'live' || !S.cls) return;
    var ms = leftMs(), txt = mmss(ms), state = S.cls.state, t = S.cls.timer || {};
    if (state === 'lobby') txt = mmss(S.minutes * 60000);
    if (txt !== lastClock) {
      lastClock = txt;
      $('clock').textContent = txt; $('pjClock').textContent = txt;
      $('clock').classList.toggle('low', state === 'running' && ms < 5 * 60000);
    }
    var st = state === 'ended' ? 'Afgerond' : state === 'lobby' ? 'Wachten op start' : (ms <= 0 ? 'Tijd is om' : t.running ? 'Bezig' : 'Gepauzeerd');
    if ($('timerState').textContent !== st) { $('timerState').textContent = st; $('pjState').textContent = st; }
    if (state === 'running' && t.running) {
      var m = Math.ceil(ms / 60000);
      if (lastMin !== null && m !== lastMin) announce(ms <= 0 ? 'De tijd is om.' : 'Nog ' + m + (m === 1 ? ' minuut.' : ' minuten.'));
      lastMin = m;
    }
  }
  function renderTimerButtons() {
    var t = (S.cls && S.cls.timer) || {};
    var b = $('btnPause');
    b.textContent = t.running ? 'Pauze' : 'Verder';
    b.setAttribute('aria-label', t.running ? 'Pauze, de tijd stopt' : 'Verder, de tijd loopt weer');
  }

  /* ---------- class view rendering ---------- */
  var renderPending = false;
  function scheduleRender() {
    if (renderPending) return;
    renderPending = true;
    setTimeout(function () { renderPending = false; renderClass(); }, 120);
  }

  function renderClass() {
    if (S.mode !== 'live') return;
    var cls = S.cls || {}, state = cls.state || 'lobby', L = S.lesson;
    $('hClass').textContent = L ? L.title : 'Les';
    $('pjTitle').textContent = L ? L.title : 'Les';
    $('clsStep').textContent = state === 'lobby' ? 'Stap 2 van 3: teams laten meedoen' : state === 'running' ? 'Stap 3 van 3: de les loopt' : 'Afgerond';
    show('lobby', state === 'lobby');
    show('running', state !== 'lobby');
    show('vResults', state !== 'lobby');
    show('vEnd', true);
    show('btnEnd', state !== 'ended');
    show('btnNew', state === 'ended');
    $('minVal').textContent = S.minutes + ' min';
    $('minDown').disabled = S.minutes <= 5; $('minUp').disabled = S.minutes >= 90;
    document.querySelector('.timer-btns').hidden = state === 'ended';
    renderLobby();
    renderGrid();
    renderSummary();
    renderResults();
    renderProjectorBar();
    renderTimerButtons();
    tick();
  }

  function renderLobby() {
    var ts = teamList();
    $('lobbyCount').textContent = ts.length + (ts.length === 1 ? ' team' : ' teams');
    $('lobbyTeams').innerHTML = ts.length ? ts.map(function (t) {
      return '<li class="' + (t.online ? '' : 'off') + '">' + swatch(t.n) + '<span>' + esc(t.label) + '</span>' + (t.online ? '' : '<span class="badge muted">offline</span>') + '</li>';
    }).join('') : '<li class="off">Nog geen teams. Laat de leerlingen de code invoeren.</li>';
  }

  function pct(t) { var a = t.answers || {}; return a.n ? Math.round((a.firstRight || 0) / a.n * 100) : null; }
  function score(x) { return x && typeof x.score === 'number' ? x.score + '/' + (x.max || (S.lesson && S.lesson.checkMax) || 4) : '-'; }

  function renderGrid() {
    var ts = teamList(), only = $('fltStuck').checked, R = rooms(), total = R.length;
    var shown = ts.filter(function (t) { return !only || isStuck(t); });
    var empty = $('gridEmpty');
    if (!ts.length) { empty.hidden = false; empty.textContent = 'Nog geen teams.'; }
    else if (!shown.length) { empty.hidden = false; empty.textContent = 'Geen enkel team zit vast. Goed bezig.'; }
    else empty.hidden = true;
    $('teamGrid').innerHTML = shown.map(function (t) {
      var done = (t.roomsDone || []).length, stuck = isStuck(t), p = pct(t), a = t.answers || {};
      var segs = R.map(function (r) {
        var d = (t.roomsDone || []).indexOf(r.id) >= 0, c = !d && t.room === r.id;
        return '<span class="' + (d ? 'done' : c ? 'cur' : '') + '"></span>';
      }).join('');
      var badges = [];
      badges.push(t.online ? '<span class="badge ok"><span class="dot" aria-hidden="true"></span>online</span>' : '<span class="badge muted">offline</span>');
      if (t.finished) badges.push('<span class="badge ok"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>Klaar in ' + Math.max(1, Math.round((t.sec || 0) / 60)) + ' min</span>');
      if (stuck) badges.push('<span class="badge warn"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2l7 12H1z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 6.5v3.5M8 11.5v1" stroke="currentColor" stroke-width="2"/></svg>Zit vast</span>');
      var cur = t.finished ? 'Klaar' : t.room ? roomTitle(t.room) : 'Nog niet begonnen';
      var c = colourIdx(t.n);
      return '<li class="team' + (t.online ? '' : ' is-off') + (t.finished ? ' is-done' : '') + '" style="--tc:' + HEX[c] + '">' +
        '<div class="team-head">' + swatch(t.n) + '<h3>' + esc(t.label) + '</h3></div>' +
        '<div class="badges">' + badges.join('') + '</div>' +
        '<div><div class="segs" aria-hidden="true">' + segs + '</div><p class="prog-text">' + done + ' van ' + total + ' kamers klaar</p></div>' +
        '<dl>' +
        '<dt>Nu in</dt><dd>' + esc(cur) + '</dd>' +
        '<dt>Eerste keer goed</dt><dd>' + (p === null ? '-' : p + '%') + (a.n ? ' <span class="muted">(' + a.n + ' vragen)</span>' : '') + '</dd>' +
        '<dt>Hints</dt><dd>' + (a.hints || 0) + '</dd>' +
        '<dt>Voortoets</dt><dd>' + score(t.pre) + '</dd>' +
        '<dt>Natoets</dt><dd>' + score(t.post) + '</dd>' +
        '</dl></li>';
    }).join('');
  }

  function median(arr) { if (!arr.length) return 0; var s = arr.slice().sort(function (a, b) { return a - b; }); var m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }

  var HARD_MIN_N = 5;
  function hardestRoom() {
    // Prefer per-room first-try data if the relay provides it (TeamState.perRoom), else the longest average time per room.
    var R = rooms(), best = null;
    var agg = {};
    teamList().forEach(function (t) {
      var pr = t.perRoom || t.roomAnswers;
      if (pr && typeof pr === 'object') Object.keys(pr).forEach(function (rid) {
        var x = pr[rid] || {}, g = agg[rid] || (agg[rid] = { n: 0, right: 0 });
        g.n += x.n || 0; g.right += x.firstRight || 0;
      });
    });
    // Name a room only with enough data: at least 2 rooms, each with at least HARD_MIN_N answers (LOW_MIN_N in backend/Code.gs).
    var counted = 0;
    Object.keys(agg).forEach(function (rid) {
      var g = agg[rid]; if (g.n < HARD_MIN_N) return;
      var p = g.right / g.n; counted++;
      if (!best || p < best.v) best = { id: rid, v: p, kind: 'pct' };
    });
    if (best && counted >= 2) return roomTitle(best.id) + ' (' + Math.round(best.v * 100) + '% eerste keer goed)';
    best = null; counted = 0;
    R.forEach(function (r) {
      var rs = S.roomStats[r.id]; if (!rs || rs.n < HARD_MIN_N) return;
      var avg = rs.ms / rs.n; counted++;
      if (!best || avg > best.v) best = { id: r.id, v: avg };
    });
    if (best && counted >= 2) return roomTitle(best.id) + ' (gemiddeld ' + Math.max(1, Math.round(best.v / 60000)) + ' min)';
    return null;
  }

  function renderSummary() {
    var ts = teamList(), total = rooms().length;
    var fin = ts.filter(function (t) { return t.finished; }).length;
    var med = median(ts.map(function (t) { return (t.roomsDone || []).length; }));
    var stuck = ts.filter(isStuck).length;
    var hard = hardestRoom();
    $('summary').innerHTML =
      '<div class="stat"><b>' + fin + ' van ' + ts.length + '</b><span>teams klaar</span></div>' +
      '<div class="stat"><b>' + String(med).replace('.', ',') + ' van ' + total + '</b><span>kamers klaar (mediaan)</span></div>' +
      '<div class="stat"><b>' + stuck + '</b><span>' + (stuck === 1 ? 'team zit vast' : 'teams zitten vast') + '</span></div>' +
      '<div class="stat"><b>' + esc(hard || 'Nog te weinig gegevens') + '</b><span>lastigste kamer</span></div>';
  }

  function renderProjectorBar() {
    var ts = teamList(), total = rooms().length;
    var done = ts.reduce(function (s, t) { return s + (t.roomsDone || []).length; }, 0), max = ts.length * total;
    var pc = max ? Math.round(done / max * 100) : 0;
    $('pjBar').firstElementChild.style.width = pc + '%';
    $('pjBar').setAttribute('aria-valuenow', String(pc));
    var fin = ts.filter(function (t) { return t.finished; }).length;
    $('pjBarText').textContent = S.cls && S.cls.state === 'lobby'
      ? ts.length + (ts.length === 1 ? ' team doet mee' : ' teams doen mee')
      : done + ' van ' + max + ' kamers open. ' + fin + ' van ' + ts.length + ' teams klaar.';
  }

  /* ---------- results (live + offline share rows) ---------- */
  function resultRows() {
    if (S.mode === 'offline') return S.offline.map(function (r, i) {
      return { team: 'Groep ' + (i + 1), kleur: '', n: i + 1, roomsDone: r.roomsDone, roomsTotal: r.roomsTotal, pct: r.firstRightPct, hints: r.hints,
        pre: r.pre, post: r.post, max: r.checkMax, finished: r.finished, minutes: r.minutes, code: r.code };
    });
    var total = rooms().length, cm = (S.lesson && S.lesson.checkMax) || 4;
    return teamList().map(function (t) {
      return { team: 'Team ' + t.n, kleur: COLOURS[colourIdx(t.n)], n: t.n, roomsDone: (t.roomsDone || []).length, roomsTotal: total, pct: pct(t),
        hints: (t.answers && t.answers.hints) || 0, pre: t.pre ? t.pre.score : null, post: t.post ? t.post.score : null,
        max: (t.pre && t.pre.max) || (t.post && t.post.max) || cm, finished: !!t.finished, minutes: t.finished ? Math.max(1, Math.round((t.sec || 0) / 60)) : null };
    });
  }
  function nz(v) { return v === null || v === undefined ? '' : v; }

  function renderResults() {
    var rows = resultRows(), off = S.mode === 'offline';
    var head = '<tr><th scope="col">Team</th>' + (off ? '<th scope="col">Code</th>' : '<th scope="col">Kleur</th>') +
      '<th scope="col" class="num">Kamers</th><th scope="col" class="num">Eerste keer goed</th><th scope="col" class="num">Hints</th>' +
      '<th scope="col" class="num">Voortoets</th><th scope="col" class="num">Natoets</th><th scope="col">Klaar</th><th scope="col" class="num">Minuten</th>' +
      (off ? '<th scope="col"><span class="sr">Verwijderen</span></th>' : '') + '</tr>';
    var body = rows.length ? rows.map(function (r, i) {
      return '<tr><th scope="row">' + (off ? '' : swatch(r.n)) + esc(r.team) + '</th>' +
        '<td>' + esc(off ? r.code : r.kleur) + '</td>' +
        '<td class="num">' + r.roomsDone + ' van ' + r.roomsTotal + '</td>' +
        '<td class="num">' + (r.pct === null ? '-' : r.pct + '%') + '</td>' +
        '<td class="num">' + r.hints + '</td>' +
        '<td class="num">' + (r.pre === null ? '-' : r.pre + '/' + r.max) + '</td>' +
        '<td class="num">' + (r.post === null ? '-' : r.post + '/' + r.max) + '</td>' +
        '<td>' + (r.finished ? 'Ja' : 'Nee') + '</td>' +
        '<td class="num">' + (r.minutes === null ? '-' : r.minutes) + '</td>' +
        (off ? '<td><button type="button" class="btn ghost small row-del" data-del="' + i + '">Verwijder<span class="sr"> ' + esc(r.team) + '</span></button></td>' : '') +
        '</tr>';
    }).join('') : '<tr><td colspan="' + (off ? 10 : 9) + '" class="muted">' + (off ? 'Nog geen codes ingevoerd.' : 'Nog geen teams.') + '</td></tr>';
    $('resWrap').innerHTML = '<table class="table"><caption class="sr">Resultaten per team</caption><thead>' + head + '</thead><tbody>' + body + '</tbody></table>';
    var none = !rows.length;
    $('btnCsv').disabled = none; $('btnCopy').disabled = none;
  }

  var CSV_COLS = ['team', 'kleur', 'kamers_klaar', 'kamers_totaal', 'eerste_poging_goed_pct', 'hints', 'voortoets', 'natoets', 'klaar', 'minuten'];
  function tableData() {
    return resultRows().map(function (r) {
      return [r.team, r.kleur, r.roomsDone, r.roomsTotal, nz(r.pct), r.hints, nz(r.pre), nz(r.post), r.finished ? 'ja' : 'nee', nz(r.minutes)];
    });
  }
  function csvCell(v) { var s = String(v); return /[;"\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }
  function downloadCsv() {
    var lines = [CSV_COLS.join(';')].concat(tableData().map(function (r) { return r.map(csvCell).join(';'); }));
    var blob = new Blob(['﻿' + lines.join('\r\n') + '\r\n'], { type: 'text/csv;charset=utf-8' });
    var d = new Date(), ds = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    var name = 'escape18-' + (S.lesson ? S.lesson.slug : 'les') + '-' + (S.mode === 'offline' ? 'offline' : (S.code || 'klas')) + '-' + ds + '.csv';
    try {
      var url = URL.createObjectURL(blob), a = document.createElement('a');
      a.href = url; a.download = name; a.hidden = true; document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1000);
      $('resMsg').textContent = 'CSV gedownload: ' + name;
    } catch (e) { $('resMsg').textContent = 'Downloaden lukte niet in deze browser.'; }
  }
  function copyText(text, msgEl, okMsg) {
    var fail = function () {
      // Fallback for browsers that refuse the async clipboard API
      try {
        var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); var ok = document.execCommand && document.execCommand('copy'); ta.remove();
        msgEl.textContent = ok ? okMsg : 'Kopieren werd geweigerd door de browser. Gebruik Download CSV of selecteer en kopieer zelf.';
      } catch (e) { msgEl.textContent = 'Kopieren werd geweigerd door de browser. Gebruik Download CSV of selecteer en kopieer zelf.'; }
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { msgEl.textContent = okMsg; }, fail);
      else fail();
    } catch (e) { fail(); }
  }
  function copyTable() {
    var tsv = [CSV_COLS.join('\t')].concat(tableData().map(function (r) { return r.join('\t'); })).join('\n');
    copyText(tsv, $('resMsg'), 'Tabel gekopieerd. Plak hem in Excel of een document.');
  }

  /* ---------- views ---------- */
  function setView(mode) {
    S.mode = mode;
    show('vPick', mode === 'pick');
    show('vClass', mode === 'live');
    show('vOffline', mode === 'offline');
    show('vResults', mode === 'offline');
    show('vEnd', mode === 'live');
    if (mode !== 'live') { $('netBadge').hidden = true; closeProjector(); }
  }

  function goPick(note) {
    if (S.conn) { try { S.conn.close(); } catch (e) { /* ignore */ } }
    S.conn = null; S.cls = null; S.teams = {}; S.track = {}; S.roomStats = {}; S.code = null; S.key = null; S.offline = [];
    setView('pick');
    var n = $('pickNote'); n.hidden = !note; n.textContent = note || '';
    if (!note && CODES_MODE) showCodesNote();
    focusHeading('hPick');
  }

  function showCodesNote() {
    var n = $('pickNote'); n.className = 'note'; n.textContent = CODES_NOTE; n.hidden = false;
    var lead = document.querySelector('#vPick .lead');
    if (lead) lead.textContent = 'Leerlingen spelen in teams op hun telefoon of Chromebook. Ze hebben geen account nodig en typen geen namen. Aan het eind typ je hier hun resultaatcodes in.';
  }

  function startLive(lesson) {
    S.lesson = lesson; S.minutes = Math.max(5, Math.min(90, Number(lesson.minutes) || 45));
    var btns = document.querySelectorAll('[data-start],[data-offline]');
    Array.prototype.forEach.call(btns, function (b) { b.disabled = true; });
    var n = $('pickNote'); n.hidden = false; n.className = 'note'; n.textContent = 'Klas wordt aangemaakt...';
    netCreate(lesson, S.minutes).then(function (r) {
      if (!r || !r.code || !r.key) throw new Error('geen code');
      n.hidden = true; n.className = 'note warn';
      S.code = r.code; S.key = r.key;
      store({ mode: 'live', code: S.code, key: S.key, lesson: lesson.slug, research: S.research });
      enterLive();
    }).catch(function (e) {
      n.hidden = true; n.className = 'note warn';
      void e;
      startOffline(lesson, 'Er is nu geen verbinding met de klassenserver. Je kunt de les zonder internet geven: leerlingen spelen los en jij typt aan het eind hun resultaatcodes hier in. Werkt de verbinding later wel? Klik dan op Andere les kiezen en start de klas opnieuw.');
    }).then(function () {
      Array.prototype.forEach.call(btns, function (b) { b.disabled = false; });
    });
  }

  function enterLive() {
    setView('live');
    S.cls = S.cls || { code: S.code, lesson: S.lesson && S.lesson.slug, minutes: S.minutes, state: 'lobby', timer: { running: false, endsAt: null, leftMs: S.minutes * 60000 } };
    var url = joinUrl(S.code);
    $('classCode').innerHTML = codeHtml(S.code);
    $('pjCode').innerHTML = codeHtml(S.code);
    $('joinUrl').href = url; $('joinUrl').textContent = shortUrl(url);
    $('pjUrl').textContent = shortUrl(url);
    var q = qrSvg(url); $('joinQr').innerHTML = q; $('pjQr').innerHTML = q;
    lastClock = ''; lastMin = null;
    onNet('connecting');
    try { netConnect(); } catch (e) { onNet('closed'); }
    renderClass();
    focusHeading('hClass');
  }

  function onEnded(local) {
    store(null);
    var n = $('endNote'); n.hidden = false;
    n.textContent = 'De les is afgerond. Teams zien nu het eindscherm. De gegevens van deze klas worden over 10 minuten automatisch van de server gewist. Download de resultaten nu als je ze wilt bewaren.';
    if (local) setTimeout(function () { $('hResults').setAttribute('tabindex', '-1'); focusHeading('hResults'); }, 50);
  }

  function startOffline(lesson, why) {
    S.lesson = lesson; S.offline = [];
    if (S.conn) { try { S.conn.close(); } catch (e) { /* ignore */ } S.conn = null; }
    var saved = loadStore();
    if (saved && saved.mode === 'offline' && saved.lesson === lesson.slug && Array.isArray(saved.codes)) {
      saved.codes.forEach(function (c) { var d = RC && RC.decode(c); if (d && d.ok && d.slug === lesson.slug) S.offline.push(d); });
    }
    setView('offline');
    $('hOffline').textContent = lesson.title + ': zonder internet';
    var w = $('offlineWhy'); w.hidden = !why; w.textContent = why || ''; w.className = why === CODES_NOTE ? 'note' : 'note warn';
    var u = offlineUrl(lesson.slug);
    $('offUrl').href = u; $('offUrl').textContent = shortUrl(u);
    $('offQr').innerHTML = qrSvg(u);
    $('paperLink').href = lessonPaperUrl(lesson);
    $('paperLink').textContent = lesson.teacherPdf ? 'Docentenblad en papieren versie (pdf)' : 'Papieren versie van de les';
    saveOffline();
    renderResults();
    focusHeading('hOffline');
  }
  function saveOffline() { store({ mode: 'offline', lesson: S.lesson.slug, codes: S.offline.map(function (r) { return r.code; }) }); }

  var ERR_TEXT = {
    lengte: 'Een code heeft 8 tekens, bijvoorbeeld ABCD-EFGH.',
    teken: 'Deze code bevat een teken dat niet kan. Let op: de letters I en O en de cijfers 0 en 1 komen niet voor.',
    controle: 'Deze code klopt niet. Controleer of je hem goed hebt overgetypt.',
    les: 'Deze code hoort bij een les die deze pagina niet kent.',
    waarde: 'Deze code klopt niet. Controleer of je hem goed hebt overgetypt.'
  };
  function addCode(ev) {
    ev.preventDefault();
    var inp = $('codeInput'), err = $('codeErr'), raw = inp.value.trim();
    var fail = function (msg) { err.textContent = msg; inp.setAttribute('aria-invalid', 'true'); inp.focus(); };
    if (!raw) return fail('Typ eerst een resultaatcode.');
    if (!RC) return fail('De resultaatcodes kunnen niet worden gelezen (bestand ontbreekt).');
    var d = RC.decode(raw);
    if (!d.ok) return fail(ERR_TEXT[d.err] || 'Deze code klopt niet.');
    if (d.slug !== S.lesson.slug) { var o = lessonBySlug(d.slug); return fail('Deze code hoort bij een andere les: ' + (o ? o.title : d.slug) + '.'); }
    for (var i = 0; i < S.offline.length; i++) if (S.offline[i].code === d.code) return fail('Deze code is al ingevoerd (' + 'Groep ' + (i + 1) + ').');
    S.offline.push(d); saveOffline();
    inp.value = ''; inp.removeAttribute('aria-invalid');
    err.textContent = '';
    $('resMsg').textContent = 'Code ' + d.code + ' toegevoegd als Groep ' + S.offline.length + '.';
    renderResults(); inp.focus();
  }

  /* ---------- projector ---------- */
  var pjReturn = null;
  function openProjector() {
    pjReturn = document.activeElement;
    show('projector', true);
    document.body.style.overflow = 'hidden';
    renderProjectorBar(); lastClock = ''; tick();
    $('pjClose').focus();
    try { var el = document.documentElement; if (el.requestFullscreen && !document.fullscreenElement) { var p = el.requestFullscreen(); if (p && p.catch) p.catch(function () { /* not allowed */ }); } } catch (e) { /* ignore */ }
  }
  function closeProjector() {
    if ($('projector').hidden) return;
    show('projector', false);
    document.body.style.overflow = '';
    try { if (document.fullscreenElement && document.exitFullscreen) { var p = document.exitFullscreen(); if (p && p.catch) p.catch(function () { }); } } catch (e) { /* ignore */ }
    if (pjReturn && pjReturn.focus) pjReturn.focus();
  }

  /* ---------- end dialog ---------- */
  var dlgReturn = null;
  function openEnd() {
    var d = $('dlgEnd'); dlgReturn = document.activeElement;
    if (typeof d.showModal === 'function') { try { d.showModal(); } catch (e) { d.setAttribute('open', ''); } }
    else d.setAttribute('open', '');
    $('dlgEndNo').focus();
  }
  function closeEnd() {
    var d = $('dlgEnd');
    if (typeof d.close === 'function' && d.open) d.close(); else d.removeAttribute('open');
    if (dlgReturn && dlgReturn.focus && document.contains(dlgReturn) && !dlgReturn.closest('[hidden]')) dlgReturn.focus();
  }
  function confirmEnd() {
    closeEnd();
    send({ t: 'state', state: 'ended' });
    if (S.cls) S.cls.state = 'ended';
    onEnded(true);
    renderClass();
  }

  /* ---------- wiring ---------- */
  function wire() {
    $('optResearch').addEventListener('change', function () { S.research = this.checked; });
    $('lessonList').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var slug = b.getAttribute('data-start') || b.getAttribute('data-offline'), l = lessonBySlug(slug);
      if (!l) return;
      if (b.hasAttribute('data-start')) startLive(l); else startOffline(l, CODES_MODE ? CODES_NOTE : '');
    });
    var setMin = function (d) {
      S.minutes = Math.max(5, Math.min(90, S.minutes + d));
      if (S.lesson) send({ t: 'lesson', slug: S.lesson.slug, minutes: S.minutes });
      renderClass(); announce('Speeltijd ' + S.minutes + ' minuten.');
    };
    $('minDown').addEventListener('click', function () { setMin(-5); });
    $('minUp').addEventListener('click', function () { setMin(5); });
    $('btnStart').addEventListener('click', function () {
      // Minutes were already sent with {t:'lesson'} while in the lobby; resend once in case that frame was lost.
      if (S.lesson && S.cls && S.cls.minutes !== S.minutes) send({ t: 'lesson', slug: S.lesson.slug, minutes: S.minutes });
      send({ t: 'state', state: 'running' });
      send({ t: 'timer', action: 'start' });
      if (S.cls) {
        S.cls.state = 'running';
        S.cls.timer = { running: true, endsAt: serverNow() + S.minutes * 60000, leftMs: S.minutes * 60000 };
      }
      Object.keys(S.track).forEach(function (k) { S.track[k].at = now(); });
      lastMin = null; renderClass();
      $('btnPause').focus();
    });
    $('btnPause').addEventListener('click', function () {
      var t = (S.cls && S.cls.timer) || {};
      send({ t: 'timer', action: t.running ? 'pause' : 'resume' });
    });
    $('btnPlus').addEventListener('click', function () { send({ t: 'timer', action: 'add', sec: 300 }); });
    $('btnMinus').addEventListener('click', function () { send({ t: 'timer', action: 'add', sec: -300 }); });
    $('fltStuck').addEventListener('change', renderGrid);
    $('btnProjector').addEventListener('click', openProjector);
    $('pjClose').addEventListener('click', closeProjector);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !$('projector').hidden) { e.preventDefault(); closeProjector(); }
      if (e.key === 'Tab' && !$('projector').hidden) { e.preventDefault(); $('pjClose').focus(); }
    });
    $('btnCopyUrl').addEventListener('click', function () { copyText(joinUrl(S.code), $('copyUrlMsg'), 'Link gekopieerd.'); });
    $('btnCopyOffUrl').addEventListener('click', function () { copyText(offlineUrl(S.lesson.slug), $('copyOffMsg'), 'Link gekopieerd.'); });
    $('btnCsv').addEventListener('click', downloadCsv);
    $('btnCopy').addEventListener('click', copyTable);
    $('btnPrint').addEventListener('click', function () { try { window.print(); } catch (e) { $('resMsg').textContent = 'Printen lukte niet.'; } });
    $('btnEnd').addEventListener('click', openEnd);
    $('dlgEndNo').addEventListener('click', closeEnd);
    $('dlgEndYes').addEventListener('click', confirmEnd);
    $('dlgEnd').addEventListener('cancel', function (e) { e.preventDefault(); closeEnd(); });
    $('btnNew').addEventListener('click', function () { store(null); goPick(''); });
    $('codeForm').addEventListener('submit', addCode);
    $('codeInput').addEventListener('input', function () { if ($('codeErr').textContent) { $('codeErr').textContent = ''; this.removeAttribute('aria-invalid'); } });
    $('resWrap').addEventListener('click', function (e) {
      var b = e.target.closest('[data-del]'); if (!b) return;
      var i = Number(b.getAttribute('data-del'));
      S.offline.splice(i, 1); saveOffline(); renderResults();
      $('resMsg').textContent = 'Rij verwijderd.'; $('codeInput').focus();
    });
    $('btnPrecache').addEventListener('click', precache);
    $('btnBackOff').addEventListener('click', function () { store(null); goPick(''); });
  }

  function precache() {
    var msg = $('precacheMsg'), b = $('btnPrecache');
    if (!window.E18P_SW || typeof window.E18P_SW.precacheLessons !== 'function') { msg.textContent = 'Deze browser kan de lessen niet offline bewaren.'; return; }
    b.disabled = true; msg.textContent = 'Lessen worden bewaard...';
    var reg; try { reg = window.E18P_SW.register(); } catch (e) { reg = null; }
    Promise.resolve(reg).then(function () {
      return window.E18P_SW.precacheLessons(function (p) { if (p && p.total) msg.textContent = 'Bezig: ' + p.done + ' van ' + p.total + '...'; });
    }).then(function (r) {
      r = r || {};
      if (!r.total) msg.textContent = 'Het platform werkt nu ook zonder internet op deze computer. De lessen zelf worden op deze site niet vooraf bewaard: zorg tijdens de les voor internet, of gebruik de papieren versie.';
      else msg.textContent = r.failed ? 'Klaar, maar ' + r.failed + ' bestanden lukten niet. Probeer het later opnieuw.' : 'Klaar. Deze computer heeft alle lessen ook zonder internet.';
    }).catch(function (e) {
      msg.textContent = 'Offline bewaren lukte niet' + (e && e.message ? ': ' + e.message : '') + '.';
    }).then(function () { b.disabled = false; });
  }

  /* ---------- boot ---------- */
  function boot() {
    wire();
    try { if (window.E18P_SW && window.E18P_SW.register) { var r = window.E18P_SW.register(); if (r && r.catch) r.catch(function () { }); } } catch (e) { /* ignore */ }
    setInterval(tick, 250);
    setInterval(function () { if (S.mode === 'live' && S.cls && S.cls.state === 'running') { renderGrid(); renderSummary(); } }, 15000);
    var qs = new URLSearchParams(location.search);
    loadCatalog().then(renderLessons, function () {
      $('lessonList').setAttribute('aria-busy', 'false');
      $('lessonList').innerHTML = '<p class="err">De lessenlijst kon niet worden geladen. Ververs de pagina.</p>';
      S.catalog = S.catalog || { lessons: [] };
    }).then(function () {
      var att = qs.get('attach'), key = qs.get('key');
      if (att && key) {
        S.attached = true; S.code = String(att).toUpperCase(); S.key = key;
        S.lesson = lessonBySlug(qs.get('les')) || null;
        enterLive();
        return;
      }
      var saved = loadStore();
      if (saved && saved.mode === 'live' && saved.code && saved.key) {
        S.code = saved.code; S.key = saved.key; S.research = !!saved.research;
        S.lesson = lessonBySlug(saved.lesson);
        if (S.lesson) S.minutes = S.lesson.minutes || 45;
        enterLive();
      } else if (saved && saved.mode === 'offline' && lessonBySlug(saved.lesson)) {
        startOffline(lessonBySlug(saved.lesson), CODES_MODE ? CODES_NOTE : '');
      } else {
        setView('pick');
        if (CODES_MODE) showCodesNote();
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
