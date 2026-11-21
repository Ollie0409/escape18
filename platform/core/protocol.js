/* Escape 18 platform: wire protocol constants, ids and the event whitelist (SPEC "Wire protocol").
   The event whitelist is ported from the repo backend/Code.gs (TYPES, validators, CODE_RE), restricted to the pupil types the relay
   accepts. Teacher feedback types (feedback, plan, reuse) are dropped. Unknown fields are dropped; missing required fields drop the event. */
(function (root, f) { if (typeof module === 'object' && module.exports) module.exports = f(); else root.E18P_Protocol = f(); })(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  var V = 1;
  var ALPH = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var B62 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var CODE_RE = /^[A-HJ-NP-Z2-9]{5}$/;
  var TEAM_RE = /^[A-Za-z0-9]{10}$/;
  var KEY_RE = /^[A-Za-z0-9]{24}$/;
  var SLUG_RE = /^[a-z0-9][a-z0-9-]{0,39}$/;
  var PRODUCT_RE = /^escape18-[a-z0-9-]{1,40}$/;
  var SESSION_RE = /^[A-Za-z0-9]{10}$/;
  var ID_RE = /^[A-Za-z0-9][A-Za-z0-9_-]{0,39}$/;
  var VERSION_RE = /^[A-Za-z0-9._-]{1,60}$/;
  var MAX_FRAME = 65536, MAX_TEAMS = 60, MAX_BATCH = 200;
  var ENDED_TTL_MS = 10 * 60 * 1000, HARD_TTL_MS = 12 * 60 * 60 * 1000;
  var COLOURS = ['Oranje', 'Blauw', 'Groen', 'Paars', 'Geel', 'Rood', 'Turquoise', 'Roze', 'Grijs', 'Bruin'];
  var STATES = ['lobby', 'running', 'ended'];
  var TIMER_ACTIONS = ['start', 'pause', 'resume', 'add'];
  var WISHES = ['zorgverzekering', 'abonnementen', 'verzekeringen', 'belasting', 'budget', 'studiekeuze', 'studiefinanciering', 'wonen', 'werk', 'anders'];
  // Message types per direction (unknown types are ignored by both sides).
  var MSG = {
    pupilToRelay: ['hello', 'events', 'ping'],
    teacherToRelay: ['hello', 'timer', 'state', 'lesson', 'ping'],
    relayToClient: ['welcome', 'error', 'ack', 'pong', 'snapshot', 'team', 'timer', 'state', 'lesson']
  };
  var ERRORS = ['no-class', 'ended', 'full', 'key', 'team', 'role', 'bad-frame'];

  // ---------- validators (Code.gs) ----------
  function vInt(lo, hi) { return function (v) { return (typeof v === 'number' && Math.floor(v) === v && v >= lo && v <= hi) ? v : undefined; }; }
  function vOneOf(list) { return function (v) { return list.indexOf(v) >= 0 ? v : undefined; }; }
  function vBool(v) { return typeof v === 'boolean' ? v : undefined; }
  function vId(v) { return (typeof v === 'string' && ID_RE.test(v)) ? v : undefined; }
  function vLang(v) { return (typeof v === 'string' && /^[a-z]{2}$/.test(v)) ? v : undefined; }
  function vChoice(v) {
    if (typeof v === 'number') return (isFinite(v) && Math.abs(v) <= 1e7) ? v : undefined;
    if (typeof v === 'string') return vId(v);
    if (Array.isArray(v) && v.length >= 1 && v.length <= 20 && v.every(function (x) { return vId(x) !== undefined; })) return v.slice();
    return undefined;
  }
  function vRooms(v) {
    if (typeof v === 'number') return vInt(1, 50)(v);
    if (Array.isArray(v) && v.length >= 1 && v.length <= 12 && v.every(function (x) { return vId(x) !== undefined; })) return v.slice();
    return undefined;
  }
  function vItems(v) {
    if (!Array.isArray(v) || v.length < 1 || v.length > 50) return undefined;
    var out = [];
    for (var i = 0; i < v.length; i++) {
      var x = v[i];
      if (!x || typeof x !== 'object' || vId(x.q) === undefined || typeof x.right !== 'boolean') return undefined;
      out.push(x.conf === 1 || x.conf === 2 || x.conf === 3 ? { q: x.q, right: x.right, conf: x.conf } : { q: x.q, right: x.right });
    }
    return out;
  }
  var SEC = vInt(0, 86400);
  var TYPES = {
    teacher_start: { f: { variant: vId, rooms: vRooms, lang: vLang }, need: [] },
    start: { f: { variant: vId, lang: vLang }, need: [] },
    check: { f: { phase: vOneOf(['start', 'end']), form: vOneOf(['A', 'B']), score: vInt(0, 100), max: vInt(1, 100), items: vItems, ceil: vBool }, need: ['phase', 'score', 'max'] },
    answer: { f: { room: vId, q: vId, choice: vChoice, first: vBool, tries: vInt(1, 20), hint: vBool, sec: SEC }, need: ['room', 'q', 'first'] },
    room: { f: { room: vId, sec: SEC }, need: ['room'] },
    lock: { f: { opened: vBool, sec: SEC }, need: ['opened'] },
    pupil_feedback: { f: { fun: vInt(1, 5), learned: vInt(1, 5), wish: vOneOf(WISHES) }, need: ['fun', 'learned'] },
    end: { f: { sec: SEC }, need: [] }
  };

  // Teacher free text scrubber (Code.gs scrubText_). Pupil events carry no free text; kept for parity and tests.
  function scrubText(s) {
    var t = String(s).slice(0, 2000).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
    t = t.replace(/[^\s@]+@[^\s@]+/g, '[e-mailadres weggehaald]');
    t = t.replace(/[A-Za-z0-9._%+-]+ ?[(\[]at[)\]] ?[A-Za-z0-9.-]+/gi, '[e-mailadres weggehaald]');
    t = t.replace(/(?:\+|00)?\d(?:[ ().\/-]{0,3}\d){8,16}/g, function (m) { var n = m.replace(/\D/g, '').length; return n >= 9 && n <= 15 ? '[telefoonnummer weggehaald]' : m; });
    return t.trim().slice(0, 500);
  }

  // One raw engine event to a clean one, or null. why (optional object) gets the reason in why.r.
  // Output shape = engine shape: {type, product, version, class, session, data}.
  function cleanEvent(x, why) {
    var no = function (r) { if (why) why.r = r; return null; };
    if (!x || typeof x !== 'object' || Array.isArray(x)) return no('geen object');
    var type = typeof x.type === 'string' ? x.type : '';
    if (!Object.prototype.hasOwnProperty.call(TYPES, type)) return no('onbekend type');
    var T = TYPES[type];
    if (typeof x.product !== 'string' || !PRODUCT_RE.test(x.product)) return no(type + ': product');
    var session = x.session == null ? '' : String(x.session);
    if (!SESSION_RE.test(session)) return no(type + ': session');
    var c = x['class'] == null ? '' : String(x['class']).trim().toUpperCase();
    var cls = CODE_RE.test(c) ? c : 'GEEN';
    var version = (typeof x.version === 'string' && VERSION_RE.test(x.version)) ? x.version : 'onbekend';
    var d = (x.data && typeof x.data === 'object' && !Array.isArray(x.data)) ? x.data : {};
    var data = {};
    Object.keys(T.f).forEach(function (k) {
      if (!Object.prototype.hasOwnProperty.call(d, k)) return;
      var v = T.f[k](d[k]);
      if (v !== undefined) data[k] = v;
    });
    for (var i = 0; i < T.need.length; i++) if (!Object.prototype.hasOwnProperty.call(data, T.need[i])) return no(type + ': ' + T.need[i]);
    if (type === 'check' && data.score > data.max) return no('check: score > max');
    return { type: type, product: x.product, version: version, 'class': cls, session: session, data: data };
  }

  // ---------- ids ----------
  function randomString(n, alphabet) {
    alphabet = alphabet || B62;
    var out = '', c = (typeof crypto !== 'undefined' && crypto && crypto.getRandomValues) ? crypto : null;
    var a = new Uint8Array(n);
    if (c) c.getRandomValues(a); else for (var i = 0; i < n; i++) a[i] = Math.floor(Math.random() * 256);
    for (var j = 0; j < n; j++) out += alphabet[a[j] % alphabet.length];
    return out;
  }
  function digits(c) { return (String(c || '').match(/[2-9]/g) || []).length; }
  // Valid platform class code: 5 ALPH chars with fewer than 4 digits (4+ digits = engine "no logging" code).
  function isClassCode(c) { return typeof c === 'string' && CODE_RE.test(c) && digits(c) < 4; }
  function newClassCode(rand) { rand = rand || randomString; var c; do c = rand(5, ALPH); while (!isClassCode(c)); return c; }
  function newTeamId(rand) { return (rand || randomString)(10, B62); }
  function newKey(rand) { return (rand || randomString)(24, B62); }
  function normCode(s) { return String(s == null ? '' : s).toUpperCase().replace(/[\s.-]/g, ''); }
  function teamLabel(n) { return 'Team ' + n + ' ' + COLOURS[(n - 1) % COLOURS.length]; }
  function teamColour(n) { return COLOURS[(n - 1) % COLOURS.length]; }

  // ---------- frames ----------
  // Parse a text frame (string) or accept an object. Returns {ok, msg, err}.
  function parseFrame(raw) {
    var msg = raw;
    if (typeof raw === 'string') {
      if (raw.length > MAX_FRAME) return { ok: false, err: 'bad-frame' };
      try { msg = JSON.parse(raw); } catch (e) { return { ok: false, err: 'bad-frame' }; }
    }
    if (!msg || typeof msg !== 'object' || Array.isArray(msg) || typeof msg.t !== 'string') return { ok: false, err: 'bad-frame' };
    return { ok: true, msg: msg };
  }
  function encodeFrame(msg) { return JSON.stringify(msg); }

  // Remaining ms of a timer object at server time serverNow.
  function timerLeft(timer, serverNow) {
    if (!timer) return 0;
    if (timer.running && typeof timer.endsAt === 'number') return Math.max(0, timer.endsAt - serverNow);
    return Math.max(0, timer.leftMs || 0);
  }

  return {
    V: V, ALPH: ALPH, B62: B62, CODE_RE: CODE_RE, TEAM_RE: TEAM_RE, KEY_RE: KEY_RE, SLUG_RE: SLUG_RE, PRODUCT_RE: PRODUCT_RE,
    MAX_FRAME: MAX_FRAME, MAX_TEAMS: MAX_TEAMS, MAX_BATCH: MAX_BATCH, ENDED_TTL_MS: ENDED_TTL_MS, HARD_TTL_MS: HARD_TTL_MS,
    COLOURS: COLOURS, STATES: STATES, TIMER_ACTIONS: TIMER_ACTIONS, WISHES: WISHES, MSG: MSG, ERRORS: ERRORS,
    EVENT_TYPES: Object.keys(TYPES), cleanEvent: cleanEvent, scrubText: scrubText,
    randomString: randomString, isClassCode: isClassCode, newClassCode: newClassCode, newTeamId: newTeamId, newKey: newKey,
    normCode: normCode, teamLabel: teamLabel, teamColour: teamColour, parseFrame: parseFrame, encodeFrame: encodeFrame, timerLeft: timerLeft
  };
});
