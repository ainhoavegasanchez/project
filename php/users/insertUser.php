<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('CLAVE', "PasswordUsuario");
define('ALGORITMO', "aes-128-ctr");
define('IV', 'zzzzzzzzzzzzzzzz');

require '../Conexion/ConexionPdoEnv.php';
$conexion = new ConexionPdoEnv();
$pdo = $conexion::conectar();

$nombre = $_POST['name'];
$email = $_POST['email'];
$pass = $_POST['pass'];

$pass = generatePasswordHash($pass);

$stmt= $pdo->prepare("SELECT nombre, pass, email from USUARIO where 
        email=:email");
$stmt->execute([
    ":email"=>$email    
]);
$usuario = $stmt->fetch();


if(!$usuario){
$stmt = $pdo->prepare("INSERT INTO USUARIO(id, nombre, pass, email) VALUES(NULL,:nombre, :pass, :email)");
$stmt->execute([
    ":nombre" => $nombre,
    ":pass" => $pass,
    ":email" => $email
]);
}

function generatePasswordHash($cadena)
{
    return openssl_encrypt(
        $cadena,
        ALGORITMO,
        CLAVE,
        0,
        IV
    );
}

