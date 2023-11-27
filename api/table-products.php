<?php

require "connection.php";


$query = "SELECT id_product,name_product, price_product FROM products";
$result = $conn->query($query);

$rows = $result->fetchAll(PDO::FETCH_ASSOC);
$response = $rows;
echo json_encode($response);
