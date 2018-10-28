$(document).ready(function() {
    $('input').attr('autocomplete','off');
    $('input:eq(0)').on('change',validaNombre);
    $('input:eq(1)').on('change',validaTelefono);
    $('input:eq(2)').on('change',validaCodigo);
    $('input:eq(3)').on('change',validaEmail);
    $('input:eq(4)').on('click',comprueba);
})
var telefono =false;
var nombre = false;
var codigo = false;
var email = false;

function validaNombre()
{
    let exp = /^[A-Z]{1}[a-z]+$/
    let valor = $(this).val();

    if (exp.test(valor)) {
        if($(this).siblings().length == 1){
            $(this).siblings('span').remove();
        }
        $(this).css({'background-color':'green'});
        nombre = true;
    }else{
        $(this).css({'background-color':'red'});
        if($(this).siblings().length == 0){
            $(this).after('<span>Nombre Incorrecto. Xxxxx</span>');
        }
    }
}

function validaTelefono()
{
        let exp = /\d{3}\-\d{6}$/
        let valor = $(this).val();

        if (exp.test(valor)) {
            if($(this).siblings().length == 1){
                $(this).siblings('span').remove();
            }
            $(this).css({'background-color':'green'});
            telefono = true;
        }else{
            $(this).css({'background-color':'red'});
            if($(this).siblings().length == 0){
                $(this).after('<span>Número Incorrecto. xxx-xxxxxx</span>');
            }
        }
}

function validaCodigo()
{
    let exp = /\d{5}$/
    let valor = $(this).val();

    if (exp.test(valor)) {
        if($(this).siblings().length == 1){
            $(this).siblings('span').remove();
        }

        $(this).css({'background-color':'green'});
        codigo = true;

    }else{
            $(this).css({'background-color':'red'});
            if($(this).siblings().length == 0){
                $(this).after('<span>Código postal Incorrecto. xxxxx</span>');
            }
        }
}

function validaEmail()
{
    let exp = /[A-Za-z1-9]+[@][A-Za-z1-9]+\.[A-Za-z1-9]+$/
    let valor = $(this).val();

    if (exp.test(valor)) {
        if($(this).siblings().length == 1){
            $(this).siblings('span').remove();
        }

        $(this).css({'background-color':'green'});
        email = true;

    }else{
            $(this).css({'background-color':'red'});
            if($(this).siblings().length == 0){
                $(this).after('<span>Email Incorrecto. xxx@xxx.xxx</span>');
            }
        }
}

function comprueba()
{
    let vacio = 0;
    var inputs = $('input');
    inputs = inputs.toArray();

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            vacio++;
        }
    }

    if (vacio > 0 || nombre == false || telefono == false || email == false || codigo == false) {
        $(this).attr('type','button');
        alert('Hay campos vacios o incorrectos');
       /* $( "#f" ).submit(function( event ) {
            return false;
        });*/
    }else{
        alert('Formulario enviado');
        $(this).attr('type','submit');
        /*$( "#f" ).submit(function( event ) {
            return true;
        });*/
    }
}
