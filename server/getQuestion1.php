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
  $conn->set_charset("utf8");
  $result= mysqli_query($conn,"SELECT question.id_question, question.question_name, question.id_subcategory ,subcategory.subcategory_name,question.active FROM question inner join subcategory on subcategory.id_subcategory = question.id_subcategory where question.id_subcategory = '1' order by question.id_subcategory");
  

  $array =[];
  //$var = array('id' => null, 'placa' => null, 'marca' => null, 'nombres' =>null, 'apellidos' => null, 'telefono' => null, 'observaciones' => null);    
  
  while($row = $result->fetch_assoc()){
    $var = array('id_question' => $row['id_question'],'id_subcategory' => $row['id_subcategory'],'subcategory_name' => $row['subcategory_name'],'question_name' => $row['question_name'], 'active' => $row['active']);    
 array_push($array,($var));  
}
    echo (json_encode($array));
  $conn->close();
           