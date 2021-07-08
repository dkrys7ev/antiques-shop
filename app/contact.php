<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/Exception.php";
require "PHPMailer/PHPMailer.php";
require "PHPMailer/SMTP.php";
require "carbon-validator/load.php";
require "includes/config.php";
require "includes/helpers.php";

$cv_first_name_min_length_error = app_get_localized_string( 'cv_first_name_min_length_error' );
$cv_first_name_error            = app_get_localized_string( 'cv_first_name_error' );
$cv_first_name_only_text        = app_get_localized_string( 'cv_first_name_only_text' );
$cv_last_name_min_length_error  = app_get_localized_string( 'cv_last_name_min_length_error' );
$cv_last_name_error             = app_get_localized_string( 'cv_last_name_error' );
$cv_last_name_only_text         = app_get_localized_string( 'cv_last_name_only_text' );
$cv_email_error                 = app_get_localized_string( 'cv_email_error' );
$cv_email_error_valid           = app_get_localized_string( 'cv_email_error_valid' );
$cv_enquiry_error               = app_get_localized_string( 'cv_enquiry_error' );
$cv_message_error               = app_get_localized_string( 'cv_message_error' );
$cv_message_length_error        = app_get_localized_string( 'cv_message_length_error' );

$error_messages = array(
	'first.required'            => $cv_first_name_error,
	'first.string_min_length'   => $cv_first_name_min_length_error,
	'first.string_only_text'    => $cv_first_name_only_text,
	'last.required'             => $cv_last_name_error,
	'last.string_min_length'    => $cv_last_name_min_length_error,
	'last.string_only_text'     => $cv_last_name_only_text,
	'email.required'            => $cv_email_error,
	'email.email'               => $cv_email_error_valid,
	'enquiry.required'          => $cv_enquiry_error,
	'message.required'          => $cv_message_error,
	'message.string_min_length' => $cv_message_length_error,
);

$validator = new Carbon_Validator( $_POST, array(
	"first"   => "required|string_min_length:2|string_only_text",
	"last"    => "required|string_min_length:2|string_only_text",
	"email"   => "required|email",
	"enquiry" => "required",
	"message" => "required|string_min_length:25",
), $error_messages );

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
