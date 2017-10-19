<?php
    header("Content-Type:text/html; charset=utf-8");

    $acc = $_POST["account"];
    

    $servername = "localhost";
    $username = "hacker";
    $password = "jimpig38";

    $con = mysqli_connect($servername,$username,$password);
    mysqli_set_charset($con,"utf8");



    mysqli_select_db($con,'wardrobe');

    $sql = "SELECT * FROM user_id WHERE account_id = '$acc'";
    $result = mysqli_query($con,$sql);
    //echo $result;
    $hint = "";
    $ret = "此帳號未搜尋"."$sql";
    //echo "result:".$result;
    if(!$result){
        echo 'Could not run query:'.mysqli_error();
    }
    $f = 2;
    while($row = mysqli_fetch_array($result)){
        $f = 1;
        if($acc==$row[account_id]){
            echo "此帳號已註冊";
            $f = 0;
            exit();
        }else{
            
        }
    }
    if($f==1){
        echo "此帳號可使用";
    }else if(f==2){
        echo $ret;
    }
?>
