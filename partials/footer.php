			<?php
			include_once 'app/includes/helpers.php';

			$footer_title            = app_get_localized_string( 'footer_title' );
			$footer_address          = app_get_localized_string( 'footer_address' );
			$company_name            = app_get_localized_string( 'company_name' );
			$phone_number            = app_get_localized_string( 'phone_number' );
			$nav_item_homepage       = app_get_localized_string( 'nav_item_homepage' );
			$nav_item_shop           = app_get_localized_string( 'nav_item_shop' );
			$nav_item_cart           = app_get_localized_string( 'nav_item_cart' );
			$nav_item_contact        = app_get_localized_string( 'nav_item_contact' );
			$nav_item_login          = app_get_localized_string( 'nav_item_login' );
			$nav_item_profile        = app_get_localized_string( 'nav_item_profile' );
			$nav_item_logout         = app_get_localized_string( 'nav_item_logout' );
			$footer_credits_text_one = app_get_localized_string( 'footer_credits_text_one' );
			$footer_credits_text_two = app_get_localized_string( 'footer_credits_text_two' );
			?>

			<footer class="footer bg-base">
				<div class="shell footer__shell">
					<div class="footer__content" data-aos="fade-up" data-aos-anchor=".accordion">
						<h4 class="footer__title">
							<?php echo $footer_title; ?>
						</h4><!-- /.footer__title -->

						<ul class="list-contacts">
							<li>
								<a href="tel:07001234">
									<?php echo $phone_number; ?>
								</a>
							</li>

							<li>
								<a href="mailto:nobody@example.com">
									office@antiqueshop.com
								</a>
							</li>
						</ul><!-- /.list-contacts -->

						<div class="socials">
							<ul>
								<li>
									<a href="#">
										<i class="ico-facebook">
											<svg xmlns="http://www.w3.org/2000/svg" width="9.349" height="20.256" viewBox="0 0 9.349 20.256">
												<path d="M9.349 3.549H7.141c-.779 0-.941.319-.941 1.125v1.948h3.149l-.3 3.42H6.203v10.214H2.124V10.085H.003V6.622h2.121V3.895c0-2.558 1.369-3.9 4.4-3.9h2.824z" fill="#fff" />
											</svg>
										</i>
									</a>
								</li>

								<li>
									<a href="#">
										<i class="ico-twitter">
											<svg xmlns="http://www.w3.org/2000/svg" width="20.256" height="16.462" viewBox="0 0 20.256 16.462">
												<path
													d="M0 14.594A11.818 11.818 0 0018.182 4.1a8.451 8.451 0 002.074-2.151 8.318 8.318 0 01-2.386.654 4.17 4.17 0 001.826-2.3 8.334 8.334 0 01-2.638 1.008 4.158 4.158 0 00-7.082 3.79A11.792 11.792 0 011.41.759a4.161 4.161 0 001.286 5.549 4.154 4.154 0 01-1.883-.521 4.16 4.16 0 003.336 4.129 4.16 4.16 0 01-1.876.071 4.155 4.155 0 003.881 2.886 8.349 8.349 0 01-6.152 1.721"
													fill="#fff"
												/>
											</svg>
										</i>
									</a>
								</li>

								<li>
									<a href="#">
										<i class="ico-instagram">
											<svg xmlns="http://www.w3.org/2000/svg" width="20.256" height="20.256" viewBox="0 0 20.256 20.256">
												<defs />
												<path fill="#fff" d="M16.733 4.844a1.321 1.321 0 11-1.321-1.321 1.321 1.321 0 011.321 1.321" />
												<g fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" transform="translate(4.844 4.844)">
													<circle stroke="none" cx="5.284" cy="5.284" r="5.284" />
													<circle cx="5.284" cy="5.284" r="4.284" />
												</g>
												<g fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2">
													<rect stroke="none" width="20.256" height="20.256" rx="7" />
													<rect x="1" y="1" width="18.256" height="18.256" rx="6" />
												</g>
											</svg>
										</i>
									</a>
								</li>

								<li>
									<a href="#">
										<i class="ico-linkedin">
											<svg xmlns="http://www.w3.org/2000/svg" width="18.429" height="17.614" viewBox="0 0 18.429 17.614">
												<defs />
												<g fill="#fff">
													<path d="M17.183 6.809a4.263 4.263 0 00-3.3-1.362 4.753 4.753 0 00-1.374.186 3.127 3.127 0 00-1.044.522 4.951 4.951 0 00-.677.624 5.115 5.115 0 00-.492.671h.024V5.723H6.373l.011.576q.012.575.012 3.551t-.024 7.763h3.944v-6.635a2.892 2.892 0 01.132-.971 2.562 2.562 0 01.761-1.027 1.949 1.949 0 011.267-.413 1.708 1.708 0 011.517.713 3.472 3.472 0 01.485 1.974v6.36h3.947v-6.816a5.715 5.715 0 00-1.247-3.989M3.828.582A2.2 2.2 0 002.228 0 2.256 2.256 0 00.614.582a1.932 1.932 0 00-.618 1.469 1.961 1.961 0 00.6 1.464 2.161 2.161 0 001.583.589h.025a2.256 2.256 0 001.625-.589 1.9 1.9 0 00.606-1.464A2 2 0 003.824.582M.228 5.723h3.96v11.89H.228z" />
												</g>
											</svg>
										</i>
									</a>
								</li>
							</ul>
						</div><!-- /.socials -->

						<div class="address">
							<p>
								<strong>
									<?php echo $company_name; ?>
								</strong>
							</p>

							<address>
								<?php echo $footer_address; ?>
							</address>

							<br>

							<p>
								<?php echo $footer_credits_text_one; ?> <a href="https://pixabay.com/" target="_blank">Pixabay</a>. <br><br>
								<a href="https://pixabay.com/service/license/" target="_blank"><?php echo $footer_credits_text_two; ?></a>
							</p>
						</div><!-- /.address -->
					</div><!-- /.footer__content -->

					<div class="footer__aside" data-aos="fade-up" data-aos-anchor=".accordion">
						<ul class="list-buttons">
							<li>
								<a href="<?php echo app_get_page_url(); ?>" class="btn-info btn-info--size-1">
									<?php echo $nav_item_homepage; ?>
								</a>
							</li>

							<li>
								<a href="<?php echo app_get_page_url('shop'); ?>" class="btn-info btn-info--size-1">
									<?php echo $nav_item_shop; ?>
								</a>
							</li>

							<li>
								<a href="<?php echo app_get_page_url('cart'); ?>" class="btn-info btn-info--size-1">
									<?php echo $nav_item_cart; ?>
								</a>
							</li>

							<li>
								<a href="<?php echo app_get_page_url('contact'); ?>" class="btn-info btn-info--size-1">
									<?php echo $nav_item_contact; ?>
								</a>
							</li>

							<?php if ( ! isset( $_COOKIE['app_user_id'] ) ) : ?>
								<li>
									<a href="<?php echo app_get_page_url('login'); ?>" class="btn-info btn-info--size-1">
										<?php echo $nav_item_login; ?>
									</a>
								</li>
							<?php else : ?>
								<li>
									<a href="<?php echo app_get_page_url('profile'); ?>" class="btn-info btn-info--size-1">
										<?php echo $nav_item_profile; ?>
									</a>
								</li>

								<li>
									<a href="#" class="btn-info btn-info--size-1 js-logout">
										<?php echo $nav_item_logout; ?>
									</a>
								</li>
							<?php endif; ?>
						</ul><!-- /.list-buttons -->
					</div><!-- /.footer__aside -->
				</div><!-- /.shell -->
			</footer><!-- /.footer -->
		</div><!-- /.wrapper -->

		<!-- JS -->
		<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
		<script type="text/javascript" src="assets/dist/scripts/jquery.min.js"></script>
		<script type="text/javascript" src="assets/dist/scripts/theme.detectors.min.js"></script>
		<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
		<script type="text/javascript" src="assets/dist/scripts/theme.plugins.js"></script>
		<script type="text/javascript" src="assets/dist/scripts/theme.js"></script>
		<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
	</body>
</html>
