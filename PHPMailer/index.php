<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <h1>List of Panel Members</h1>
    <br/>
    <form method="get" action="">
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>Select</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Year_Exp</th>
                <th>Email</th>
                <th>Address</th>
</tr>
</thead>   
<tbody>
<?php


$servername="localhost";
$username="root";
$password="";
$database="Project";

//create connection
$connection=new mysqli($servername,$username,$password,$database);

//check connection
if($connection->connect_error){
    die("Connection failed:".$connection->connect_error);
}

//read all row from database into table

$sql="SELECT * FROm panel_members";
$result=$connection->query($sql);

if(!$result){
    die("Invalid Query".$connection->error);
}

//read data of each row
while($row=$result->fetch_assoc()){
    echo"<tr>
    <td><input type='checkbox' name='option1' value='Option 1'/></td>
     <td>".$row["Name"]."</td>
     <td>".$row["Subject"]."</td>
     <td>".$row["Year_experience"]."</td>
     <td>".$row["Email"]."</td>
     <td>".$row["Address"]."</td>
</tr>";
}  
if(isset($_GET['submit'])) { 
    $var = isset($_GET['option1']); 
    if($var) { 
        echo '<script>alert("Submitted!!!")</script>';
    } 


  } 



//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'vaishnavisidral11@gmail.com';                     //SMTP username
    $mail->Password   = 'lrcezwvuwwhbjzeo';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->SMTPSecure ='tls';
    //Recipients
    $mail->setFrom('vaishnavisidral11@gmail.com', 'Vaishnavi Sidral');
    $mail->addAddress('vaishnavisidral03@gmail.com', 'Vaishnavi Sidral');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo('vaishnavisidral11@gmail.com', 'Vaishnavi Sidral');
   
    //Attachments
     $mail->addAttachment('flower.jpg');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
</tbody>       
</table>
<button type="submit" name="submit" class="btn1">Send Mail</button>
</form>
</body>
</html>