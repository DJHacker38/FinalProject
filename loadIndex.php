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

    $add = "WHERE ";
    $genre=-1;
    $kind=-1;
    $owner=-1;

    $genre =  $_POST["genre"];
    $kind =  $_POST["kind"];
    $owner = $_POST["owner"];

    if($genre != ""){
       
       $add .= "genre = ".$genre;    
        
       if($kind != ""){
           $add .= " AND kind = ".$kind;
        }
    }else if($kind != ""){        
        $add .= "kind = ".$kind;        
    }else{
        $add .= "owner =".$owner;
    }
        

    $str = "SELECT * FROM Product ".$add;


        $mysqli = new mysqli('localhost','hacker','jimpig38','wardrobe');
        $mysqli->set_charset("utf8");
        $myArray = array();
        if ($result = $mysqli->query($str)) {
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