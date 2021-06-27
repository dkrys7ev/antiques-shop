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

$has_deleted_listing = app_delete_listing( $listing_id );

if ( $has_deleted_listing ) {
	$response['status'] = 'ok';
}

echo json_encode( $response );
exit;
