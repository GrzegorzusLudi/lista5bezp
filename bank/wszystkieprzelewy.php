<style>
body{background-color:black;color:white;text-align:center}
a{text-decoration:none;color:#ccf}
#zdiv{border:1px solid white;width:600px;margin:auto;margin-top:10px;background-color:#222}
#titl{border:1px solid white;width:600px;font-size:30pt;margin:auto;margin-top:10px;background-color:#222}
#links{font-size:14pt;margin-top:5px}
</style>
</head>
<body>
<div id="titl">
Twój bank
<div id="links">
<?php
session_start();
if(isset($_SESSION['userlogged'])){
    $login = $_SESSION['userlogged'];
    $adm = "";
    $atm = "";
    if($_SESSION['admin']){
        $adm = " <span style=\"color:red\">[ADMIN]</span>";
        $atm = file_get_contents('adminpanel.txt');
    } else {
    header("Location: przelew.php");
    }
    echo("Zalogowany: ".$_SESSION['userlogged'] . $adm . '<br/>' . file_get_contents('logged.txt') . $atm);
} else {
    header("Location: login.php");
}
?>
</div>
</div>
<div id="zdiv">

<p>
<h3>Historia przelewów:</h3>
</p>
<?php

    $con = mysqli_connect("localhost","root","zaq1@WSX","bank");
    
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    } else {
        $stmt = $con->prepare("SELECT *,transfer.id as tranid FROM transfer INNER JOIN users ON transfer.userid=users.id ORDER BY trDate DESC;");
        //$stmt->bind_param('s',$login);
        $stmt->execute();
        $result = $stmt->get_result();
        if($result){
            while($row=$result->fetch_object()){
                $tid = $row->tranid;
                $log = $row->login;
                $name = $row->trName;
                $account = $row->trNr;
                $amount = $row->amount;
                $address = $row->address;
                $title = $row->title;
                $date = $row->trDate;
                $realized = $row->confirmed;
                $kolor = '#855';
                if($realized)
                    $kolor = '#585';
                    
echo '<table style="width:90%;border:1px solid white;margin:20px;background-color:'.$kolor.'">';

echo "<tr><td style=\"border-bottom:1px solid white\">" . "<b>Użytkownik</b>" . "</td><td style=\"border-bottom:1px solid white\"><b>" . $log . "</b></td></tr>";

                if($realized){
echo "<tr><td>" . "Status" . "</td><td>" . "ZREALIZOWANY";
                } else {
echo "<tr><td>" . "Status" . "</td><td>" . "NIEZREALIZOWANY <form method=\"POST\" action=\"zatwierdzprzelew.php\"><input type=\"hidden\" name=\"id\" value=\"".$tid."\"><input type=\"submit\" value=\"ZREALIZUJ\"></form>";

                }
echo "<form method=\"POST\" action=\"removeprzelew.php\"><input type=\"hidden\" name=\"id\" value=\"".$tid."\"><input type=\"submit\" value=\"USUŃ PRZELEW\"></form>" . "</td>";
if($name!=""){
echo "<tr><td>" . "Nazwa odbiorcy" . "</td><td>" . $name . "</td></tr>";
}
echo "<tr><td>" . "Numer rachunku" . "</td><td>" . $account . "</td></tr>";
echo "<tr><td>" . "Kwota" . "</td><td>" . $amount . " zł</td></tr>";
if($address!=""){
echo "<tr><td>" . "Adres" . "</td><td>" . $address . "</td></tr>";
}
if($title!=""){
echo "<tr><td>" . "Tytuł przelewu" . "</td><td>" . $title . "</td></tr>";
}
echo "<tr><td>" . "Data zarejestrowania" . "</td><td>" . $date . "</td></tr>";

            echo "</table>";
            } 
            
        } else {
            echo "uuu";
        }
    }


?>
</div>
</body>
</html>
