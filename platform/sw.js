/* Escape 18 platform service worker. All paths are relative to the SW location (bundle root). */
const BUILD = '74dca82eed58'; // stamped by tools/precache.mjs so a new build changes this file
const LESSON_BASE = '../'; // stamped by tools/precache.mjs: lesson folder relative to the platform root ('../' on the live site)
const ROOT = new URL('./', self.location).href;
const LESSONS = new URL(LESSON_BASE, ROOT).href;
const PREFIX = 'e18p-';
const SHELL_CACHE = PREFIX + 'shell-' + BUILD;
const LESSON_CACHE = PREFIX + 'lessons-' + BUILD;
const OFFLINE = ROOT + 'offline.html';

async function loadManifest() {
  try {
    const r = await fetch(ROOT + 'precache-manifest.json', { cache: 'no-store' });
    if (r.ok) return await r.json();
  } catch (e) { /* offline or missing */ }
  return { shell: ['index.html', 'offline.html'], lessons: [], optional: [] };
}

function abs(p) { return new URL(p, ROOT).href; }
// A file inside LESSONS/<slug>/. Lessons outside ROOT (live site layout) are outside this worker's scope and never handled here.
function isLesson(url) { return LESSONS.startsWith(ROOT) && url.href.startsWith(LESSONS) && url.href.slice(LESSONS.length).indexOf('/') > 0; }

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const m = await loadManifest();
    const cache = await caches.open(SHELL_CACHE);
    await Promise.all(m.shell.map(async (p) => {
      try { await cache.add(new Request(abs(p), { cache: 'reload' })); } catch (e) { /* tolerate one miss */ }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if (k.startsWith(PREFIX) && k !== SHELL_CACHE && k !== LESSON_CACHE) await caches.delete(k);
    }
    await self.clients.claim();
  })());
});

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req, { ignoreSearch: true });
  const net = fetch(req).then((res) => {
    if (res && res.ok && res.type === 'basic') cache.put(req.url.split('?')[0], res.clone()).catch(() => {});
    return res;
  });
  if (hit) { net.catch(() => {}); return hit; }
  return net;
}

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req, { ignoreSearch: true });
  if (hit) return hit;
  const res = await fetch(req);
  if (res && res.ok && res.type === 'basic') cache.put(req.url.split('?')[0], res.clone()).catch(() => {});
  return res;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return; // never touch POST (relay, Apps Script)
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch cross-origin (relay ws/wss, Apps Script)
  if (!url.href.startsWith(ROOT)) return;
  if (url.pathname.endsWith('/precache-manifest.json') || url.pathname.endsWith('/sw.js')) return;
  event.respondWith((async () => {
    try {
      if (isLesson(url)) return await cacheFirst(req, LESSON_CACHE);
      return await staleWhileRevalidate(req, SHELL_CACHE);
    } catch (e) {
      if (req.mode === 'navigate') {
        const off = await caches.match(OFFLINE);
        if (off) return off;
      }
      return Response.error();
    }
  })());
});

// Page asks to fetch all lessons in the background. Progress goes over the MessageChannel port.
self.addEventListener('message', (event) => {
  const d = event.data || {};
  if (d.type === 'skip-waiting') { self.skipWaiting(); return; }
  if (d.type !== 'precache-lessons') return;
  const port = event.ports && event.ports[0];
  const say = (msg) => { try { port && port.postMessage(msg); } catch (e) { /* port closed */ } };
  event.waitUntil((async () => {
    const m = await loadManifest();
    const list = m.lessons.concat(d.optional ? m.optional : []);
    const cache = await caches.open(LESSON_CACHE);
    let done = 0, failed = 0;
    say({ type: 'progress', done, total: list.length, failed });
    for (const p of list) {
      try {
        const u = abs(p);
        if (!(await cache.match(u))) {
          const r = await fetch(u, { cache: 'reload' });
          if (!r.ok) throw new Error('http ' + r.status);
          await cache.put(u, r);
        }
      } catch (e) { failed++; }
      done++;
      say({ type: 'progress', done, total: list.length, failed });
    }
    say({ type: 'done', done, total: list.length, failed, note: m.note || null });
  })());
});
