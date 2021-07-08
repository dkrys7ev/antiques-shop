<?php
require "includes/helpers.php";

extract( $_POST );

$response  = array(
	"status" => "failed"
);

if ( ! isset( $language_code ) || empty( $language_code ) ) {
	echo json_encode( $response );
	exit;
}

$has_changed_language = app_change_language( $language_code );

if ( $has_changed_language ) {
	$response['status'] = 'ok';
}

echo json_encode( $response );
exit;
