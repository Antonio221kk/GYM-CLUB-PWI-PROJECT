
<?php

global $conn;
require "connection.php";

session_start();

$user = filter_input_array(INPUT_POST);


if(in_array("", $user)) {
    $response = [
        "type" => "error",
        "message" => "Preencha formulário e informe uma nota de (0 a 10)"
    ];
    echo json_encode($response);
    exit;
} 


$query = "INSERT INTO coments (id_coment, coment, grade) VALUES (NULL, :textarea, :grade)";
$stmt = $conn->prepare($query);
$stmt->bindParam("textarea", $user["textarea"]);
$stmt->bindParam("grade",$user["grade"]);
$stmt->execute();



$response = [
    "type" => "success",
    "message" => "Avaliação submetida com sucesso!"
];
echo json_encode($response);