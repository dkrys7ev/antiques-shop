<?php
/**
 * Validator bootstrap code. 
 */
$ds = DIRECTORY_SEPARATOR;
$root = dirname(__FILE__) . $ds;

if (!function_exists('crb_read_post')) {
	function crb_read_post($field) {
		if (!isset($_POST[$field])) {
			return "";
		}

		$value = $_POST[$field];

		// Revert magic quotes slashes, if magic quotes are enabled
		if (get_magic_quotes_gpc()) {
			$value = stripslashes($value);
		}

		return $value;
	}
}

if (!function_exists('crb_old_input')) {
	function crb_old_input($field) {
		echo crb_esc_html(crb_read_post($field));
	}
}

if (!function_exists('crb_esc_html')) {
	function crb_esc_html($html) {
		return htmlspecialchars($html, ENT_QUOTES);
	}
}

if (!function_exists('crb_is_post')) {
	function crb_is_post() {
		return $_SERVER['REQUEST_METHOD'] === "POST";
	}
}

require_once($root . "validator" . $ds . "Carbon_FileUpload.php");
require_once($root . "validator" . $ds . "Carbon_Validator.php");

if ( !defined( 'CARBON_VALIDATOR_LOAD_DEFAULT_PACKAGES' ) || CARBON_VALIDATOR_LOAD_DEFAULT_PACKAGES ) {
	Carbon_Validator::load_package('generic');
}