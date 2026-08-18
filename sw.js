// GrailKeeper service worker — caches the app shell so it still loads with no
// internet connection (e.g. checking a collection at a card show with bad signal).
//
// Strategy: NETWORK-FIRST, falling back to cache. This is deliberate — a cache-FIRST
// strategy would leave visitors stuck on an old cached copy forever after any future
// update, since the stale cached index.html would keep winning over the real one.
// Network-first always serves the freshest version when online, and only falls back
// to the cached copy when the network request actually fails.
const CACHE_NAME = 'grailkeeper-cache-v1';
const APP_SHELL = ['./', './index.html'];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // activate this new service worker immediately, don't wait for old tabs to close
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch((err) => console.warn('GrailKeeper SW: precache failed', err))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return; // never intercept non-GET requests

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => cached || caches.match('./index.html'))
      )
  );
});
