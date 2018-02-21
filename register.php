
<?php
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$aadhar=$_POST['aadhar'];
$email=$_POST['email'];
$psw=$_POST['psw'];
$phone=$_POST['phone'];
$gender=$_POST['gender'];
$gid=0;
$conn=new mysqli('localhost','root','','contacts');

//connection establishment

if($conn->connect_error)
   die("connection failed:".$conn->connect_error);
else
{
 $sql="INSERT INTO inmareg (email,fname,lname,psw,aadhar,phone,gender,gid) VALUES('$email','$fname','$lname','$psw','$aadhar','$phone','$gender','$gid')";
 $result=$conn->query($sql); 
}
 
 if($result==true)
 {
    echo "uploaded successfully";
    header('location:index.html');
 }
  
 else
  echo "uploading failed";  
  $conn->close(); 
?> 
