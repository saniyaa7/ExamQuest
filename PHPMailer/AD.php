<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        textarea{
            margin-left:370px;
            margin-top:20px;
            border-radius:10px;
            border:2px solid black;
        }
        input{
            margin-left:370px;
            margin-top:50px;
            height: 20px;
            border-radius:10px;
            padding-left: 20px;
        
        }
        button{
            background-color:  #4e0552;
            color: white;
            height: 35px;
            font-size: 14px;
            border-radius: 20px;
            margin-left: 370px;
        }
    </style>
</head>
<body>
    <form method="post">
    <input type='text' name='email' id='email' placeholder='Enter Email Address' size='28' /><br/><br/>
    <textarea placeholder='Enter message here....' rows='10' cols='30' class='textarea' name='message'></textarea><br/><br/>
    <button type='submit' name='submit'>Send Mail</button><br/><br/>
    </form>
</body>
</html>

<?php

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
if(isset($_POST['submit'])) {
    // echo "This is Button1 that is selected";
    $email=$_POST['email'];
    $message=$_POST['message'];

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
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
    //Recipients
    $mail->setFrom('vaishnavisidral11@gmail.com', 'Vaishnavi Sidral');
    $mail->addAddress($email, 'Vaishnavi Sidral');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo('vaishnavisidral11@gmail.com', 'Vaishnavi Sidral');
   
    //Attachments
     $mail->addAttachment('flower.jpg');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $message;
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo '<script>alert("Mail Send successfully")</script>';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: Please Enter valid Email Address";
}
}
?>








