<?php
include_once 'partials/header.php';
include_once 'app/includes/helpers.php';

$register_hero_title              = app_get_localized_string( 'register_hero_title' );
$required_field_error             = app_get_localized_string( 'required_field_error' );
$form_first_name                  = app_get_localized_string( 'form_first_name' );
$form_first_name_placeholder      = app_get_localized_string( 'form_first_name_placeholder' );
$form_last_name                   = app_get_localized_string( 'form_last_name' );
$form_last_name_placeholder       = app_get_localized_string( 'form_last_name_placeholder' );
$form_email_label                 = app_get_localized_string( 'form_email_label' );
$form_email_placeholder           = app_get_localized_string( 'form_email_placeholder' );
$form_password_label              = app_get_localized_string( 'form_password_label' );
$form_password_placeholder        = app_get_localized_string( 'form_password_placeholder' );
$form_repeat_password_label       = app_get_localized_string( 'form_repeat_password_label' );
$form_repeat_password_placeholder = app_get_localized_string( 'form_repeat_password_placeholder' );
$form_password_mismatch           = app_get_localized_string( 'form_password_mismatch' );
$register_form_cta                = app_get_localized_string( 'register_form_cta' );
$home_cta_title                   = app_get_localized_string( 'home_cta_title' );
$home_cta_button_label            = app_get_localized_string( 'home_cta_button_label' );
$home_about_title                 = app_get_localized_string( 'home_about_title' );
$home_about_text                  = app_get_localized_string( 'home_about_text' );
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<?php include_once 'partials/banner.php'; ?>

	<div class="hero hero--alt bg-base">
		<div class="hero__image" data-aos="fade-right" style="background-image: url(assets/dist/images/temp/hero-img-8.jpg);"></div>
		<!-- /.hero__bg -->

		<div class="hero__content" data-aos="fade-up">
			<h1 class="hero__title">
				<?php echo $register_hero_title; ?>
			</h1>
			<!-- /.hero__title -->
		</div>
		<!-- /.hero__content -->
	</div>
	<!-- /.hero -->

	<div class="section">
		<div class="shell">
			<div class="section__content">
				<div class="form">
					<form action="?" method="post" class="js-register">
						<div class="form__body">
							<div class="form__section">
								<div class="form__group">
									<div class="form__row">
										<label class="form__label" for="field-first">
											* <?php echo $form_first_name; ?>
										</label>

										<div class="form__controls">
											<input type="text" class="field" id="field-first" name="first" placeholder="<?php echo $form_first_name_placeholder; ?>" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden"><?php echo $required_field_error; ?></span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-last">
											* <?php echo $form_last_name; ?>
										</label>

										<div class="form__controls">
											<input type="text" class="field" id="field-last" name="last" placeholder="<?php echo $form_last_name_placeholder; ?>" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden"><?php echo $required_field_error; ?></span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-email">
											* <?php echo $form_email_label; ?>
										</label>

										<div class="form__controls">
											<input type="email" class="field" id="field-email" name="email" placeholder="<?php echo $form_email_placeholder; ?>" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden"></span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-password">
											* <?php echo $form_password_label; ?>
										</label>

										<div class="form__controls">
											<input type="password" class="field" id="field-password" name="password" placeholder="<?php echo $form_password_placeholder; ?>" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden"></span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-repeat-password">
											* <?php echo $form_repeat_password_label; ?>
										</label>

										<div class="form__controls">
											<input type="password" class="field" id="field-repeat-password" name="repeat_password" placeholder="<?php echo $form_repeat_password_placeholder; ?>" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">
											<?php echo $form_password_mismatch; ?>
										</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<div id="html_element"></div>
									</div><!-- /.form__row -->
								</div><!-- /.form__group -->
							</div><!-- /.form__section -->
						</div><!-- /.form__body -->

						<div class="form__actions">
							<button type="submit" class="btn btn--border-base form__btn form__btn--submit">
								<span>
									<?php echo $register_hero_title; ?>
								</span>

								<img width="22" src="assets/dist/images/spinner.svg" alt="Spinner">
							</button>

							<div class="form__actions-content">
								<a href="<?php echo app_get_page_url('login'); ?>">
									<?php echo $register_form_cta; ?>
								</a>
							</div><!-- /.form__actions-content -->
						</div><!-- /.form__actions -->
					</form>
				</div><!-- /.form -->
			</div><!-- /.section__content -->
		</div><!-- /.shell -->
	</div><!-- /.section -->

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

	<section class="section-info section-info--light">
		<div class="shell">
			<div class="section__content" data-aos="fade-up">
				<h2 class="section__title h2">
					<?php echo $home_about_title; ?>
				</h2>
				<!-- /.section__title -->

				<div class="section__entry">
					<p>
						<?php echo $home_about_text; ?>
					</p>
				</div>
				<!-- /.section__entry -->
			</div>
			<!-- /.section__content -->
		</div>
		<!-- /.shell -->
	</section>
	<!-- /.section-info -->

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
