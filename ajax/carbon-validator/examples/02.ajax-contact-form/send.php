<?php
require "../../load.php";

$validator = new Carbon_Validator($_POST, array(
    "name" => "required",
    "email" => "required|email",
    "message" => "required",
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