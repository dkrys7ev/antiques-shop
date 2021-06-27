<?php
/**
 * Validate array of data against set of rules
 */
class Carbon_Validator {
	/**
	 * Data to be validated. 
	 */
	private $data = array();

	/**
	 * The initial validation rules. 
	 */
	private $rules = array();

	/**
	 * Default error messages.
	 */
	private static $default_messages = array();

	/**
	 * Custom error messages.
	 */
	private $custom_messages = array();

	/**
	 * Normalized validation rules array. 
	 */
	private $parsed_rules = array();

	/**
	 * 2 dimensional array with error messages. 
	 */
	private $error_messages = array();

	/**
	 * Whether the data has been validated already. 
	 */
	private $validation_performed = false;

	/**
	 * Array with mime types for commonly-used formats. See mime-types.php file. 
	 */
	private static $mime_types = array();

	/**
	 * Custom validation rules. 
	 */
	public static $custom_rules = array();

	/**
	 * Register a custom validation rule. 
	 */
	public static function extend($rule_name, $callback) {
		if (!is_callable($callback)) {
			throw new Carbon_Validator_InvalidSyntax("Second argument of " .
				"Carbon_Validator::extend() is not callable. ");
		}

		self::$custom_rules[$rule_name] = $callback;
	}

	public static function unextend($rule_name) {
		unset(self::$custom_rules[$rule_name]);
	}

	/**
	 * Register a default error message.
	 * The $message is passed through vsprintf with [0] being a user-friendly field label and [1...] being the passed params to the rule
	 */
	public static function register_default_error_message($rule_name, $message) {
		self::$default_messages[$rule_name] = $message;
	}

	public static function unregister_default_error_message($rule_name) {
		unset(self::$default_messages[$rule_name]);
	}

	/**
	 * Load a built-in package of validation rules
	 */
	public static function load_package($package_name) {
		$package_file = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'packages' . DIRECTORY_SEPARATOR . $package_name . '.php';
		if ( is_file($package_file) ) {
			include_once($package_file);
		} else {
			throw new Carbon_Validator_Exception('Attempted to load an unknown package - "' . $package_name . '"');
		}
	}

	/**
	 * Construct the validator object. 
	 */
	function __construct($data, $rules, $custom_messages=array()) {
		$this->rules = $rules;
		$this->data = $data;
		$this->custom_messages = $custom_messages;
	}

	/**
	 * Whether the data is valid according to the rules. 
	 */
	public function passes() {
		$this->perform_validation();
		return !$this->has_errors();
	}

	/**
	 * Whether the data is invalid according to the rules. 
	 */
	public function fails() {
		return !$this->passes();
	}

	/**
	 * When $field is provided, all errors for that
	 * particular field are returned. 
	 * 
	 * When $field is not provided, a hash with errors(as values)
	 * and associated fields(as keys) is returned
	 */
	public function get_errors($field=null) {
		if (is_null($field) && !empty($this->error_messages)) {
			$errors = array();

			foreach ($this->error_messages as $field => $errors_stack) {
				$errors[$field] = $errors_stack[0];
			}

			return $errors;
		}

		return isset($this->error_messages[$field]) ? $this->error_messages[$field] : array(); 
	}

	public function get_all_errors() {
		$errors = array();

		foreach ($this->error_messages as $field => $errors_stack) {
			$errors = array_merge($errors, $errors_stack);
		}

		return $errors;
	}

	/**
	 * Return 2 dimensional array where keys are field names and values are array with errors. 
	 */
	public function get_errors_by_field() {
		return $this->error_messages();
	}

	/**
	 * Return array with all fields with error. 
	 */
	public function get_fields_with_error() {
		return array_keys($this->error_messages);
	}

	/**
	 * Return true if the field is invalid. 
	 */
	public function has_errors($field=null) {
		$errors = $this->get_errors($field);
		return count($errors) > 0;
	}

	/**
	 * Return first error for particular field, or for all fields when no first argument is passed. 
	 */
	public function first_error($field=null) {
		$errors = $this->get_all_errors($field);
		if (isset($errors[0])) {
			return $errors[0];
		}
		return null;
	}
	/* Internal methods */

	/**
	 * Goes through the validation rules and builds the array
	 * errors message array.  
	 */
	protected function perform_validation() {
		if ($this->validation_performed) {
			return;
		}
		
		$this->parse_rules();
		foreach ($this->parsed_rules as $field => $rules) {
			foreach ($rules as $rule_name => $rule_params) {
				$callback = $this->get_rule_callback($rule_name);
				$value = $this->get_field_value($field);

				// Perform the validation. For built-in rules, there are no exceptions,
				// but for custom rules it's easier to throw & catch the validation error. 
				try {
					$result = call_user_func($callback, $value, $rule_params, $field, $this);

					if (!$result) {
						$error = $this->get_error_message($field, $rule_name, $value, $rule_params);
						$this->error_messages[$field][] = $error;
					}
				} catch(Carbon_Validator_ValidationError $e) {
					// Custom validation rules are throw in exceptions 
					$this->error_messages[$field][] = $e->getMessage();
				}
			}
		}

		// Mark input data as validated(so the validation isn't performed again)
		$this->validation_performed = true;
	}

	/**
	 * Determinate the validation rule callback: it might be either
	 * a custom validation rule or built-in validation
	 */
	protected function get_rule_callback($rule_name) {
		if (isset(self::$custom_rules[$rule_name])) {
			return self::$custom_rules[$rule_name];
		}

		$method_name = 'validate_' . $rule_name;
		if (!method_exists($this, $method_name)) {
			throw new Carbon_Validator_InvalidSyntax("Unknown validation rule: $rule_name");
		}

		return array($this, $method_name);
	}

	/**
	 * Get the value of the field under validation. Make sure that 
	 * we're not causing PHP errors if the value is not present in
	 * the input data. 
	 */
	public function get_field_value($field) {
		// Whenever the field name is passed in format like 
		// user[name][first] we need to find the path in the 
		// array.
		$path = array_filter(preg_split('~\]\[|\[|\]~', $field));

		// Make a local reference to work with the data. 
		$data = $this->data;

		// Go through the array keys deeply
		while (count($path) > 0) {
			$next_key = array_shift($path);

			if (isset($data[$next_key])) {
				$data = $data[$next_key];
			} else {
				// There isn't a field with this name in the input data
				return null;
			}
		}

		return $data;
	}

	/**
	 * Normalize validation rules provided by the user, so the validation
	 * code could work with them in consistent way. 
	 */
	protected function parse_rules() {
		foreach ($this->rules as $field => $rules) {
			if (is_string($rules)) {
				$rules = explode('|', $rules);
			}
			foreach ($rules as $rule) {
				// split by the first colon only. For example in regexes there might be
				// more than one colon, all after the first should be left as part of the regex. 
				$rule_parts = explode(':', $rule, 2);
				$rule_name = $rule_parts[0];

				if (isset($rule_parts[1])) {
					if ($rule_name !== 'regex') {
						$rule_params = explode(',', $rule_parts[1]);
					} else {
						$rule_params = array($rule_parts[1]);
					}

				} else {
					$rule_params = array();
				}

				$this->parsed_rules[$field][$rule_name] = $rule_params;
			} 
		}
	}

	/**
	 * Returns an error message for particular field and validation rule
	 * @param  string  $fields  the name of the field in the input
	 * @param  string  $rule  	the name of the rule that has failed
	 * @param  string  $value  	the value of the field
	 * @param  string  $value  	additional
	 */
	protected function get_error_message($field, $rule, $value, $params) {
		$field_label = self::name_to_label($field);
		$vsprintf_args = array_merge(array($field_label), $params);

		$message = 'Invalid value for the "%1$s" field.';

		if (isset($this->custom_messages["$field.$rule"])) {
			$message = $this->custom_messages["$field.$rule"];
		} elseif (isset(self::$default_messages[$rule])) {
			$message = self::$default_messages[$rule];
		}

		return vsprintf( $message, $vsprintf_args );
	}

	/*************************************************/
	/* Static utility methods                        */
	/*************************************************/

	static function name_to_label($field_name) {
		return ucwords(preg_replace('~[\-_]~', " ", $field_name));
	}

	static function is_file($value) {
		return $value instanceof Carbon_FileUpload;
	}

	public static function get_mime_types() {
		// Load the mime types just once
		if (empty(self::$mime_types)) {
			self::$mime_types = require_once(dirname(__FILE__) .
				DIRECTORY_SEPARATOR . 'mime-types.php');
		}
		return self::$mime_types;
	}

	static function strlen($str) {
		if (function_exists('mb_strlen')) {
			return mb_strlen($str, "UTF-8");
		} else if (function_exists('iconv_strlen')) {
			return iconv_strlen($str, "UTF-8");
		} else {
			return strlen($str);
		}
	}
}

// Thrown when a Carbon Validator method is not being used correctly
class Carbon_Validator_Exception extends Exception {}

// Thrown when validation declaration isn't correct. 
class Carbon_Validator_InvalidSyntax extends Exception {}

// Just an empty class used for custom validation rules
class Carbon_Validator_ValidationError extends Exception {}