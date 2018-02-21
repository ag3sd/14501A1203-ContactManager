<?php
	
		
    				$gname=$_POST['gname'];
                    //$owner=$_POST['owner'];  
                    $gid=$_POST['gid'];  				
                    $owner=$_COOKIE['inmarmail'];
    				$conn = new mysqli('localhost', 'root', '', 'contacts');
    				// Check connection
    				if ($conn->connect_error) 
    				{
       					die("Connection failed: " . $conn->connect_error);
                    } 
                    
                    //echo "document.console.log('$gid')";
    				$sql = "UPDATE ginf SET gname='$gname' WHERE gid='$gid' and owner='$owner' ";
    				$result = $conn->query($sql);
    				if($result==true)
    				{
                        
                        echo "<h4>group created successfully</h4>".$gid;
                       
    				}	
    				else
    				{
    					echo "<h4>group creation failed</h4>";	
    				}	

?>