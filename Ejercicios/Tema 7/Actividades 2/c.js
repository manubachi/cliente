$(document).ready(cambia);

function cambia()
{
    $("ul:first li:eq(2)+").css({color:'red'});
    //$('ul:first li:eq(2)').next()
}
