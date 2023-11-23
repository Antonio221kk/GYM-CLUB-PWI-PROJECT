
<?php

require "connection.php";


$stmt = $conn->prepare("SELECT * FROM products");
$stmt->execute();
$allProducts = $stmt->fetchAll();

header("Content-Type: application/json");
echo json_encode($allProducts);
