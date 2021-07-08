<?php
require "carbon-validator/load.php";
require "includes/helpers.php";

$cv_email_error               = app_get_localized_string( 'cv_email_error' );
$cv_email_error_valid         = app_get_localized_string( 'cv_email_error_valid' );
$cv_password_error            = app_get_localized_string( 'cv_password_error' );
$cv_password_min_length_error = app_get_localized_string( 'cv_password_min_length_error' );

$error_messages = array(
	'email.required'             => $cv_email_error,
	'email.email'                => $cv_email_error_valid,
	'password.required'          => $cv_password_error,
	'password.string_min_length' => $cv_password_min_length_error,
);

$validator = new Carbon_Validator( $_POST, array(
	"email"    => "required|email",
	"password" => "required|string_min_length:8",
), $error_messages );

$response  = array(
	"status" => $validator->passes() ? "ok" : "failed"
);

if ( $validator->passes() ) {
	$user_id = app_get_user( $_POST );

	if ( $user_id ) {
		app_set_auth_cookie( $user_id );
	} else {
		$response['status']     = 'failed';
		$response['auth_error'] = true;
	}
} else {
	$response['errors'] = $validator->get_errors();
}

echo json_encode( $response );
exit;
