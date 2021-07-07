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

$listings = app_get_listings( $search_query );
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<div class="hero hero--alt bg-base">
		<div
		class="hero__image"
		data-aos="fade-up"
		style="
		background-image: url(assets/dist/images/temp/ile-de-re-446692_1920.jpg);
		"
		></div>
		<!-- /.hero__bg -->

		<div class="hero__content" data-aos="fade-up">
			<h1 class="hero__title">Shop</h1>
			<!-- /.hero__title -->
		</div>
		<!-- /.hero__content -->
	</div>
	<!-- /.hero -->

	<section class="section">
		<div class="shell">
			<div class="section__head">
				<h2 class="section__title" data-aos="fade-up">
					Antiques for Sale
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
													<?php echo sprintf( '$%s', number_format( $listing['price'], 2 ) ); ?>
												</strong>
											</h5>

											<a href="#" class="btn btn--border btn--border-base js-details" data-listing="<?php echo $listing['ID']; ?>">
												<span>Learn More</span>
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
														<?php echo sprintf( '$%s', number_format( $listing['price'], 2 ) ); ?>
													</strong>
												</h5>

												<a href="#" class="btn btn--border btn--border-base js-add" data-listing="<?php echo $listing['ID']; ?>">
													<span>Buy Now</span>
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
								There are no listings matching your search. <br><br> You can try a <a href="#" class="js-open-search"><strong>different search</strong></a> or
							</h6>

							<a href="profile" class="btn btn--border btn--border-base">
								<span>Create a listing</span>
							</a>
						<?php else : ?>
							<h6>
								There are no listings yet.
							</h6>

							<a href="profile" class="btn btn--border btn--border-base">
								<span>Create a listing</span>
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
