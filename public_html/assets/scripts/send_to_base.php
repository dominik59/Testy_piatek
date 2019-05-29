<?php
include "DB.php";

$conn = new PDO("mysql:host=$host;dbname=$databaseName", $user, $pass);

if (isset($_POST['imie']) === true) {
    $imie = $_POST['imie'];
}
if (isset($_POST['kontakt']) === true) {
    $kontakt = $_POST['kontakt'];
}
if (isset($_POST['punkty']) === true) {
    $punkty = $_POST['punkty'];
}
$conn -> query ('SET NAMES utf8');
$conn -> query ('SET CHARACTER_SET utf8_unicode_ci');
$result = $conn -> query ("INSERT INTO `wyniki_young` (`Imie`, `Kontakt`, `L_punkt`) VALUES('" . $imie . "', '" . $kontakt . "', '" . $punkty . "');");          //query

echo json_encode($result);
?>