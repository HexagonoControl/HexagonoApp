<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonUser = json_decode(file_get_contents("php://input"));
if (!$jsonUser) {
    exit("No hay datos");
}
$bd = include_once "conect.php";
$sentencia = $bd->prepare("UPDATE qrequest SET id_user = ? WHERE id_user = ''");
$resultado = $sentencia->execute([$jsonUser->id_user]);
echo json_encode($resultado);