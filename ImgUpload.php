<?php
    

    $uploaddir = "uploads/customer/".$_POST['account_id'];
    
    $tin = $_FILES['img']['name'];
    
    
    $uploadfile = $_POST['uploadT']."_".$_POST['account_id'];
        

    for($i=0;$i<strlen($tin);$i++){
        if(substr($tin,$i,1)==="."){
            $uploadfile = $uploadfile.substr($tin,$i,strlen($tin)+1);
        }
    }

    //$uploadfile = $_FILES['img']['name'];
    echo "$uploaddir/$uploadfile";

    //deal with encoding problem
    $newFile = mb_convert_encoding($uploadfile, "UTF-8", "auto");

    if(!move_uploaded_file($_FILES['img']['tmp_name'],"$uploaddir/$newFile")){
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