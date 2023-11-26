<?php
global $conn;
require "connection.php";

$product = filter_input_array(INPUT_POST);

if (in_array("", $product)) {
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response);
    exit;
} 

// Verifica se o produto com o id_product especificado existe
$query = "SELECT * FROM products WHERE id_product = :idProd";
$stmt = $conn->prepare($query);
$stmt->bindParam("idProd", $product["idProd"]);
$stmt->execute();

if ($stmt->rowCount() > 0) {
    // Atualiza o produto existente se encontrado
    $updateQuery = "UPDATE products SET name_product = :productName, price_product = :productPrice, url_product = :productUrl WHERE id_product = :idProd";
    $updateStmt = $conn->prepare($updateQuery);
    $updateStmt->bindParam("idProd", $product["idProd"]);
    $updateStmt->bindParam("productName", $product["nameProd"]);
    $updateStmt->bindParam("productPrice", $product["priceProd"]);
    $updateStmt->bindParam("productUrl", $product["urlProd"]);
    $updateStmt->execute();

    if ($updateStmt->rowCount() !== false) {
        $response = [
            "type" => "success",
            "message" => "Produto editado com sucesso!"
        ];
        echo json_encode($response);
        exit;
    } else {
        $response = [
            "type" => "error",
            "message" => "Erro ao editar o produto"
        ];
        echo json_encode($response);
        exit;
    }
} else {
    $response = [
        "type" => "error",
        "message" => "Produto não encontrado"
    ];
    echo json_encode($response);
    exit;
}
?>
