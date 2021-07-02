<?php
include_once 'partials/header.php';
include_once 'app/includes/helpers.php';
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<div class="hero hero--alt bg-base">
		<div class="hero__image" data-aos="fade-right" style="background-image: url(assets/dist/images/temp/hero-img-8.jpg);"></div>
		<!-- /.hero__bg -->

		<div class="hero__content" data-aos="fade-up">
			<h1 class="hero__title">Register</h1>
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
										<label class="form__label" for="field-name">
											* Name
										</label>

										<div class="form__controls">
											<input type="text" class="field" id="field-name" name="name" placeholder="Type your name" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">This field is required</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-email">
											* Email
										</label>

										<div class="form__controls">
											<input type="email" class="field" id="field-email" name="email" placeholder="Type your email address" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">Please enter valid email address</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-password">
											* Password
										</label>

										<div class="form__controls">
											<input type="password" class="field" id="field-password" name="password" placeholder="Type your password" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">Password is required</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-repeat-password">
											* Repeat Password
										</label>

										<div class="form__controls">
											<input type="password" class="field" id="field-repeat-password" name="repeat_password" placeholder="Type your password again" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">Passwords doesn't match</span>
									</div><!-- /.form__row -->
								</div><!-- /.form__group -->
							</div><!-- /.form__section -->
						</div><!-- /.form__body -->

						<div class="form__actions">
							<button type="submit" class="btn btn--border-base form__btn form__btn--submit">
								<span>Register</span>

								<img width="22" src="assets/dist/images/spinner.svg" alt="Spinner">
							</button>

							<div class="form__actions-content">
								<a href="login">
									Already registered? Click to login.
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
				Thousands of genuine antiques for sale, direct from trusted antique dealers at your local <br><br><span style="font-size: 7rem;	font-family: 'Milestone'">AntiqueShop</span>
			</h2>
			<!-- /.section__title -->

			<a
			href="shop"
			class="btn btn--border btn--border-white btn--size-1"
			>Shop now</a
			>
		</div>
		<!-- /.shell -->
	</section>
	<!-- /.section-cta -->

	<section class="section-info section-info--light">
		<div class="shell">
			<div class="section__content" data-aos="fade-up">
				<h2 class="section__title h2">
					Lorem ipsum dolor sit amet.
				</h2>
				<!-- /.section__title -->

				<div class="section__entry">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nostrum totam libero perferendis non, mollitia! Eaque at perspiciatis vitae repudiandae quam distinctio cum incidunt laboriosam, odit alias animi, similique enim.
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
