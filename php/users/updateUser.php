<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../Conexion/ConexionPdoEnv.php';
$conexion = new ConexionPdoEnv();
$pdo = $conexion::conectar();


$json = file_get_contents('php://input');
 
$params = json_decode($json);


$stmt = $pdo->prepare("UPDATE USUARIO set pass=:pass
 where id=:id");
$stmt->execute([
    ":pass"=> $params->pass,
    ":id"=>$params->id
]);


class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);  