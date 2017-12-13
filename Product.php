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

    $genre =  $_POST["genre"];
    $kind =  $_POST["kind"];

    

    $servername = "localhost";
    $username = "hacker";
    $password = "jimpig38";

    $con = mysqli_connect($servername,$username,$password);
    mysqli_set_charset($con,"utf8");
    mysqli_select_db($con,"wardrobe");


    //echo $gen;
    $address = $uploaddir.'/'.$newFile;
    $sql = "INSERT INTO `wardrobe`.`Product` (`product_id`, `owner`,`Name`, `Price`, `Address`, `intro`, `genre`, `kind`) VALUES (NULL, '$own', '$pName', '$pPrice', '$address', '$intro', '$gen', '$kind');";
    //echo $sql;
    
    //echo $address;
    $result = mysqli_query($con,$sql);


?>