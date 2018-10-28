<?php

	$data = $_POST['op'];

	if($data == 'libros'){

		$res = array(
								array("Título"=>"Despliegue de Aplicaciones Web", "Portada"=>"daw"),
								array("Título"=>"Montaje y Mantenimiento de Equipos", "Portada"=>"mme"),
								array("Título"=>"Sistemas Operativos en red", "Portada"=>"sor"),
								array("Título"=>"Diseño de Interfaces Web", "Portada"=>"diw")
							);

	}
	else{

		$res = array(
								array("Autor"=>"María Blanca", "publicaciones"=>"4"),
								array("Autor"=>"Juanjo Leyva", "publicaciones"=>"2"),
								array("Autor"=>"Antonio Moral", "publicaciones"=>"1"),
								array("Autor"=>"Juana Rico", "publicaciones"=>"1")
							);


	}

	header('Content-type: application/json; charset=utf-8');
	echo json_encode($res);


?>
