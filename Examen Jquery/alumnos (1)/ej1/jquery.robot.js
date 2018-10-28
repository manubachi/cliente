(function($){
	$.fn.extend({
		comprueba: function(){
			return this.each(function() {
                var validado = [];
                var aciertos = 0;

                let div = '<div id="imagenes"></div>';
                $('body').append(div);


                let texto = '<h3> Selecciona las imagenes que estén relacionadas con JAVASCRIPT </h3>';
                $('#imagenes').append(texto);
                let lista = '<ul id="lista"> </ul>'
                $('#imagenes').append(lista);
				$('#lista').addClass('muestra');

                let img = '<li><img src="images/html1.jpg" id="html"/> </li>'+
                '<li><img src="images/html2.jpg" id="html" /> </li>' +
                '<li><img src="images/html3.jpg" id="html" /> </li>'+
                '<li><img src="images/js1.jpg" id="js"/> </li>'+
                '<li><img src="images/js2.jpg" id="js"/> </li>'+
                '<li><img src="images/js3.jpg" id="js"/> </li>'+
                '<li><img src="images/js4.jpg" id="js"/> </li>'+
                '<li><img src="images/php1.jpg" id="php"/> </li>'+
                '<li><img src="images/php2.jpg" id="php"/> </li>';
                $('#lista').append(img);

                let boton = '<button type="button" name="button">Validar</button>'
                $('#imagenes').append(boton);

                $('li').on('click', function(){
                    if($(this).hasClass('seleccionada')){
                        return;
                    }else{
                        $(this).addClass('seleccionada');
                        let valor = $(this).children('img').attr('id');
                        validado.push(valor);
                    }

                });

                $('button').on('click', function(e){
                    e.preventDefault();
                    for (var i = 0; i < validado.length; i++) {
                        if(validado[i] == 'js'){
                            aciertos++
                        }
                    }

                    if (aciertos == validado.length ) {
                        alert('CORRECTO, NO ERES UN ROBOT!!');
                        $('#imagenes').addClass('oculta');
                    }else {
                        alert('ERROR');
                        $('li').removeClass('seleccionada');
                        validado = [];
                        aciertos = 0
                    }
                });

            });
		}
	});

})(jQuery)
