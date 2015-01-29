<?php

include 'config.php';
	error_reporting (E_ALL ^ E_NOTICE);
	$post = (!empty($_POST)) ? true : false;

if($post)
	{
		include 'functions.php';
		$name = stripslashes($_POST['name']);
		$email = trim($_POST['email']);
		$message = stripslashes($_POST['message']);

		$error = '';

// Check name
if(!$name)
	{
		$error .= 'I think you forget to enter your name.<br />';
	}
// Check email
if(!$email)
	{
		$error .= 'I think you forget to enter your e-mail id.<br />';
	}
if($email && !ValidateEmail($email))
	{
		$error .= 'Invalid E-mail id !!!<br />';
	}
// Check message
if(!$message)
	{
		$error .= 'I think you forget to enter Message.<br />';
	}
if(!$error)
	{
		$mail = mail(WEBMASTER_EMAIL, $subject, $message,
     		"From: ".$name." <".$email.">\r\n"
    		."Reply-To: ".$email."\r\n"
    		."X-Mailer: PHP/" . phpversion());
if($mail)
	{
		echo 'OK';
	}
}
else
	{
		echo '<div class="notification_error">'.$error.'</div>';
	}
}
?>