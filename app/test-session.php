<?php

session_start();

if(empty($_SESSION["user"])){
    header("Location: ../login.php");
}

var_dump($_SESSION["user"]);