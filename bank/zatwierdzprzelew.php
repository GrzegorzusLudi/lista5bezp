
<?php

session_start();
function err($message){
    
    header("Location: wszystkieprzelewy.php?error=" . $message);
}
$login = $_SESSION['userlogged'];
$id = $_POST['id'];



    $con = mysqli_connect("localhost","root","zaq1@WSX","bank");
    
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    } else if($_SESSION['admin']) {
                $stmt2 = $con->prepare("UPDATE transfer SET confirmed=true where id = ".$id.";");
                if($stmt2){
                    //$stmt2->bind_param('sssssd',$login,$name,$acc,$addr,$title,$amount);
                    $stmt2->execute();
                    if($result = $stmt2->get_result()){
                            header("Location: wszystkieprzelewy.php");
                        
                        //echo "gut";
                    } else {
                            err();
                        
                    }
                    
                }
                
    }


?>