<?php
global $conn;
require "connection.php";

$admin = filter_input_array(INPUT_POST);

if (in_array("", $admin)) {
    $response = [
        "type" => "error",
        "message" => "Preencha o campo"
    ];
    echo json_encode($response);
    exit;
}

if (!filter_var($admin["email_admin"], FILTER_VALIDATE_EMAIL)) {
    $response = [
        "type" => "error",
        "message" => "Email Inválido!"
    ];
    echo json_encode($response);
    exit;
}

// Verificar se o administrador existe antes de tentar removê-lo
$query = "SELECT * FROM admin WHERE email_admin = :email_admin";
$stmt = $conn->prepare($query);
$stmt->bindParam("email_admin", $admin["email_admin"]);
$stmt->execute();

if ($stmt->rowCount() !== 1) {
    $response = [
        "type" => "error",
        "message" => "Administrador não encontrado!"
    ];
    echo json_encode($response);
    exit;
}

// Remover o administrador
$query = "DELETE FROM admin WHERE email_admin = :email_admin";
$stmt = $conn->prepare($query);
$stmt->bindParam("email_admin", $admin["email_admin"]);
$stmt->execute();

if ($stmt->rowCount() !== 1) {
    $response = [
        "type" => "error",
        "message" => "Erro ao remover o administrador!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Administrador removido com sucesso!"
];
echo json_encode($response);
?>
