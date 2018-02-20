<?php
        $data1=array();
        $mail=$_COOKIE['inmarmail'];
		$conn = new mysqli('localhost', 'root', '', 'contacts');
		 
		 if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		 } 
		 $sql = "SELECT * FROM cinf WHERE owner='$mail'";
		 $result = $conn->query($sql);
		 if ($result->num_rows > 0) 
		 {
		    
		    while($row = $result->fetch_assoc()) {
		        array_push($data1,array('name'=>$row['name'],'phone'=>$row['phone'],'email'=>$row['email']));
		    }
         } 
         else 
		 {
		    echo "0 results";
		 }
		 echo json_encode($data1);

?>