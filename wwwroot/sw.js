﻿const CACHE_NAME = 'my-site-cache-v1';
const RUNTIME = 'runtime';
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll([                    
                    './css/site.min.css',
                    './css/bootstrap.min.css',
                    './CV.pdf',
                    './js/site.min.js',
                    './js/jquery.min.js',
                    './js/materialize.min.js',
                    './js/about.js',
                    './js/blog.js',
                    './js/portfolio.js',
                    './js/riot.min.js'
                ]).then(function () {
                    self.skipWaiting();
                });
        }));
    });

self.addEventListener('activate', function (event) {
    const currentCaches = [CACHE_NAME, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});


self.addEventListener('fetch', event => {
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return caches.open(RUNTIME).then(cache => {
                    return fetch(event.request).then(response => {
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );
    }
});