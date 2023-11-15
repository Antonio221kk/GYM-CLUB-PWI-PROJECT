<?php 

require "connection.php";

$data = filter_input_array(INPUT_POST);

if(in_array("",$data)){
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response);
    exit;
}

$query = "SELECT id_product FROM products WHERE name_product = :productName";
$stmt = $conn->prepare($query);
$stmt->bindParam("productName", $data["productName"]);
$stmt->execute();

if ($stmt->rowCount() > 0) {
    
    $response = [
        "type" => "error",
        "message" => "Produto já cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$query = "INSERT INTO products (id_product, name_product, price_product, url_product) VALUES (NULL, :productName, :productPrice, :productUrl)";
$stmt = $conn->prepare($query);
$stmt->bindParam("productName", $data["productName"]);
$stmt->bindParam("productPrice", $data["productPrice"]);
$stmt->bindParam("productUrl", $data["productUrl"]);
$stmt->execute();


if($stmt->rowCount() !== 1){
    $response = [
        "type" => "error",
        "message" => "Produto já cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Produto cadastrado com sucesso!"
];
echo json_encode($response);