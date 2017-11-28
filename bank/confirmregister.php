
<?php
/*echo "<table style=\"width:100%\">";
echo ("<tr><td>" . "Nazwa odbiorcy" . "</td><td>" . $_POST['name'] . "</td></tr>");
echo "<tr><td>" . "Numer rachunku" . "</td><td>" . $_POST['account'] . "</td></tr>";
echo "<tr><td>" . "Kwota" . "</td><td>" . $_POST['amount'] . " zł</td></tr>";
echo "<tr><td>" . "Adres" . "</td><td>" . $_POST['address'] . "</td></tr>";
echo "<tr><td>" . "Tytuł przelewu" . "</td><td>" . $_POST['title'] . "</td></tr>";

echo "</table>";
*/

session_start();
function err($message){
    
    header("Location: przelew.php?error=" . $message);
}
$login = $_SESSION['userlogged'];
$name = $_POST['name'];
$acc = str_replace(' ', '', $_POST['account']);
$amount = str_replace(',','.',$_POST['amount']);
$addr = $_POST['address'];
$title = $_POST['title'];

if(strlen($acc)!=26 || !ctype_digit($acc)){
    err("err");
} else if(!is_numeric($amount) || floor($amount*100)!=$amount*100) {
    err("err");
} else if($amount<=0) {
    err("err");
} else if($amount>=99999999.99) {
    err("err");
} else if(strlen($name)>70){
    err("err");
} else if(strlen($addr)>70){
    err("err");
} else if(strlen($title)>600){
    err("err");
} else {

    $con = mysqli_connect("localhost","root","zaq1@WSX","bank");
    
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    } else {
        $stmt = $con->prepare("SELECT * FROM users WHERE login='".$login."';");
        //$stmt->bind_param('s',$login);
        $stmt->execute();
        $result = $stmt->get_result();
        if($result){
            if($row=$result->fetch_object()){
                //$con->begin_transaction();
                $stmt2 = ("SELECT addtransfer('".$login."','".$name."','".$acc."','".$addr."','".$title."',".$amount.") as id;");
                $arr = explode(";;",$stmt2);
                echo $arr[0];
                foreach($arr as &$st){
                    //$stmt2->bind_param('sssssd',$login,$name,$acc,$addr,$title,$amount);
                    if($result = $con->query($st)){
                    echo "lol";
                        
                        if($row=$result->fetch_object()){
                            if($row->id){
                                header("Location: confirmed.php?i=" . $row->id);
                            }
                        } else {
                            //err();
                        }
                        //echo "gut";
                    } else {
                        
                    }
                    
                }
                
            } else {
                err("nologin");
            }
        }
    }
}

?>