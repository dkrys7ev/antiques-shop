<?php
if ( ! isset( $_COOKIE['app_user_id'] ) ) {
	header("Location: login.php");

	exit;
}

include_once 'partials/header.php';
include_once 'app/includes/helpers.php';

$user_id  = isset( $_COOKIE['app_user_id'] ) ? $_COOKIE['app_user_id'] : false;
$user     = app_get_user_info( $user_id );
$listings = app_get_user_listings( $user_id );
$orders   = app_get_user_orders( $user_id );
?>

<div class="wrapper__inner is-large js-wrapper-page">
	<div class="hero hero--alt bg-base">
		<div
		class="hero__image"
		data-aos="fade-up"
		style="
		background-image: url(assets/dist/images/temp/arizona-398686_1920.jpg);
		"
		></div>
		<!-- /.hero__bg -->

		<div class="hero__content" data-aos="fade-up">
			<h1 class="hero__title" style="font-family: 'Milestone'">
				Hello, <br>
				<?php echo $user['name']; ?>
			</h1>
			<!-- /.hero__title -->
		</div>
		<!-- /.hero__content -->
	</div>
	<!-- /.hero -->

	<section class="section">
		<div class="shell">
			<div class="section__head">
				<h2 class="section__title" data-aos="fade-up">
					Your listings
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

											<?php if ( $listing['status'] != 'sold' ): ?>
												<a href="#" class="btn btn--border btn--border-base js-delete" data-listing="<?php echo $listing['ID']; ?>">
													<span>Delete</span>
												</a>
											<?php else :
												?>
												<button type="button" class="btn btn--border btn--border-base" disabled>
													Sold
												</button>
											<?php endif; ?>
										</div><!-- /.box__actions -->
									</div><!-- /.box__inner -->
								</li><!-- /.box -->
							<?php endforeach; ?>
						</ul>
					</div><!-- /.boxes -->
				<?php else :
					?>
					<h6>
						You haven't created any listings yet.
					</h6>

					<a href="#form-listing" class="btn btn--border btn--border-base js-scroll">
						<span>Create a listing</span>
					</a>
				<?php endif; ?>
			</div><!-- /.section__content -->
		</div><!-- /.shell -->
	</section><!-- /.section -->

	<section class="section-cta" data-aos="fade-up">
		<div class="shell">
			<h2 class="section__title">
				Your orders from

				<br>

				<br>

				<span style="font-size: 7rem;	font-family: 'Milestone'">AntiqueShop</span>
			</h2>
			<!-- /.section__title -->
		</div>
		<!-- /.shell -->
	</section>
	<!-- /.section-cta -->


	<section class="section">
		<div class="shell">
			<div class="section__content">
				<?php if ( ! empty( $orders ) ) : ?>
					<div class="table">
						<table>
							<thead>
								<tr class="table-headers">
									<th>Order #</th>
									<th>Date Created</th>
									<th>Payment Type</th>
									<th>Status</th>
									<th>Total</th>
									<th>Details</th>
								</tr>
							</thead>

							<tbody>
								<?php foreach( $orders as $order ) : ?>
									<tr>
										<td>
											<?php echo $order['ID']; ?>
										</td>

										<th class="mobile-header">Date Created</th>

										<td>
											<?php echo $order['date_created']; ?>
										</td>

										<th class="mobile-header">Payment Type</th>

										<td>
											<?php echo ( $order['payment_type'] == 'cod') ? 'Cash on Delivery' : 'Credit Card'; ?>
										</td>

										<th class="mobile-header">Status</th>

										<td>
											<?php echo ucfirst( $order['status'] ); ?>
										</td>

										<th class="mobile-header">Total</th>

										<td>
											<?php echo sprintf( '$%s', number_format( $order['total'], 2 ) ); ?>
										</td>

										<th class="mobile-header">Details</th>

										<td>
											<button type="button" class="btn btn--border btn--border-base js-order-details" data-target="#order-<?php echo $order['ID']; ?>">View</button>
										</td>
									</tr>
								<?php endforeach; ?>
							</tbody>
						</table>
					</div><!-- /.table -->

					<?php foreach( $orders as $order ) : ?>
						<div class="popup popup--checkout" id="<?php echo sprintf( 'order-%s', $order['ID'] ); ?>">
							<div class="popup__inner">
								<div class="popup__content">
									<button type="button" class="popup__close js-close">
										<span></span>
										<span></span>
									</button>

									<h3>Order Items:</h3>

									<div class="boxes">
										<ul>
											<?php
											$products = unserialize($order['products']);

											$styles = '';
											if ( count( $products ) < 3 ) {
												$styles = 'flex-grow: 1';
											}

											foreach( $products as $index => $listing ) :
												$image_path = false;

												if ( ! empty( $listing['images'] ) ) {
													$images = unserialize( $listing['images'] );
													$image = reset( $images );
													$image_path = sprintf( 'uploads/%s', $image );
												}
												?>

												<li class="box" style="<?php echo $styles; ?>">
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
														</div><!-- /.box__actions -->
													</div><!-- /.box__inner -->
												</li><!-- /.box -->
											<?php endforeach; ?>
										</ul>
									</div><!-- /.boxes -->
								</div><!-- /.popup__content -->
							</div><!-- /.popup__inner -->
						</div><!-- /.popup -->
					<?php endforeach; ?>
				<?php else : ?>
					<h3 style="text-align: center;">
						You haven't made any orders yet.
					</h3>
				<?php endif; ?>
			</div><!-- /.section__content -->
		</div><!-- /.shell -->
	</section><!-- /.section -->

	<section class="section-cta" data-aos="fade-up">
		<div class="shell">
			<h2 class="section__title">
				Thousands of genuine antiques for sale, direct from trusted antique dealers at your local <br><br><span style="font-size: 7rem;	font-family: 'Milestone'">AntiqueShop</span>
			</h2>
			<!-- /.section__title -->

			<a href="shop" class="btn btn--border btn--border-white btn--size-1">Shop now</a>
		</div>
		<!-- /.shell -->
	</section>
	<!-- /.section-cta -->

	<section class="section" data-aos="fade-up">
		<div class="shell">
			<div class="section__head">
				<h2 class="section__title" id="form-listing">
					Add new listing
				</h2><!-- /.section__title -->
			</div><!-- /.section__head -->

			<div class="section__content">
				<div class="form">
					<form action="?" method="post" enctype="multipart/form-data" class="js-add-listing">
						<div class="form__body">
							<div class="form__section">
								<div class="form__group">
									<div class="form__row">
										<label class="form__label" for="field-title">
											* Title
										</label>

										<div class="form__controls">
											<input type="text" class="field" id="field-title" name="title" placeholder="Enter the listing title" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">This field is required</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-description">
											* Description
										</label>

										<div class="form__controls">
											<textarea class="textarea" id="field-description" name="description" placeholder="Enter the listing description" cols="30" rows="10"></textarea>
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">This field is required</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label">
											* Categories
										</label>

										<div class="form__controls">
											<div class="checkbox">
												<input type="checkbox" name="categories[]" value="everyday" />

												<label>Еveryday things</label>
											</div><!-- /.checkbox -->

											<div class="checkbox">
												<input type="checkbox" name="categories[]" value="historical" />

												<label>Historical artifacts</label>
											</div><!-- /.checkbox -->

											<div class="checkbox">
												<input type="checkbox" name="categories[]" value="art" />

												<label>Аrt and culture</label>
											</div><!-- /.checkbox -->

											<div class="checkbox">
												<input type="checkbox" name="categories[]" value="other" />

												<label>Other</label>
											</div><!-- /.checkbox -->
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">This field is required</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-images">
											* Images
										</label>

										<div class="form__controls">
											<input type="file" class="upload" id="field-images" name="images" accept="image/*" multiple />

											<div class="form__thumbnails">
												<ul>
												</ul>
											</div><!-- /.form__thumbnails -->
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">This field is required</span>
									</div><!-- /.form__row -->

									<div class="form__row">
										<label class="form__label" for="field-price">
											* Price
										</label>

										<div class="form__controls">
											<input type="number" class="field" id="field-price" name="price" step="0.01" placeholder="Enter the listing price" />
										</div><!-- /.form__controls -->

										<span class="form__notice form__notice--error hidden">This field is required</span>

										<div class="form__error hidden"></div>
									</div><!-- /.form__row -->
								</div><!-- /.form__group -->
							</div><!-- /.form__section -->
						</div><!-- /.form__body -->

						<div class="form__actions">
							<button type="submit" class="btn btn--border-base form__btn form__btn--submit">
								<span>Submit</span>

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
