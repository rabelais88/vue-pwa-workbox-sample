/* eslint-disable */
// since workbox setting is not available in eslint, just disable eslint

workbox.setConfig({
  debug: false,
});

workbox.googleAnalytics.initialize();

workbox.routing.registerRoute( // check cache first for png, svg, css file
  /\.(?:png|svg|css)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'vue pwa - static',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);


workbox.routing.registerRoute( // use cache first, while re-downloading everything for images
  /\.(?:gif|jpg|jpeg|js)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'vue pwa - dynamic',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'vue pwa - font',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /\.(?:woff|ttf|ico)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'vue pwa - font2',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
);

// precached object
// most important caches
workbox.precaching.precacheAndRoute([
  '/',
  '/index.html',
  '/favicon.ico',
  '/manifest.json',
  '/robots.txt',
]);