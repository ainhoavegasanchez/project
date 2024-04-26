<?php declare(strict_types=1);

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');

require '../Conexion/ConexionPdoEnv.php';

define('XML', '../catgeories.xml');
$conexion = new ConexionPdoEnv();
$pdo = $conexion::conectar();

$xml = simplexml_load_file(XML);
if ($xml === false) {
    exit('Error al cargar el archivo XML.');
}

$categorias = $xml->categoria;
foreach ($catgeorias as $catgeoria) {
    $stmt = $pdo->prepare("INSERT INTO CATEGORIA(id, nombre) VALUES(NULL,:nombre)");
    $stmt->execute([
        ":nombre" => (string)$categoria->nombre
    ]);
}

