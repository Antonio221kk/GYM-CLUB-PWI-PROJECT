<?php

global $conn;

require "connection.php";

$admin = filter_input_array(INPUT_POST);

if(in_array("",$admin)){
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response);
    exit;
}

// valida o email
if(!filter_var($admin["email"],FILTER_VALIDATE_EMAIL)){
    $response = [
        "type" => "error",
        "message" => "E-mail inválido!"
    ];
    echo json_encode($response);
    exit;
}

$query = "SELECT * FROM admin WHERE email_admin = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email",$admin["email"]);
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
$adminDB = $stmt->fetch();

var_dump($adminDB);

if(!password_verify($admin["password"],$adminDB["password_admin"])){
    $response = [
        "type" => "error",
        "message" => "Senha incorreta!"
    ];
    echo json_encode($response);
    exit;
}


$response = [
    "type" => "success",
    "message" => "Boas vindas Administrador!"
];

echo json_encode($response);