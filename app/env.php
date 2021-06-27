<?php
$variables = array(
	'DB_HOST'     => 'localhost',
	'DB_USERNAME' => 'root',
	'DB_PASSWORD' => 'kuku',
	'DB_NAME'     => 'antique_shop',
	'DB_PORT'     => '3306',
);

foreach ( $variables as $key => $value ) {
	putenv("$key=$value");
}
