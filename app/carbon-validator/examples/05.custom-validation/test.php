<?php
require "../../load.php";

/**
 * Validates IP address and makes sure that it matches format "192.168.XXX.XXX"
 */
function validate_internal_ip_address($value) {
    if (!filter_var($value, FILTER_VALIDATE_IP)) {
        throw new Carbon_Validator_ValidationError("Please enter valid IP address. ");
    }
    $pieces = explode('.', $value);

    if (count($pieces) !== 4) {
        throw new Carbon_Validator_ValidationError("Your IP should have exactly 4 numbers. ");
    }

    if (intval($pieces[0]) !== 192 || intval($pieces[1]) !== 168) {
        throw new Carbon_Validator_ValidationError("Your IP address should start with 192.168 ");
    }

    return true;
}

// Bind the "internal_ip" validation rule to the "validate_internal_ip_address" callback function
Carbon_Validator::extend('internal_ip', 'validate_internal_ip_address');

$validator = new Carbon_Validator($_POST, array(
    'email' => array('required', 'regex:/.*?@(gmail|yahoo)\.com$/', 'email'),
    'ip-address' => 'required|internal_ip',
), array(
    "email.regex" => "Your email address should be in gmail or yahoo."
));

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if ($validator->passes()) {
        echo "Thank you!";
    } else {
        echo "Please correct the below errors:";
        echo "<pre>";
        print_r($validator->get_errors());
        exit;
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test form with recaptcha</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <script type="text/javascript"src="https://www.google.com/recaptcha/api.js?hl=en"></script>
</head>
<body>
    <div class="container">
        <form method="POST">
             <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" class="form-control" id="name">
            </div>

            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" name="email" class="form-control" id="email">
            </div>

            <div class="form-group">
                <label for="ip-address">IP address</label>
                <input type="text" name="ip-address" class="form-control">
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
    
</body>
</html>