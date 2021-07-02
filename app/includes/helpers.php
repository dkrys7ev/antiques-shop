<?php
function app_init_database() {
	$host     = 'localhost';
	$username = 'dkryqtqe_db';
	$password = 'YKWQ^]#=vcw+';
	$database = 'dkryqtqe_db';

	if ( $_SERVER['HTTP_HOST'] === 'localhost' ) {
		$username = 'root';
		$password = 'kuku';
		$database = 'antique_shop';
	}

	return @new mysqli($host, $username, $password, $database);
}

function app_get_page_url( $page = '' ) {
	$page_url = "https://dkrystev.online/{$page}";

	if ( $_SERVER['HTTP_HOST'] === 'localhost' ) {
		$page_url = "http://localhost/projects/dkrystev/antiques-shop/html/{$page}";
	}

	return $page_url;
}

function app_register_user( $user ) {
	$db = app_init_database();

	if ( $db->connect_errno ) {
		return false;
	}

	extract( $user );

	$password  = md5( $password );
	$sql_query = "
		INSERT INTO `users` (
			email,
			password,
			name
		)
		VALUES (
			'{$email}',
			'{$password}',
			'{$name}'
		)
	";

	if ( $db->query( $sql_query ) ) {
		return mysqli_insert_id( $db );
	}

	return false;
}

function app_set_auth_cookie( $user_id ) {
	setcookie('app_user_id', $user_id, 0, '/');
}

function app_get_user( $user ) {
	$db = app_init_database();

	if ( $db->connect_errno ) {
		return false;
	}

	extract( $user );

	$password  = md5( $password );
	$sql_query = "
		SELECT u.ID
		FROM `users` AS u
		WHERE u.email = '{$email}' AND
			  u.password = '{$password}'
	";

	$result = $db->query( $sql_query );

	if ( $result->num_rows > 0 ) {
		$user    = $result->fetch_assoc();
		$user_id = (int) reset( $user );

		return $user_id;
	}

	return false;
}

function app_get_user_info( $user_id ) {
	$db = app_init_database();

	if ( $db->connect_errno ) {
		return false;
	}

	$sql_query = "
		SELECT *
		FROM `users` AS u
		WHERE u.ID = '{$user_id}'
	";

	$result = $db->query( $sql_query );

	if ( $result->num_rows > 0 ) {
		return $result->fetch_assoc();
	}

	return false;
}

function app_get_user_listings( $user_id ) {
	$listings = array();
	$db       = app_init_database();

	if ( $db->connect_errno ) {
		return $listings;
	}

	$sql_query = "
		SELECT *
		FROM `products` AS p
		WHERE p.user_id = '{$user_id}' AND
			  p.status  = 'active'
	";

	$result = $db->query( $sql_query );

	if ( $result->num_rows > 0 ) {
		while ( $listing = $result->fetch_assoc() ) {
			array_push( $listings, $listing );
		}
	}

	return $listings;
}

function app_get_listings() {
	$listings = array();
	$db       = app_init_database();

	if ( $db->connect_errno ) {
		return $listings;
	}

	$sql_query = "
		SELECT *
		FROM `products` AS p
		WHERE p.status = 'active'
	";

	$result = $db->query( $sql_query );

	if ( $result->num_rows > 0 ) {
		while ( $listing = $result->fetch_assoc() ) {
			array_push( $listings, $listing );
		}
	}

	return $listings;
}

function app_create_listing( $data ) {
	$db      = app_init_database();
	$user_id = isset( $_COOKIE["app_user_id"] ) ? $_COOKIE["app_user_id"] : false;

	if ( ! $user_id || $db->connect_errno ) {
		return false;
	}

	$title       = app_sanitize_text($data['title']);
	$description = app_sanitize_text($data['description']);
	$categories  = serialize($data['categories']);
	$images      = serialize($data['images']);
	$price       = floatval($data['price']);
	$status      = 'active';

	$sql_query = "
		INSERT INTO `products` (
			user_id,
			title,
			description,
			categories,
			images,
			price,
			status
		)
		VALUES (
			'{$user_id}',
			'{$title}',
			'{$description}',
			'{$categories}',
			'{$images}',
			'{$price}',
			'{$status}'
		)
	";

	if ( $db->query( $sql_query ) ) {
		return mysqli_insert_id( $db );
	}

	return false;
}

function app_delete_listing( $listing_id ) {
	$db = app_init_database();

	if ( $db->connect_errno ) {
		return false;
	}

	$sql_query = "
		DELETE FROM `products`
		WHERE `products`.`ID` = {$listing_id}
	";

	if ( $db->query( $sql_query ) ) {
		return true;
	}

	return false;
}

function app_sanitize_text( $text ) {
	$text = trim($text);
	$text = strip_tags($text);
	$text = filter_var($text, FILTER_SANITIZE_ADD_SLASHES);
	$text = filter_var($text, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
	$text = filter_var($text, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	$text = htmlentities($text, ENT_QUOTES,'UTF-8');

	return $text;
}
