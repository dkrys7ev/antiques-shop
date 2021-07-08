<?php
require dirname(__DIR__, 1) . "/carbon-validator/load.php";

Carbon_Validator::extend( 'string_only_text', 'app_validate_text' );
function app_validate_text( $string ) {
	return !preg_match( '~[^a-zA-Z]+~', $string );
}

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

	$name = $first . ' ' . $last;

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

	$result = $db->query("
		SELECT u.ID
		FROM `users` AS u
		WHERE u.email = '{$email}' AND
			  u.password = '{$password}'
	");

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

	$result = $db->query("
		SELECT *
		FROM `users` AS u
		WHERE u.ID = '{$user_id}'
	");

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

	$result = $db->query("
		SELECT *
		FROM `products` AS p
		WHERE p.user_id = '{$user_id}'
	");

	if ( $result->num_rows > 0 ) {
		while ( $listing = $result->fetch_assoc() ) {
			array_push( $listings, $listing );
		}
	}

	return $listings;
}

function app_get_user_orders( $user_id ) {
	$orders = array();
	$db     = app_init_database();

	if ( $db->connect_errno ) {
		return $orders;
	}

	$result = $db->query("
		SELECT *
		FROM `orders` AS o
		WHERE o.user_id = '{$user_id}'
	");

	if ( $result->num_rows > 0 ) {
		while ( $order = $result->fetch_assoc() ) {
			array_push( $orders, $order );
		}
	}

	return $orders;
}

function app_get_listings( $search_query ) {
	$listings = array();
	$db       = app_init_database();

	if ( $db->connect_errno ) {
		return $listings;
	}

	if ( ! empty( $search_query ) ) {
		$sql_query = "
			SELECT *
			FROM `products` AS p
			WHERE p.status = 'active' AND
			      p.title LIKE '%{$search_query}%'
		";
	} else {
		$sql_query = "
			SELECT *
			FROM `products` AS p
			WHERE p.status = 'active'
		";
	}


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

	$cart_query = $db->query("
		INSERT INTO `cart_items` (
			user_id,
			product_id
		)
		VALUES (
			'{$user_id}',
			'{$product_id}'
		)
	");

	$products_query = $db->query("
		UPDATE `products`
		SET `status` = 'cart'
		WHERE `products`.`ID` = {$product_id};
	");

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

	$cart_query = $db->query("
		DELETE FROM `cart_items`
		WHERE `cart_items`.`product_id` = {$product_id}
	");

	$products_query = $db->query("
		UPDATE `products`
		SET `status` = 'active'
		WHERE `products`.`ID` = {$product_id};
	");

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

	$result = $db->query("
		SELECT p.ID, p.title, p.description, p.images, p.price
		FROM `cart_items` AS ci
		INNER JOIN `products` as p ON (
			ci.product_id = p.ID
		)
		WHERE ci.user_id = '{$user_id}' AND
			  p.status != 'sold'
	");

	if ( $result->num_rows > 0 ) {
		while ( $item = $result->fetch_assoc() ) {
			array_push( $cart_items, $item );
		}
	}

	return $cart_items;
}

function app_create_order( $order_data ) {
	$db         = app_init_database();
	$user_id    = isset( $_COOKIE["app_user_id"] ) ? $_COOKIE["app_user_id"] : false;
	$cart_items = array();

	if ( ! $user_id || $db->connect_errno ) {
		return false;
	}

	$result = $db->query("
		SELECT p.ID, p.title, p.description, p.images, p.price
		FROM `cart_items` AS ci
		INNER JOIN `products` as p ON (
			ci.product_id = p.ID
		)
		WHERE ci.user_id = '{$user_id}'
	");

	if ( $result->num_rows > 0 ) {
		while ( $item = $result->fetch_assoc() ) {
			array_push( $cart_items, $item );
		}
	}

	if ( ! empty( $cart_items ) ) {
		foreach ( $cart_items as $cart_item ) {
			$product_id = $cart_item['ID'];

			$db->query("
				UPDATE `products`
				SET `status` = 'sold'
				WHERE `products`.`ID` = {$product_id};
			");

			$db->query("
				DELETE FROM `cart_items`
				WHERE `cart_items`.`product_id` = {$product_id}
			");
		}

		extract( $_POST );

		$products = serialize( $cart_items );

		$db->query("
			INSERT INTO `orders` (
				user_id,
				first_name,
				last_name,
				email_address,
				delivery_address,
				order_notes,
				products,
				total,
				payment_type,
				status
			)
			VALUES (
				'{$user_id}',
				'{$first}',
				'{$last}',
				'{$email}',
				'{$delivery_address}',
				'{$notes}',
				'{$products}',
				'{$total_amount}',
				'{$payment_type}',
				'pending'
			)
		");

		return mysqli_insert_id( $db );
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

function app_get_localized_string( $key ) {
	$current_language = isset( $_COOKIE['app_lang'] ) ? $_COOKIE['app_lang'] : 'en';
	$string_json      = file_get_contents( dirname(__DIR__, 1) . DIRECTORY_SEPARATOR .'language/strings.json' );

	if ( $string_json ) {
		$decoded_json = json_decode( $string_json, true );
	}

	return $decoded_json[ $key ][ $current_language ];
}

function app_change_language( $language_code ) {
	return setcookie('app_lang', $language_code, time() + (86400 * 7), '/');
}
