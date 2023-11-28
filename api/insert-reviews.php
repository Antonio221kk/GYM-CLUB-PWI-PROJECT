<?php

global $conn;
require "connection.php";

session_start();

// Verifica se há usuario na sessão
if (!isset($_SESSION["user"])) {
    echo json_encode([
        "type" => "error",
        "message" => "Pessoa não está logada para comentar"
    ]);
    exit;
}


$user = filter_input_array(INPUT_POST);


if(in_array("", $user)) {
    $response = [
        "type" => "error",
        "message" => "Preencha formulário e informe uma nota de (0 a 10)"
    ];
    echo json_encode($response);
    exit;
} 



$sql = "SELECT id FROM users WHERE email = :email";
$stmt = $conn->prepare($sql);
$stmt->bindParam(":email", $_SESSION["user"]["email"]);
$stmt->execute();
$idMoment = $stmt->fetch();




$query = "INSERT INTO coments (id_coment, users_id, coment, grade) VALUES (NULL, :user, :textarea, :grade)";
$stmt = $conn->prepare($query);
$stmt->bindParam("user", $idMoment["id"]);
$stmt->bindParam("textarea", $user["textarea"]);
$stmt->bindParam("grade", $user["grade"]);
$stmt->execute();



$response = [
    "type" => "success",
    "message" => "Avaliação submetida com sucesso!"
];
echo json_encode($response);