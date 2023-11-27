<?php

require "connection.php";
session_start();

if (empty($_FILES["foto"]["name"])) {
    echo json_encode([
        "message" => "Selecione uma foto por favor",
        "type" => "error"
    ]);
    exit;
}
if (isset($_FILES["foto"])) {
    $file = $_FILES["foto"];

    if ($file["error"] == UPLOAD_ERR_INI_SIZE || $file["size"] > 1000000) {
        echo json_encode([
            "message" => "Arquivo excedeu limite de tamanho.",
            "type" => "error",
            "error_code" => $file["error"],
        ]);
        exit;
    }

    $extension = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
    $supported_extensions = ["jpg", "jpeg", "png", "webp"];

    if (!in_array($extension, $supported_extensions)) {
        echo json_encode([
            "message" => "Arquivo não é uma imagem válida.",
            "type" => "error",
        ]);
        exit;
    }

    $fileName = md5(microtime()) . "." . $extension;

    if (!move_uploaded_file($file["tmp_name"], "../imageUsers/$fileName")) {
        echo json_encode([
            "message" => "Erro ao enviar arquivo.",
            "type" => "error",
        ]);
        exit;
    
} 
}
$con = ([
    "message" => "Arquivo enviado com sucesso.",
    "type" => "success",
    "fileName" => $fileName,
    "emailUsuario" => $_SESSION["user"]["email"],
]);

    $uploadStatus = "success"; // Defina a variável de status para uso posterior


// Verifique se o upload foi bem-sucedido
if ($uploadStatus == "success") {
    // Use as variáveis definidas em upload.php
    $name = $con['fileName']; // Recupere o nome do arquivo da resposta JSON
    $emailuser = $con['emailUsuario']; // Recupere o e-mail do usuário da resposta JSON

    // ... Seu código existente para se conectar ao banco de dados ...

    $sql = 'UPDATE users SET image = ? WHERE email = ?';
    $stmt = $conn->prepare($sql);

    // Execute a declaração preparada
    $stmt->execute([$name, $emailuser]);

    // Verifique se a consulta foi executada com sucesso
    $rowCount = $stmt->rowCount();

    if ($rowCount > 0) {
        echo json_encode([
            "photo" => $fileName,
            "type" => "success",
        ]);
        exit;
    } else {
        echo json_encode([
            "message" => "Erro ao atualizar o caminho da imagem no banco de dados.",
            "type" => "error"
        ]);

    }

    // Feche a declaração preparada
    $stmt->closeCursor();
} else {
    echo json_encode([
        "message" => "Nenhum arquivo foi enviado ou erro no upload.",
        "type" => "error",
    ]);
    exit;
}
echo json_encode([
    "message" => "Imagem inserida.",
    "type" => "success",
]);


    