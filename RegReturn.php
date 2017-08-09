<?php
    header("Content-Type:text/html; charset=utf-8");

    $a = $_POST["account"];
    
    $con = mysqli_connect('localhost','hacker','jimpig38');

    mysqli_query($con,"set character set utf8");
    mysql_query("SET CHARACTER_SET_database= utf8",$con);
    mysql_query("SET CHARACTER_SET_CLIENT= utf8",$con);
    mysql_query("SET CHARACTER_SET_RESULTS= utf8",$con);

    mysqli_select_db($con,'wardrobe');
    $sql = "SELECT * FROM user_id WHERE account_id = '".$a."' ";
    $result = mysqli_query($con,$sql);
    $hint = "";
    $ret = "此帳號可使用";
    while($row = mysqli_fetch_array($result)){
        if($a==$row[account]){
            $ret = "此帳號已存在";
        }
    }
        
    echo $ret;
?>
