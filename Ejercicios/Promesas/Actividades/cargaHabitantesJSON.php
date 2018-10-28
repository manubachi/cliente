<?php

$habitantes['01'] = 20000;
$habitantes['02'] = 30200;
$habitantes['03'] = 24500;
$habitantes['04'] = 10030;
$habitantes['05'] = 7000;
$habitantes['06'] = 46781;
$habitantes['07'] = 1346;
$habitantes['08'] = 78654;
$habitantes['09'] = 2435;
$habitantes['10'] = 4365;
$habitantes['11'] = 6773;
$habitantes['12'] = 23311;
$habitantes['13'] = 53111;
$habitantes['14'] = 45645;
$habitantes['15'] = 45676;
$habitantes['16'] = 3181;
$habitantes['17'] = 4578;
$habitantes['18'] = 11127;
$habitantes['19'] = 7689;
$habitantes['20'] = 58012;
$habitantes['21'] = 5676;
$habitantes['22'] = 379;
$habitantes['23'] = 23565;
$habitantes['24'] = 90043;
$habitantes['25'] = 54212;
$habitantes['26'] = 7689;
$habitantes['27'] = 124;
$habitantes['28'] = 5788;
$habitantes['29'] = 880;
$habitantes['30'] = 436;
$habitantes['31'] = 4367;
$habitantes['32'] = 2352;
$habitantes['33'] = 9031;
$habitantes['34'] = 43578;
$habitantes['35'] = 46543;
$habitantes['36'] = 2355;
$habitantes['37'] = 23465;
$habitantes['38'] = 5478;
$habitantes['39'] = 12312;
$habitantes['40'] = 34521;
$habitantes['41'] = 23465;
$habitantes['42'] = 42356;
$habitantes['43'] = 23769;
$habitantes['44'] = 23455;
$habitantes['45'] = 6589;
$habitantes['46'] = 12345;
$habitantes['47'] = 2434;
$habitantes['48'] = 2346;
$habitantes['49'] = 34576;
$habitantes['50'] = 76589;

$codigo = trim($_POST['provincia']);

$numHabitantes = $habitantes[$codigo];

sleep(2);
echo '{"habitantes": "'.$numHabitantes.'"}';