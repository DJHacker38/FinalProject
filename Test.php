<?php
    header("Content-Type:text/html; charset=utf-8");

    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

    $product_id = "";
    $account = "";
    
    $sql = "";

    if($_POST['product_id']){
        $product_id = $_POST['product_id'];    
    }
    if($_POST['account']){
        $account = $_POST['account'];
    }
    
    


    if($product_id!=""){
        $sql = "SELECT * FROM `Product` WHERE `product_id` = ".$product_id;
    }
    if($account!=""){
        $sql = "SELECT * FROM `user_id` WHERE `account_id` = "."'$account'";
    }
    

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