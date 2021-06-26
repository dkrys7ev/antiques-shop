<?php
require "../../load.php";


if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = array_merge($_POST, array(
        'avatar' => Carbon_FileUpload::make($_FILES['avatar'])
    ));

    $validator = new Carbon_Validator($data, array(
        'name' => 'required',
        'email' => 'required|email',
        'message' => 'required',
        'avatar' => 'required|file:jpg|filesize:1M',
    ));
    
    if ($validator->fails()) {
        echo "<pre>Couldn't validate your input: ";
        print_r($validator->get_errors());
        exit;
    } else {
        echo "Great success! ";
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test form with recaptcha</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <form method="POST" enctype="multipart/form-data">
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
                <label>Avatar</label>
                <input type="file" name="avatar" class="form-control">
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
    
</body>
</html>