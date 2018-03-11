<?php

    header("Content-Type:text/html; charset=utf-8");

    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

    //$con = mysqli_connect('localhost','hacker','jimpig38');
    /*
    mysqli_query($con,"set character set utf8");
    mysql_query("SET CHARACTER_SET_database= utf8",$con);
    mysql_query("SET CHARACTER_SET_CLIENT= utf8",$con);
    mysql_query("SET CHARACTER_SET_RESULTS= utf8",$con);
    */
    $sql = "";

    
    $product_id = "";
    $owner = "";
    //echo $product_id;
    if($_POST['product_id']){
        $product_id = $_POST['product_id'];
        $sql = "SELECT * FROM rental_date WHERE product_id = "."'$product_id'";
    }else{
        
    }
    if($_POST['owner']){
        $owner = $_POST['owner'];
        $sql = "SELECT * FROM rental_date WHERE owner = "."'$owner'";
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