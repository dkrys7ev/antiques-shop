<?php
if ( ! isset( $_COOKIE['app_user_id'] ) ) {
	header("Location: login.php");
	exit;
}

include_once 'partials/header.php';
include_once 'app/includes/helpers.php';

$cart_hero_title                   = app_get_localized_string( 'cart_hero_title' );
$cart_section_title                = app_get_localized_string( 'cart_section_title' );
$cart_empty_error                  = app_get_localized_string( 'cart_empty_error' );
$cart_back_to_shop                 = app_get_localized_string( 'cart_back_to_shop' );
$subtotal_label                    = app_get_localized_string( 'subtotal_label' );
$delivery_label                    = app_get_localized_string( 'delivery_label' );
$vat_label                         = app_get_localized_string( 'vat_label' );
$total_label                       = app_get_localized_string( 'total_label' );
$checkout_button_label             = app_get_localized_string( 'checkout_button_label' );
$required_field_error              = app_get_localized_string( 'required_field_error' );
$form_first_name                   = app_get_localized_string( 'form_first_name' );
$form_first_name_placeholder       = app_get_localized_string( 'form_first_name_placeholder' );
$form_last_name                    = app_get_localized_string( 'form_last_name' );
$form_last_name_placeholder        = app_get_localized_string( 'form_last_name_placeholder' );
$form_email_label                  = app_get_localized_string( 'form_email_label' );
$form_email_placeholder            = app_get_localized_string( 'form_email_placeholder' );
$form_payment_type_label           = app_get_localized_string( 'form_payment_type_label' );
$cod_payment_label                 = app_get_localized_string( 'cod_payment_label' );
$cc_payment_label                  = app_get_localized_string( 'cc_payment_label' );
$form_delivery_address_label       = app_get_localized_string( 'form_delivery_address_label' );
$form_delivery_address_placeholder = app_get_localized_string( 'form_delivery_address_placeholder' );
$form_notes_label                  = app_get_localized_string( 'form_notes_label' );
$form_notes_placeholder            = app_get_localized_string( 'form_notes_placeholder' );
$order_button_label                = app_get_localized_string( 'order_button_label' );

$cart_items                        = app_get_cart_items();
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<?php include_once 'partials/banner.php'; ?>

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
			<h1 class="hero__title">
				<?php echo $cart_hero_title; ?>
			</h1>
			<!-- /.hero__title -->
		</div>
		<!-- /.hero__content -->
	</div>
	<!-- /.hero -->

	<section class="section section-checkout">
		<div class="shell">
			<div class="section__head">
				<h2 class="section__title" data-aos="fade-up">
					<?php echo $cart_section_title; ?>
				</h2><!-- /.section__title -->
			</div><!-- /.section__head -->

			<div class="section__content js-cart" data-aos="fade-up" style="text-align: center;">
				<?php if ( empty( $cart_items ) ) : ?>
					<h4>
						<?php echo $cart_empty_error; ?>
					</h4>

					<p>
						<a href="<?php echo app_get_page_url('shop'); ?>" class="btn btn--border btn--border-base">
							<span>
								<?php echo $cart_back_to_shop; ?>
							</span>
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
												<?php echo sprintf( '%s - €%s', htmlspecialchars_decode( $item['title'] ), number_format( $item['price'], 2 ) ); ?>
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
									<small><?php echo $subtotal_label; ?>: <?php echo sprintf( '€%s', number_format( $subtotal, 2 ) ); ?></small>
								</li>

								<li>
									<small><?php echo $delivery_label; ?>: <?php echo sprintf( '€%s', number_format( $subtotal * 0.05, 2 ) ); ?></small>
								</li>

								<li>
									<small><?php echo $vat_label; ?>: <?php echo sprintf( '€%s', number_format( $subtotal * 0.2, 2 ) ); ?></small>
								</li>
							</ul>

							<h6>
								<?php echo $total_label; ?>: €<?php echo number_format( ( $subtotal * 1.2 ) + ( $subtotal * 0.05 ), 2 ); ?>
							</h6>

							<a href="#" class="btn btn--border btn--border-base js-checkout">
								<span>
									<?php echo $checkout_button_label; ?>
								</span>
							</a>
						</div><!-- /.cart-items__total -->
					</div><!-- /.cart-items -->

					<div class="popup popup--checkout">
						<div class="popup__inner">
							<div class="popup__content">
								<button type="button" class="popup__close js-close">
									<span></span>
									<span></span>
								</button>

								<div class="form">
									<form action="?" method="post" class="js-form-checkout" data-amount="<?php echo (float) ( $subtotal * 1.2 ) + ( $subtotal * 0.05 ); ?>">
										<div class="form__body">
											<div class="form__section">
												<div class="form__group">
													<div class="form__row">
														<div class="form__cols">
															<div class="form__col form__col--1of2">
																<div class="form__col-inner">
																	<label class="form__label" for="field-first">
																		* <?php echo $form_first_name; ?>
																	</label>

																	<div class="form__controls">
																		<input type="text" class="field" id="field-first" name="first" placeholder="<?php echo $form_first_name_placeholder; ?>" />
																	</div><!-- /.form__controls -->

																	<span class="form__notice form__notice--error hidden">
																		<?php echo $required_field_error; ?>
																	</span>
																</div><!-- /.form__col-inner -->
															</div><!-- /.form__col -->

															<div class="form__col form__col--1of2">
																<div class="form__col-inner">
																	<label class="form__label" for="field-last">
																		* <?php echo $form_last_name; ?>
																	</label>

																	<div class="form__controls">
																		<input type="text" class="field" id="field-last" name="last" placeholder="<?php echo $form_last_name_placeholder; ?>" />
																	</div><!-- /.form__controls -->

																	<span class="form__notice form__notice--error hidden">
																		<?php echo $required_field_error; ?>
																	</span>
																</div><!-- /.form__col-inner -->
															</div><!-- /.form__col -->
														</div><!-- /.form__cols -->
													</div><!-- /.form__row -->

													<div class="form__row">
														<div class="form__cols">
															<div class="form__col">
																<label class="form__label" for="field-email">
																	* <?php echo $form_email_label; ?>
																</label>

																<div class="form__controls">
																	<input type="email" class="field" id="field-email" name="email" placeholder="<?php echo $form_email_placeholder; ?>" />
																</div><!-- /.form__controls -->

																<span class="form__notice form__notice--error hidden">
																	<?php echo $required_field_error; ?>
																</span>
															</div><!-- /.form__col -->
														</div><!-- /.form__cols -->
													</div><!-- /.form__row -->

													<div class="form__row">
														<div class="form__cols">
															<div class="form__col">
																<label class="form__label" for="field-payment-type">
																	<?php echo $form_payment_type_label; ?>
																</label>

																<div class="form__controls">
																	<div class="select">
																		<select name="payment_type" id="field-payment-type" class="field js-payment">
																			<option value="cod">
																				<?php echo $cod_payment_label; ?>
																			</option>

																			<option value="cc">
																				<?php echo $cc_payment_label; ?>
																			</option>
																		</select>
																	</div><!-- /.select -->
																</div><!-- /.form__controls -->
															</div><!-- /.form__col -->
														</div><!-- /.form__cols -->
													</div><!-- /.form__row -->

													<div class="form__row credit-card-wrapper hidden">
													</div><!-- /.form__row -->

													<div class="form__row">
														<div class="form__cols">
															<div class="form__col">
																<label class="form__label" for="field-address-one">
																	* <?php echo $form_delivery_address_label; ?>
																</label>

																<div class="form__controls">
																	<input type="text" class="field" id="field-address-one" name="delivery_address" placeholder="<?php echo $form_delivery_address_placeholder; ?>" />
																</div><!-- /.form__controls -->

																<span class="form__notice form__notice--error hidden">
																	<?php echo $required_field_error; ?>
																</span>
															</div><!-- /.form__col -->
														</div><!-- /.form__cols -->
													</div><!-- /.form__row -->

													<div class="form__row">
														<div class="form__cols">
															<div class="form__col">
																<label class="form__label" for="field-notes">
																	<?php echo $form_notes_label; ?>
																</label>

																<div class="form__controls">
																	<textarea class="textarea" id="field-notes" name="notes" placeholder="<?php echo $form_notes_placeholder; ?>" cols="30" rows="10"></textarea>
																</div><!-- /.form__controls -->
															</div><!-- /.form__col -->
														</div><!-- /.form__cols -->
													</div><!-- /.form__row -->
												</div><!-- /.form__group -->
											</div><!-- /.form__section -->
										</div><!-- /.form__body -->

										<div class="form__actions">
											<button type="submit" class="btn btn--border-base form__btn form__btn--submit">
												<span>
													<?php echo $order_button_label; ?>
												</span>

												<img width="22" src="assets/dist/images/spinner.svg" alt="Spinner">
											</button>

											<input type="hidden" class="card-number" data-stripe="number">
											<input type="hidden" name="total_amount" value="<?php echo (float) ( $subtotal * 1.2 ) + ( $subtotal * 0.05 ); ?>">
										</div><!-- /.form__actions -->
									</form>
								</div><!-- /.form -->
							</div><!-- /.popup__content -->
						</div><!-- /.popup__inner -->
					</div><!-- /.popup -->
				<?php endif; ?>
			</div><!-- /.section__content -->
		</div><!-- /.shell -->
	</section><!-- /.section -->
</div>
<!-- /.wrapper__inner -->

<?php
include_once 'partials/footer.php';
