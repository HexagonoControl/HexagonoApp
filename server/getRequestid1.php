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
  }
  $idUser = $_GET["idUser"];
  var_dump($idUser);
  $conn->set_charset("utf8");
  $result= mysqli_query($conn,"SELECT * FROM qrequest WHERE id_user = $idUser");
     
  $array =[];
 
  while($row = $result->fetch_assoc()){
    $var = array('id_user' => $row['id_user'], 'observacion' => $row['observacion'],
    'id_request' => $row['id_request'], 'options' => $row['options'],'id_subcategory' => $row['id_subcategory'],
     'id_question' => $row['id_question']);    
 array_push($array,($var));  
}
    echo (json_encode($array));
  $conn->close();