<?php
require "../../load.php";
require "recaptchalib.php";


function validate_recaptcha($value) {
    $recaptcha = new ReCaptcha('6LdzkgITAAAAAIea9tSgCpBB0z1WDqItLO24bsow');

    $result = $recaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $value
    );

    return $result->success;
}
Carbon_Validator::extend('recaptcha', 'validate_recaptcha');

$validator = new Carbon_Validator($_POST, array(
    'name' => 'required',
    'email' => 'required|email',
    'message' => 'required',
    'g-recaptcha-response' => 'recaptcha',
), array(
    'g-recaptcha-response.recaptcha' => "The SPAM robot check has failed. Please try again. ",
));

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if ($validator->fails()) {
        echo "<pre>Couldn't validate your input: ";
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
                <input type="text" class="form-control" id="name" name="name">
            </div>

            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" name="email">
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" class="form-control"></textarea>
            </div>
            <div class="form-group">
                <label>Captcha</label>
                <div class="g-recaptcha" data-sitekey="6LdzkgITAAAAAMYFVblIgpddBDDOpUA0ewk0m-8v"></div>
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
    
</body>
</html>