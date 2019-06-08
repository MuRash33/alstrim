<?php
if (isset ($_POST['email'])) {
    
  $to = "info@mehanika.tech"; // поменять на свой электронный адрес
  
 
            $bound='mehanika.tech';
            
            // тема письма
            $subject = 'Обратный звонок с Вашего сайта - mehanika.tech';
            
            
  $message = "Email: ".$_POST ['email']."<br>IP: ".$_SERVER['REMOTE_ADDR'];
  $headers  = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $headers .= 'Content-Type: multipart/mixed; boundary="$bound"'. "\r\n";
            $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $headers .= 'Content-Transfer-Encoding: 8bit'. "\r\n";
            // Дополнительные заголовки
            $headers .= 'From: Система информирования <info@mehanika.tech>' . "\r\n";
  mail($to, $subject, $message, $headers);
     }
?>