<?php
if ( ! isset( $_COOKIE['app_user_id'] ) ) {
	header("Location: login.php");

	exit;
}

include_once 'partials/header.php';
include_once 'app/includes/helpers.php';

$user_id                        = isset( $_COOKIE['app_user_id'] ) ? $_COOKIE['app_user_id'] : false;
$user                           = app_get_user_info( $user_id );
$listings                       = app_get_user_listings( $user_id );
$orders                         = app_get_user_orders( $user_id );
$profile_hero_title             = app_get_localized_string( 'profile_hero_title' );
$profile_listing_title          = app_get_localized_string( 'profile_listing_title' );
$profile_listing_error          = app_get_localized_string( 'profile_listing_error' );
$profile_listing_button_label   = app_get_localized_string( 'profile_listing_button_label' );
$profile_orders_title           = app_get_localized_string( 'profile_orders_title' );
$profile_table_order_number     = app_get_localized_string( 'profile_table_order_number' );
$profile_table_date_created     = app_get_localized_string( 'profile_table_date_created' );
$profile_table_payment_type     = app_get_localized_string( 'profile_table_payment_type' );
$profile_table_status           = app_get_localized_string( 'profile_table_status' );
$profile_table_total            = app_get_localized_string( 'profile_table_total' );
$profile_table_details          = app_get_localized_string( 'profile_table_details' );
$profile_table_button_label     = app_get_localized_string( 'profile_table_button_label' );
$profile_order_items_title      = app_get_localized_string( 'profile_order_items_title' );
$profile_orders_error           = app_get_localized_string( 'profile_orders_error' );
$home_cta_title                 = app_get_localized_string( 'home_cta_title' );
$home_cta_button_label          = app_get_localized_string( 'home_cta_button_label' );
$profile_form_title             = app_get_localized_string( 'profile_form_title' );
$profile_form_title_field       = app_get_localized_string( 'profile_form_title_field' );
$profile_form_title_placeholder = app_get_localized_string( 'profile_form_title_placeholder' );
$profile_form_desc_field        = app_get_localized_string( 'profile_form_desc_field' );
$profile_form_desc_placeholder  = app_get_localized_string( 'profile_form_desc_placeholder' );
$profile_form_categories_label  = app_get_localized_string( 'profile_form_categories_label' );
$profile_form_categories_one    = app_get_localized_string( 'profile_form_categories_one' );
$profile_form_categories_two    = app_get_localized_string( 'profile_form_categories_two' );
$profile_form_categories_three  = app_get_localized_string( 'profile_form_categories_three' );
$profile_form_categories_four   = app_get_localized_string( 'profile_form_categories_four' );
$profile_form_images_label      = app_get_localized_string( 'profile_form_images_label' );
$profile_form_price_label       = app_get_localized_string( 'profile_form_price_label' );
$profile_form_price_placeholder = app_get_localized_string( 'profile_form_price_placeholder' );
$profile_form_button_label      = app_get_localized_string( 'profile_form_button_label' );
$required_field_error           = app_get_localized_string( 'required_field_error' );
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<?php include_once 'partials/banner.php'; ?>

	<div class="hero hero--alt bg-base">
		<div class="hero__image" data-aos="fade-up" style=" background-image: url(assets/dist/images/temp/arizona-398686_1920.jpg);"></div><!-- /.hero__bg -->

		<div class="hero__content" data-aos="fade-up">
			<h1 class="hero__title">
				<?php echo $profile_hero_title; ?>, <br>
				<?php echo $user['name']; ?>
			</h1>
			<!-- /.hero__title -->
		</div>
		<!-- /.hero__content -->
	</div><!-- /.hero -->

	<section class="section">
		<div class="shell">
			<div class="section__head">
				<h2 class="section__title" data-aos="fade-up">
					<?php echo $profile_listing_title; ?>
				</h2><!-- /.section__title -->
			</div><!-- /.section__head -->

			<div class="section__content js-boxes">
				<?php if ( ! empty( $listings ) ) : ?>
					<div class="boxes">
						<ul>
							<?php
							$delay = 100;

							foreach( $listings as $index => $listing ) :
								$image_path = false;

								if ( ! empty( $listing['images'] ) ) {
									$images = unserialize( $listing['images'] );
									$image = reset( $images );
									$image_path = sprintf( 'uploads/%s', $image );
								}
								?>

								<li class="box" data-aos="fade-up" data-aos-delay="<?php echo $delay * ($index + 1); ?>">
									<div class="box__inner">
										<?php if ( $image_path ) : ?>
											<div class="box__image image-fit js-image-fit">
												<img src="<?php echo $image_path; ?>" alt="">
											</div><!-- /.box__image -->
										<?php endif; ?>

										<div class="box__content">
											<h4>
												<?php echo htmlspecialchars_decode($listing['title']); ?>
											</h4>
										</div><!-- /.box__content -->

										<div class="box__actions">
											<h5>
												<strong>
													<?php echo sprintf( '€%s', number_format( $listing['price'], 2 ) ); ?>
												</strong>
											</h5>

											<?php if ( $listing['status'] != 'sold' ): ?>
												<a href="#" class="btn btn--border btn--border-base js-delete" data-listing="<?php echo $listing['ID']; ?>">
													<span>Delete</span>
												</a>
											<?php else :
												?>
												<button type="button" class="btn btn--border btn--border-base" disabled>
													Sold
												</button>
											<?php endif; ?>
										</div><!-- /.box__actions -->
									</div><!-- /.box__inner -->
								</li><!-- /.box -->
							<?php endforeach; ?>
						</ul>
					</div><!-- /.boxes -->
				<?php else :
					?>
					<div class="section__content-inner" data-aos="fade-up" style="text-align: center;">
						<h6>
							<?php echo $profile_listing_error; ?>
						</h6>

						<a href="#form-listing" class="btn btn--border btn--border-base js-scroll">
							<span>
								<?php echo $profile_listing_button_label; ?>
							</span>
						</a>
					</div><!-- /.section__content-inner -->
				<?php endif; ?>
			</div><!-- /.section__content -->
		</div><!-- /.shell -->
	</section><!-- /.section -->

	<section class="section-cta" data-aos="fade-up">
		<div class="shell">
			<h2 class="section__title">
				<?php echo $profile_orders_title; ?>

				<br>

				<br>

				<span style="font-size: 7rem; font-family: 'Milestone'">AntiqueShop</span>
			</h2>
			<!-- /.section__title -->
		</div>
		<!-- /.shell -->
	</section>
	<!-- /.section-cta -->

	<section class="section">
		<div class="shell">
			<div class="section__content">
				<?php if ( ! empty( $orders ) ) : ?>
					<div class="table">
						<table>
							<thead>
								<tr class="table-headers">
									<th><?php echo $profile_table_order_number; ?></th>
									<th><?php echo $profile_table_date_created; ?></th>
									<th><?php echo $profile_table_payment_type; ?></th>
									<th><?php echo $profile_table_status; ?></th>
									<th><?php echo $profile_table_total; ?></th>
									<th><?php echo $profile_table_details; ?></th>
								</tr>
							</thead>

							<tbody>
								<?php foreach( $orders as $order ) : ?>
									<tr>
										<td>
											<?php echo $order['ID']; ?>
										</td>

										<th class="mobile-header">
											<?php echo $profile_table_date_created; ?>
										</th>

										<td>
											<?php echo $order['date_created']; ?>
										</td>

										<th class="mobile-header">
											<?php echo $profile_table_payment_type; ?>
										</th>

										<td>
											<?php echo ( $order['payment_type'] == 'cod') ? 'Cash on Delivery' : 'Credit Card'; ?>
										</td>

										<th class="mobile-header">
											<?php echo $profile_table_status; ?>
										</th>

										<td>
											<?php echo ucfirst( $order['status'] ); ?>
										</td>

										<th class="mobile-header">
											<?php echo $profile_table_total; ?>
										</th>

										<td>
											<?php echo sprintf( '€%s', number_format( $order['total'], 2 ) ); ?>
										</td>

										<th class="mobile-header">
											<?php echo $profile_table_details; ?>
										</th>

										<td>
											<button type="button" class="btn btn--border btn--border-base js-order-details" data-target="#order-<?php echo $order['ID']; ?>">
												<?php echo $profile_table_button_label; ?>
											</button>
										</td>
									</tr>
								<?php endforeach; ?>
							</tbody>
						</table>
					</div><!-- /.table -->

					<?php foreach( $orders as $order ) : ?>
						<div class="popup popup--checkout" id="<?php echo sprintf( 'order-%s', $order['ID'] ); ?>">
							<div class="popup__inner">
								<div class="popup__content">
									<button type="button" class="popup__close js-close">
										<span></span>
										<span></span>
									</button>

									<h3>
										<?php echo $profile_order_items_title; ?>
									</h3>

									<div class="boxes">
										<ul>
											<?php
											$products = unserialize($order['products']);

											$styles = '';
											if ( count( $products ) < 3 ) {
												$styles = 'flex-grow: 1';
											}

											foreach( $products as $index => $listing ) :
												$image_path = false;

												if ( ! empty( $listing['images'] ) ) {
													$images = unserialize( $listing['images'] );
													$image = reset( $images );
													$image_path = sprintf( 'uploads/%s', $image );
												}
												?>

												<li class="box" style="<?php echo $styles; ?>">
													<div class="box__inner">
														<?php if ( $image_path ) : ?>
															<div class="box__image image-fit js-image-fit">
																<img src="<?php echo $image_path; ?>" alt="">
															</div><!-- /.box__image -->
														<?php endif; ?>

														<div class="box__content">
															<h4>
																<?php echo htmlspecialchars_decode($listing['title']); ?>
															</h4>
														</div><!-- /.box__content -->

														<div class="box__actions">
															<h5>
																<strong>
																	<?php echo sprintf( '€%s', number_format( $listing['price'], 2 ) ); ?>
																</strong>
															</h5>
														</div><!-- /.box__actions -->
													</div><!-- /.box__inner -->
												</li><!-- /.box -->
											<?php endforeach; ?>
										</ul>
									</div><!-- /.boxes -->
								</div><!-- /.popup__content -->
							</div><!-- /.popup__inner -->
						</div><!-- /.popup -->
					<?php endforeach; ?>
				<?php else : ?>
					<h3 style="text-align: center;" data-aos="fade-up">
						<?php echo $profile_orders_error; ?>
					</h3>
				<?php endif; ?>
			</div><!-- /.section__content -->
		</div><!-- /.shell -->
	</section><!-- /.section -->

	<section class="section-cta" data-aos="fade-up">
		<div class="shell">
			<h2 class="section__title">
				<?php echo $home_cta_title; ?> <br><br><span style="font-size: 7rem;	font-family: 'Milestone'">AntiqueShop</span>
			</h2>
			<!-- /.section__title -->

			<a href="<?php echo app_get_page_url( 'shop' ); ?>" class="btn btn--border btn--border-white btn--size-1">
				<?php echo $home_cta_button_label; ?>
			</a>
		</div>
		<!-- /.shell -->
	</section>
	<!-- /.section-cta -->

	<section class="section" data-aos="fade-up">
		<div class="shell">
			<div class="section__head">
				<h2 class="section__title" id="form-listing">
					<?php echo $profile_form_title; ?>
				</h2><!-- /.section__title -->
			</div><!-- /.section__head -->

			<div class="section__content">
				<div class="form">
					<form action="?" method="post" enctype="multipart/form-data" class="js-add-listing">
						<div class="form__body">
							<div class="form__section">
								<div class="form__group">
									<div class="form__row">
										<label class="form__label" for="field-title">
											* <?php echo $profile_form_title_field; ?>
										</label>

										<div class="form__controls">
											<input type="text" class="field" id="field-title" name="title" placeholder="<?php echo $profile_form_title_placeholder; ?>" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">
											<?php echo $required_field_error; ?>
										</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-description">
											* <?php echo $profile_form_desc_field; ?>
										</label>

										<div class="form__controls">
											<textarea class="textarea" id="field-description" name="description" placeholder="<?php echo $profile_form_desc_placeholder; ?>" cols="30" rows="10"></textarea>
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">
											<?php echo $required_field_error; ?>
										</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label">
											* <?php echo $profile_form_categories_label; ?>
										</label>

										<div class="form__controls">
											<div class="checkbox">
												<input type="checkbox" name="categories[]" value="everyday" />

												<label>
													<?php echo $profile_form_categories_one; ?>
												</label>
											</div><!-- /.checkbox -->

											<div class="checkbox">
												<input type="checkbox" name="categories[]" value="historical" />

												<label>
													<?php echo $profile_form_categories_two; ?>
												</label>
											</div><!-- /.checkbox -->

											<div class="checkbox">
												<input type="checkbox" name="categories[]" value="art" />

												<label>
													<?php echo $profile_form_categories_three; ?>
												</label>
											</div><!-- /.checkbox -->

											<div class="checkbox">
												<input type="checkbox" name="categories[]" value="other" />

												<label>
													<?php echo $profile_form_categories_four; ?>
												</label>
											</div><!-- /.checkbox -->
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">
											<?php echo $required_field_error; ?>
										</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-images">
											* <?php echo $profile_form_images_label; ?>
										</label>

										<div class="form__controls">
											<input type="file" class="upload" id="field-images" name="images" accept="image/*" multiple />

											<div class="form__thumbnails">
												<ul>
												</ul>
											</div><!-- /.form__thumbnails -->
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">
											<?php echo $required_field_error; ?>
										</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-price">
											* <?php echo $profile_form_price_label; ?>
										</label>

										<div class="form__controls">
											<input type="number" class="field" id="field-price" name="price" step="0.01" placeholder="<?php echo $profile_form_price_placeholder; ?>" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">
											<?php echo $required_field_error; ?>
										</span>

										<div class="form__error hidden"></div>
									</div><!-- /.form__row -->
								</div><!-- /.form__group -->
							</div><!-- /.form__section -->
						</div><!-- /.form__body -->

						<div class="form__actions">
							<button type="submit" class="btn btn--border-base form__btn form__btn--submit">
								<span>
									<?php echo $profile_form_button_label; ?>
								</span>

								<img width="22" src="assets/dist/images/spinner.svg" alt="Spinner">
							</button>
						</div><!-- /.form__actions -->
					</form>
				</div><!-- /.form -->
			</div><!-- /.section__content -->
		</div><!-- /.shell -->
	</section><!-- /.section -->
</div><!-- /.wrapper__inner -->

<?php
include_once 'partials/footer.php';
