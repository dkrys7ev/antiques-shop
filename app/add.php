<?php
require "includes/helpers.php";

extract( $_POST );

$response  = array(
	"status" => "failed"
);

if ( ! isset( $listing_id ) || empty( $listing_id ) ) {
	echo json_encode( $response );
	exit;
}

$has_added_to_cart = app_add_to_cart( $listing_id );

if ( $has_added_to_cart ) {
	$response['status'] = 'ok';
}

echo json_encode( $response );
exit;
