<?php
	
				
    				$name=$_POST['name'];
                    //$owner=$_POST['owner']; 
                    $phone=$_POST['phone'];
                    $email=$_POST['email'];
                    $gid=$_POST['gid'];   				
                    $owner=$_COOKIE['inmarmail'];
    				$conn = new mysqli('localhost', 'root', '', 'contacts');
    				// Check connection
    				if ($conn->connect_error) 
    				{
       					die("Connection failed: " . $conn->connect_error);
                    } 
                    
                        $sql = "INSERT INTO cinf VALUES('$name','$phone','$email',$gid,'$owner')";
    				    $result = $conn->query($sql);
                    
                    //echo "document.console.log('$gid')";
    				
    				if($result==true)
    				{
                       
                        echo "<h4>group created successfully</h4>".$gid;
                        
    				}	
    				else
    				{
    					echo "<h4>group creation failed</h4>";	
    				}	

?>