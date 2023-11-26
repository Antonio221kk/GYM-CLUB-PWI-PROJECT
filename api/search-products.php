<?php

require "connection.php";

$name = isset($_GET["name"]) ? $_GET["name"] : "";
$stmt = $conn->prepare("SELECT * FROM products WHERE name_product LIKE CONCAT('%', ?, '%')");
$stmt->execute([$name]);
$matchingProducts = $stmt->fetchAll();

header("Content-Type: application/json");
echo json_encode($matchingProducts);

