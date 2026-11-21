/* Registers the offline service worker and exposes window.E18P_SW. Safe in sandboxed frames and file://. */
(function () {
  'use strict';
  var script = document.currentScript;
  var swUrl = null;
  try { swUrl = new URL('../sw.js', script && script.src ? script.src : location.href).href; } catch (e) { /* ignore */ }

  function supported() {
    try { return !!(navigator.serviceWorker && location.protocol !== 'file:' && swUrl); } catch (e) { return false; }
  }

  var api = {
    register: function () {
      if (!supported()) return Promise.resolve(null);
      try {
        return navigator.serviceWorker.register(swUrl).catch(function () { return null; });
      } catch (e) { return Promise.resolve(null); }
    },
    // onProgress({done,total,failed}); resolves with the final {done,total,failed}.
    precacheLessons: function (onProgress, opts) {
      return new Promise(function (resolve, reject) {
        if (!supported()) { reject(new Error('geen offline-ondersteuning')); return; }
        navigator.serviceWorker.ready.then(function (reg) {
          var worker = reg.active || navigator.serviceWorker.controller;
          if (!worker) { reject(new Error('service worker niet actief')); return; }
          var ch = new MessageChannel();
          ch.port1.onmessage = function (ev) {
            var m = ev.data || {};
            if (m.type === 'progress' && onProgress) { try { onProgress(m); } catch (e) { /* ignore */ } }
            if (m.type === 'done') { resolve(m); ch.port1.close(); }
          };
          worker.postMessage({ type: 'precache-lessons', optional: !!(opts && opts.optional) }, [ch.port2]);
        }, reject);
      });
    },
    // Returns a Promise of {supported, controlled, lessonsCached}.
    status: function () {
      var s = { supported: supported(), controlled: false, lessonsCached: 0 };
      try { s.controlled = !!(s.supported && navigator.serviceWorker.controller); } catch (e) { /* ignore */ }
      if (!s.supported || !window.caches) return Promise.resolve(s);
      return caches.keys().then(function (keys) {
        var lk = keys.filter(function (k) { return k.indexOf('e18p-lessons-') === 0; });
        return Promise.all(lk.map(function (k) {
          return caches.open(k).then(function (c) { return c.keys(); });
        })).then(function (lists) {
          var n = 0;
          lists.forEach(function (l) { n += l.filter(function (r) { return /\/index\.html$/.test(r.url); }).length; });
          s.lessonsCached = n;
          return s;
        });
      }).catch(function () { return s; });
    }
  };
  window.E18P_SW = api;
})();
