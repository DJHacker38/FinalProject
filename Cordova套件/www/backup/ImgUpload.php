<?php
    
    $uploaddir = "uploads/customer/";
    $uploadfile = $_FILES['img']['name'];  
    echo "$uploaddir/$uploadfile";

    if(!move_uploaded_file($_FILES['img']['tmp_name'],"$uploaddir/$uploadfile")){
        echo "upload data fail";
    }

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