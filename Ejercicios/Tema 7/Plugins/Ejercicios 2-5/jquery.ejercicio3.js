(function($){
	$.fn.numero = function(){
        //this.each(function(){
            $('body').append('<p>Hay un total de ' + this.length +' etiquetas ' + this.prop('tagName')+'</p>');
        //});
        //return this;
	};

})(jQuery);
