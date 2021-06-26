<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Complex Fields Validation</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>

    <script>
        jQuery(function () {
            $('.add-domain').on('click', function () {
                var $lastField = $('.domain-field:last');
                
                $lastField
                    .clone()
                    .val('')
                    .insertAfter($lastField);
            });

            var $form = $('form');
            $form.on('submit', function (e) {
                e.preventDefault();

                $form
                    .removeClass('state-error state-sent')
                    .addClass('state-sending');

                $('.form-group', $form)
                    .removeClass('has-error')

                var request = $.ajax({
                    data: $form.serializeArray(),
                    type: $form.attr('method'),
                    url: $form.attr('action'),
                    dataType: 'json'
                });

                request.success(function (response) {
                    if (response.status === 'OK') {
                        $form.addClass('state-sent');
                        $form.trigger('reset');
                        return;
                    }

                    var $errors = $('<ul></ul>');
                    for (var field in response.errors) {
                        var errorText = response.errors[field];
                        var $errorField = $('*:input[name="' + field + '"]', $form);

                        $errors.append($('<li></li>', {
                            text: errorText
                        }));
                        $errorField
                            .closest('.form-group')
                            .addClass('has-error');
                    };

                    $form.addClass('state-error')
                        .find('.error-container')
                            .empty()
                            .append($errors);
                });

                request.fail(function (jqXHR, textStatus, errorThrown) {
                    alert("We couldn't send your message(" + textStatus + "): " + errorThrown);
                });

                request.always(function () {
                    $form.removeClass('state-sending');
                });
            });
        });
    </script>
    <style>
        .error-container, .sent-container, .sending-container { display: none; }

        .state-sending .sending-container {display: block;}
        .state-sent .sent-container {display: block;}
        .state-error .error-container {display: block;}
    </style>
</head>
<body>
    <div class="container">
        <form method="POST" action="send.php">
            <div class="alert alert-danger error-container">
            </div>

            <div class="alert alert-success sent-container">
               <p>Your message has been sent! </p> 
            </div>

            <div class="alert alert-info sending-container">
               <p>Loading ... please wait</p> 
            </div>
            
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" class="form-control" id="name">
            </div>

            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" name="email" class="form-control" id="email">
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" class="form-control"></textarea>
            </div>

            <div class="form-group">
                <label>Domain Names</label>

                <input type="name" name="domain[]" class="form-control domain-field">
                <a href="#" class="add-domain">+ Add Another Domain</a>
            </div>

            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
    
</body>
</html>