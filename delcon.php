<?php
	
				
    				$name=$_POST['cname'];
    				//$owner=$_POST['owner'];    				
                    $owner=$_COOKIE['inmarmail'];
    				$conn = new mysqli('localhost', 'root', '', 'contacts');
    				// Check connection
    				if ($conn->connect_error) 
    				{
       					die("Connection failed: " . $conn->connect_error);
                    } 
                    $sql ="DELETE FROM cinf WHERE owner='$owner' and name ='$name'";
                    $result= $conn->query($sql);
                   
                	if($result==true)
    				{
                       
                        echo "<h4>contact deletion successfully</h4>".$gid;
                        
    				}	
    				else
    				{
    					echo "<h4>contact deletion failed</h4>";	
    				}	

?>