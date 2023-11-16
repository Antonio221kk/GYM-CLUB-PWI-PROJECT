<?php
global $conn;
require "connection.php";

$admin = filter_input_array(INPUT_POST);


if(in_array("", $admin)) {
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response);
    exit;
} 

if(!filter_var($admin["email_admin"],FILTER_VALIDATE_EMAIL)){
    $response = [
        "type" => "error",
        "message" => "Email Invalido!"
    ];
    echo json_encode($response);
    exit;
}

$query = "SELECT * FROM admin WHERE email_admin = :email_admin";
$stmt = $conn->prepare($query);
$stmt->bindParam("email_admin",$admin["email_admin"]);
$stmt->execute();
if($stmt->rowCount() == 1){
    $response = [
        "type" => "error",
        "message" => "E-mail já cadastrado!"
    ];
    echo json_encode($response);
    exit;
}


$query = "INSERT INTO admin (id_admin, email_admin, password_admin) VALUES (NULL,:email_admin, :password_admin)";
$stmt = $conn->prepare($query);
$stmt->bindParam("email_admin",$admin["email_admin"]);
$password = password_hash($admin["password_admin"],PASSWORD_DEFAULT);
$stmt->bindParam("password_admin",$password);
$stmt->execute();

if($stmt->rowCount() !== 1){
    $response = [
        "type" => "error",
        "message" => "Administrador não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Administrador adicionado!"
];
echo json_encode($response);