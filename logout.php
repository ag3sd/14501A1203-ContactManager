<?php 
     
    
     
    unset($_COOKIE['inmarmail']);       
     unset($_COOKIE['test']);
     setcookie('inmarmail',"0", time()-3600,"/");        
    setcookie('test',"0", time()-3600,"/");    

    echo "<h4>Logged Out</h4>";
    echo "<a href='index.html'>click here login</a>";


?>   
