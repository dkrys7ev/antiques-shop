<?php

setcookie("app_user_id", "", time() - 3600, "/");

echo json_encode( array(
	"status" => "ok",
) );

exit;
