<?php
    header('Access-Control-Allow-Origin: *');

    $uploaddir = "uploads/customer/".$_POST['account_id'];

    if($_POST['del']){
        
        unlink($_POST['imgAddress']);
        
        $servername = "localhost";
        $username = "hacker";
        $password = "jimpig38";

        $con = mysqli_connect($servername,$username,$password);
        mysqli_set_charset($con,"utf8");
        mysqli_select_db($con,"wardrobe");
        
        $product_id = $_POST['product_id'];
        $sql="DELETE FROM `wardrobe`.`Product` WHERE `Product`.`product_id` = $product_id";
        
        $result = mysqli_query($con,$sql);
        if($result){
            echo "商品已刪除";
        }
    }
    
    
    //file moving
    $img = "";
    if($_FILES['img']){
        $img = $_FILES['img'];
        
        if(!move_uploaded_file($img['tmp_name'],$_POST['imgAddress'])){
            echo "upload data fail";
        }else{
            echo $_POST['imgAddress'];
            echo "img update";
        }
        
    }

    //SQL
    $servername = "localhost";
    $username = "hacker";
    $password = "jimpig38";

    $con = mysqli_connect($servername,$username,$password);
    mysqli_set_charset($con,"utf8");
    mysqli_select_db($con,"wardrobe");


    $product_id = $_POST['product_id'];
    $own = $_POST['account_id'];
    $pName = $_POST['pName'];
    $pPrice = $_POST['pPrice'];
    $intro = $_POST['intro'];
/*
    $address = $uploaddir.'/'.$newFile;
    $gen = $_POST["genre"];
    $sql = "INSERT INTO `wardrobe`.`Product` (`ID`, `Name`, `Price`, `Address`, `genre`) VALUES (NULL, '$pName', '$pPrice', '$address', '$gen');";
*/
    $gen = $_POST['genre'];
    $kind = $_POST['kind'];
    //echo $gen;
    $address = $uploaddir.'/'.$newFile;
    $sql = "UPDATE `wardrobe`.`Product` SET `Name` = '$pName', `Price` = '$pPrice', `intro` = '$intro', `genre` = '$gen', `kind` = '$kind' WHERE `Product`.`product_id` = $product_id;";
    //echo $sql;
    
    //echo $address;
    $result = mysqli_query($con,$sql);

    if($result)
    echo "商品更新成功";
    
?>
