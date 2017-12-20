<?php
    header('Access-Control-Allow-Origin: *');

    $uploaddir = "uploads/customer/".$_POST['account_id'];
    
    $tin = $_FILES['img']['name'];
    
    
    $uploadfile = $_POST['uploadT']."_".$_POST['account_id'];
        

    /*  old way to check the type of image
    for($i=0;$i<strlen($tin);$i++){
        if(substr($tin,$i,1)==="."){
            $uploadfile = $uploadfile.substr($tin,$i,strlen($tin)+1);
        }
    }
    */
    //number the upload img
/*
    if(exif_imagetype($_FILES['img']['tmp_name']) != IMAGETYPE_JPEG){
        echo "this is not a jpeg file";
        return;
    }else{
        $id = $_POST['account_id'];
        for($i=1;;$i++){
            
            if(file_exists("uploads/customer/".$id."/".$uploadfile."_$i.jpg")){
            }else{
                //echo "uploads/customer/".$id."/".$uploadfile."_1.jpg";
                $uploadfile = $uploadfile."_".$i;
                break;
            }
        }
        
        $uploadfile = $uploadfile.".jpg";
    }
*/
    $id = $_POST['account_id'];
        for($i=1;;$i++){
            if(file_exists("uploads/customer/".$id."/".$uploadfile."_$i.jpg")){
            }else{
                //echo "uploads/customer/".$id."/".$uploadfile."_1.jpg";
                $uploadfile = $uploadfile."_".$i;
                break;
            }
        }
        //file name
$uploadfile = $uploadfile.".jpg";
$newFile = mb_convert_encoding($uploadfile, "UTF-8", "auto");





    //$uploadfile = $_FILES['img']['name'];
    //echo "$uploaddir/$uploadfile";

    //deal with encoding problem
    

    if(!move_uploaded_file($_FILES['img']['tmp_name'],"$uploaddir/$newFile")){
        echo "upload data fail";
    }
   
    $servername = "localhost";
    $username = "hacker";
    $password = "jimpig38";

    $con = mysqli_connect($servername,$username,$password);
    mysqli_set_charset($con,"utf8");
    mysqli_select_db($con,"wardrobe");



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
    $sql = "INSERT INTO `wardrobe`.`Product` (`product_id`, `owner`,`Name`, `Price`, `Address`, `intro`, `genre`, `kind`) VALUES (NULL, '$own', '$pName', '$pPrice', '$address', '$intro', '$gen', '$kind');";
    //echo $sql;
    
    //echo $address;
    $result = mysqli_query($con,$sql);

    if($result)
    echo "圖片上傳成功";
    
?>
