(function($){
	$.fn.extend({
		mostrar: function(opciones){
			return this.each(function() {
                var ops = $.extend({}, $.fn.mostrar.defaults,opciones);
                $('.see-photos').on('click', function() {
    				let tour = $(this).closest('.tour');
    				tour.children('.photos').css({"display": "block"})
                    tour.children('.photos').children('li:gt('+(ops.numero - 1)+')').css({"display": "none"})
    				$(this).off('click.mostrar');
    			});

                $('.show-photos').on('click', function() {
                    $('.see-photos').trigger('click');
                    $(this).off('click');
                });

                $('.hide-tour').on('click', function() {
                    let tour = $(this).closest('.tour');
                    tour.remove();
                });
			});
		}
	});

    $.fn.mostrar.defaults = {
        numero: 3,
   };

})(jQuery)
