
<?php 
    include "DB.php";
    $con = mysql_connect($host,$user,$pass);
    $dbs = mysql_select_db($databaseName, $con);
    if(isset($_POST['imie'])=== true)
    {
      $imie=$_POST['imie'];
    }
    if(isset($_POST['kontakt'])=== true)
    {
      $kontakt=$_POST['kontakt'];
    }
    if(isset($_POST['punkty'])=== true)
    {
      $punkty=$_POST['punkty'];
    }
    mysql_query("SET NAMES 'utf8' COLLATE 'utf8_polish_ci'");
    $result = mysql_query("INSERT INTO `wyniki_old` (`Imie`, `Kontakt`, `L_punkt`) VALUES('".$imie."', '".$kontakt."', '".$punkty."');" );          //query
    
    echo json_encode($result);
?>