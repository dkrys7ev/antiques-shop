<!DOCTYPE html>
<html class="no-js" lang="en-AU">
	<head prefix="og:http://ogp.me/ns# fb:http://ogp.me/ns/fb#">
		<meta charset="utf-8" />
		<meta http-equiv="x-ua-compatible" content="ie=edge" />
		<meta name="format-detection" content="telephone=no" />
		<meta http-equiv="x-dns-prefetch-control" content="on" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, shrink-to-fit=no"
		/>

		<link rel="dns-prefetch" href="//google-analytics.com" />
		<link rel="dns-prefetch" href="//ajax.googleapis.com" />
		<link rel="dns-prefetch" href="//www.google-analytics.com" />

		<link
			rel="icon"
			href="assets/dist/images/app-icons/favicon-16x16.png"
			sizes="16x16"
		/>
		<link
			rel="icon"
			href="assets/dist/images/app-icons/favicon-32x32.png"
			sizes="32x32"
		/>
		<link
			rel="shortcut icon"
			sizes="196x196"
			href="assets/dist/images/app-icons/favicon-196x196.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="assets/dist/images/app-icons/apple-touch-icon.png"
		/>
		<link rel="stylesheet" href="https://use.typekit.net/ycu6woa.css" />

		<title>The Antiques Shop</title>

		<link rel="stylesheet" href="assets/dist/styles/theme.css" />

		<script
			type="text/javascript"
			src="assets/dist/scripts/jquery.min.js"
		></script>
		<script
			type="text/javascript"
			src="assets/dist/scripts/theme.detectors.min.js"
		></script>
	</head>

	<body>
		<!--[if lt IE 10]>
			<p class="browserupgrade">
				You are using an <strong>outdated</strong> browser. Please
				<a href="http://browsehappy.com/">upgrade your browser</a> to
				improve your experience.
			</p>
		<![endif]-->

		<div class="wrapper">
			<header class="header is-small">
				<div class="header__bg js-header-bg"></div>
				<!-- /.nav__bg -->

				<div class="header__inner">
					<div class="header__head">
						<div class="header__logo">
							<a href="index.php" class="logo"> AntiqueShop </a>
						</div>
						<!-- /.header__logo -->

						<div class="header__aside">
							<a href="tel:07001234" class="phone">
								<img
									src="assets/dist/images/ico-phone.svg"
									alt=""
								/>

								<span class="hidden-xs hidden-sm"
									>0700 1234</span
								>
							</a>

							<a
								href="#"
								class="link-search js-open-search hidden-lg hidden-md"
							>
								<img
									src="assets/dist/images/ico-search-light.svg"
									alt=""
								/>
							</a>

							<a
								href="#"
								class="nav-trigger-mobile js-nav-trigger-mobile hidden-lg hidden-md"
							>
								<span></span>
								<span></span>
								<span></span>
							</a>
						</div>
						<!-- /.header__aside -->
					</div>
					<!-- /.header__head -->

					<div class="header__content">
						<nav class="nav">
							<ul>
								<li class="js-nav-element">
									<a href="index.php">
										<span>Home</span>
									</a>
								</li>

								<li class="js-nav-element">
									<a href="shop.php">
										<span>Shop</span>
									</a>
								</li>

								<li class="js-nav-element">
									<a href="contact.php">
										<span>Contact</span>
									</a>
								</li>

								<?php if ( ! isset( $_COOKIE['app_user_id'] ) ) : ?>
									<li class="js-nav-element">
										<a href="login.php">
											<span>Login</span>
										</a>
									</li>
								<?php else : ?>
									<li class="js-nav-element">
										<a href="profile.php">
											<span>Profile</span>
										</a>
									</li>

									<li class="js-nav-element js-logout">
										<a href="#">
											<span>Logout</span>
										</a>
									</li>
								<?php endif; ?>
							</ul>
						</nav>
						<!-- /.nav -->

						<ul class="list-font-charger">
							<li>
								<a href="#" class="js-increase-font">
									<img
										src="assets/dist/images/ico-font-plus.svg"
										alt=""
									/>
								</a>
							</li>

							<li>
								<a href="#" class="js-decrease-font">
									<img
										src="assets/dist/images/ico-font-minus.svg"
										alt=""
									/>
								</a>
							</li>
						</ul>
					</div>
					<!-- /.header__content -->

					<div class="header__foot">
						<a href="#" class="nav-trigger nav-trigger--active js-collapse-header">
							<img src="assets/dist/images/ico-close-dropdown.svg" alt="">
						</a>
					</div>
					<!-- /.header__foot -->
				</div>
				<!-- /.header__inner -->

				<div class="header__outer">
					<div class="header__head">
						<div class="header__logo">
							<a href="index.php" class="logo logo--rotate"> AS </a>
						</div>
						<!-- /.header__logo -->

						<a href="tel:07001234" class="phone phone--small">
							<img
								src="assets/dist/images/ico-phone.svg"
								alt=""
							/>

							<span>CALL</span>
						</a>

						<a
							href="#"
							class="link-search js-open-search hidden-xs hidden-sm"
						>
							<img
								src="assets/dist/images/ico-search-light.svg"
								alt=""
							/>
						</a>
					</div>
					<!-- /.header__head -->

					<div class="header__foot">
						<a href="#" class="nav-trigger js-expand-header">
							<img
								src="assets/dist/images/ico-nav-trigger.svg"
								alt=""
							/>
						</a>
					</div>
					<!-- /.header__foot -->
				</div>
				<!-- /.header__outer -->
			</header>

			<div class="search js-search-popup">
				<a href="#" class="search__close js-close-search hidden-xs">
					<span>Close</span>

					<img src="assets/dist/images/ico-close-search.svg" alt="" />
				</a>

				<a
					href="#"
					class="search__close js-close-search hidden-sm hidden-md hidden-lg"
				>
					<img
						src="assets/dist/images/ico-close-search-mobile.svg"
						alt=""
					/>
				</a>

				<div class="search__content">
					<div class="search__form">
						<form action="?" method="get">
							<label for="field-search" class="hidden"
								>Enter your search here…</label
							>

							<div class="search__field">
								<img
									src="assets/dist/images/ico-search-base.svg"
									alt=""
								/>

								<input
									type="search"
									name="field-search"
									id="field-search"
									value=""
									placeholder="Enter your search here…"
								/>
							</div>
							<!-- /.search__field -->

							<input
								type="submit"
								value="Search"
								class="search__btn btn btn--border btn--border-base"
							/>
						</form>
					</div>
					<!-- /.search__form -->
				</div>
				<!-- /.search__content -->
			</div>
			<!-- /.search -->
