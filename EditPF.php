<?php
    header("Content-Type:text/html; charset=utf-8");
    header('Access-Control-Allow-Origin: *');

    $name = $_POST["name"]."";
    $account = $_POST["account"];
    $passwd = $_POST["password"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $height = $_POST["height"];
    $weight = $_POST["weight"];
    $email = $_POST["email"];
    $contact = $_POST["contact"];

    // $newFile = mb_convert_encoding($_POST["name"], "UTF-8", "auto");
    

    $servername = "localhost";
    $username = "hacker";
    $password = "jimpig38";

   /* $con = mysqli_connect($servername, $username, $password);
    if(mysqli_connect_error()){
        echo "fila to connect mysql";
    }
    */
    if($height==''){
        $height = 0;
    }
    if($weight==''){
        $weight = 0;
    }

     //$mysqli->set_charset('utf8');
     //mysqli_query("SET NAMES 'UTF8'");
     $con = mysqli_connect($servername,$username,$password);
     mysqli_set_charset($con,"utf8");

/*
     mysqli_query("SET CHARACTER_SET_connection= utf8",$con);
     mysqli_query("SET CHARACTER_SET_database= utf8",$con);
     mysqli_query("SET CHARACTER_SET_CLIENT= utf8",$con);
     mysqli_query("SET CHARACTER_SET_RESULTS= utf8",$con);
 */
     mysqli_select_db($con,"wardrobe");
     $sql = "UPDATE `wardrobe`.`user_id` SET `name` = '$name', `password` = '$passwd', `phonenumber` = '$phone', `address` = '$address', `height` = '$height', `weight` = '$weight', `email` = '$email', `contact` = '$contact' WHERE `user_id`.`account_id` = '$account';"; //改成Create語法
     //echo $sql;
     $result = mysqli_query($con,$sql);
    
     if($result){
         echo "修改成功";
     }
    
    
?>