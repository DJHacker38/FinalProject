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

    $servername = "localhost";
    $username = "hacker";
    $password = "jimpig38";

    $con = mysqli_connect($servername,$username,$password);
    mysqli_set_charset($con,"utf8");
    mysqli_select_db($con,"wardrobe");

    

    //$uploadfile = $_FILES['img']['name'];
    echo "$uploaddir/$uploadfile";

    //deal with encoding problem
    $newFile = mb_convert_encoding($uploadfile, "UTF-8", "auto");

    if(!move_uploaded_file($_FILES['img']['tmp_name'],"$uploaddir/$newFile")){
        echo "upload data fail";
    }

    $pName = $_POST['pName'];
    $pPrice = $_POST['pPrice'];
    $aaaaa = $uploaddir.'/'.$newFile;
    $sql = "INSERT INTO `wardrobe`.`Product` (`ID`, `Name`, `Price`, `Address`) VALUES (NULL, '$pName', '$pPrice', '$aaaaa');";
    echo $aaaaa;
    $result = mysqli_query($con,$sql);

    //iconv("utf-8","big5",$uploadfile)
    
    /*
       echo "File is valid, and was successfully uploaded.\\\\n";
     else {
       echo "Possible file upload attack!\\\\n";
    }
    */
/*
    if(isset($_POST["submit"])){
        $file = $_FILES['img'];
        echo "file get !!!!";
        print_r($file);
        move_uploaded_file($file[tmp_name],"upload/".file[name]);
    }else{
        print_r("didn't found");
    }
    echo "finish";
*/
?>