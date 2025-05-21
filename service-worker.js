self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('qr-editor-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'manifest.json',
        'icon-192.png',
        'icon-512.png',
        'service-worker.js',
        'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});