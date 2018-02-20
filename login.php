<?php

    $email=$_POST['email'];
    $psw=$_POST['psw'];

$conn = new mysqli('localhost', 'root', '', 'contacts');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
 } 
 $sql = "SELECT * FROM inmareg WHERE email='$email' AND psw='$psw'";
 $result = $conn->query($sql);
 if($result==true)
 {
     echo "success";
     setcookie("inmarmail",$email,time()+ (86400 * 30), "/");
     setcookie("inmarpsw",$psw,time()+ (86400 * 30), "/");
     setcookie("test","x",time()+ (86400 * 30), "/");
     header('location:dashboard.html');
 }
 else
 {
     echo "failed";
 }
?>