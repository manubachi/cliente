var indexedDB = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB ||
                window.shimIndexedDB;


// Abre (o crea) la base de datos
var open = indexedDB.open('Instituto', 1); // return IDBOpenDBRequest

open.onupgradeneeded = function() {
    var db = open.result;

    if(!db.objectStoreNames.contains('Alumnos')) {
        var alum = db.createObjectStore('Alumnos', {keyPath: 'id', autoIncrement: true});
        // Un ObjectStore (alum) es equivalente a tener una tabla 'Alumnos' en SQL
        alum.createIndex('idxNombre', ['nombre.segundo', 'nombre.primero']);
    }
};

open.onsuccess = function() {
    var db = open.result;

    // var tx = db.transaction(db.objectStoreNames, 'readwrite');
    var tx = db.transaction('Alumnos', 'readwrite');

    var alumnos = tx.objectStore('Alumnos');

    var index = alumnos.index('idxNombre');

    // Añadir datos (machaca los que coincidan con el mismo ID)
    alumnos.put({
        id: 1,
        nombre: {
            primero: 'Juan',
            segundo: 'Ramírez'
        },
        genero: 'Hombre',
        edad: 22
    });
    alumnos.put({
        id: 2,
        nombre: {
            primero: 'Claudia',
            segundo: 'González'
        },
        genero: 'Mujer',
        edad: 33
    });

    alumnos.put({
        id: 3,
        nombre: {
            primero: 'Paco',
            segundo: 'Salgado'
        },
        genero: 'Hombre',
        edad: 44
    });

    alumnos.delete(3);

    // Consulta los datos
    var query1 = alumnos.get(1);
    var query2 = index.get(['González', 'Claudia']);

    query1.onsuccess = function() {
        if (this.result !== undefined) {
            console.log(this.result.nombre.primero);
        }
    };

    query2.onsuccess = function() {
        if (this.result !== undefined) {
            console.log(this.result.nombre.primero);
        }
    };

    // Cuando la transacción haya terminado, se cierra la base de datos
    tx.oncomplete = function() {
        db.close();
    };
}
