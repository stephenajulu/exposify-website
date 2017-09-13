<?php

header('Content-Type: application/json');
include('easymail.php');

$name = $_POST['name'];
$mail = $_POST['mail'];
$message = $_POST['message'];
$subject = "Nachricht von $name ($mail) auf www.exposify.de";

if (empty($name) || empty($mail) || empty($message)) {
	return 0;
}

if (isset($_POST['meta'])) {
	$message = $_POST['meta'] . "\n" . $message;
}

$response;
$response['status'] = sendMail('team@exposify.de', $message, $subject, $mail, 'Exposify', $name);
echo json_encode($response);
