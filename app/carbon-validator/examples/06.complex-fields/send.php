<?php
require "../../load.php";

Carbon_Validator::extend('valid_domain_list', function ($domains) {
	foreach ($domains as $domain) {
		// gethostbyname() returns the unmodified hostname when it can't resolve it.
		if (gethostbyname($domain) === $domain) { 
			throw new Carbon_Validator_ValidationError("The domain name $domain is not valid. ");
		}
	}

	return true;
});

$validator = new Carbon_Validator($_POST, array(
    "name" => "required",
    "email" => "required|email",
    "message" => "required",
    "domain" => "valid_domain_list",
));

$response = array(
	"status" => $validator->passes() ? "OK" : "Error"
);

if ($validator->passes()) {
    // Send email notification, or whatever. 
} else {
	$response['errors'] = $validator->get_errors();
}

echo json_encode($response);