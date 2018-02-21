<?php
        $cname=$_POST['cname'];
        $gid=$_POST['gid'];
        $owner=$_COOKIE['inmarmail'];
		$conn = new mysqli('localhost', 'root', '', 'contacts');
		 
		 if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		 } 
		 $sql = "UPDATE cinf SET gid='$gid' WHERE owner='$owner' and name='$cname' ";
		 $result = $conn->query($sql);
		 if ($result==true) 
		 {
		    echo "successfully added in grp";
		    
         } 
         else 
		 {
		    echo "not added in grp";
		 }
		 

?>