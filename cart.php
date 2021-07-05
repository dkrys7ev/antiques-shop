<?php
if ( ! isset( $_COOKIE['app_user_id'] ) ) {
	header("Location: login.php");
	exit;
}

include_once 'partials/header.php';
include_once 'app/includes/helpers.php';

$cart_items = app_get_cart_items();
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<div class="hero hero--alt bg-base">
		<div
		class="hero__image"
		data-aos="fade-up"
		style="
		background-image: url(assets/dist/images/temp/shopping-carts-1275480_1920.jpg);
		"
		></div>
		<!-- /.hero__bg -->

		<div class="hero__content" data-aos="fade-up">
			<h1 class="hero__title">Cart</h1>
			<!-- /.hero__title -->
		</div>
		<!-- /.hero__content -->
	</div>
	<!-- /.hero -->

	<section class="section">
		<div class="shell">
			<div class="section__head">
				<h2 class="section__title" data-aos="fade-up">
					Your order
				</h2><!-- /.section__title -->
			</div><!-- /.section__head -->

			<div class="section__content js-cart" style="text-align: center;">
				<?php if ( empty( $cart_items ) ) : ?>
					<h4>You have no items in your shopping cart</h4>

					<p>
						<a href="<?php echo app_get_page_url('shop'); ?>" class="btn btn--border btn--border-base">
							<span>Back to the Shop</span>
						</a>
					</p>
				<?php else :
					?>
					<div class="cart-items">
						<ul>
							<?php
							$subtotal = 0;

							foreach( $cart_items as $item ) :
								$image_path = false;

								if ( ! empty( $item['images'] ) ) {
									$images = unserialize( $item['images'] );
									$image = reset( $images );
									$image_path = sprintf( 'uploads/%s', $image );
								}

								$subtotal += (float) $item['price'];
								?>

								<li class="cart-item">
									<div class="cart-item__inner">
										<div class="cart-item__aside">
											<div class="cart-item__aside-image image-fit js-image-fit">
												<img src="<?php echo $image_path; ?>" alt="">
											</div><!-- /.cart-item__aside-image -->
										</div><!-- /.cart-item__aside -->

										<div class="cart-item__content">
											<button type="button" class="cart-item__btn js-remove" data-listing="<?php echo $item['ID']; ?>">
												<span></span>
												<span></span>
											</button>

											<h6>
												<?php echo sprintf( '%s - $%s', htmlspecialchars_decode( $item['title'] ), number_format( $item['price'], 2 ) ); ?>
											</h6>

											<p>
												<?php echo str_replace( PHP_EOL, '<br>', htmlspecialchars_decode( $item['description'] ) ); ?>
											</p>
										</div><!-- /.cart-item__content -->
									</div><!-- /.cart-item__inner -->
								</li><!-- /.cart-item -->
							<?php endforeach; ?>
						</ul>

						<div class="cart-items__total">
							<ul>
								<li>
									<small>Subtotal: <?php echo sprintf( '$%s', number_format( $subtotal, 2 ) ); ?></small>
								</li>

								<li>
									<small>Delivery: <?php echo sprintf( '$%s', number_format( $subtotal * 0.05, 2 ) ); ?></small>
								</li>

								<li>
									<small>VAT (+20%): <?php echo sprintf( '$%s', number_format( $subtotal * 0.2, 2 ) ); ?></small>
								</li>
							</ul>

							<h6>
								Total: $<?php echo number_format( ( $subtotal * 1.2 ) + ( $subtotal * 0.05 ), 2 ); ?>
							</h6>

							<a href="#" class="btn btn--border btn--border-base js-checkout">
								<span>Checkout</span>
							</a>
						</div><!-- /.cart-items__total -->
					</div><!-- /.cart-items -->
				<?php endif; ?>
			</div><!-- /.section__content -->
		</div><!-- /.shell -->
	</section><!-- /.section -->
</div>
<!-- /.wrapper__inner -->

<?php
include_once 'partials/footer.php';
