<?php
include_once 'partials/header.php';
include_once 'app/includes/helpers.php';

$order_hero_title         = app_get_localized_string( 'order_hero_title' );
$order_thank_title        = app_get_localized_string( 'order_thank_title' );
$order_thank_line_one     = app_get_localized_string( 'order_thank_line_one' );
$order_thank_line_two     = app_get_localized_string( 'order_thank_line_two' );
$order_thank_button_label = app_get_localized_string( 'order_thank_button_label' );
$home_cta_title           = app_get_localized_string( 'home_cta_title' );
$home_cta_button_label    = app_get_localized_string( 'home_cta_button_label' );
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<?php include_once 'partials/banner.php'; ?>

	<div class="hero hero--alt bg-base">
		<div
			class="hero__image"
			data-aos="fade-up"
			style="
				background-image: url(assets/dist/images/temp/hero-img-2.jpg);
			"
		></div>
		<!-- /.hero__bg -->

		<div class="hero__content" data-aos="fade-up">
			<h1 class="hero__title">
				<?php echo $order_hero_title; ?>
			</h1>
			<!-- /.hero__title -->
		</div>
		<!-- /.hero__content -->
	</div>
	<!-- /.hero -->

	<section class="section-info section-info--light">
		<div class="shell">
			<div class="section__content" data-aos="fade-up">
				<h2 class="section__title h2">
					<?php echo $order_thank_title; ?> <br><br> <span style="font-size: 7rem;	font-family: 'Milestone'">AntiqueShop</span><br><br>
				</h2>
				<!-- /.section__title -->

				<div class="section__entry" style="text-align: justify-all;">
					<p>
						<?php echo $order_thank_line_one; ?>
					</p>

					<p>
						<?php echo $order_thank_line_two; ?> <a href="<?php echo app_get_page_url('contact'); ?>"><?php echo $order_thank_button_label; ?></a>!
					</p>
				</div>
				<!-- /.section__entry -->
			</div>
			<!-- /.section__content -->
		</div>
		<!-- /.shell -->
	</section>
	<!-- /.section-info -->

	<section class="section-cta" data-aos="fade-up">
		<div class="shell">
			<h2 class="section__title">
				<?php echo $home_cta_title; ?> <br><br><span style="font-size: 7rem;	font-family: 'Milestone'">AntiqueShop</span>
			</h2>
			<!-- /.section__title -->

			<a
				href="shop"
				class="btn btn--border btn--border-white btn--size-1"
				><?php echo $home_cta_button_label; ?></a
			>
		</div>
		<!-- /.shell -->
	</section>
	<!-- /.section-cta -->

	<section class="section" data-aos="fade-up">
		<div class="slider-gallery js-slider-flickity">
			<div class="slider__clip">
				<div class="slider__slides main-carousel">
					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image1.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image2.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image3.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image4.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image5.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image6.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image1.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image2.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image3.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image4.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image5.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->

					<div class="slider__slide carousel-cell">
						<div
							class="slider__image"
							style="
								background-image: url(assets/dist/images/temp/slide-image6.jpg);
							"
						></div>
						<!-- /.slider__image -->
					</div>
					<!-- /.slider__slide -->
				</div>
				<!-- /.slider__slides -->
			</div>
			<!-- /.slider__clip -->
		</div>
		<!-- /.slider js-slider -->
	</section>
	<!-- /.section -->
</div>
<!-- /.wrapper__inner -->

<?php
include_once 'partials/footer.php';
