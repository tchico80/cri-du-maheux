const CACHE_NAME = 'maheux-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://jsdelivr.net'
];

// Installation du service worker et mise en cache des fichiers de base
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Récupération des ressources
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
