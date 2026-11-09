/** @OnlyCurrentDoc */
/* Escape 18 results endpoint, v2.3 (9 Nov 2026: own test events left out of tabs and digest). Google Apps Script bound to the results Sheet, deployed as a web app
   (Execute as: Me, Who has access: Anyone). Follows /home/claude/e18_dev/LOGGING_SPEC.md plus backend-v2/CLIENT_SPEC.md.

   What it does, all without the owner:
   - doPost: stores anonymous lesson events in the tab "events" (same 7 columns as v1). Every event is checked against a
     whitelist per type; unknown types and unknown fields are dropped; teacher free text loses anything that looks like an
     e-mail address or phone number before it is stored.
   - doGet?action=class&code=XXXXX[&product=escape18-...]: a JSON summary of one class for the teacher screen, only when at
     least MIN_PAIRS pupil sessions (pairs) took part; never session ids or raw rows. Cached CACHE_SEC seconds, rate limited.
   - dailyJob (time trigger, every night): rewrites the tabs Klassen, Vragen, Lessen and Feedback, so the Sheet reads without formulas.
   - weeklyDigest (time trigger, Monday 08:00-09:00 Europe/Amsterdam): one plain e-mail to the owner.
   - installTriggers: run once by the owner from the editor (asks for the new permissions). removeTriggers undoes it.
   Functions ending in _ are private (Apps Script hides them from the Run menu). */

// ---------- settings ----------
const SHEET = 'events';
const HEAD = ['received', 'type', 'product', 'version', 'class', 'session', 'data'];
const TZ = 'Europe/Amsterdam';
const MIN_PAIRS = 3;              // fewer pairs in a class: no summary; any number over fewer than this is left out of the summary
const CACHE_SEC = 60;             // class summaries are cached this long
const MAX_BODY = 200000, MAX_EVENTS = 200, MAX_DATA = 5000, MAX_TEXT = 500;
const POST_ROWS_PER_MIN = 6000;   // all classes together; a normal class sends about 30 events per pair per lesson
const GET_PER_MIN = 600, GET_COMPUTES_PER_MIN = 60;
const LOW_PCT = 40, LOW_MIN_N = 5, ROOM_LOW_PCT = 30;
const DELETE_BY = '2027-01-31', DELETE_BY_IF_CONTINUED = '2027-08-31'; // as promised on privacy.html
const SHEET_CELL_LIMIT = 10000000;
// Our own tests: events before DATA_FROM, class codes starting with TST, and codes listed in the script property TEST_CODES
// (comma separated) are left out of the tabs and the weekly digest. Nothing is deleted. Script property DATA_FROM overrides the date.
const DATA_FROM = '2026-11-09T12:00:00Z';
const LEVELS = ['pro', 'vmbo', 'havo', 'vwo', 'mbo', 'anders'];
const WHEN = ['deze week', 'deze maand', 'later'];
const SINCE = ['week', 'maand', 'langer'];
const WISHES = ['zorgverzekering', 'abonnementen', 'verzekeringen', 'belasting', 'budget', 'studiekeuze', 'studiefinanciering', 'wonen', 'werk', 'anders']; // pupil_feedback.wish: a fixed topic id, never text
const MONTHS_NL = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

const CODE_RE = /^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{5}$/;
const SLUG_RE = /^escape18-[a-z0-9-]{1,40}$/;
const SESSION_RE = /^[A-Za-z0-9]{10}$/;
const ID_RE = /^[A-Za-z0-9][A-Za-z0-9_-]{0,39}$/;
const VERSION_RE = /^[A-Za-z0-9._-]{1,60}$/;
const PUPIL_TYPES = ['start', 'check', 'answer', 'room', 'lock', 'pupil_feedback', 'end'];

// ---------- what may be stored: per type the allowed fields (value or undefined) and the fields an event cannot do without ----------
const SEC = vInt_(0, 86400);
const TYPES = {
  teacher_start: { f: { variant: vId_, rooms: vRooms_, lang: vLang_ }, need: [] },
  start: { f: { variant: vId_, lang: vLang_ }, need: [] },
  check: { f: { phase: vOneOf_(['start', 'end']), form: vOneOf_(['A', 'B']), score: vInt_(0, 100), max: vInt_(1, 100), items: vItems_, ceil: vBool_ }, need: ['phase', 'score', 'max'] },
  answer: { f: { room: vId_, q: vId_, choice: vChoice_, first: vBool_, tries: vInt_(1, 20), hint: vBool_, sec: SEC }, need: ['room', 'q', 'first'] },
  room: { f: { room: vId_, sec: SEC }, need: ['room'] },
  lock: { f: { opened: vBool_, sec: SEC }, need: ['opened'] },
  pupil_feedback: { f: { fun: vInt_(1, 5), learned: vInt_(1, 5), wish: vOneOf_(WISHES) }, need: ['fun', 'learned'] },
  end: { f: { sec: SEC }, need: [] },
  feedback: { f: { again: vOrNull_(vOneOf_(['ja', 'twijfel', 'nee'])), used: vOneOf_(['heel', 'kort', 'deels']), pupils: vOrNull_(vInt_(0, 500)), minutes: vOrNull_(vInt_(0, 600)), worked: vText_, notworked: vText_ }, need: [] },
  plan: { f: { product: vSlug_, when: vOneOf_(WHEN), level: vOneOf_(LEVELS) }, need: ['product', 'when'] },
  reuse: { f: { product: vSlug_, times: vInt_(2, 5), since: vOneOf_(SINCE) }, need: ['product'] }
};

function vInt_(lo, hi) { return function (v) { return (typeof v === 'number' && Math.floor(v) === v && v >= lo && v <= hi) ? v : undefined; }; }
function vOneOf_(list) { return function (v) { return list.indexOf(v) >= 0 ? v : undefined; }; }
function vOrNull_(f) { return function (v) { return v === null ? null : f(v); }; }
function vBool_(v) { return typeof v === 'boolean' ? v : undefined; }
function vId_(v) { return (typeof v === 'string' && ID_RE.test(v)) ? v : undefined; }
function vLang_(v) { return (typeof v === 'string' && /^[a-z]{2}$/.test(v)) ? v : undefined; }
function vSlug_(v) { return (typeof v === 'string' && SLUG_RE.test(v)) ? v : undefined; }
function vText_(v) { return typeof v === 'string' ? scrubText_(v) : undefined; }
// An option id, ids (multi), or a number entered as an amount. Never free text.
function vChoice_(v) {
  if (typeof v === 'number') return (isFinite(v) && Math.abs(v) <= 1e7) ? v : undefined;
  if (typeof v === 'string') return vId_(v);
  if (Array.isArray(v) && v.length >= 1 && v.length <= 20 && v.every(function (x) { return vId_(x) !== undefined; })) return v.slice();
  return undefined;
}
// Engine: number of rooms. Lesson 1 (d34): list of room ids.
function vRooms_(v) {
  if (typeof v === 'number') return vInt_(1, 50)(v);
  if (Array.isArray(v) && v.length >= 1 && v.length <= 12 && v.every(function (x) { return vId_(x) !== undefined; })) return v.slice();
  return undefined;
}
function vItems_(v) {
  if (!Array.isArray(v) || v.length < 1 || v.length > 50) return undefined;
  const out = [];
  for (let i = 0; i < v.length; i++) {
    const x = v[i];
    if (!x || typeof x !== 'object' || vId_(x.q) === undefined || typeof x.right !== 'boolean') return undefined;
    out.push(x.conf === 1 || x.conf === 2 || x.conf === 3 ? { q: x.q, right: x.right, conf: x.conf } : { q: x.q, right: x.right }); // conf: 1 gok, 2 een beetje, 3 heel zeker; anything else is dropped, the item stays
  }
  return out;
}
// Teacher free text: no control characters, no e-mail addresses, no phone numbers (9 to 15 digits with spaces, dots, dashes,
// slashes or brackets between them). Amounts like 1.410,00, dates like 06-11-2026 and times like 10.30-11.20 stay.
function scrubText_(s) {
  let t = String(s).slice(0, 2000).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
  t = t.replace(/[^\s@]+@[^\s@]+/g, '[e-mailadres weggehaald]');
  t = t.replace(/[A-Za-z0-9._%+-]+ ?[(\[]at[)\]] ?[A-Za-z0-9.-]+/gi, '[e-mailadres weggehaald]');
  t = t.replace(/(?:\+|00)?\d(?:[ ().\/-]{0,3}\d){8,16}/g, function (m) { const n = m.replace(/\D/g, '').length; return n >= 9 && n <= 15 ? '[telefoonnummer weggehaald]' : m; });
  return t.trim().slice(0, MAX_TEXT);
}

// One raw event (from a client, or a row read back) to a clean one, or null. why (optional) gets the reason.
function cleanEvent_(x, why) {
  const no = function (r) { if (why) why.r = r; return null; };
  if (!x || typeof x !== 'object' || Array.isArray(x)) return no('geen object');
  const type = typeof x.type === 'string' ? x.type : '';
  if (!Object.prototype.hasOwnProperty.call(TYPES, type)) return no('onbekend type');
  const T = TYPES[type];
  if (typeof x.product !== 'string' || !SLUG_RE.test(x.product)) return no(type + ': product');
  const session = x.session == null ? '' : String(x.session);
  if (!SESSION_RE.test(session)) return no(type + ': session');
  const c = x['class'] == null ? '' : String(x['class']).trim().toUpperCase();
  const cls = type === 'plan' ? 'GEEN' : CODE_RE.test(c) ? c : 'GEEN';
  const version = (typeof x.version === 'string' && VERSION_RE.test(x.version)) ? x.version : 'onbekend';
  const d = (x.data && typeof x.data === 'object' && !Array.isArray(x.data)) ? x.data : {};
  const data = {};
  Object.keys(T.f).forEach(function (k) {
    if (!Object.prototype.hasOwnProperty.call(d, k)) return;
    const v = T.f[k](d[k]);
    if (v !== undefined) data[k] = v;
  });
  for (let i = 0; i < T.need.length; i++) if (!Object.prototype.hasOwnProperty.call(data, T.need[i])) return no(type + ': ' + T.need[i]);
  if (type === 'check' && data.score > data.max) return no('check: score > max');
  return { type: type, product: x.product, version: version, cls: cls, session: session, data: data };
}

// ---------- web app ----------
function doPost(e) {
  const raw = (e && e.postData && typeof e.postData.contents === 'string') ? e.postData.contents : '';
  if (!raw) return json_({ ok: false, error: 'empty' });
  if (raw.length > MAX_BODY) return json_({ ok: false, error: 'too large' });
  let body;
  try { body = JSON.parse(raw); } catch (err) { return json_({ ok: false, error: 'bad json' }); }
  const list = (Array.isArray(body) ? body : [body]).slice(0, MAX_EVENTS);
  const t = now_(), rows = [], ignored = {};
  let nIgnored = 0;
  list.forEach(function (x) {
    const why = {}, ev = cleanEvent_(x, why);
    let d = ev ? JSON.stringify(ev.data) : '';
    if (ev && d.length > MAX_DATA) { why.r = ev.type + ': te groot'; d = ''; }
    if (!ev || !d) { nIgnored++; ignored[why.r] = (ignored[why.r] || 0) + 1; return; }
    rows.push([t, ev.type, ev.product, ev.version, ev.cls, ev.session, d]);
  });
  const lock = LockService.getScriptLock();
  const got = lock.tryLock(20000);
  try {
    if (nIgnored) noteIgnored_(ignored);
    if (!rows.length) return json_({ ok: true, stored: 0, ignored: nIgnored });
    if (!allowRows_(rows.length)) { noteIgnored_({ 'te veel per minuut': rows.length }); return json_({ ok: false, error: 'busy', ignored: nIgnored + rows.length }); }
    const sh = eventsSheet_();
    if (got) {
      const at = sh.getLastRow() + 1;
      sh.getRange(at, 2, rows.length, 5).setNumberFormat('@'); // class codes like 23456 and session ids stay text
      sh.getRange(at, 1, rows.length, HEAD.length).setValues(rows);
    } else {
      rows.forEach(function (r) { sh.appendRow(r); }); // no lock after 20 s: appendRow is atomic per row, so nothing is overwritten
    }
  } finally {
    if (got) lock.releaseLock();
  }
  return json_({ ok: true, stored: rows.length, ignored: nIgnored });
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action !== 'class') return ContentService.createTextOutput('Escape 18 results endpoint');
  return json_(classResult_(p.code, p.product));
}

function classResult_(codeIn, productIn) {
  const code = String(codeIn == null ? '' : codeIn).toUpperCase().replace(/[\s.-]/g, '');
  if (!CODE_RE.test(code)) return { error: 'code' };
  const product = productIn == null ? '' : String(productIn);
  if (product && !SLUG_RE.test(product)) return { error: 'product' };
  const cache = CacheService.getScriptCache(), m = minute_();
  if (!bump_(cache, 'gq:' + m, GET_PER_MIN)) return { error: 'busy', retry: 30 };
  const key = 'cls:' + code + ':' + (product || '*');
  const hit = cache.get(key);
  if (hit) return JSON.parse(hit);
  if (!bump_(cache, 'gc:' + m, GET_COMPUTES_PER_MIN)) return { error: 'busy', retry: 30 };
  const res = computeClass_(code, product);
  cache.put(key, JSON.stringify(res), CACHE_SEC);
  return res;
}

// Reads only the class column, then the band of rows between the first and the last row of this class (a class runs within days).
function computeClass_(code, product) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET);
  const last = sh ? sh.getLastRow() : 0;
  if (last < 2) return { enough: false };
  const col = sh.getRange(2, 5, last - 1, 1).getValues();
  let lo = -1, hi = -1;
  for (let i = 0; i < col.length; i++) if (String(col[i][0]).trim().toUpperCase() === code) { if (lo < 0) lo = i; hi = i; }
  if (lo < 0) return { enough: false };
  const A = newAcc_(null);
  rowsToEvents_(sh.getRange(2 + lo, 1, hi - lo + 1, HEAD.length).getValues(), function (ev, t) { if (ev.cls === code) addEvent_(A, ev, t); });
  return classSummary_(A, code, product);
}

function classSummary_(A, code, product) {
  let C = null;
  A.classes.forEach(function (x) {
    if (x.cls !== code || (product && x.product !== product)) return;
    if (!C || x.sessions.size > C.sessions.size) C = x;
  });
  if (!C || C.sessions.size < MIN_PAIRS) return { enough: false };
  const s = classStats_(C), ok = function (n) { return n >= MIN_PAIRS; };
  const rooms = roomsOf_(A, C.product).map(function (R) {
    let started = 0, finished = 0;
    const secs = [];
    C.sessions.forEach(function (S) {
      if (S.touched.has(R.room)) started++;
      if (S.roomSec.has(R.room)) { finished++; const v = S.roomSec.get(R.room); if (v != null) secs.push(v); }
    });
    const qs = questionsOf_(A, C.product, R.room).map(function (Q) {
      const w = topWrong_(Q), k = ok(Q.n);
      return { q: Q.q, n: Q.n, firstRight: k ? pct_(Q.fr, Q.n) : null, wrong: k && w ? { choice: w.v, n: w.n } : null, hints: k ? Q.hints : null, medianSec: k ? median_(Q.secs) : null };
    });
    let hardest = null;
    qs.forEach(function (q) { if (q.firstRight != null && (hardest === null || q.firstRight < hardest.firstRight)) hardest = q; });
    const known = qs.filter(function (q) { return q.firstRight != null; });
    return { room: R.room, started: started, finished: finished, medianSec: ok(secs.length) ? median_(secs) : null, hardest: hardest ? hardest.q : null,
      firstRight: known.length ? Math.round(known.reduce(function (a, q) { return a + q.firstRight; }, 0) / known.length) : null, questions: qs };
  });
  let startWith = null;
  rooms.forEach(function (R) { if (R.firstRight != null && (startWith === null || R.firstRight < startWith.firstRight)) startWith = R; });
  return {
    enough: true, code: code, product: C.product, updated: now_().toISOString(), minPairs: MIN_PAIRS,
    pairs: s.pairs, ended: s.ended, lock: { reached: s.lockReached, opened: s.lockOpened },
    check: {
      start: ok(s.nStart) ? { n: s.nStart, mean: s.startMean, max: s.max } : null,
      end: ok(s.nEnd) ? { n: s.nEnd, mean: s.endMean, max: s.max } : null,
      gain: ok(s.nGain) ? { n: s.nGain, mean: s.gain } : null
    },
    startWith: startWith ? startWith.room : null,
    rooms: rooms
  };
}

// ---------- aggregation (shared by doGet, dailyJob and weeklyDigest) ----------
function newAcc_(since) {
  return { since: since, classes: new Map(), questions: new Map(), checks: new Map(), rooms: new Map(), feedback: [], plans: [], reuse: [],
    events: 0, recent: 0, recentSessions: new Set(), seq: 0, firstAt: null, lastAt: null };
}
function classOf_(A, product, cls, t) {
  const k = product + '|' + cls;
  let C = A.classes.get(k);
  if (!C) { C = { product: product, cls: cls, first: t, last: t, versions: new Set(), sessions: new Map(), teacherStarts: 0, feedback: 0, again: [], reuse: 0 }; A.classes.set(k, C); }
  if (t < C.first) C.first = t;
  if (t > C.last) C.last = t;
  return C;
}
function sessOf_(C, s) {
  let S = C.sessions.get(s);
  if (!S) { S = { start: false, chk: {}, lockReached: false, lockOpened: false, ended: false, endSec: null, roomSec: new Map(), touched: new Set(), fb: null }; C.sessions.set(s, S); }
  return S;
}
function roomOf_(A, product, room) {
  const k = product + '|' + room;
  if (!A.rooms.has(k)) A.rooms.set(k, { product: product, room: room, order: A.seq++ });
}
function addEvent_(A, ev, t) {
  A.events++;
  if (!A.firstAt || t < A.firstAt) A.firstAt = t;
  if (!A.lastAt || t > A.lastAt) A.lastAt = t;
  if (A.since && t >= A.since) { A.recent++; if (PUPIL_TYPES.indexOf(ev.type) >= 0) A.recentSessions.add(ev.session); }
  const d = ev.data;
  if (ev.type === 'plan') { A.plans.push({ t: t, product: d.product, when: d.when, level: d.level || '' }); return; }
  const C = classOf_(A, ev.product, ev.cls, t);
  C.versions.add(ev.version);
  if (ev.type === 'teacher_start') { C.teacherStarts++; return; }
  if (ev.type === 'reuse') { C.reuse++; A.reuse.push({ t: t, product: d.product, times: d.times || '', since: d.since || '', cls: ev.cls }); return; }
  if (ev.type === 'feedback') {
    C.feedback++;
    if (d.again) C.again.push(d.again);
    A.feedback.push({ t: t, product: ev.product, cls: ev.cls, again: d.again == null ? '' : d.again, used: d.used || '', pupils: d.pupils == null ? '' : d.pupils,
      minutes: d.minutes == null ? '' : d.minutes, worked: d.worked || '', notworked: d.notworked || '' });
    return;
  }
  const S = sessOf_(C, ev.session);
  if (ev.type === 'start') S.start = true;
  else if (ev.type === 'check') {
    if (S.chk[d.phase]) return; // a repeated event of the same check counts once
    S.chk[d.phase] = { score: d.score, max: d.max };
    (d.items || []).forEach(function (it) {
      const k = ev.product + '|' + d.phase + '|' + it.q;
      let Q = A.checks.get(k);
      if (!Q) { Q = { product: ev.product, phase: d.phase, q: it.q, n: 0, right: 0, confN: 0, confSum: 0, order: A.seq++, classes: new Set() }; A.checks.set(k, Q); }
      Q.n++; if (it.right) Q.right++;
      if (it.conf) { Q.confN++; Q.confSum += it.conf; } if (ev.cls !== 'GEEN') Q.classes.add(ev.cls);
    });
  } else if (ev.type === 'answer') {
    roomOf_(A, ev.product, d.room);
    S.touched.add(d.room);
    const k = ev.product + '|' + d.room + '|' + d.q;
    let Q = A.questions.get(k);
    if (!Q) { Q = { product: ev.product, room: d.room, q: d.q, order: A.seq++, seen: new Set(), n: 0, fr: 0, hints: 0, secs: [], wrong: new Map(), classes: new Set() }; A.questions.set(k, Q); }
    if (Q.seen.has(ev.session)) return;
    Q.seen.add(ev.session);
    Q.n++;
    if (d.first && !d.hint) Q.fr++; // first-try right without a hint (engine round 3)
    if (d.hint) Q.hints++;
    if (typeof d.sec === 'number') Q.secs.push(d.sec);
    if (ev.cls !== 'GEEN') Q.classes.add(ev.cls);
    if (!d.first && d.choice !== undefined) {
      const ck = choiceKey_(d.choice);
      const w = Q.wrong.get(ck) || { v: Array.isArray(d.choice) ? d.choice.slice().sort() : d.choice, n: 0, order: Q.wrong.size };
      w.n++; Q.wrong.set(ck, w);
    }
  } else if (ev.type === 'room') {
    roomOf_(A, ev.product, d.room);
    S.touched.add(d.room);
    if (!S.roomSec.has(d.room)) S.roomSec.set(d.room, typeof d.sec === 'number' ? d.sec : null);
  } else if (ev.type === 'lock') { S.lockReached = true; if (d.opened) S.lockOpened = true; }
  else if (ev.type === 'end') { if (!S.ended) { S.ended = true; S.endSec = typeof d.sec === 'number' ? d.sec : null; } }
  else if (ev.type === 'pupil_feedback') { if (!S.fb) S.fb = { fun: d.fun, learned: d.learned, wish: d.wish || '' }; }
}
function choiceKey_(c) { return Array.isArray(c) ? 'm:' + c.slice().sort().join(',') : (typeof c) + ':' + String(c); }
function topWrong_(Q) {
  let best = null;
  Q.wrong.forEach(function (w) { if (!best || w.n > best.n || (w.n === best.n && w.order < best.order)) best = w; });
  return best;
}
function roomsOf_(A, product) {
  const out = [];
  A.rooms.forEach(function (R) { if (R.product === product) out.push(R); });
  return out.sort(function (a, b) { return a.order - b.order; });
}
function questionsOf_(A, product, room) {
  const out = [];
  A.questions.forEach(function (Q) { if (Q.product === product && Q.room === room) out.push(Q); });
  return out.sort(function (a, b) { return a.order - b.order; });
}
function classStats_(C) {
  const st = [], en = [], maxes = [], gains = [], fun = [], learned = [], endSecs = [];
  let started = 0, lockReached = 0, lockOpened = 0, ended = 0;
  C.sessions.forEach(function (S) {
    if (S.start) started++;
    if (S.lockReached) lockReached++;
    if (S.lockOpened) lockOpened++;
    if (S.ended) { ended++; if (S.endSec != null) endSecs.push(S.endSec); }
    if (S.chk.start) { st.push(S.chk.start.score); maxes.push(S.chk.start.max); }
    if (S.chk.end) { en.push(S.chk.end.score); maxes.push(S.chk.end.max); }
    if (S.chk.start && S.chk.end) gains.push(S.chk.end.score - S.chk.start.score);
    if (S.fb) { fun.push(S.fb.fun); learned.push(S.fb.learned); }
  });
  return { pairs: C.sessions.size, started: started, lockReached: lockReached, lockOpened: lockOpened, ended: ended,
    nStart: st.length, startMean: mean_(st), nEnd: en.length, endMean: mean_(en), max: mode_(maxes), nGain: gains.length, gain: mean_(gains),
    nFb: fun.length, fun: mean_(fun), learned: mean_(learned), endSecs: endSecs };
}

// ---------- reading the events tab ----------
function rowsToEvents_(values, fn) {
  values.forEach(function (r) {
    const t = toDate_(r[0]);
    if (!t) return;
    let data = {};
    if (typeof r[6] === 'string' && r[6]) { try { data = JSON.parse(r[6]); } catch (e) { return; } }
    const ev = cleanEvent_({ type: r[1], product: r[2], version: r[3], 'class': r[4], session: r[5], data: data });
    if (ev) fn(ev, t);
  });
}
function testFilter_() {
  const props = PropertiesService.getScriptProperties();
  const from = new Date(props.getProperty('DATA_FROM') || DATA_FROM);
  const codes = {};
  String(props.getProperty('TEST_CODES') || '').toUpperCase().split(/[\s,;]+/).forEach(function (c) { if (c) codes[c] = true; });
  return function (ev, t) { const c = String(ev.cls || '').toUpperCase(); return t < from || c.indexOf('TST') === 0 || codes[c] === true; };
}
function readAll_(since) {
  const A = newAcc_(since || null), isTest = testFilter_();
  A.skipped = 0;
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET);
  const last = sh ? sh.getLastRow() : 0;
  for (let r = 2; r <= last; r += 5000) {
    const n = Math.min(5000, last - r + 1);
    rowsToEvents_(sh.getRange(r, 1, n, HEAD.length).getValues(), function (ev, t) { if (isTest(ev, t)) { A.skipped++; return; } addEvent_(A, ev, t); });
  }
  A.rows = Math.max(0, last - 1);
  return A;
}

// ---------- daily job: readable tabs ----------
function dailyJob() {
  const A = readAll_(null);
  writeTabs_(A);
  PropertiesService.getScriptProperties().setProperty('lastDaily', now_().toISOString());
  return A;
}

function writeTabs_(A) {
  const ss = SpreadsheetApp.getActiveSpreadsheet(), stamp = 'Bijgewerkt ' + fmtTime_(now_()) + ' door dailyJob (Code.gs). Niet zelf bewerken: elke nacht opnieuw geschreven.';
  const short = function (p) { return String(p).replace(/^escape18-/, ''); };
  const yn = function (b) { return b ? 'ja' : 'nee'; };
  const blank = function (v) { return v == null ? '' : v; };

  // Klassen: one row per class code and lesson; pupils without a code together as GEEN.
  const classes = [];
  A.classes.forEach(function (C) { classes.push(C); });
  classes.sort(function (a, b) { return b.last - a.last; });
  const kl = classes.map(function (C) {
    const s = classStats_(C);
    return [C.cls, short(C.product), C.first, C.last, s.pairs, s.started, s.lockReached, s.lockOpened, s.ended, blank(s.startMean), blank(s.endMean), blank(s.max),
      blank(s.gain), s.nGain, yn(C.teacherStarts > 0), yn(C.feedback > 0), C.again.join(', '), yn(C.reuse > 0), blank(s.fun), blank(s.learned), Array.from(C.versions).join(', ')];
  });
  writeTab_(ss, 'Klassen', ['klas', 'les', 'eerste event', 'laatste event', 'paren', 'gestart', 'slot bereikt', 'slot open', 'klaar', 'startcheck gem', 'eindcheck gem',
    'check max', 'winst gem (gepaard)', 'n gepaard', 'docent gestart', 'docent feedback', 'nog eens?', 'docent eerder gebruikt', 'plezier gem (1-5)', 'geleerd gem (1-5)', 'versie'], kl, [1, 2], stamp);

  // Vragen: item analysis per lesson, room and question; then the check items.
  const vr = [];
  productsOf_(A).forEach(function (p) {
    roomsOf_(A, p).forEach(function (R) {
      questionsOf_(A, p, R.room).forEach(function (Q) {
        const w = topWrong_(Q), pc = pct_(Q.fr, Q.n), all = [];
        Q.wrong.forEach(function (x) { all.push(x); });
        all.sort(function (a, b) { return b.n - a.n || a.order - b.order; });
        vr.push([short(p), R.room, Q.q, Q.n, pc, pct_(Q.hints, Q.n), blank(median_(Q.secs)), w ? choiceText_(w.v) : '', all.map(function (x) { return choiceText_(x.v) + ': ' + x.n; }).join('; '),
          Q.classes.size, Q.n >= LOW_MIN_N && pc < LOW_PCT ? 'onder ' + LOW_PCT + '%' : '', '']);
      });
    });
    const ch = [];
    A.checks.forEach(function (Q) { if (Q.product === p) ch.push(Q); });
    ch.sort(function (a, b) { return (a.phase === b.phase ? 0 : a.phase === 'start' ? -1 : 1) || a.order - b.order; });
    ch.forEach(function (Q) { vr.push([short(p), Q.phase === 'start' ? 'startcheck' : 'eindcheck', Q.q, Q.n, pct_(Q.right, Q.n), '', '', '', '', Q.classes.size, '', Q.confN >= MIN_PAIRS ? mean_([Q.confSum / Q.confN]) : '']); });
  });
  writeTab_(ss, 'Vragen', ['les', 'kamer', 'vraag', 'n', '% eerste keer goed', '% hint', 'mediaan sec', 'meest gekozen fout', 'foute keuzes (aantal)', 'klassen', 'let op', 'gem. zekerheid (1-3, eindcheck, vanaf 3)'], vr, [2, 3, 8, 9], stamp);

  // Lessen: per lesson.
  const ls = lessonRows_(A).map(function (L) {
    return [short(L.product), L.classes, L.classes3, L.pairs, L.pairsNoCode, blank(L.lockPct), blank(L.endPct), blank(L.startMean), blank(L.endMean), blank(L.max), blank(L.gain), L.nGain,
      blank(L.classGain), L.classGainN, L.lowRoom, L.feedback, L.again, L.plans, L.planWhen, L.reuse, blank(L.fun), blank(L.learned), blank(L.medianMin), L.wishN, L.wishTop, L.last || ''];
  });
  writeTab_(ss, 'Lessen', ['les', 'klassen (met code)', 'klassen met 3+ paren', 'paren', 'paren zonder code', 'slot open %', 'klaar %', 'startcheck gem', 'eindcheck gem', 'check max',
    'winst gem (alle gepaarde paren)', 'n gepaard', 'winst gem per klas (3+ gepaard)', 'klassen in die winst', 'laagste kamer (% eerste keer goed)', 'docentfeedback', 'nog eens ja/twijfel/nee',
    'Ik ga dit geven', 'wanneer (week/maand/later)', 'opnieuw gebruikt', 'plezier gem', 'geleerd gem', 'mediaan minuten tot einde', 'Wensen (aantal)', 'meest gewenst', 'laatste event'], ls, [1], stamp);

  // Feedback: the teacher forms, newest first (texts were already cleaned of e-mail addresses and phone numbers).
  const fb = A.feedback.slice().sort(function (a, b) { return b.t - a.t; }).map(function (f) {
    return [f.t, short(f.product), f.cls, f.again, f.used, f.pupils, f.minutes, safeCell_(f.worked), safeCell_(f.notworked)];
  });
  writeTab_(ss, 'Feedback', ['ontvangen', 'les', 'klas', 'nog eens?', 'gebruikt', 'leerlingen', 'minuten', 'wat werkte', 'wat werkte niet'], fb, [3], stamp);
}

function lessonRows_(A) {
  return productsOf_(A).map(function (p) {
    const L = { product: p, classes: 0, classes3: 0, pairs: 0, pairsNoCode: 0, lockO: 0, ended: 0, st: [], en: [], maxes: [], gains: [], classGains: [], fun: [], learned: [], endSecs: [], wish: {},
      feedback: 0, againN: { ja: 0, twijfel: 0, nee: 0 }, reuse: 0, last: null };
    A.classes.forEach(function (C) {
      if (C.product !== p) return;
      if (!L.last || C.last > L.last) L.last = C.last;
      L.feedback += C.feedback; L.reuse += C.reuse;
      C.again.forEach(function (a) { L.againN[a]++; });
      const s = classStats_(C);
      if (C.cls === 'GEEN') L.pairsNoCode += s.pairs;
      else if (s.pairs > 0) { L.classes++; if (s.pairs >= MIN_PAIRS) L.classes3++; }
      if (C.cls !== 'GEEN' && s.nGain >= MIN_PAIRS) L.classGains.push(s.gain);
      L.pairs += s.pairs; L.lockO += s.lockOpened; L.ended += s.ended;
      C.sessions.forEach(function (S) {
        if (S.chk.start) { L.st.push(S.chk.start.score); L.maxes.push(S.chk.start.max); }
        if (S.chk.end) { L.en.push(S.chk.end.score); L.maxes.push(S.chk.end.max); }
        if (S.chk.start && S.chk.end) L.gains.push(S.chk.end.score - S.chk.start.score);
        if (S.fb) { L.fun.push(S.fb.fun); L.learned.push(S.fb.learned); if (S.fb.wish) L.wish[S.fb.wish] = (L.wish[S.fb.wish] || 0) + 1; }
      });
      L.endSecs = L.endSecs.concat(s.endSecs);
    });
    const plans = A.plans.filter(function (x) { return x.product === p; });
    const ms = median_(L.endSecs);
    const wishes = Object.keys(L.wish).sort(function (a, b) { return L.wish[b] - L.wish[a] || WISHES.indexOf(a) - WISHES.indexOf(b); });
    const rooms = roomPcts_(A, p);
    const enough = rooms.filter(function (r) { return r.n >= LOW_MIN_N; });
    const low = enough.length ? enough.sort(function (a, b) { return a.pct - b.pct; })[0] : null;
    return { product: p, classes: L.classes, classes3: L.classes3, pairs: L.pairs, pairsNoCode: L.pairsNoCode,
      lockPct: L.pairs ? pct_(L.lockO, L.pairs) : null, endPct: L.pairs ? pct_(L.ended, L.pairs) : null,
      startMean: mean_(L.st), endMean: mean_(L.en), max: mode_(L.maxes), gain: mean_(L.gains), nGain: L.gains.length, classGain: mean_(L.classGains), classGainN: L.classGains.length,
      lowRoom: low ? low.room + ' (' + low.pct + '%)' : '', rooms: rooms, feedback: L.feedback, again: L.againN.ja + '/' + L.againN.twijfel + '/' + L.againN.nee,
      plans: plans.length, planWhen: WHEN.map(function (w) { return plans.filter(function (x) { return x.when === w; }).length; }).join('/'),
      reuse: L.reuse, fun: mean_(L.fun), learned: mean_(L.learned), medianMin: ms == null ? null : Math.round(ms / 6) / 10, last: L.last,
      wishN: wishes.reduce(function (a, w) { return a + L.wish[w]; }, 0), wishTop: wishes.slice(0, 3).map(function (w) { return w + ' ' + L.wish[w]; }).join(', ') };
  });
}
// % right at first try per room, over all answers of all classes.
function roomPcts_(A, p) {
  return roomsOf_(A, p).map(function (R) {
    let n = 0, fr = 0;
    questionsOf_(A, p, R.room).forEach(function (Q) { n += Q.n; fr += Q.fr; });
    return { room: R.room, n: n, pct: pct_(fr, n) };
  }).filter(function (r) { return r.n > 0; });
}
function productsOf_(A) {
  const s = new Set();
  A.classes.forEach(function (C) { s.add(C.product); });
  A.plans.forEach(function (x) { s.add(x.product); });
  return Array.from(s).sort();
}

function writeTab_(ss, name, head, rows, textCols, note) {
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  sh.clearContents();
  const all = [head].concat(rows);
  const cols = head.length;
  (textCols || []).forEach(function (c) { sh.getRange(1, c, all.length, 1).setNumberFormat('@'); });
  sh.getRange(1, 1, all.length, cols).setValues(all);
  sh.setFrozenRows(1);
  if (note) sh.getRange(1, 1).setNote(note);
}
// Text that starts like a formula is shown as text.
function safeCell_(v) { const s = String(v == null ? '' : v); return /^[=+\-@]/.test(s) ? "'" + s : s; }

// ---------- weekly digest ----------
function weeklyDigest() { return sendDigest_(false); }
function sendTestDigest() { return sendDigest_(true); }

function sendDigest_(test) {
  const props = PropertiesService.getScriptProperties();
  const nowD = now_();
  const lastIso = props.getProperty('lastDigest');
  const since = lastIso ? new Date(lastIso) : new Date(nowD.getTime() - 7 * 864e5);
  const A = readAll_(since);
  writeTabs_(A);
  props.setProperty('lastDaily', nowD.toISOString());
  let to = props.getProperty('DIGEST_TO');
  if (!to) { to = Session.getEffectiveUser().getEmail(); if (to) props.setProperty('DIGEST_TO', to); }
  if (!to) throw new Error('Geen e-mailadres voor het weekoverzicht. Draai installTriggers opnieuw.');
  const D = digest_(A, since, nowD, test, readIgnored_(props, nowD));
  MailApp.sendEmail({ to: to, subject: D.subject, body: D.body, name: 'Escape 18' });
  if (!test) props.setProperty('lastDigest', nowD.toISOString());
  return D;
}

function digest_(A, since, nowD, test, ignored) {
  const short = function (p) { return String(p).replace(/^escape18-/, ''); };
  const L = [], newClasses = [], isNew = function (t) { return t >= since; };
  A.classes.forEach(function (C) { if (C.cls !== 'GEEN' && isNew(C.first)) newClasses.push(C); });
  newClasses.sort(function (a, b) { return a.first - b.first; });
  const fbNew = A.feedback.filter(function (f) { return isNew(f.t); }).sort(function (a, b) { return a.t - b.t; });
  const plansNew = A.plans.filter(function (x) { return isNew(x.t); });
  const reuseNew = A.reuse.filter(function (x) { return isNew(x.t); });
  const lessons = lessonRows_(A);
  const daysLeft = Math.ceil((new Date(DELETE_BY + 'T23:59:59Z').getTime() - nowD.getTime()) / 864e5);

  if (daysLeft <= 28) L.push('LET OP: volgens privacy.html verwijder je alle gegevens uiterlijk op ' + dateNl_(new Date(DELETE_BY + 'T12:00:00Z')) + ' (nog ' + Math.max(0, daysLeft) + ' dagen), of op 31 augustus 2027 als het project doorgaat. Pas dan ook privacy.html en DELETE_BY in Code.gs aan.', '');
  L.push('Escape 18 weekoverzicht, ' + dateNl_(since) + ' tot ' + dateNl_(nowD) + (test ? ' (test, verstuurd door installTriggers)' : ''), '');

  L.push('NIEUW SINDS HET VORIGE OVERZICHT');
  L.push('- ' + newClasses.length + ' nieuwe ' + (newClasses.length === 1 ? 'klas' : 'klassen') + ', ' + A.recentSessions.size + ' tweetallen actief, ' + A.recent + ' events.');
  L.push('- ' + fbNew.length + ' docentfeedback, ' + plansNew.length + ' keer "Ik ga dit geven", ' + reuseNew.length + ' keer een les opnieuw gestart.');
  L.push('');
  if (newClasses.length) {
    L.push('NIEUWE KLASSEN');
    newClasses.forEach(function (C) {
      const s = classStats_(C);
      L.push('- ' + C.cls + ', ' + short(C.product) + ', ' + dateNl_(C.first) + ': ' + s.pairs + ' tweetallen, slot open ' + s.lockOpened + ', klaar ' + s.ended +
        (s.nGain ? ', check ' + num_(s.startMean) + ' naar ' + num_(s.endMean) + ' van ' + s.max + ' (winst ' + signed_(s.gain) + ', n=' + s.nGain + ')' : '') +
        (C.feedback ? ', docentfeedback: ' + (C.again.join('/') || 'ja') : '') + (C.reuse ? ', docent gebruikte de les eerder' : '') + (s.pairs === 0 ? ' (docent koos Nee of niemand begon)' : ''));
    });
    L.push('');
  }

  L.push('TOTAAL TOT NU TOE');
  if (!lessons.length) L.push('- Nog geen gegevens.');
  lessons.forEach(function (x) {
    L.push('- ' + short(x.product) + ': ' + x.classes + ' klassen (' + x.classes3 + ' met 3+ tweetallen), ' + x.pairs + ' tweetallen' + (x.pairsNoCode ? ' (' + x.pairsNoCode + ' zonder klascode)' : '') +
      (x.pairs ? ', slot open ' + x.lockPct + '%' : '') + (x.nGain ? ', check ' + num_(x.startMean) + ' naar ' + num_(x.endMean) + ' van ' + x.max + ', winst ' + signed_(x.gain) + ' (n=' + x.nGain + ')' : '') +
      (x.plans ? ', Ik ga dit geven: ' + x.plans : '') + (x.wishN ? ', wensen: ' + x.wishTop : '') + (x.feedback ? ', feedback: ' + x.feedback : '') + '.');
  });
  L.push('');

  // Success criteria of PLAN_v1.md (fixed before data).
  let lockClasses = 0, fbAll = A.feedback.length;
  A.classes.forEach(function (C) { if (C.cls !== 'GEEN' && classStats_(C).lockReached > 0) lockClasses++; });
  L.push('SUCCESCRITERIA (PLAN v1)');
  L.push('- Klassen met een slot-event: ' + lockClasses + ' (doel 3 of meer op 4 december).');
  L.push('- Feedbackformulieren van docenten: ' + fbAll + ' (doel 2 of meer).');
  lessons.forEach(function (x) {
    if (x.classGainN >= 2) L.push('- Winst ' + short(x.product) + ': ' + signed_(x.classGain) + ' gemiddeld over ' + x.classGainN + ' klassen (doel 1,0 of meer van 4; stopsignaal 0,25 of minder).');
    else L.push('- Winst ' + short(x.product) + ': nog geen 2 klassen met 3+ gepaarde checks.');
  });
  const lowRooms = [];
  lessons.forEach(function (x) { x.rooms.forEach(function (r) { if (r.n >= LOW_MIN_N && r.pct < ROOM_LOW_PCT) lowRooms.push(short(x.product) + ' / ' + r.room + ' ' + r.pct + '%'); }); });
  L.push('- Kamers onder ' + ROOM_LOW_PCT + '% in een keer goed: ' + (lowRooms.length ? lowRooms.join(', ') : 'geen') + '.');
  L.push('');

  L.push('VRAGEN ONDER ' + LOW_PCT + '% IN EEN KEER GOED (minstens ' + LOW_MIN_N + ' antwoorden)');
  const low = [];
  A.questions.forEach(function (Q) { if (Q.n >= LOW_MIN_N && pct_(Q.fr, Q.n) < LOW_PCT) low.push(Q); });
  low.sort(function (a, b) { return pct_(a.fr, a.n) - pct_(b.fr, b.n); });
  if (!low.length) L.push('- Geen.');
  low.slice(0, 15).forEach(function (Q) {
    const w = topWrong_(Q);
    L.push('- ' + short(Q.product) + ' / ' + Q.room + ' / ' + Q.q + ': ' + pct_(Q.fr, Q.n) + '% (n=' + Q.n + ')' + (w ? ', meest gekozen fout: ' + choiceText_(w.v) + ' (' + w.n + 'x)' : ''));
  });
  if (low.length > 15) L.push('- en nog ' + (low.length - 15) + ', zie de tab Vragen.');
  L.push('');

  if (fbNew.length) {
    L.push('NIEUWE FEEDBACK VAN DOCENTEN');
    fbNew.forEach(function (f) {
      L.push('- ' + dateNl_(f.t) + ', ' + short(f.product) + (f.cls !== 'GEEN' ? ', klas ' + f.cls : '') + ': nog eens ' + (f.again || '?') + ', gebruikt ' + (f.used || '?') +
        (f.pupils !== '' ? ', ' + f.pupils + ' leerlingen' : '') + (f.minutes !== '' ? ', ' + f.minutes + ' minuten' : ''));
      if (f.worked) L.push('  Werkte: ' + f.worked);
      if (f.notworked) L.push('  Werkte niet: ' + f.notworked);
    });
    L.push('');
  }
  if (plansNew.length) {
    L.push('IK GA DIT GEVEN');
    plansNew.forEach(function (x) { L.push('- ' + short(x.product) + ': ' + x.when + (x.level ? ' (' + x.level + ')' : '')); });
    L.push('');
  }

  L.push('GEZONDHEID');
  L.push('- Tab events: ' + (A.rows || 0) + ' rijen (' + Math.round((A.rows || 0) * HEAD.length / SHEET_CELL_LIMIT * 1000) / 10 + '% van wat een Sheet aankan).');
  if (A.skipped) L.push('- Eigen testrijen niet meegeteld: ' + A.skipped + ' (van voor ' + dateNl_(new Date(PropertiesService.getScriptProperties().getProperty('DATA_FROM') || DATA_FROM)) + ', klascode TST... of in TEST_CODES).');
  const ign = Object.keys(ignored || {});
  L.push('- Geweigerde events, afgelopen 7 dagen: ' + (ign.length ? ign.map(function (k) { return k + ' ' + ignored[k]; }).join(', ') : 'geen') + '.');
  if (daysLeft > 28) L.push('- Bewaartermijn: alles verwijderen uiterlijk op ' + dateNl_(new Date(DELETE_BY + 'T12:00:00Z')) + ' (nog ' + daysLeft + ' dagen), of 31 augustus 2027 als het project doorgaat.');
  L.push('');
  L.push('Details: tabs Klassen, Vragen, Lessen en Feedback in ' + SpreadsheetApp.getActiveSpreadsheet().getUrl());
  L.push('Dit overzicht komt elke maandag tussen 08:00 en 09:00. Stoppen: draai removeTriggers in Apps Script.');

  const subject = (test ? '[test] ' : '') + 'Escape 18 weekoverzicht ' + dateNl_(nowD) + ': ' + newClasses.length + ' nieuwe ' + (newClasses.length === 1 ? 'klas' : 'klassen') +
    ', ' + fbNew.length + ' feedback';
  return { subject: subject, body: L.join('\n') };
}

// ---------- setup (the owner runs installTriggers once from the editor) ----------
function installTriggers() {
  const handlers = ['dailyJob', 'weeklyDigest'];
  ScriptApp.getProjectTriggers().forEach(function (t) { if (handlers.indexOf(t.getHandlerFunction()) >= 0) ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('dailyJob').timeBased().everyDays(1).atHour(3).inTimezone(TZ).create();
  ScriptApp.newTrigger('weeklyDigest').timeBased().onWeekDay(ScriptApp.WeekDay.MONDAY).atHour(8).inTimezone(TZ).create();
  const me = Session.getEffectiveUser().getEmail();
  if (me) PropertiesService.getScriptProperties().setProperty('DIGEST_TO', me);
  const sh = eventsSheet_();
  sh.getRange(1, 2, sh.getMaxRows(), 5).setNumberFormat('@');
  const fixed = scrubStoredText_();
  sendDigest_(true);
  const msg = 'Klaar: dailyJob elke nacht rond 03:00, weeklyDigest elke maandag 08:00-09:00 (' + TZ + ') naar ' + me + '. ' + fixed + ' oude feedbackregels opgeschoond. Een testmail is verstuurd.';
  Logger.log(msg);
  return msg;
}
function removeTriggers() {
  let n = 0;
  ScriptApp.getProjectTriggers().forEach(function (t) { if (['dailyJob', 'weeklyDigest'].indexOf(t.getHandlerFunction()) >= 0) { ScriptApp.deleteTrigger(t); n++; } });
  Logger.log(n + ' triggers verwijderd.');
  return n;
}
// v1 stored teacher text as it came in: clean e-mail addresses and phone numbers out of those rows once (safe to run again).
function scrubStoredText_() {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET);
  const last = sh ? sh.getLastRow() : 0;
  if (last < 2) return 0;
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  let fixed = 0;
  try {
    const types = sh.getRange(2, 2, last - 1, 1).getValues(), data = sh.getRange(2, 7, last - 1, 1).getValues();
    for (let i = 0; i < types.length; i++) {
      if (types[i][0] !== 'feedback' || typeof data[i][0] !== 'string') continue;
      let d;
      try { d = JSON.parse(data[i][0]); } catch (e) { continue; }
      if (!d || typeof d !== 'object') continue;
      let changed = false;
      ['worked', 'notworked'].forEach(function (k) { if (typeof d[k] === 'string') { const c = scrubText_(d[k]); if (c !== d[k]) { d[k] = c; changed = true; } } });
      if (changed) { sh.getRange(2 + i, 7).setValue(JSON.stringify(d)); fixed++; }
    }
  } finally { lock.releaseLock(); }
  return fixed;
}

// ---------- helpers ----------
function now_() { return new Date(); }
function minute_() { return Math.floor(now_().getTime() / 60000); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function eventsSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET);
  if (!sh) {
    sh = ss.insertSheet(SHEET);
    sh.getRange(1, 1, 1, HEAD.length).setValues([HEAD]);
    sh.setFrozenRows(1);
  }
  return sh;
}
function bump_(cache, key, limit, by) {
  const n = Number(cache.get(key) || 0) + (by || 1);
  if (n > limit) return false;
  cache.put(key, String(n), 120);
  return true;
}
function allowRows_(n) { return bump_(CacheService.getScriptCache(), 'pr:' + minute_(), POST_ROWS_PER_MIN, n); }
// Counts of refused events per day and reason, for the digest. At most 200 property writes a day, so junk cannot use up the quota.
function noteIgnored_(counts) {
  try {
    const day = Utilities.formatDate(now_(), TZ, 'yyyy-MM-dd');
    if (!bump_(CacheService.getScriptCache(), 'iw:' + day, 200)) return;
    const props = PropertiesService.getScriptProperties();
    let all = {};
    try { all = JSON.parse(props.getProperty('ignored') || '{}') || {}; } catch (e) { all = {}; }
    const today = all[day] || {};
    Object.keys(counts).forEach(function (k) { const key = String(k).slice(0, 40); today[key] = (today[key] || 0) + counts[k]; });
    all[day] = today;
    Object.keys(all).sort().slice(0, -14).forEach(function (d) { delete all[d]; });
    props.setProperty('ignored', JSON.stringify(all));
  } catch (e) { /* counting refusals must never break storing */ }
}
function readIgnored_(props, nowD) {
  let all = {};
  try { all = JSON.parse(props.getProperty('ignored') || '{}') || {}; } catch (e) { all = {}; }
  const from = Utilities.formatDate(new Date(nowD.getTime() - 7 * 864e5), TZ, 'yyyy-MM-dd'), out = {};
  Object.keys(all).forEach(function (d) { if (d > from) Object.keys(all[d]).forEach(function (k) { out[k] = (out[k] || 0) + all[d][k]; }); });
  return out;
}
function toDate_(v) {
  if (Object.prototype.toString.call(v) === '[object Date]') return isNaN(v.getTime()) ? null : v;
  if (typeof v === 'string' && v) { const d = new Date(v); return isNaN(d.getTime()) ? null : d; }
  return null;
}
function pct_(a, n) { return n ? Math.round(100 * a / n) : null; }
function mean_(xs) { return xs.length ? Math.round(100 * xs.reduce(function (a, b) { return a + b; }, 0) / xs.length) / 100 : null; }
function median_(xs) {
  if (!xs.length) return null;
  const s = xs.slice().sort(function (a, b) { return a - b; }), m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
}
function mode_(xs) {
  const c = {};
  let best = null;
  xs.forEach(function (x) { c[x] = (c[x] || 0) + 1; if (best === null || c[x] > c[best]) best = x; });
  return best === null ? null : Number(best);
}
function choiceText_(v) { return Array.isArray(v) ? v.join('+') : typeof v === 'number' ? num_(v) : String(v); }
function num_(x) { return x == null ? '?' : String(Math.round(x * 100) / 100).replace('.', ','); }
function signed_(x) { return x == null ? '?' : (x > 0 ? '+' : '') + num_(x); }
function fmtTime_(d) { return Utilities.formatDate(d, TZ, 'yyyy-MM-dd HH:mm'); }
function dateNl_(d) {
  const p = Utilities.formatDate(d, TZ, 'yyyy-MM-dd').split('-');
  return Number(p[2]) + ' ' + MONTHS_NL[Number(p[1]) - 1] + ' ' + p[0];
}
