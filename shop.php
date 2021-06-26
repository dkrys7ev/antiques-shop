<?php
if ( ! isset( $_COOKIE['app_user_id'] ) ) {
	header("Location: login.php");
	exit;
}

include_once 'partials/header.php';
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<div class="hero hero--alt bg-base">
		<div
			class="hero__image"
			data-aos="fade-up"
			style="
				background-image: url(assets/dist/images/temp/hero-img-5.jpg);
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

	<div
		class="filter filter--careers filter--footer"
		data-aos="fade-up"
	>
		<div class="shell filter__shell">
			<h2 class="filter__title">Filter by</h2>
			<!-- /.filter__title -->

			<div class="filter__cols">
				<div class="filter__col filter__col--size-1">
					<div class="filter__controls">
						<div class="select select--large js-select">
							<label for="field-location-1"
								>Location</label
							>

							<select
								name="field-location-1"
								id="field-location-1"
							>
								<option value="all">(All)</option>
								<option value="location-1">
									(Residential Care Services)
								</option>
								<option value="location-2">
									(Respite Care Services)
								</option>
								<option value="location-3">
									(Home Care Services)
								</option>
								<option value="location-4">
									(Disability Services)
								</option>
								<option value="location-5">
									(Community Services)
								</option>
								<option value="location-6">
									(Housing Services)
								</option>
							</select>
						</div>
						<!-- /.select -->
					</div>
					<!-- /.filter__controls -->
				</div>
				<!-- /.filter__col filter__col-/-size-1 -->

				<div class="filter__col filter__col--size-1">
					<div class="filter__controls">
						<div class="select select--large js-select">
							<label for="field-topic-1">Topic</label>

							<select
								name="field-topic-1"
								id="field-topic-1"
							>
								<option value="all">
									(Fundraising & Bequests)
								</option>
								<option value="topic-1">
									(Residential Care Services)
								</option>
								<option value="topic-2">
									(Respite Care Services)
								</option>
								<option value="topic-3">
									(Home Care Services)
								</option>
								<option value="topic-4">
									(Disability Services)
								</option>
								<option value="topic-5">
									(Community Services)
								</option>
								<option value="topic-6">
									(Housing Services)
								</option>
							</select>
						</div>
						<!-- /.select -->
					</div>
					<!-- /.filter__controls -->
				</div>
				<!-- /.filter__col filter__col-/-size-1 -->

				<div class="filter__col filter__col--size-6">
					<a
						href="#"
						class="btn btn--border btn--border-base filter__btn"
						>View</a
					>
				</div>
				<!-- /.filter__col filter__col-/-size-1 -->
			</div>
			<!-- /.filter__cols -->
		</div>
		<!-- /.shell -->
	</div>
	<!-- /.filter -->

	<section class="section section--accreditations">
		<div class="shell">
			<header class="section__head" data-aos="fade-up">
				<h3 class="section__title">Our Products</h3>
				<!-- /.section__title -->
			</header>
			<!-- /.section__head -->

			<div class="section__body" data-aos="fade-up">
				<div
					class="accreditations accreditations--slider js-slider"
					data-slidestoshow-mobile="1"
					data-slidestoshow="0"
					data-width="false"
					data-loop="false"
				>
					<div
						class="accreditations__items js-slider-slides"
					>
						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->

						<div class="accreditations__item">
							<div
								class="accreditation"
								data-aos="fade-up"
							>
								<h3 class="accreditation__title">
									Item #123
								</h3>
								<!-- /.accreditation__title -->

								<div class="accreditation__entry">
									<img
										src="https://via.placeholder.com/500"
										alt=""
									/>

									<h5>$99.99</h5>
								</div>
								<!-- /.accreditation__entry -->

								<a
									href="#"
									class="link link--small link--default accreditation__link"
									><span>Buy now</span></a
								>
							</div>
							<!-- /.accreditation -->
						</div>
						<!-- /.accreditations__item -->
					</div>
					<!-- /.accreditations__items -->

					<div
						class="slider-arrows js-slider-arrows hidden-sm hidden-md hidden-lg"
					>
						<button
							class="slider-arrow slider-arrow--prev js-slider-arrow--prev"
							type="button"
							aria-label="Previous"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12.023"
								height="21.218"
								viewBox="0 0 12.023 21.218"
							>
								<path
									d="M.707.707l9.9 9.9-9.9 9.9"
									fill="none"
									stroke="#fff"
									stroke-miterlimit="10"
									stroke-width="2"
								/>
							</svg>
						</button>

						<button
							class="slider-arrow slider-arrow--next js-slider-arrow--next"
							type="button"
							aria-label="Previous"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12.023"
								height="21.218"
								viewBox="0 0 12.023 21.218"
							>
								<path
									d="M.707.707l9.9 9.9-9.9 9.9"
									fill="none"
									stroke="#fff"
									stroke-miterlimit="10"
									stroke-width="2"
								/>
							</svg>
						</button>
					</div>
					<!-- /.slider-arrows -->

					<div class="slider-dots js-slider-dots"></div>
					<!-- /.features__dots -->
				</div>
				<!-- /.accreditations -->
			</div>
			<!-- /.section__body -->
		</div>
		<!-- /.shell -->
	</section>
	<!-- /.section -->

	<?php include_once 'partials/footer-top.php'; ?>
</div>
<!-- /.wrapper__inner -->

<?php
include_once 'partials/footer-bottom.php';
