<?php
include_once 'partials/header.php';
include_once 'app/includes/helpers.php';
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
			<h1 class="hero__title">Contact</h1>
			<!-- /.hero__title -->
		</div>
		<!-- /.hero__content -->
	</div>
	<!-- /.hero -->

	<section class="section" data-aos="fade-up">
		<div class="shell">
			<div class="section__head">
				<h2 class="section__title" id="form-listing">
					How may we help you today?
				</h2><!-- /.section__title -->
			</div><!-- /.section__head -->

			<div class="section__content">
				<div class="form">
					<form action="?" method="post" class="js-contact">
						<div class="form__body">
							<div class="form__section">
								<div class="form__group">
									<div class="form__row">
										<div class="form__cols">
											<div class="form__col form__col--1of2">
												<div class="form__col-inner">
													<label class="form__label" for="field-first">
														* First Name
													</label>

													<div class="form__controls">
														<input type="text" class="field" id="field-first" name="first" placeholder="Your first name" />
													</div><!-- /.form__controls -->

													<span class="form__notice form__notice--error hidden">This field is required</span>
												</div><!-- /.form__col-inner -->
											</div><!-- /.form__col -->

											<div class="form__col form__col--1of2">
												<div class="form__col-inner">
													<label class="form__label" for="field-last">
														* Last Name
													</label>

													<div class="form__controls">
														<input type="text" class="field" id="field-last" name="last" placeholder="Your last name" />
													</div><!-- /.form__controls -->

													<span class="form__notice form__notice--error hidden">This field is required</span>
												</div><!-- /.form__col-inner -->
											</div><!-- /.form__col -->
										</div><!-- /.form__cols -->
									</div><!-- /.form__row -->

									<div class="form__row">
										<div class="form__cols">
											<div class="form__col">
												<label class="form__label" for="field-email">
													* Email
												</label>

												<div class="form__controls">
													<input type="email" class="field" id="field-email" name="email" placeholder="Your email address" />
												</div><!-- /.form__controls -->

												<span class="form__notice form__notice--error hidden">This field is required</span>
											</div><!-- /.form__col -->
										</div><!-- /.form__cols -->
									</div><!-- /.form__row -->

									<div class="form__row">
										<div class="form__cols">
											<div class="form__col">
												<label class="form__label" for="field-enquiry">Enquiry</label>

												<div class="form__controls">
													<div class="select">
														<select name="enquiry" id="field-enquiry" class="field">
															<option value="General">General</option>

															<option value="Payment Issues">Payment Issues</option>

															<option value="Feedback">Feedback</option>

															<option value="Newsletter signup">Newsletter signup</option>
														</select>
													</div><!-- /.select -->
												</div><!-- /.form__controls -->
											</div><!-- /.form__col -->
										</div><!-- /.form__cols -->
									</div><!-- /.form__row -->

									<div class="form__row">
										<div class="form__cols">
											<div class="form__col">
												<label class="form__label" for="field-message">
													* Message
												</label>

												<div class="form__controls">
													<textarea class="textarea" id="field-message" name="message" placeholder="Your message" cols="30" rows="10"></textarea>
												</div><!-- /.form__controls -->

												<span class="form__notice form__notice--error hidden">This field is required</span>
											</div><!-- /.form__col -->
										</div><!-- /.form__cols -->
									</div><!-- /.form__row -->
								</div><!-- /.form__group -->
							</div><!-- /.form__section -->
						</div><!-- /.form__body -->

						<div class="form__actions">
							<button type="submit" class="btn btn--border-base form__btn form__btn--submit">
								<span>Send</span>

								<img width="22" src="assets/dist/images/spinner.svg" alt="Spinner">
							</button>
						</div><!-- /.form__actions -->
					</form>
				</div><!-- /.form -->
			</div><!-- /.section__content -->
		</div><!-- /.shell -->
	</section><!-- /.section -->
</div>
<!-- /.wrapper__inner -->

<?php
include_once 'partials/footer.php';
