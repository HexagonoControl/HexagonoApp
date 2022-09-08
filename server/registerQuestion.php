<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, GET");
$jsonQuestion = json_decode(file_get_contents("php://input"));

if (!$jsonQuestion) {
    exit("No hay datos");
}
$conect = include_once "conect.php";
$sentencia = $conect->prepare("insert into question(question_name, id_subcategory, active) values (?,?,?)");
$resultado = $sentencia->execute([$jsonQuestion->question_name,$jsonQuestion->id_subcategory,$jsonQuestion->active]);

echo json_encode([
    "resultado" => $resultado,
]);