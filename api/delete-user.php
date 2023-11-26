<?php
global $conn;
require "connection.php";

$user = filter_input_array(INPUT_POST);

if (in_array("", $user)) {
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos e selecione um plano"
    ];
    echo json_encode($response);
    exit;
}

if (!filter_var($user["email"], FILTER_VALIDATE_EMAIL)) {
    $response = [
        "type" => "error",
        "message" => "Email Inválido!"
    ];
    echo json_encode($response);
    exit;
}

// Verificar se o usuário existe antes de tentar removê-lo
$query = "SELECT * FROM users WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email", $user["email"]);
$stmt->execute();

if ($stmt->rowCount() !== 1) {
    $response = [
        "type" => "error",
        "message" => "Usuário não encontrado!"
    ];
    echo json_encode($response);
    exit;
}

// Remover o usuário
$query = "DELETE FROM users WHERE email = :email";
$stmt = $conn->prepare($query);
$stmt->bindParam("email", $user["email"]);
$stmt->execute();

if ($stmt->rowCount() !== 1) {
    $response = [
        "type" => "error",
        "message" => "Erro ao remover o usuário!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Usuário removido com sucesso!"
];
echo json_encode($response);
?>
