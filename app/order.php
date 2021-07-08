<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/Exception.php";
require "PHPMailer/PHPMailer.php";
require "PHPMailer/SMTP.php";
require "carbon-validator/load.php";
require "includes/config.php";
require "includes/helpers.php";

$cv_first_name_error            = app_get_localized_string( 'cv_first_name_error' );
$cv_first_name_min_length_error = app_get_localized_string( 'cv_first_name_min_length_error' );
$cv_last_name_error             = app_get_localized_string( 'cv_last_name_error' );
$cv_last_name_min_length_error  = app_get_localized_string( 'cv_last_name_min_length_error' );
$cv_email_error                 = app_get_localized_string( 'cv_email_error' );
$cv_email_error_valid           = app_get_localized_string( 'cv_email_error_valid' );
$cv_delivery_address_error      = app_get_localized_string( 'cv_delivery_address_error' );

$error_messages = array(
	'first.required'            => $cv_first_name_error,
	'first.string_min_length'   => $cv_first_name_min_length_error,
	'last.required'             => $cv_last_name_error,
	'last.string_min_length'    => $cv_last_name_min_length_error,
	'email.required'            => $cv_email_error,
	'email.email'               => $cv_email_error_valid,
	'delivery_address.required' => $cv_delivery_address_error,
);

$validator = new Carbon_Validator( $_POST, array(
	"first"            => "required|string_min_length:2",
	"last"             => "required|string_min_length:2",
	"email"            => "required|email",
	"delivery_address" => "required",
), $error_messages );

$response  = array(
	"status" => $validator->passes() ? "ok" : "failed"
);

if ( $validator->passes() ) {
	$order_id = app_create_order( $_POST );

	if ( $order_id ) {
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

			extract( $_POST );

			$email_from = sprintf( '%s %s', $first, $last );

			# Recipients
			$mail->setFrom( $email, $email_from );
			$mail->addAddress( EMAIL_RECIPIENT );
			$mail->addAddress( $email );

			# Content
			$mail->isHTML( true );

			if ( $payment_type == 'cod' ) {
				$payment_type = 'Cash on Delivery';
			} else {
				$payment_type = 'Credit Card';
			}

			$total_amount  = sprintf( '€%s', number_format( $total_amount, 2 ) );

			$mail->Subject = "[AntiqueShop] New Purchase Order";
			$mail->Body    = "From:<br><strong>{$email_from}</strong><br><br>";
			$mail->Body   .= "Email:<br><strong>{$email}</strong><br><br>";
			$mail->Body   .= "Delivery Address:<br><strong>{$delivery_address}</strong><br><br>";
			$mail->Body   .= "Total Amount:<br><strong>{$total_amount}</strong><br><br>";
			$mail->Body   .= "Payment Type:<br><strong>{$payment_type}</strong><br><br>";
			$mail->Body   .= "Order Notes:<br><strong>{$notes}</strong><br><br>";

			$mail->send();
		} catch (Exception $e) {
			echo json_encode( array(
				'status' => 'failed',
				'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
			) );

			exit;
		}
	}
} else {
	$response['errors'] = $validator->get_errors();
}

echo json_encode( $response );

exit;
