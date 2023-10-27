<?php

require "connection.php";

$user = filter_input_array(INPUT_POST);


if(in_array("", $user)){
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
};
echo json_encode($user);    
exit;