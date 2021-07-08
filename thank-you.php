<?php
include_once 'partials/header.php';
include_once 'app/includes/helpers.php';

$contact_hero_title      = app_get_localized_string( 'contact_hero_title' );
$home_cta_title          = app_get_localized_string( 'home_cta_title' );
$home_cta_button_label   = app_get_localized_string( 'home_cta_button_label' );
$thank_you_message_title = app_get_localized_string( 'thank_you_message_title' );
$thank_you_message_text  = app_get_localized_string( 'thank_you_message_text' );
?>

<div class="wrapper__inner is-large js-wrapper-page">
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
				<?php echo $contact_hero_title; ?>
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
					<?php echo $thank_you_message_title; ?>
				</h2>
				<!-- /.section__title -->

				<div class="section__entry">
					<p>
						<?php echo $thank_you_message_text; ?>
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
