$(document).ready(prueba);
function prueba()
{
    $('li');
}
//a. Asigna la clase borde a Primero y Segundo.
function anyade()
{
    $("p").addClass("borde");
}

//b. Asigna la clase verde a las abreviaturas de cada módulo de segundo.
function aniade()
{
	$("ul:eq(1) > li").addClass("verde");
}

//c. Borra la clase borde.
function borra()
{
	$("p").removeClass("borde");
}
//d. La clase borde se debe asignar o quitar según hagamos click sobre primero o segundo.
function evento()
{
	$('p').on('click', function() {
        $(this).toggleClass('borde')
		/*if ($(this).hasClass('borde')) {
			$(this).removeClass('borde');
		}
		else {
			$(this).addClass('borde');
		}*/
	});
}

//e. Modifica ‘Primero’ por ‘Módulos de primero’.
function modifica1()
{
	$("p:first").text("Módulos de primero");
}

//f. Modifica ‘Segundo’ por ‘Módulos de segundo’.
function modifica2()
{
	$("p:last").html('<b>Módulos de segundo</b>');
}

//g. Elimina los elementos de la las listas que estén vacíos.
function elimina()
{
	$("li:empty").remove();
}

//h. Añade el módulo de fol al final de la lista de primero. Realizar en ambos sentidos.
function nuevo()
{
	let modulo = $('<li>Formación y Orientación Laboral</li>');
	//$("ul:first").append(modulo);
    modulo.appendTo($("ul:first"));
}

//i. Añade el módulo de programación al principio de la lista de primero. Realizar en ambos sentidos.
function nuevo1()
{
	let modulo = $('<li>Programación</li>');
	$("ul:first").prepend(modulo);
    modulo.prependTo($("ul:first"));
}

//j. Añade el módulo de sistemas informáticos detrás de base de datos.
function nuevo2()
{
	let modulo = $('<li>Sistemas Informáticos</li>');
	modulo.insertAfter($('ul:first > li:first'));
}

/*k. En la lista de los módulos de segundo, añade al final de cada uno de ellos la cantidad de horas
semanales que tienen cuando se haga click sobre ellos. Parte del nombre de cada módulo y añade
la información desde ul.*/
function evento1()
{
	$('ul:eq(1) > li').on('click', function() {
		let hora = $(this).find('ul').data('hours');
		let elem = $('<li></li>');
        if($(this).find('ul > li:last').text() == hora){
            return;
        }
		$(this).find('ul').append(elem);
		$(this).find('ul > li:last').text(hora);
	});
}

//l. Vacía la lista que contiene los módulos de segundo.
function vacia()
{
	$('ul:eq(1)').empty();
}

//m. Elimina la lista que contiene los módulos de primero.
function eliminaLista()
{
	$('ul:first').remove();
}
