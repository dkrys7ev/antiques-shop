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

function app_add_to_cart( $product_id ) {
	$db      = app_init_database();
	$user_id = isset( $_COOKIE["app_user_id"] ) ? $_COOKIE["app_user_id"] : false;

	if ( ! $user_id || $db->connect_errno ) {
		return false;
	}

	$sql_query = "
		INSERT INTO `cart_items` (
			user_id,
			product_id
		)
		VALUES (
			'{$user_id}',
			'{$product_id}'
		)
	";

	$cart_query = $db->query( $sql_query );

	$sql_query = "
		UPDATE `products`
		SET `status` = 'cart'
		WHERE `products`.`ID` = {$product_id};
	";

	$products_query = $db->query( $sql_query );

	if ( $cart_query && $products_query ) {
		return true;
	}

	return false;
}

function app_remove_from_cart( $product_id ) {
	$db      = app_init_database();
	$user_id = isset( $_COOKIE["app_user_id"] ) ? $_COOKIE["app_user_id"] : false;

	if ( ! $user_id || $db->connect_errno ) {
		return false;
	}

	$sql_query = "
		DELETE FROM `cart_items`
		WHERE `cart_items`.`product_id` = {$product_id}
	";

	$cart_query = $db->query( $sql_query );

	$sql_query = "
		UPDATE `products`
		SET `status` = 'active'
		WHERE `products`.`ID` = {$product_id};
	";

	$products_query = $db->query( $sql_query );

	if ( $cart_query && $products_query ) {
		return true;
	}

	return false;
}

function app_get_cart_items() {
	$db         = app_init_database();
	$user_id    = isset( $_COOKIE["app_user_id"] ) ? $_COOKIE["app_user_id"] : false;
	$cart_items = array();

	if ( ! $user_id || $db->connect_errno ) {
		return $cart_items;
	}

	$sql_query = "
		SELECT p.ID, p.title, p.description, p.images, p.price
		FROM `cart_items` AS ci
		INNER JOIN `products` as p ON (
			ci.product_id = p.ID
		)
		WHERE ci.user_id = '{$user_id}'
	";

	$result = $db->query( $sql_query );

	if ( $result->num_rows > 0 ) {
		while ( $item = $result->fetch_assoc() ) {
			array_push( $cart_items, $item );
		}
	}

	return $cart_items;
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
