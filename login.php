<?php 

header("Cache-Control: no-store, must-revalidate, max-age=0");
header("Pragma: no-cache");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");

$email=$_POST['email'];
$psw=$_POST['psw'];

$conn=new mysqli('localhost','root','','contacts');
if($conn->connect_error)
   die("connection failed:".$conn->connect_error);
else
{
 $sql="SELECT * FROM inmareg WHERE email='$email' psw='$psw'";
 $result=$conn->query($sql); 
}
if($result==true)
{   //echo "success"+$_COOKIE['inmarmail'];
    echo "success";
    if(isset($_COOKIE['inmarmail']) && isset($_COOKIE['inmarpsw']))
    {
        header("Location:dashboard.html");
    }
    else
    {
        setcookie("inmarmail",$email, time() + (86400 * 30), "/");
        setcookie("test",'x', time() + (86400 * 30), "/");
        //setcookie("test","", time() + (86400 * 30), "/");
        header("Location:dashboard.html");
    }
    
   // header("Location:dashboard.html");

}
else
{
    echo"failed"+$_COOKIE['inmarmail'];
    header("Location:index.html");
}
/*$conn=new mysqli('localhost','root','','dinodb');

 if($conn->connect_error)
     die("connection failed:".$conn->connect_error);

   $sql="SELECT (name,details,addeess,number)value() ";
   $result=$conn->query($sql);
   
  */
 ?>