<?php

require "connection.php";


$query = "SELECT id_admin, email_admin FROM admin";
$result = $conn->query($query);

$rows = $result->fetchAll(PDO::FETCH_ASSOC);
$response = $rows;
echo json_encode($response);
