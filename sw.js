// service-worker.js

// Zainstaluj service workera
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // Zakończ instalację od razu
    self.skipWaiting();
  });
  
  // Aktywuj service workera
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
  });
  
  // Obsłuż żądania
  self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith(
        fetch(event.request).catch(() => {
          return caches.open('offline-cache').then((cache) => {
            return cache.match('/offline.html');
          });
        })
      );
    } else {
      event.respondWith(
        fetch(event.request).catch(() => {
          return new Response('Offline');
        })
      );
    }
  });
  