(function($){
	$.fn.extend({
		mostrar: function(){
			return this.each(function() {
                let tiempo = 1000;
                $("img").each(function(){
                   $(this).show(tiempo);
                   tiempo += 1000;
                });

                $('a').on('click', function(){
                    $("img").each(function(){
                       $(this).hide(tiempo);
                       tiempo += 1000;
                    });
                });
			});
		} 
	});

})(jQuery)
