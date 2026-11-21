/* Escape 18 platform: offline result code (SPEC "Offline fallback" level 2).
   40 bits as 8 symbols from ALPH, shown XXXX-XXXX. 35 data bits (7 symbols) plus one checksum symbol.
   Data bits, MSB first: lessonIdx 5 | roomsDone 3 | roomsTotal 3 | firstRightPct10 4 | hints 4 | pre 3 | post 3 | checkMax 3 | minutes 6 | finished 1.
   Checksum: (sum over the 7 data symbols of value * weight_i) mod 32. The weights are odd (1, 3, 5, ... 13) so that every
   single-character substitution changes the checksum (an even weight would miss some changes, e.g. weight 2 with delta 16).
   SLUGS is append-only: the index of a lesson is part of every code already handed out. */
(function (root, f) { if (typeof module === 'object' && module.exports) module.exports = f(); else root.E18P_ResultCode = f(); })(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  var ALPH = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  // Append-only. Never reorder or remove.
  var SLUGS = ['eerste-maand', 'verzekerd', 'eerste-bijbaan', 'op-kamers', 'studiefinanciering', 'route-18', 'belasting-terug',
    'eerste-bijbaan-mbo', 'rekening-blijft-liggen', 'studiefinanciering-mbo', 'je-eerste-stem', 'je-eerste-contract',
    'nu-kopen-later-betalen', 'werkproef-1',
    // Lesson factory wave 2 (19 Nov 2026). Append-only: the index is part of every result code.
    'zorgpremie-achterstand', 'lenen-en-rood-staan', 'huurder-rechten', 'toeslag-terugbetalen', 'studieschuld', 'werk-rechten'];
  var FIELDS = [['lessonIdx', 5], ['roomsDone', 3], ['roomsTotal', 3], ['pct10', 4], ['hints', 4], ['pre', 3], ['post', 3], ['checkMax', 3], ['minutes', 6], ['finished', 1]];
  var UNKNOWN = 7;

  function clampInt(v, lo, hi) { v = Math.round(Number(v)); if (!isFinite(v)) v = lo; return Math.max(lo, Math.min(hi, v)); }
  function checksum(vals) { var s = 0; for (var i = 0; i < 7; i++) s += vals[i] * (2 * i + 1); return s % 32; }
  function scoreBits(v) { return (v === null || v === undefined || v === '' || !isFinite(Number(v))) ? UNKNOWN : clampInt(v, 0, 6); }

  function encode(r) {
    r = r || {};
    var idx = SLUGS.indexOf(r.slug);
    if (idx < 0) throw new Error('onbekende les: ' + r.slug);
    var total = clampInt(r.roomsTotal, 0, 7);
    var v = {
      lessonIdx: idx,
      roomsDone: Math.min(clampInt(r.roomsDone, 0, 7), total),
      roomsTotal: total,
      pct10: clampInt(Math.round(clampInt(r.firstRightPct, 0, 100) / 10), 0, 10),
      hints: clampInt(r.hints, 0, 15),
      pre: scoreBits(r.pre),
      post: scoreBits(r.post),
      checkMax: clampInt(r.checkMax, 0, 7),
      minutes: clampInt(r.minutes, 0, 63),
      finished: r.finished ? 1 : 0
    };
    var bits = 0; // 35 bits fit in a double exactly
    FIELDS.forEach(function (fd) { bits = bits * Math.pow(2, fd[1]) + v[fd[0]]; });
    var syms = [];
    for (var i = 6; i >= 0; i--) { syms[i] = bits % 32; bits = Math.floor(bits / 32); }
    syms.push(checksum(syms));
    var s = syms.map(function (x) { return ALPH[x]; }).join('');
    return s.slice(0, 4) + '-' + s.slice(4);
  }

  function normalise(str) { return String(str == null ? '' : str).toUpperCase().replace(/[\s-]/g, ''); }

  function decode(str) {
    var s = normalise(str);
    if (s.length !== 8) return { ok: false, err: 'lengte' };
    var syms = [];
    for (var i = 0; i < 8; i++) { var k = ALPH.indexOf(s[i]); if (k < 0) return { ok: false, err: 'teken' }; syms.push(k); }
    if (checksum(syms) !== syms[7]) return { ok: false, err: 'controle' };
    var bits = 0;
    for (var j = 0; j < 7; j++) bits = bits * 32 + syms[j];
    var v = {};
    for (var f = FIELDS.length - 1; f >= 0; f--) { var p = Math.pow(2, FIELDS[f][1]); v[FIELDS[f][0]] = bits % p; bits = Math.floor(bits / p); }
    if (v.lessonIdx >= SLUGS.length) return { ok: false, err: 'les' };
    if (v.roomsDone > v.roomsTotal || v.pct10 > 10) return { ok: false, err: 'waarde' };
    return {
      ok: true, err: null, code: s.slice(0, 4) + '-' + s.slice(4),
      slug: SLUGS[v.lessonIdx], roomsDone: v.roomsDone, roomsTotal: v.roomsTotal, firstRightPct: v.pct10 * 10, hints: v.hints,
      pre: v.pre === UNKNOWN ? null : v.pre, post: v.post === UNKNOWN ? null : v.post, checkMax: v.checkMax,
      minutes: v.minutes, finished: v.finished === 1
    };
  }

  return { ALPH: ALPH, SLUGS: SLUGS, encode: encode, decode: decode, normalise: normalise };
});
