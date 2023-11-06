<?php

global $conn;
session_start();

require "connection.php";

$user = filter_input_array(INPUT_POST);

if(in_array("",$user)){
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response);
    exit;
}

// valida o email
if(!filter_var($user["email"],FILTER_VALIDATE_EMAIL)){
    $response = [
        "type" => "error",
        "message" => "E-mail inválido!"
    ];
    echo json_encode($response);
    exit;
}

$query = "SELECT * FROM users WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email",$user["email"]);
$stmt->execute();

if($stmt->rowCount() == 0){
    $response = [
        "type" => "error",
        "message" => "E-mail não está cadastrado!"
    ];
    echo json_encode($response);
    exit;
}
// todas as informações do usuário
$userDB = $stmt->fetch();

// verificar se a senha está correta

if(!password_verify($user["password"],$userDB["password"])){
    $response = [
        "type" => "error",
        "message" => "Senha incorreta!"
    ];
    echo json_encode($response);
    exit;
}

$_SESSION["user"] = $userDB;

$response = [
    "type" => "success",
    "message" => "Login efetuado com sucesso!",
    "user" => [
        "id" => $userDB["id"],
        "name" => $userDB["name"],
        "email" => $userDB["email"]
    ]
];

echo json_encode($response);