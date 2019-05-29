<?php
include "DB.php";

$conn = new PDO("mysql:host=$host;dbname=$databaseName", $user, $pass);

//--------------------------------------------------------------------------
// 2) Query database for data
//--------------------------------------------------------------------------
$conn -> query ('SET NAMES utf8');
$conn -> query ('SET CHARACTER_SET utf8_unicode_ci');
$result = $conn->query("SELECT * FROM $youngTableName ")->fetchAll();


//--------------------------------------------------------------------------
// 3) echo result as json
//--------------------------------------------------------------------------
echo json_encode($result);
?>