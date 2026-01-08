const CACHE_NAME = 'reaction-v1';
const ASSETS = [
  '/Reactiontrainer/',
  '/Reactiontrainer/index.html',
  '/Reactiontrainer/manifest.json',
  '/Reactiontrainer/icon-192.png',
  '/Reactiontrainer/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
