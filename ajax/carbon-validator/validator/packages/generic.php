<?php
Carbon_Validator::extend('required', function($value, $parameters) {
	if (is_null($value)) {
		return false;
	}

	if (is_string($value) && strlen(trim($value)) < 1) {
		return false;
	}

	if (is_array($value) && count($value) < 1) {
		return false;
	}

	if (Carbon_Validator::is_file($value) && !$value->is_uploaded()) {
		return false;
	}

	return true;
});
Carbon_Validator::register_default_error_message('required', 'The field "%1$s" is required.');

Carbon_Validator::extend('in', function($value, $parameters) {
	return in_array($value, $parameters);
});
Carbon_Validator::register_default_error_message('in', 'Please select a valid option.');

Carbon_Validator::extend('email', function($value, $parameters) {
	return filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
});
Carbon_Validator::register_default_error_message('email', 'Please enter a valid email address in the "%1$s" field.');

Carbon_Validator::extend('regex', function($value, $parameters) {
	return (bool)preg_match($parameters[0], $value);
});
Carbon_Validator::register_default_error_message('regex', 'The field "%1$s" doesn\'t match the required format.');

Carbon_Validator::extend('numeric', function($value, $parameters) {
	return is_numeric($value);
});
Carbon_Validator::register_default_error_message('numeric', 'Please enter a numeric value in the "%1$s" field.');

Carbon_Validator::extend('string_min_length', function($value, $parameters) {
	return Carbon_Validator::strlen($value) >= $parameters[0];
});
Carbon_Validator::register_default_error_message('string_min_length', 'Please enter at least %2$s characters in the "%1$s" field.');

Carbon_Validator::extend('string_max_length', function($value, $parameters) {
	return Carbon_Validator::strlen($value) <= $parameters[0];
});
Carbon_Validator::register_default_error_message('string_max_length', 'Please enter no more than %2$s characters in the "%1$s" field.');

Carbon_Validator::extend('numeric_min', function($value, $parameters) {
	return $value >= $parameters[0];
});
Carbon_Validator::register_default_error_message('numeric_min', 'Please enter a number no lesser than %2$s in the "%1$s" field.');

Carbon_Validator::extend('numeric_max', function($value, $parameters) {
	return $value <= $parameters[0];
});
Carbon_Validator::register_default_error_message('numeric_max', 'Please enter a number no greater than %2$s in the "%1$s" field.');

Carbon_Validator::extend('url', function($value, $parameters) {
	return filter_var($value, FILTER_VALIDATE_URL) !== false;	
});
Carbon_Validator::register_default_error_message('url', 'Please a valid URL in the "%1$s" field.');

Carbon_Validator::extend('confirmed', function($value, $parameters, $field, $validator) {
	if (!isset($parameters[0])) {
		throw new Carbon_Validator_InvalidSyntax('You need to provide the name of the confirmation field.');
	}
	$confirmation_field = $parameters[0];

	$confirmed_value = $validator->get_field_value($confirmation_field);
	if ($confirmed_value === null) {
		return false;
	}

	return $value === $confirmed_value;
});
Carbon_Validator::register_default_error_message('confirmed', 'Confirmation for the "%1$s" field is not correct.');

Carbon_Validator::extend('file', function($value, $parameters, $field) {
	if (!Carbon_Validator::is_file($value) || !$value->is_uploaded()) {
		return true;
	}

	$known_mime_types = Carbon_Validator::get_mime_types();

	$allowed_formats = $parameters;

	$allowed_mimes = array();

	foreach ($allowed_formats as $format) {
		$format = strtolower($format);

		if (!isset($known_mime_types[$format])) {
			throw new Carbon_Validator_InvalidSyntax("Unknown format $format. Please add mime types to " .
				dirname(dirname(__FILE__)) . "/mime-types.php");
		}

		$allowed_mimes = array_merge($allowed_mimes, $known_mime_types[$format]);
	}

	if (!in_array($value->get_mime_type(), $allowed_mimes)) {
		$formats = implode(', ', array_map('strtoupper', $parameters));
		throw new Carbon_Validator_ValidationError('Please upload a file with ' . $formats . ' format in the "' . Carbon_Validator::name_to_label($field) . '" field.');
	}

	return true;
});
Carbon_Validator::register_default_error_message('file', 'Please upload a file in the "%1$s" field.');

/**
 * This rule will accept 3 formats:
 *  - integer: assumed size to be in bytes
 *  - 400K: assumed to be in kilobytes
 *  - 4M: assumed to be in megabytes
 */
Carbon_Validator::extend('filesize', function($value, $parameters) {
	if (!Carbon_Validator::is_file($value) || !$value->is_uploaded()) {
		return true;
	}
	$max_size = $parameters[0];

	if (preg_match('~^(\d+)([KM]?)$~i', $max_size, $matches)) {
		$size = $matches[1];
		$size_type = strtolower($matches[2]);

		if ($size_type === "k") {
			$max_size = $size * 1024;
		} else if ($size_type === 'm') {
			$max_size = $size * 1024 * 1024;
		} else {
			$max_size = intval($size);
		}
	} else {
		throw new Carbon_Validator_InvalidSyntax("Couldn't understand max upload size: $max_size");
	}

	return $value->get_size() < $max_size;
});
Carbon_Validator::register_default_error_message('filesize', 'Please upload a file smaller than %2$s in the "%1$s" field.');
