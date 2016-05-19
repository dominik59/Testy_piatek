<?php 
    include "DB.php";
    
    $con = mysql_connect($host,$user,$pass);
    $dbs = mysql_select_db($databaseName, $con);

    //--------------------------------------------------------------------------
    // 2) Query database for data
    //--------------------------------------------------------------------------
    mysql_query("SET NAMES 'utf8' COLLATE 'utf8_polish_ci'");
    $result = mysql_query("SELECT * FROM $oldTableName " );          //query
    while ( $row = mysql_fetch_row($result) )
    {
      $data[] = $row;
    }
    
    
    //--------------------------------------------------------------------------
    // 3) echo result as json 
    //--------------------------------------------------------------------------
    echo json_encode($data);
?>