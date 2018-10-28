var CACHE_VERSION = '1';                    // PARA CONTROLAR LOS CAMBIOS DE ALGUN FICHERO CACHEADO Y LO DETECTE
var CACHE_NAME    = 'mi-primer-sw';
var urlsToCache   = [
    '/ServiceWorker/',
    '/ServiceWorker/index.html',
    '/ServiceWorker/style.css',
    '/ServiceWorker/jquery-3.3.1.min.js',
];

self.addEventListener('install', function (event) {
    // event.waitUntil -> TOMA UNA PROMESA Y LA USA PARA SABER CUANTO TIEMPO TARDA LA
    //                    INSTALACION Y SI SE REALIZO CORRECTAMENTE
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('Abriendo cache. Version: ' + CACHE_VERSION);
            return cache.addAll(urlsToCache); // Anadir archivos
        })
    );
});

// CONTROLA LAS PETICIONES CACHEADAS EN PRIMER LUGAR
self.addEventListener('fetch', function(event) {
    // event.respondWith -> MANEJA LAS PETICIONES A TRAVES DE UNA PROMESA
    event.respondWith(
        // BUSCA EN EL CACHE
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response; // SI EXISTE ALGO EN CACHE LO DEVUELVE
            }

            return fetch(event.request) // REALIZA LA PETICION A LA RED CUANDO NO HAY NADA EN CACHE
        })
    );
});

// GUARDAR PETICIONES DE FORMA ACUMULATIVA
/*
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }

            // Es necesario clonar la peticion ya que es un stream.
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
                function(response) {
                    // Si la respuesta no es valida se devuelve, ya que ya no tendria sentido
                    // guardar nada en cache.
                    //
                    // response.type !== 'basic' --> SE COMPRUEBA QUE LA PETICION NO VENGA DESDE OTRO ORIGEN DIFERENTE AL NUESTRO
                    if(!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // La respuesta tambien se clona por el mismo motivo que la peticion: es un stream
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                    .then(function(cache) {
                        cache.put(event.request, responseToCache);  // SE GUARDA EN CACHE
                    });

                    return response; // FINALMENTE SE DEVUELVE LA PETICION

                    // Se envia exactamente lo mismo al navegador y al cache
                }

            ); // fetch(fetchRequest).then

        }) // caches.match(event.request).then(function(response)

    ); // event.respondWith

}); // self.addEventListener('fetch', function(event)
*/