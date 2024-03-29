<?php
require "carbon-validator/load.php";
require "includes/helpers.php";

$cv_title_error                  = app_get_localized_string( 'cv_title_error' );
$cv_title_min_length_error       = app_get_localized_string( 'cv_title_min_length_error' );
$cv_description_error            = app_get_localized_string( 'cv_description_error' );
$cv_description_min_length_error = app_get_localized_string( 'cv_description_min_length_error' );
$cv_categories_error             = app_get_localized_string( 'cv_categories_error' );
$cv_images_error                 = app_get_localized_string( 'cv_images_error' );
$cv_price_error                  = app_get_localized_string( 'cv_price_error' );

$data = array_merge($_POST, array(
	'images' => Carbon_FileUpload::make($_FILES['images'])
));

$error_messages = array(
	'title.required'                => $cv_title_error,
	'title.string_min_length'       => $cv_title_min_length_error,
	'description.required'          => $cv_description_error,
	'description.string_min_length' => $cv_description_min_length_error,
	'categories[].required'         => $cv_categories_error,
	'images.required'               => $cv_images_error,
	'price.required'                => $cv_price_error,
);

$validator = new Carbon_Validator( $data, array(
	"title"        => "required|string_min_length:3",
	"description"  => "required|string_min_length:50",
	"categories[]" => "required",
	"images"       => "required",
	"price"        => "required",
), $error_messages );

$response  = array(
	"status" => $validator->passes() ? "ok" : "failed"
);

if ( $validator->passes() ) {
	$uploaded_images = array();

	if ( isset( $_FILES['images']['name'] ) && ! empty( $_FILES['images']['name'] ) ) {
		$errors             = array();
		$allowed_extensions = array( "jpeg", "jpg", "png" );
		$files              = $_FILES['images']['name'];

		foreach ( $files as $index => $file_name ) {
			$file_name = sprintf( '%s_%s', time(), $file_name );
			$file_tmp  = $_FILES['images']['tmp_name'][ $index ];
			$file_ext  = @strtolower( end( explode( '.', $file_name ) ) );

			if ( ! in_array( $file_ext, $allowed_extensions ) ) {
				continue;
			}

			$upload_path = dirname(__DIR__, 1) . DIRECTORY_SEPARATOR . 'uploads'. DIRECTORY_SEPARATOR . $file_name;

			move_uploaded_file( $file_tmp, $upload_path );

			$uploaded_images[] = $file_name;
		}
	}

	$listing_data = array_merge( array('images' => $uploaded_images ), $_POST );
	$listing_id   = app_create_listing( $listing_data );

	if ( ! $listing_id ) {
		$response['status']   = 'failed';
		$response['db_error'] = 'Error: ‘Unable to create listing’. Please contact technical support.';
	}
} else {
	$response['errors'] = $validator->get_errors();
}

echo json_encode( $response );
exit;
