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

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;



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
        <td><input type='checkbox' name='check' value='Option 1'/></td>
         <td>".$row["Name"]."</td>
         <td>".$row["Subject"]."</td>
         <td>".$row["Year_experience"]."</td>
         <td>".$row["Email"]."</td>
         <td>".$row["Address"]."</td>
 </tr>";
    }  
    $count=0;
    if(isset($_GET['submit'])) {

       if(isset($_GET['check']))
       {
        // $count++;
        // if($count<=3)
        // {

 //Mail Part
 require 'vendor/autoload.php';

      $mail = new PHPMailer(true);

 try
  {
          //Server settings
          // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
          $mail->isSMTP();
          $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
          $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
          $mail->Username   = 'vaishnavisidral11@gmail.com';                     //SMTP username
          $mail->Password   = 'lrcezwvuwwhbjzeo';                               //SMTP password
          $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
          $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
          $mail->SMTPSecure ='tls';


  $mail->setFrom("vaishnavisidral11@gmail.com");//FROM
 $sql="select * from panel_members where Year_experience=3 ";
 $res=mysqli_query($connection,$sql);
 if(mysqli_num_rows($res)>0)
 {
   $mail->addReplyTo("vaishnavisidral11@gmail.com");//ReplyTo

   //Attachments
   // $mail->addAttachment('');

   while($x=mysqli_fetch_assoc($res))
   {
       $mail->addAddress($x['Email']);
       
   }
   //Content
   $mail->isHTML(true);
   $mail->Subject='This is demo email';
   $mail->Body='<h1>Mail From COE to set Papers</h1>';
   $mail->AltBody='This is html content';
  
          $mail->send();
          echo '<script>alert("Mail Send successfully")</script>';
    }
      
}
    catch (Exception $e) {
          echo "Message could not be sent. Mailer Error: Please Enter valid Email Address";
      }
    }
  }
    else{
      echo'<script>alert("Please select maximum 3 panel members")</script>';
    }
    // }
  
?>
</tbody>       
</table>           
<button type="submit" name="submit" class="btn1">Send Mail</button>
</form>
</body>
</html>