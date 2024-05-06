const CACHE_NAME = "notes-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "./image.gif",
];

// Install a service worker
// self refers to the service worker itself
// addEventListener is a method that listens for events
// install is an event that is triggered when the service worker is installed
// event.waitUntil is a method that takes a promise and uses it to determine how long the installation takes
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
// fetch is an event that is triggered whenever a resource is fetched
// event.respondWith is a method that provides a response to the fetch event
// caches.match is a method that looks up a request in the cache
// If the request is found, the response is returned
// If the request is not found, the request is fetched from the network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(response => {
//                 return response || fetch(event.request);
//             })
//     );
// });
