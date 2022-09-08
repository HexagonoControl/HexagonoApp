
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, GET");
$postdata = json_decode(file_get_contents("php://input"));
if (!$postdata) {
    exit("No hay datos");
}
$conect = include_once "conect.php";
$sentencia = $conect->prepare("insert into users(password, email,nit,razon,repres,
ciiu,country,dpto,city,terminos,admin) values (?,?,?,?,?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([$postdata->pwd,$postdata->email,$postdata->nit,$postdata->razon,
$postdata->repres,$postdata->ciiu,$postdata->country,$postdata->dpto,$postdata->city,
$postdata->terminos,$postdata->admin]);
echo json_encode([
    "resultado" => $resultado,
]);