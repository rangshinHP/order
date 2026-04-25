self.addEventListener("install", (e) => {
self.skipWaiting();
});

self.addEventListener("activate", (e) => {
e.waitUntil(self.clients.claim());
});

// ✅ Cần fetch handler để Chrome coi là PWA "installable"
self.addEventListener("fetch", (e) => {
// pass-through: để mạng tự xử lý (bạn không cần offline)
});
