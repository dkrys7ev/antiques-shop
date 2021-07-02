<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/Exception.php";
require "PHPMailer/PHPMailer.php";
require "PHPMailer/SMTP.php";
require "carbon-validator/load.php";
require "includes/config.php";

$validator = new Carbon_Validator( $_POST, array(
	"first"   => "required",
	"last"    => "required",
	"email"   => "required|email",
	"enquiry" => "required",
	"message" => "required",
) );

$response  = array(
	"status" => $validator->passes() ? "ok" : "failed"
);

if ( $validator->passes() ) {
	$mail = new PHPMailer(true);

	try {
		# Server SMTP settings
		if ( IS_SMTP_ENABLED === true ) {
			$mail->isSMTP();
			$mail->SMTPDebug  = 0;
			$mail->Host       = SMPT_HOST;
			$mail->SMTPAuth   = SMPT_AUTH;
			$mail->Username   = SMPT_USERNAME;
			$mail->Password   = SMPT_PASSWORD;
			$mail->SMTPSecure = SMPT_SECURE;
			$mail->Port       = SMPT_PORT;
		}

		# Recipients
		$email_from = sprintf( '%s %s', $_POST['first'], $_POST['last'] );
		$email      = $_POST['email'];
		$message    = $_POST['message'];
		$enquiry    = $_POST['enquiry'];

		$mail->setFrom( $_POST['email'], $email_from );

		$mail->addAddress( EMAIL_RECIPIENT );

		# Content
		$mail->isHTML( true );

		$mail->Subject = EMAIL_SUBJECT;
		$mail->Body    = "Name:<br><strong>{$email_from}</strong><br><br>";
		$mail->Body   .= "Email:<br><strong>{$email}</strong><br><br>";
		$mail->Body   .= "How may we help you?<br><strong>{$enquiry}</strong><br><br>";
		$mail->Body   .= "Message:<br><strong>{$message}</strong>";

		$mail->send();
	} catch (Exception $e) {
		echo json_encode( array(
			'status' => 'failed',
			'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
		) );

		exit;
	}
} else {
	$response['errors'] = $validator->get_errors();
}

echo json_encode( $response );
exit;
