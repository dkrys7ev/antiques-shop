<?php
require "../../load.php";

$validator = new Carbon_Validator($_POST, array(
    "name" => "required",
    "email" => "required|email",
    "message" => "required",
));
$is_post = crb_is_post();

if ($is_post) {
    $success = $validator->passes();

    if ($success) {
        // Send email notification, or whatever. 
    } else {
        $errors = $validator->get_errors();
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Basic Contact Form</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <script type="text/javascript"src="https://www.google.com/recaptcha/api.js?hl=en"></script>
</head>
<body>
    <div class="container" style="padding: 50px 0">
        <form method="POST">
            <?php if ($is_post): ?>
                <?php if ($success): ?>
                    <p class="alert alert-success">Your message has been sent. </p> 
                <?php else: ?>
                    <div class="alert alert-danger">
                        <ul>
                            <?php foreach ($errors as $error): ?>
                                <li><?php echo crb_esc_html($error) ?></li>
                            <?php endforeach ?>
                        </ul>
                    </div>
                 <?php endif ?>
            <?php endif ?>

            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" class="form-control" id="name" value="<?php crb_old_input('name'); ?>">
            </div>

            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" name="email" class="form-control" id="email" value="<?php crb_old_input('email'); ?>">
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" class="form-control"><?php crb_old_input('message'); ?></textarea>
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
    
</body>
</html>