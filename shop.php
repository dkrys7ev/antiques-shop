<?php
if ( ! isset( $_COOKIE['app_user_id'] ) ) {
	header("Location: login.php");
	exit;
}

include_once 'partials/header.php';
include_once 'app/includes/helpers.php';

$search_query = '';

if ( isset( $_GET['search'] ) && ! empty( $_GET['search'] ) ) {
	$search_query = $_GET['search'];
}

$listings                       = app_get_listings( $search_query );
$shop_hero_title                = app_get_localized_string( 'shop_hero_title' );
$shop_section_title             = app_get_localized_string( 'shop_section_title' );
$shop_learn_more_button_label   = app_get_localized_string( 'shop_learn_more_button_label' );
$shop_cart_button_label         = app_get_localized_string( 'shop_cart_button_label' );
$shop_search_no_results         = app_get_localized_string( 'shop_search_no_results' );
$shop_search_button_first_half  = app_get_localized_string( 'shop_search_button_first_half' );
$shop_search_button_second_half = app_get_localized_string( 'shop_search_button_second_half' );
$shop_search_or                 = app_get_localized_string( 'shop_search_or' );
$profile_listing_button_label   = app_get_localized_string( 'profile_listing_button_label' );
$shop_no_listings               = app_get_localized_string( 'shop_no_listings' );
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<div class="hero hero--alt bg-base">
		<div class="hero__image" data-aos="fade-up" style=" background-image: url(assets/dist/images/temp/ile-de-re-446692_1920.jpg);"></div><!-- /.hero__bg -->

		<div class="hero__content" data-aos="fade-up">
			<h1 class="hero__title">
				<?php echo $shop_hero_title; ?>
			</h1><!-- /.hero__title -->
		</div><!-- /.hero__content -->
	</div><!-- /.hero -->

	<section class="section">
		<div class="shell">
			<div class="section__head">
				<h2 class="section__title" data-aos="fade-up">
					<?php echo $shop_section_title; ?>
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

											<a href="#" class="btn btn--border btn--border-base js-details" data-listing="<?php echo $listing['ID']; ?>">
												<span>
													<?php echo $shop_learn_more_button_label; ?>
												</span>
											</a>
										</div><!-- /.box__actions -->
									</div><!-- /.box__inner -->

									<div class="popup">
										<div class="popup__inner">
											<div class="popup__aside">
												<div class="slider-popup">
													<?php foreach( $images as $image ) :
														$image_path = sprintf( 'uploads/%s', $image );
														?>

														<div class="slider__slide image-fit js-image-fit">
															<img src="<?php echo $image_path; ?>" alt="">
														</div>
													<?php endforeach; ?>
												</div>
											</div><!-- /.popup__aside -->

											<div class="popup__content">
												<button type="button" class="popup__close js-close">
													<span></span>
													<span></span>
												</button>

												<h4>
													<?php echo htmlspecialchars_decode($listing['title']); ?>
												</h4>

												<p>
													<?php echo htmlspecialchars_decode($listing['description']); ?>
												</p>

												<h5>
													<strong>
														<?php echo sprintf( '€%s', number_format( $listing['price'], 2 ) ); ?>
													</strong>
												</h5>

												<a href="#" class="btn btn--border btn--border-base js-add" data-listing="<?php echo $listing['ID']; ?>">
													<span>
														<?php echo $shop_cart_button_label; ?>
													</span>
												</a>
											</div><!-- /.popup__content -->
										</div><!-- /.popup__inner -->
									</div><!-- /.popup -->
								</li><!-- /.box -->
							<?php endforeach; ?>
						</ul>
					</div><!-- /.boxes -->
				<?php else :
					?>
					<div class="section__content-inner" data-aos="fade-up">
						<?php if ( isset( $_GET['search'] ) && ! empty( $_GET['search'] ) ) : ?>
							<h6>
								<?php echo $shop_search_no_results; ?> <br><br> <?php echo $shop_search_button_first_half; ?> <a href="#" class="js-open-search"><strong><?php echo $shop_search_button_second_half; ?></strong></a> <?php echo $shop_search_or; ?>
							</h6>

							<a href="profile" class="btn btn--border btn--border-base">
								<span>
									<?php echo $profile_listing_button_label; ?>
								</span>
							</a>
						<?php else : ?>
							<h6>
								<?php echo $shop_no_listings; ?>
							</h6>

							<a href="profile" class="btn btn--border btn--border-base">
								<span>
									<?php echo $profile_listing_button_label; ?>
								</span>
							</a>
						<?php endif ?>
					</div><!-- /.section__content-inner -->
				<?php endif; ?>
			</div><!-- /.section__content -->
		</div><!-- /.shell -->
	</section><!-- /.section -->
</div>
<!-- /.wrapper__inner -->

<?php
include_once 'partials/footer.php';
