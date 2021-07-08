<?php
require_once dirname( __FILE__, 2 ) . "/vendor/autoload.php";

$stripe = array(
	'secret_key'      => 'sk_test_ubkTgDkF4IBxIsY7LWvEBLue',
	'publishable_key' => 'pk_test_KgMDNEklH2ZaGxfmL7YUOCR2',
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);

$token    = $_POST['stripe_token'];
$email    = filter_var( $_POST['email'], FILTER_VALIDATE_EMAIL );
$name     = preg_replace('~[^a-zA-Z0-9\-\_\.\s]~', '', $_POST['name'] );
$amount   = (float) ( $_POST['total_amount'] * 100 );
$customer = \Stripe\Customer::create([
	'metadata' => array(
		'Customer Name' => $name,
	),
	'description' => 'AntiqueShop Customer',
	'email'       => $email,
	'source'      => $token,
]);

$charge = \Stripe\Charge::create( [
	'amount'      => $amount,
	'customer'    => $customer->id,
	'currency'    => 'eur',
	'description' => 'AntiqueShop Purchase Order #' . uniqid(),
] );

echo json_encode( array(
	"status" => $charge->status
) );

exit;
