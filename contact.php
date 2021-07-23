<?php
include_once 'partials/header.php';
include_once 'app/includes/helpers.php';

$contact_hero_title          = app_get_localized_string( 'contact_hero_title' );
$contact_form_title          = app_get_localized_string( 'contact_form_title' );
$required_field_error        = app_get_localized_string( 'required_field_error' );
$form_first_name             = app_get_localized_string( 'form_first_name' );
$form_first_name_placeholder = app_get_localized_string( 'form_first_name_placeholder' );
$form_last_name              = app_get_localized_string( 'form_last_name' );
$form_last_name_placeholder  = app_get_localized_string( 'form_last_name_placeholder' );
$form_email_label            = app_get_localized_string( 'form_email_label' );
$form_email_placeholder      = app_get_localized_string( 'form_email_placeholder' );
$form_enquiry_label          = app_get_localized_string( 'form_enquiry_label' );
$form_enquiry_reason_one     = app_get_localized_string( 'form_enquiry_reason_one' );
$form_enquiry_reason_two     = app_get_localized_string( 'form_enquiry_reason_two' );
$form_enquiry_reason_three   = app_get_localized_string( 'form_enquiry_reason_three' );
$form_enquiry_reason_four    = app_get_localized_string( 'form_enquiry_reason_four' );
$form_message_label          = app_get_localized_string( 'form_message_label' );
$form_message_placeholder    = app_get_localized_string( 'form_message_placeholder' );
$form_contact_button_label   = app_get_localized_string( 'form_contact_button_label' );
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<?php include_once 'partials/banner.php'; ?>

	<div class="hero hero--alt bg-base">
		<div class="hero__image" data-aos="fade-up" style="background-image: url(assets/dist/images/temp/hero-img-2.jpg);"></div><!-- /.hero__bg -->

		<div class="hero__content" data-aos="fade-up">
			<h1 class="hero__title">
				<?php echo $contact_hero_title; ?>
			</h1><!-- /.hero__title -->
		</div><!-- /.hero__content -->
	</div><!-- /.hero -->

	<section class="section" data-aos="fade-up">
		<div class="shell">
			<div class="section__head">
				<h2 class="section__title" id="form-listing">
					<?php echo $contact_form_title; ?>
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
														* <?php echo $form_first_name; ?>
													</label>

													<div class="form__controls">
														<input type="text" class="field" id="field-first" name="first" placeholder="<?php echo $form_first_name_placeholder; ?>" />
													</div><!-- /.form__controls -->

													<span class="form__notice form__notice--error hidden"><?php echo $required_field_error; ?></span>
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

													<span class="form__notice form__notice--error hidden"><?php echo $required_field_error; ?></span>
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

												<span class="form__notice form__notice--error hidden"><?php echo $required_field_error; ?></span>
											</div><!-- /.form__col -->
										</div><!-- /.form__cols -->
									</div><!-- /.form__row -->

									<div class="form__row">
										<div class="form__cols">
											<div class="form__col">
												<label class="form__label" for="field-enquiry">
													<?php echo $form_enquiry_label; ?>
												</label>

												<div class="form__controls">
													<div class="select">
														<select name="enquiry" id="field-enquiry" class="field">
															<option value="<?php echo $form_enquiry_reason_one; ?>">
																<?php echo $form_enquiry_reason_one; ?>
															</option>

															<option value="<?php echo $form_enquiry_reason_two; ?>">
																<?php echo $form_enquiry_reason_two; ?>
															</option>

															<option value="<?php echo $form_enquiry_reason_three; ?>">
																<?php echo $form_enquiry_reason_three; ?>
															</option>

															<option value="<?php echo $form_enquiry_reason_four; ?>">
																<?php echo $form_enquiry_reason_four; ?>
															</option>
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
													* <?php echo $form_message_label; ?>
												</label>

												<div class="form__controls">
													<textarea class="textarea" id="field-message" name="message" placeholder="<?php echo $form_message_placeholder; ?>" cols="30" rows="10"></textarea>
												</div><!-- /.form__controls -->

												<span class="form__notice form__notice--error hidden"><?php echo $required_field_error; ?></span>
											</div><!-- /.form__col -->
										</div><!-- /.form__cols -->
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
									<?php echo $form_contact_button_label; ?>
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
