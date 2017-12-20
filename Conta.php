<?php
    header("Content-Type:text/html; charset=utf-8");

    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');


    $account_id = $_POST['account_id'];
    
    $sql = "SELECT * FROM `user_id` WHERE `account_id` = "."'$account_id'";

    //echo $gen;
    
    
    //echo $sql;
 
        $mysqli = new mysqli('localhost','hacker','jimpig38','wardrobe');
        $mysqli->set_charset("utf8");
        $myArray = array();
        if ($result = $mysqli->query($sql)) {
            $tempArray = array();
            while($row = $result->fetch_object()) {
                    $tempArray = $row;
                    array_push($myArray, $tempArray);
                }
            echo json_encode($myArray, JSON_UNESCAPED_UNICODE);
        }
    

    $result->close();
    $mysqli->close();
?>