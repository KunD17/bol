// Offline support. Every file is saved on install, so the app works offline from the
// first visit. Requests are answered from the cache straight away (fast, works offline)
// and refreshed in the background, so newly pushed chapters show up on the next open.
const CACHE = "bol-v14";
const FILES = ["./", "index.html", "cards.json", "phrases.json", "manifest.webmanifest", "parijaat.svg", "parijaat-192.png", "parijaat-512.png", "parijaat-180.png"];

self.addEventListener("install", (event) => {
  // "reload" skips the browser's HTTP cache, so a new version never saves stale copies of the files.
  const fresh = FILES.map((f) => new Request(f, { cache: "reload" }));
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(fresh)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(event.request, { ignoreSearch: true });
      const fresh = fetch(event.request, { cache: "no-cache" })
        .then((resp) => { if (resp.ok) cache.put(event.request, resp.clone()); return resp; })
        .catch(() => cached);
      if (cached) {
        event.waitUntil(fresh);
        return cached;
      }
      return fresh;
    })
  );
});
