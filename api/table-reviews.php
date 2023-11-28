<?php

require "connection.php";


$query = "SELECT users.name,coment,grade FROM coments INNER JOIN users on users.id = coments.users_id";
$result = $conn->query($query);

$rows = $result->fetchAll(PDO::FETCH_ASSOC);
$response = $rows;
echo json_encode($response);