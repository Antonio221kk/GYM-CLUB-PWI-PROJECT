<?php

require "connection.php";

$data = filter_input_array(INPUT_POST);

if (in_array("", $data)) {
    $response = [
        "type" => "error",
        "message" => "Preencha o campo"
    ];
    echo json_encode($response);
    exit;
}

if (empty($data["productId"])) {
    $response = [
        "type" => "error",
        "message" => "ID do produto não fornecido"
    ];
    echo json_encode($response);
    exit;
}

$query = "DELETE FROM products WHERE id_product = :productId";
$stmt = $conn->prepare($query);
$stmt->bindParam("productId", $data["productId"]);
$stmt->execute();

if ($stmt->rowCount() !== 1) {
    $response = [
        "type" => "error",
        "message" => "Erro ao remover o produto!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Produto removido com sucesso!"
];
echo json_encode($response);
?>
