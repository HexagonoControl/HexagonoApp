<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, GET");
$servername ='mysql:host=localhost;dbname=hexagonobd;charset=utf8';
$username = "jlfranco";
$password = "JL1234";
$dbname = "hexagonobd";

$connect = new PDO($servername,$username,$password);
$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
  $connect = include_once "conect.php";
  var_dump($connect);
  $jsonRequest1 = json_decode(file_get_contents("php://input"));
  if (!$jsonRequest1) {
    exit("No hay datos");
}

$array = json_decode(json_encode($jsonRequest1),true);

echo "<pre>";
print_r($array);
echo "</pre>";

     if(is_array($array))  
     { 
      $arraySize = sizeof($array);
     
      for ($i=0; $i < $arraySize; $i++) {
        $id_question = $array[$i]["id_question"];
        var_dump($id_question);
        $id_subcategory = $array[$i]["id_subcategory"];
        $observacion = $array[$i]["observacion"];
     //   $data[$i] = "('$id_question', '$id_subcategory')";
        $sentencia = $connect->prepare("insert into qrequest(id_question, id_subcategory,observacion) VALUES ($id_question,$id_subcategory,'$observacion')");
        $sentencia->bindParam(":id_question", $id_question, PDO::PARAM_INT);
        $sentencia->bindParam(":id_subcategory", $id_subcategory, PDO::PARAM_INT);
        $sentencia->bindParam("':observacion'",$observacion, PDO::PARAM_STR);
        $sentencia->execute();
        var_dump($sentencia);
        
    }
    }
    ?>