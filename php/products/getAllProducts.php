<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../Conexion/ConexionPdo.php';
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();


$stmt = $pdo->prepare("select id,nombre, descripcion, foto,id_catego, precio from PRODUCTO");
$stmt->execute();
$registros = $stmt->fetchAll(PDO::FETCH_ASSOC);
$prod = [];
foreach ($registros as $reg) {
    $prod[] = $reg;
}


$cad = json_encode($prod);
echo $cad;

