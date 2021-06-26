<?php
require "carbon-validator/load.php";
require "includes/helpers.php";

$validator = new Carbon_Validator( $_POST, array(
	"name"     => "required",
	"email"    => "required|email",
	"password" => "required|string_min_length:8",
) );

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
