<?php
    header("Content-Type:text/html; charset=utf-8");

    $a = $_POST["account"];
    $p = $_POST["passwd"];
    
    $con = mysqli_connect('localhost','hacker','jimpig38');

    mysqli_query($con,"set character set utf8");
    mysql_query("SET CHARACTER_SET_database= utf8",$con);
    mysql_query("SET CHARACTER_SET_CLIENT= utf8",$con);
    mysql_query("SET CHARACTER_SET_RESULTS= utf8",$con);

    mysqli_select_db($con,'wardrobe');
    $sql = "SELECT * FROM user_id WHERE account_id = '".$a."' ";
    $result = mysqli_query($con,$sql);
    $hint = "";
    $json_string = "1234";
    while($row = mysqli_fetch_array($result)){
        if($p==$row[password]){
            $hint = array(
                'name' => $row[name],
                'account_id' => $row['account_id'] ,
                'password' => $row[password] ,
                'phonenumber' => $row[phonenumber] ,
                'address' => $row[address]
            );
            $json_string = json_encode($hint);
        }
    }
        
    
/*
    echo "<Script>";
    echo "getFile(".json_string.");";
    echo "/<Script>";
*/
    echo $json_string;
?>
