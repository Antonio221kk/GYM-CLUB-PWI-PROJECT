<?php

require "connection.php";

$user = filter_input_array(INPUT_POST);


if(in_array("",$user)){
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response);
    exit;
}
if(!filter_var($user["email"],FILTER_VALIDATE_EMAIL)){
    $response = [
        "type" => "error",
        "message" => "E-mail inválido!"
    ];
    echo json_encode($response);
    exit;
}