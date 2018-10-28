(function($){
	$.fn.extend({
		mostrar: function(){
			return this.each(function() {
				// Ej 1
               /* $(this).on('click.imagen', function() {
    				let tour = $(this).closest('.tour');
    				let loc = tour.data('loc');
    				let imagen = $('<img src="photos/'+loc+'.jpg" />')
    				tour.children('.results').append(imagen);
    				$(this).off('click.imagen');
    			});

                $(this).on('click.detalles', function() {
                    let tour = $(this).closest('.tour');
                    let temp = tour.data('temp');
                    let detalle = $('<p>Weather: '+ temp+ '</p>')
                    tour.children('.results').append(detalle);
                    $(this).off('click.detalles');
                });*/

                // Ej 3
                 $(this).on('click.imagen', function() {
                    let tour = $(this).closest('.tour');
                    let loc = tour.data('loc');
                    let imagen = $('<img src="photos/'+loc+'.jpg" />')
                    tour.children('.results').append(imagen);
                    $(this).trigger('mostrar.detalles');
                    $(this).off('click.imagen');
                });

                $(this).on('mostrar.detalles', function() {
                    let tour = $(this).closest('.tour');
                    let temp = tour.data('temp');
                    let detalle = $('<p>Weather: '+ temp+ '</p>')
                    tour.children('.results').append(detalle);
                });

			});
		} 
	});

})(jQuery)
