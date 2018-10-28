(function($){
	$.fn.numero = function(){
        let elems = ['div','a','p'];
        let text = '';

        for (let i of elems) {
            text += $(i).prop('tagName') + ': ' + $(i).length + '<br/>';
        }

        $('body').append('<p>'+ text + '</p>');
	};

    $.fn.numero2 = function(opciones){
        let elems = {
            tags:['div']
        }
        let text = '';

        $.extend(elems, opciones);

        for (let i of elems.tags) {
            text += i + ': ' + $(i).length + '<br/>';
        }

        $('body').append('<p>'+ text + '</p>');
	};

})(jQuery);
