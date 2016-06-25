<?php

$config = include('config.php');
$email = $_POST['email'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	http_response_code(400);
	echo 'Keine gültige Email Adresse.';
	exit;
}

if ($config['segment_write_key']) {
	require('segment-php/lib/Segment.php');
	Segment::init($config['segment_write_key']);
	Segment::identify([
		'userId' => $email,
		'traits' => [
			'email'  => $email,
			'status' => 'Needs Invite'
		]
	]);
}

// if it isn't an ajax request
if(empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
	header('location:javascript://history.go(-1)');
}
