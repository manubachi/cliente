$(document).ready(cambia);

function cambia()
{
    $('ul:eq(1) > li > ul > li:contains("horas")').css({color:'red'});
    //$('ul ul >li:lastChild')
}
