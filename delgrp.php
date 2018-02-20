<?php
	
				
    				$gid=$_POST['gid'];
    				//$owner=$_POST['owner'];    				
                    $owner=$_COOKIE['inmarmail'];
    				$conn = new mysqli('localhost', 'root', '', 'contacts');
    				// Check connection
    				if ($conn->connect_error) 
    				{
       					die("Connection failed: " . $conn->connect_error);
                    } 
                    $sql ="DELETE FROM ginf WHERE owner='$owner' and gid ='$gid'";
                    $result= $conn->query($sql);
                    $var=0;
                	if($result==true)
    				{
                       $sql="UPDATE cinf SET gid='$var' WHERE gid='$gid' ";
                       $res= $conn->query($sql);
                       if($res==true)
                        echo "<h4>group deletion successfully</h4>".$gid;
                        else
                        echo "<h4>Error in updating gid in ginf</h4>";
    				}	
    				else
    				{
    					echo "<h4>group deletion failed</h4>";	
    				}	

?>