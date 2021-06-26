<?php
function app_init_database() {
	$host     = 'localhost';
	$username = 'root';
	$password = 'kuku';
	$database = 'antique_shop';

	return @new mysqli($host, $username, $password, $database);
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
	} else {
		return false;
	}
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
