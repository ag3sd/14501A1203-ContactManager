<?php
	
		
                     $name=$_POST['name'];
                     $phone=$_POST['phone'];
                    $email=$_POST['email'];
                    $key=$_POST['key'];  				
                    $owner=$_COOKIE['inmarmail'];
    				$conn = new mysqli('localhost', 'root', '', 'contacts');
    				// Check connection
    				if ($conn->connect_error) 
    				{
       					die("Connection failed: " . $conn->connect_error);
                    } 
                    
                    //echo "document.console.log('$gid')";
    				$sql = "UPDATE cinf SET name='$name' phone='$phone' email='$email' WHERE name='$key' and owner='$owner' ";
    				$result = $conn->query($sql);
    				if($result==true)
    				{
                       
                        if($rest==true)
                        echo "<h4>contact editedted successfully</h4>".$gid;
                        
    				}	
    				else
    				{
    					echo "<h4>contact edit failed</h4>";	
    				}	

?>