<?php declare(strict_types=1);

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');


require '../Conexion/ConexionPdoEnv.php';

$conexion = new ConexionPdoEnv();
$pdo = $conexion::conectar();

$stmt = $pdo->prepare("SELECT id, fecha, id_usuario FROM PEDIDO");
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);
echo json_encode($result);
