<?php

    header("Content-Type:text/html; charset=utf-8");

    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

    $product_id = $_POST['product_id'];
    $date1 = $_POST['date1'];
    $date2 = $_POST['date2'];
    $owner = $_POST['owner'];
    $renter = $_POST['renter'];
    $contact = $_POST['contact'];
    $address = $_POST['imgAddress'];

    $servername = "localhost";
    $username = "hacker";
    $password = "jimpig38";

    $con = mysqli_connect($servername,$username,$password);
    mysqli_set_charset($con,"utf8");
    mysqli_select_db($con,"wardrobe");

    $sql = "INSERT INTO `wardrobe`.`rental_date` (`record_id`, `product_id`, `date_start`, `date_end`, `owner`, `renter`, `renter_contact`, `imgAddress`) VALUES (NULL, '$product_id', '$date1', '$date2', '$owner', '$renter', '$contact', '$address');";
    //echo $sql;
    
    
    if(mysqli_query($con,$sql)){
        echo "預約已送出";
    }


?>