/* Escape 18 platform: load the lesson catalog and small helpers around it.
   Browser: E18P_Catalog.load() fetches E18P_CONFIG.catalog (default lessons/catalog.json) relative to the platform root
   (the folder that holds core/), so it works under any base path. Lessons live at E18P_CONFIG.lessonBase (default 'lessons/',
   '../' when the platform sits in /platform/ next to the live lessons at /<slug>/).
   Node: require('./catalog.js') gives the same helpers (load(url) needs a global fetch). */
(function (root, f) { if (typeof module === 'object' && module.exports) module.exports = f(); else root.E18P_Catalog = f(); })(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  var SCRIPT = (typeof document !== 'undefined' && document.currentScript && document.currentScript.src) || '';
  var cache = null;

  function cfg() { try { return (typeof window !== 'undefined' && window.E18P_CONFIG) || {}; } catch (e) { return {}; } }
  // Lesson folder relative to the platform root, always ending in '/'.
  function lessonBase() { var b = cfg().lessonBase; return typeof b === 'string' && b ? (b.charAt(b.length - 1) === '/' ? b : b + '/') : 'lessons/'; }
  function catalogPath() { var c = cfg().catalog; return typeof c === 'string' && c ? c : 'lessons/catalog.json'; }
  // Base URL of the platform root (the folder that holds core/).
  function base() {
    try { if (SCRIPT) return new URL('../', SCRIPT).href; } catch (e) { /* fall through */ }
    try { return new URL('./', location.href).href; } catch (e2) { return ''; }
  }
  function load(url) {
    if (cache && !url) return Promise.resolve(cache);
    var u = url || new URL(catalogPath(), base()).href;
    return fetch(u, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error('catalogus niet geladen (' + r.status + ')');
      return r.json();
    }).then(function (cat) { if (!url) cache = cat; return cat; });
  }
  function bySlug(cat, slug) {
    var l = ((cat && cat.lessons) || []).filter(function (x) { return x.slug === slug; });
    return l.length ? l[0] : null;
  }
  function rooms(cat, slug) { var l = bySlug(cat, slug); return l ? l.rooms.map(function (r) { return r.id; }) : []; }
  function roomsFn(cat) { return function (slug) { return rooms(cat, slug); }; }
  // Pupil iframe URL, relative to the platform root: <lessonBase><slug>/index.html?klas=CODE&tijd=MIN[&r=1]
  function lessonUrl(slug, o) {
    o = o || {};
    var q = [];
    if (o.code) q.push('klas=' + encodeURIComponent(o.code));
    if (o.minutes) q.push('tijd=' + encodeURIComponent(o.minutes));
    if (o.research) q.push('r=1');
    if (o.lang) q.push('lang=' + encodeURIComponent(o.lang));
    return (o.base || '') + lessonBase() + slug + '/index.html' + (q.length ? '?' + q.join('&') : '');
  }
  // Printable fallback (SPEC offline level 3): teacher PDF when present, else the lesson's #papier view.
  function paperUrl(cat, slug, b) {
    var l = bySlug(cat, slug); if (!l) return null;
    return (b || '') + lessonBase() + slug + (l.teacherPdf ? '/docent.pdf' : '/index.html#papier');
  }
  // Shape check used by tests and the build: returns a list of problems (empty = fine).
  function validate(cat) {
    var errs = [];
    if (!cat || typeof cat.generated !== 'string' || !Array.isArray(cat.lessons)) return ['geen catalogus'];
    cat.lessons.forEach(function (l, i) {
      var p = 'les ' + i + ' (' + l.slug + '): ';
      if (!/^[a-z0-9][a-z0-9-]{0,39}$/.test(l.slug || '')) errs.push(p + 'slug');
      if (typeof l.title !== 'string' || !l.title) errs.push(p + 'title');
      if (typeof l.lead !== 'string') errs.push(p + 'lead');
      if (!(l.minutes >= 5 && l.minutes <= 90)) errs.push(p + 'minutes');
      if (l.product !== 'escape18-' + l.slug) errs.push(p + 'product');
      if (!Array.isArray(l.rooms)) errs.push(p + 'rooms');
      else l.rooms.forEach(function (r) { if (!r.id || typeof r.title !== 'string' || !Array.isArray(r.questions)) errs.push(p + 'room ' + r.id); });
      if (!(l.checkMax >= 0 && l.checkMax <= 7)) errs.push(p + 'checkMax');
      if (l.teacherPdf !== null && !(typeof l.teacherPdf === 'string' && /^(?:lessons\/|(?:\.\.\/)+)/.test(l.teacherPdf) && l.teacherPdf.replace(/^(?:lessons\/|(?:\.\.\/)+)/, '') === l.slug + '/docent.pdf')) errs.push(p + 'teacherPdf');
      if (l.status !== 'live' && l.status !== 'test') errs.push(p + 'status');
    });
    return errs;
  }
  return { base: base, lessonBase: lessonBase, catalogPath: catalogPath, load: load, bySlug: bySlug, rooms: rooms, roomsFn: roomsFn, lessonUrl: lessonUrl, paperUrl: paperUrl, validate: validate };
});
