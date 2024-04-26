
<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../Conexion/ConexionPdoEnv.php';
$conexion = new ConexionPdoEnv();
$pdo = $conexion::conectar();

$json = file_get_contents('php://input');
 
$params = json_decode($json);

$fecha= new DateTime("now");

$stmt = $pdo->prepare("INSERT INTO PEDIDO(id, fecha, id_usuario) VALUES(NULL,:fecha, :id_usuario)");
$stmt->execute([
    ":fecha" => $fecha,
    ":id_usuario" => $params->id_usuario
]);