$(document).ready(ej9);

 function ej1(){
  alert($('p').length); // Good
}

function ej2(){
  //Muestra las listas al pasar por encima el ratón de Primero o Segundo y ocultar
 // al retirarlo. Utiliza el método hover. Tardará en aparecer y desaparecer la
 // información 2 segundos.
 $('p').hover(function(){
   $(this).next().show(2000);  //  $(this).next().fadetoggle()
 },
 function(){
   $(this).next().hide(2000);
 });
}

function ej3(){
  //Despliega el contenido de las listas al pulsar la tecla (abajo) y volver
  //a plegar al pulsar (arriba). Utilizar el método on. Se realizará de forma rápida.

  $(document).on('keydown',function(e){

    if(e.which == 40){ //tecla abajo
      $('p').next().slideDown("fast");
    }
    if(e.which == 38){ // tecla arriba
        $('p').next().slideUp("fast");
    }

  });

}

function ej4(){
  //Modifica el comportamiento anterior para poderlo hacer con una sola tecla.
  $(document).on('keydown',function(e){

    if(e.key == 'ArrowUp'){ //tecla arriba
      $('p').next().slideToggle();
    }

  });
}

function ej5(){
  //Elimina el efecto del punto 3.

  $(document).off('keydown');
}

function ej6(){
  //Vuelve a repetir el comportamiento del punto 4 pero ahora solo se producirá
  // la primera vez que se pulse la tecla.
  $(document).one('keydown',function(e){

    if(e.key == 'ArrowUp'){
      $('p').next().toggle();
    }
  });
}

function ej7(){
  //Al pasar el ratón por cada uno de los títulos de los módulos de segundo se
  //mostrará la cantidad de horas semanales. Esta información emergente se mostrará
  //a continuación de donde ubiquemos el ratón. Utiliza hover.
  $('.azul').hover(function(e){
    var horas = $(this).parent().data('hours');
    var linea = $('<li></li>');
    linea.text(horas+" horas");
    linea.css({top:e.pageY,left:e.pageX,position:'absolute'});
    linea.addClass("fondo");
    $(this).parent().append(linea);
  },
  function(){
    $(this).next().remove();
  }
  );

}

function ej8(){
//Ahora aparecerá el número de horas cuando el usuario haga clic sobre el nombre
// del módulo. Realiza una delegación de eventos utilizando on.

  $('ul:eq(1)').on('click','.azul',function(e){
    $(this).next().remove();
    var horas = $(this).parent().data('hours');

    var linea = $('<li></li>');
    linea.text(horas+" horas");
    linea.css({top:e.pageY,left:e.pageX,position:'absolute'});
    linea.addClass("fondo");
    $(this).parent().append(linea);

  });
}

function ej9(){
  //Modifica el ejercicio 8 para que al hacer click sobre el nombre aparezca el
  //tipo de modalidad(presencial). Esta información será pasada a la función
  // que trata el evento a través del método on.

  $('ul:eq(1) > li').on('click','.azul',{modalidad:"presencial"},function(e){

    var linea = $('<li></li>');
    linea.text(e.data.modalidad);
    linea.css({top:e.pageY,left:e.pageX,position:'absolute'});
    linea.addClass("fondo");
    $(this).parent().append(linea);

 },$(this).next().remove());
}
