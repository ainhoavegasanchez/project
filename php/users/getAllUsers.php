<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../Conexion/ConexionPdoEnv.php';
$conexion = new ConexionPdoEnv();
$pdo = $conexion::conectar();


$stmt = $pdo->prepare("select id,nombre,email from USUARIO");
$stmt->execute();
$registros = $stmt->fetchAll(PDO::FETCH_ASSOC);
$users = [];
foreach ($registros as $reg) {
    $users[] = $reg;
}


$cad = json_encode($users);
echo $cad;
