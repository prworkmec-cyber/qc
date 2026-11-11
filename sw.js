// Minimal service worker: lets the tablet install the app. Always uses the network (reports go straight to Google).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {});
