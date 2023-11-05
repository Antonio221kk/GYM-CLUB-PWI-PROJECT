<?php
global $conn;
require "connection.php";

$user = filter_input_array(INPUT_POST);


if(in_array("", $user)) {
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos e selecione um plano"
    ];
    echo json_encode($response);
    exit;
} 

if(!filter_var($user["email"],FILTER_VALIDATE_EMAIL)){
    $response = [
        "type" => "error",
        "message" => "Email Invalido!"
    ];
    echo json_encode($response);
    exit;
}

$query = "SELECT * FROM users WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email",$user["email"]);
$stmt->execute();
if($stmt->rowCount() == 1){
    $response = [
        "type" => "error",
        "message" => "E-mail já cadastrado!"
    ];
    echo json_encode($response);
    exit;
}


$query = "INSERT INTO users (id, name, email, password, planId, fk_coments) VALUES (NULL, :name, :email, :password, :planId, NULL)";
$stmt = $conn->prepare($query);
$stmt->bindParam("name", $user["name"]);
$stmt->bindParam("email",$user["email"]);
$password = password_hash($user["password"],PASSWORD_DEFAULT);
$stmt->bindParam("password",$password);
$stmt->bindParam("planId",$user["planId"]);
$stmt->execute();

if($stmt->rowCount() !== 1){
    $response = [
        "type" => "error",
        "message" => "Usuário não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Usuário cadastrado com sucesso!"
];
echo json_encode($response);