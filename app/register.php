<?php
require "carbon-validator/load.php";
require "includes/helpers.php";

$cv_price_error                      = app_get_localized_string( 'cv_price_error' );
$cv_first_name_min_length_error      = app_get_localized_string( 'cv_first_name_min_length_error' );
$cv_first_name_error                 = app_get_localized_string( 'cv_first_name_error' );
$cv_first_name_only_text             = app_get_localized_string( 'cv_first_name_only_text' );
$cv_last_name_min_length_error       = app_get_localized_string( 'cv_last_name_min_length_error' );
$cv_last_name_error                  = app_get_localized_string( 'cv_last_name_error' );
$cv_last_name_only_text              = app_get_localized_string( 'cv_last_name_only_text' );
$cv_email_error                      = app_get_localized_string( 'cv_email_error' );
$cv_email_error_valid                = app_get_localized_string( 'cv_email_error_valid' );
$cv_password_error                   = app_get_localized_string( 'cv_password_error' );
$cv_password_min_length_error        = app_get_localized_string( 'cv_password_min_length_error' );
$cv_repeat_password_error            = app_get_localized_string( 'cv_repeat_password_error' );
$cv_repeat_password_min_length_error = app_get_localized_string( 'cv_repeat_password_min_length_error' );

$error_messages = array(
	'first.required'                    => $cv_first_name_error,
	'first.string_min_length'           => $cv_first_name_min_length_error,
	'first.string_only_text'            => $cv_first_name_only_text,
	'last.required'                     => $cv_last_name_error,
	'last.string_min_length'            => $cv_last_name_min_length_error,
	'last.string_only_text'             => $cv_last_name_only_text,
	'email.required'                    => $cv_email_error,
	'email.email'                       => $cv_email_error_valid,
	'password.required'                 => $cv_password_error,
	'password.string_min_length'        => $cv_password_min_length_error,
	'repeat_password.required'          => $cv_repeat_password_error,
	'repeat_password.string_min_length' => $cv_repeat_password_min_length_error,
);

$validator = new Carbon_Validator( $_POST, array(
	"first"           => "required|string_min_length:2|string_only_text",
	"last"            => "required|string_min_length:2|string_only_text",
	"email"           => "required|email",
	"password"        => "required|string_min_length:8",
	"repeat_password" => "required|string_min_length:8",
), $error_messages );

$response  = array(
	"status" => $validator->passes() ? "ok" : "failed"
);

if ( $validator->passes() ) {
	$user_id = app_register_user( $_POST );

	if ( $user_id ) {
		app_set_auth_cookie( $user_id );
	} else {
		$response['status']  = 'failed';
		$response['message'] = 'Database connection failed! Please, try again later!';
	}
} else {
	$response['errors'] = $validator->get_errors();
}

echo json_encode( $response );
exit;
