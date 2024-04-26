<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('CLAVE', "PasswordUsuario");
define('ALGORITMO', "aes-128-ctr");
define('IV', 'zzzzzzzzzzzzzzzz');

require '../Conexion/ConexionPdoEnv.php';
$conexion = new ConexionPdoEnv();
$pdo = $conexion::conectar();

$pass = $_POST['pass'];
$email = $_POST['email'];

$stmt = $pdo->prepare("select id, nombre, email, pass from USUARIO where email=:email");
$stmt->execute([
    ":email" => $email
]);
$usuario = $stmt->fetch(PDO::FETCH_ASSOC);


if ($usuario) {
    $descifrada= desEncriptar($usuario['pass']);
    if ($descifrada == $pass) {
        header('Content-Type: application/json');
        echo json_encode($usuario);
    }
    
}
function desEncriptar(string $cadena)
{
    return openssl_decrypt(
        $cadena,
        ALGORITMO,
        CLAVE,
        0,
        IV
    );
}