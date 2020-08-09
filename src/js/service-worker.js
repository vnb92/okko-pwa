const CACHE = 'cache-only';

self.addEventListener('install', (event) => {
    // console.log('SW установлен');

    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll([
            '/',
            '/bundle.js',
            '/styles.css',
        ]))
    );
});

self.addEventListener('activate', (event) => {
    // console.log('SW активирован');
});

self.addEventListener('fetch', (event) => {
    // console.log('SW: происходит запрос на сервер ');
    event.respondWith(fromCache(event.request))
});

function fromCache(request) {
    // console.log('SW from cache');
    
    return caches.open(CACHE).then(
        (cache) => cache.match(request).then(
            (matching) => matching || Promise.reject('no-match')
        )
    );
}