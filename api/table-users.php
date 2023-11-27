<?php

require "connection.php";


$query = "SELECT id,name, email FROM users";
$result = $conn->query($query);

$rows = $result->fetchAll(PDO::FETCH_ASSOC);
$response = $rows;
echo json_encode($response);
