
<?php
    //Llamando campos 
    $mail = $_POST['email'];
    
    
    $header = 'From: ' . $mail . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";
    
    $mensaje = "This user asks us and I authorize us to add him to the withelist " . $mail . ",\r\n";
    $mensaje .= "The e-mail is: " . $mail . " \r\n";
    
    $mensaje .= "Enviado el " . date('d/m/Y', time());
    
    $para = 'info@treefy.io';
    $asunto = 'New user';
    
    mail($para, $asunto, utf8_decode($mensaje), $header);
    header("Location:we_send.html");
?>