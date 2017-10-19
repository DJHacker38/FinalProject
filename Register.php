<?php
    header("Content-Type:text/html; charset=utf-8");

    $name = $_POST["name"]."";
    $account = $_POST["account"];
    $passwd = $_POST["password"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $height = $_POST["height"];
    $weight = $_POST["weight"];
    $email = $_POST["email"];

    // $newFile = mb_convert_encoding($_POST["name"], "UTF-8", "auto");
    

    $servername = "localhost";
    $username = "hacker";
    $password = "jimpig38";

   /* $con = mysqli_connect($servername, $username, $password);
    if(mysqli_connect_error()){
        echo "fila to connect mysql";
    }
    */

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
     $sql = "INSERT INTO `wardrobe`.`user_id` (`name`, `account_id`, `password`, `phonenumber`, `address`, `ImgAddress`, `high`, `weight`, `email`) VALUES ('$name', '$account', '$passwd', '$phone', '$address', 'NoneSet', '$height', '$weight', '$email');"; //改成Create語法
     
     $result = mysqli_query($con,$sql);
    
     if($result){
         echo "註冊成功!!";
     }

    


    
/*
    $con = mysql_connect('localhost','hacker','jimpig38');
    $sql = "INSERT INTO 'wardrobe'.'user_id' ('name', 'account_id', 'password', 'phonenumber', 'address', 'ImgAddress', 'high', 'weight', 'email') VALUES ($name, $account, $password, $phone, $address, 'noneSet', $height, $weight, $email);"; 
    
    mysql_query("SET NAMES utf8");

    $result = mysql_query($sql);

    









    /*
    
    $sql = "INSERT INTO 'wardrobe'.'user_id' ('name', 'account_id', 'password', 'phonenumber', 'address', 'ImgAddress', 'high', 'weight', 'email') VALUES ($name, $account, $password, $phone, $address, $height, $weight, $email);";



    $con = new mysqli($servername, $username, $password);

    if($con->connect_error){
        die("Connection fail: ".$con->connect_error);
    }
    echo "Connected successfully!!";



    if($con->query($sql) === true){
        echo "big Error";
    }
    echo "done php";
    $con->close();
/*
    if (!$mysqli->set_charset("utf8")) {
        printf("Error loading character set utf8: %s\n", $mysqli->error);
        exit();
    } else {
        printf("Current character set: %s\n", $mysqli->character_set_name());
    }
*/

    
    
/*
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param(sssssjjs,$name, , $account, $password, $phone, $address, $height, $weight, $email);
    $stmt->execute();

/*
    //mysqli_query($con,"set character set utf8");
    mysql_query("SET CHARACTER_SET_database= utf8",$con);
    mysql_query("SET CHARACTER_SET_CLIENT= utf8",$con);
    mysql_query("SET CHARACTER_SET_RESULTS= utf8",$con);


/*
    mysql_select_db('wardrobe',$con);
    $sql = "INSERT INTO user_id (name, account_id, password, phonenumber, address, high, weight, email) VALUES ($name, $account, $password, $phone, $address, $height, $weight, $email);"; //改成Create語法
    
    mysql_query($sql);

    mysql_close($con);
    
*/    
    
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
    
?>
