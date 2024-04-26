<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../Conexion/ConexionPdoEnv.php';
$conexion = new ConexionPdoEnv();
$pdo = $conexion::conectar();


$json = file_get_contents('php://input');
 
$params = json_decode($json);


$stmt = $pdo->prepare("UPDATE DETALLE_PEDIDO set id_pedido= :id_pedido, id_producto=:id_producto, cantidad = :cantidad
 where id=:id");
$stmt->execute([
    ":id_pedido" => $params->id_pedido,
    ":id_producto" => $params->id_producto,
    "cantidad"=> $params->cantidad,
    ":id"=>$params->id
]);


class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);  