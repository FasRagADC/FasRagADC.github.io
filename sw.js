//Asignar un nombre y version al cache

const CACHE_NAME = 'v1_cache_fasrag';
//archivos a guardar
var urlsToChache=[
    'https://fasragadc.github.io/',
    'https://fasragadc.github.io/index.html',
    'https://fasragadc.github.io/sw.js',
    'hhttps://fasragadc.github.io/jquery.js',
    'https://fasragadc.github.io/manifest.json',
    'https://fasragadc.github.io/css/slider.css',
    'https://fasragadc.github.io/css/styles.css',
    'https://fasragcorporation.github.io/js/nav-menu.js',
/*     'https://hardworld089.github.io/img/',
 */];

//install

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache =>{
            cache.addAll(urlsToChache)
            .then(()=>{
                self.skipWaiting();
            })
        })
        .catch(err =>{
            console.log('No se guardo el cahe',err);
        })
    )
});

self.addEventListener('activate', e=>{
    const cacheWhitelist = [CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cacheNames =>{
            return Promise.all(
                cacheNames.map(cacheName=>{
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(()=>{

        })
    );
});

self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            if (res) {
                return res;
            }
            return fetch(e.request);
        })
    )
})