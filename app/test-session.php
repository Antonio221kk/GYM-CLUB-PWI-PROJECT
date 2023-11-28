<?php

session_start();

if (!isset($_SESSION["user"])) {
    echo json_encode([
        "type" => "error",
        "message" => "Sessão não existe"
    ]);
    exit;
}

echo json_encode([
    "type" => "success",
    "message" => "Usuário logado",
    "user" => $_SESSION["user"],
    
]);