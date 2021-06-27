<?php
Carbon_Validator::extend( 'wp_nonce', function( $value, $parameters ) {
	return ( wp_verify_nonce( $value, $parameters[0] ) === 1 );
} );
Carbon_Validator::register_default_error_message( 'wp_nonce', 'Security check failed. Please try again.' );

Carbon_Validator::extend( 'wp_post', function( $value, $parameters ) {
	$post = get_post( $value );
	if ( !$post ) {
		return false;
	}

	if ( !empty( $parameters ) && !in_array( $post->post_type, $parameters ) ) {
		return false;
	}

	return true;
} );
Carbon_Validator::register_default_error_message( 'wp_post', 'Invalid post entered.' );

Carbon_Validator::extend( 'wp_user', function( $value, $parameters ) {
	$user = get_userdata( $value );
	
	if ( !$user ) {
		return false;
	}

	foreach ( $parameters as $role_or_capability ) {
		if ( !user_can( $user->ID, $role_or_capability ) ) {
			return false;
		}
	}
	
	return true;
} );
Carbon_Validator::register_default_error_message( 'wp_user', 'Invalid user entered.' );