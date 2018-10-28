<?php
header("Content-type: application/json");

switch ($_GET['ejercicio']) {
    case '1':
        sleep(1);
        echo '{"saludo": "Hola mundo!", "finalPiramide": "QUE FEO!"}';
        break;
    
    case '2':
        sleep(1);
        echo '{"saludo": "Hola '.$_GET['nombre'].'!"}';
        break;

    case '3':
        echo '{"instante": "'.date('H:i:s').'"}';
        break;

    case '4':
        sleep($_GET['espera']);
        echo '{"numero": "'.$_GET['numero'].'"}';
        break;        

    default:
        break;
};
