var equipos, db, nombre, liga, trofeos;
var id = 1;
var index;
var tx
$(document).ready(function () {
    var indexedDB = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB ||
                window.shimIndexedDB;

    var open = indexedDB.open('Liga', 1); // return IDBOpenDBRequest

    open.onupgradeneeded = function() {
        db = open.result;

        if(!db.objectStoreNames.contains('Equipos')) {
            var equipo = db.createObjectStore('Equipos', {keyPath: 'id', autoIncrement: true});
            // Un ObjectStore (alum) es equivalente a tener una tabla 'Alumnos' en SQL
            equipo.createIndex('idxNombre', 'nombre');
        }
    };

    open.onsuccess = function() {
        db = open.result;
    }

    $('#guarda').on('click', function() {
        nombre = $('#team').val();
        liga = prompt('Introduce la liga');
        trofeos = prompt('Introduce nº de trofeos');

        tx = db.transaction('Equipos', 'readwrite');

        equipos = tx.objectStore('Equipos');

        equipos.put({
            id: id,
            nombre: nombre,
            liga: liga,
            trofeos: trofeos
        });

        id++;
    });

    $('#busca').on('click', function () {
        tx = db.transaction('Equipos', 'readwrite');

        equipos = tx.objectStore('Equipos');

        nombre = $('#team').val();
        index = equipos.index('idxNombre');
        var query2 = index.get(nombre);
        query2.onsuccess = function() {
            if (this.result !== undefined) {
                $('#resultado').html('Nombre: ' + this.result.nombre
                    + '<br> Liga: ' + this.result.liga + '<br> Trofeos: ' + this.result.trofeos );
                //console.log(this.result.nombre);
            }else{
                 $('#resultado').html('Equipo no encontrado');
            }
        };
    })

    $('#elimina').on('click', function () {
        tx = db.transaction('Equipos', 'readwrite');

        equipos = tx.objectStore('Equipos');
        index = equipos.index('idxNombre');

        nombre = $('#team').val();

        var query2 = index.get(nombre);
        query2.onsuccess = function() {
            if (this.result !== undefined) {
                $('#resultado').html('Equipo <b>' + this.result.nombre + '</b> eliminado' );
                let id =  this.result.id;
                equipos.delete(id);
            }else{
                 $('#resultado').html('Equipo no encontrado');
            }
        };
    })

});