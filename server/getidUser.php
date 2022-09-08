<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, GET");
$servername = "localhost";
$username = "jlfranco";
$password = "JL1234";
$dbname = "hexagonobd";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } else {
    if (empty($_GET["idUser"])) {
        exit("No hay id de usuario");
    } 
    $idUser = $_GET["idUser"];
    $conn = include_once "conect.php";
    $sentencia = $conn->prepare("select * from users where id_user = ?");
    $sentencia->execute([$idUser]);
    $user = $sentencia->fetchObject();
    echo json_encode($user);
    }