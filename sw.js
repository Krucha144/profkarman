const CACHE_NAME = 'profkarman-v1';
const urlsToCache = [
  '/profkarman/',
  '/profkarman/index.html',
  '/profkarman/manifest.json',
  '/profkarman/app-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
