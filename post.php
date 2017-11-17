<?php
$to      = "samuelalmeidalacremecaffe@gmail.com";
$subject = $_POST['assunto'];
$message = $_POST['mensagem'];
mail($to, $subject, $message);
?> 