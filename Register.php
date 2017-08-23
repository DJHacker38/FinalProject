<?php
    header("Content-Type:text/html; charset=utf-8");

    $name = $_POST["name"];
    $account = $_POST["account"];
    $password = $_POST["password"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $height = $_POST["height"];
    $weight = $_POST["weight"];
    $email = $_POST["email"];

    
    $con = mysqli_connect('localhost','hacker','jimpig38');

    mysqli_query($con,"set character set utf8");
    mysql_query("SET CHARACTER_SET_database= utf8",$con);
    mysql_query("SET CHARACTER_SET_CLIENT= utf8",$con);
    mysql_query("SET CHARACTER_SET_RESULTS= utf8",$con);

    mysqli_select_db($con,'wardrobe');
    $sql = "INSERT INTO `wardrobe`.`user_id` (`name`, `account_id`, `password`, `phonenumber`, `address`, `high`, `weight`, `email`) VALUES ($name, $account, $password, $phone, $address, $height, $weight, $email);"; //改成Create語法
    mysqli_query($con,$sql);
/*
    $hint = "";
    $ret = "此帳號可使用";
    while($row = mysqli_fetch_array($result)){
        if($a==$row[account]){
            $ret = "此帳號已存在";
        }
    }
  

    echo $ret;

*/
    echo "";
?>