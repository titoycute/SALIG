const CACHE_NAME = 'salig-v1.1';
const ASSETS = [
  'index.html',
  'login.html',
  'manager.html',
  'public_view.html',
  'logo.png',
  'config.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});



// sw.js
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
