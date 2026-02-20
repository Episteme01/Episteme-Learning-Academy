const CACHE_NAME = "episteme-hub-v2";

const urlsToCache = [
  "/",
  "/hub-index.html",
  "/subjects.html",
  "/subject.html",
  "/lesson.html",
  "/quiz.html",
  "/hub-dashboard.html",
  "/practice.html",
  "/js/hub-data.js",
  "/js/app.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
    .catch(() => caches.match("/hub-index.html"))
  );
});