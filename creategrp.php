<?php
	
				
    				$gname=$_POST['gname'];
    				//$owner=$_POST['owner'];    				
                    $owner=$_COOKIE['inmarmail'];
    				$conn = new mysqli('localhost', 'root', '', 'contacts');
    				// Check connection
    				if ($conn->connect_error) 
    				{
       					die("Connection failed: " . $conn->connect_error);
                    } 
                    $sql ="SELECT gid FROM inmareg WHERE email='$owner'";
                    $res= $conn->query($sql);
                    $arr=$res->fetch_assoc();
                    $gid=$arr['gid'];
                    $gid++;
                    //echo "document.console.log('$gid')";
    				$sql = "INSERT INTO ginf VALUES('$owner',$gid,'$gname')";
    				$result = $conn->query($sql);
    				if($result==true)
    				{
                        $sql="UPDATE inmareg SET gid='$gid' WHERE email='$owner' ";
                        $rest= $conn->query($sql);
                        if($rest==true)
                        echo "<h4>group created successfully</h4>".$gid;
                        else
                        echo "<h4>Error in updating gid in inmareg</h4>";
    				}	
    				else
    				{
    					echo "<h4>group creation failed</h4>";	
    				}	

?>