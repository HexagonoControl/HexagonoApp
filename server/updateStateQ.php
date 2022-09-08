<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonQuestion = json_decode(file_get_contents("php://input"));
if (!$jsonQuestion) {
    exit("No hay datos");
}
$bd = include_once "conect.php";
$sentencia = $bd->prepare("UPDATE question SET active = ? WHERE id_question = ?");
$resultado = $sentencia->execute([$jsonQuestion->active, $jsonQuestion->id_question]);
echo json_encode($resultado);