const CACHE = 'cache-only';

self.addEventListener('install', (event) => {
    console.log('SW установлен');
    
    let cachedResourseUrls = [
        '/',
        '/index.js',
        '/styles.css',
        '/manifest.json',
        '/pwa-icon.png',
    ];
    
    const gitRepoPrefix = '/okko-pwa';
    cachedResourseUrls = cachedResourseUrls.map(url => `${gitRepoPrefix}${url}`);

    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll(cachedResourseUrls))
    );
});

self.addEventListener('activate', (event) => {
    console.log('SW активирован');
});

self.addEventListener('fetch', (event) => {
    console.log('SW: происходит запрос на сервер');
    event.respondWith(fromCache(event.request));
});

function fromCache(request) {
    console.log('SW from cache', request);
    
    return caches.open(CACHE).then(
        (cache) => cache.match(request).then(
            (matching) => matching || Promise.reject('no-match')
        )
    );
}
