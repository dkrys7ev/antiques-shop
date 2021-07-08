(function ($, window, document) {
	var $win = $(window);
	var $doc = $(document);
	var winST = $win.scrollTop();
	var ajaxLoading = false;
	var userAgent = window.navigator.userAgent;
	var creditly = null;
	var get = {
		Scroll: 0,
		WinWidth: 0,
	};

	function isMobile() {
		return $win.width() < 768;
	}

	function navDropdown() {
		$(".js-nav-element").each(function (index, el) {
			var $this = $(this);
			var $closeDropdown = $this.find(".js-dropdown-close");
			$win.on("load resize", function () {
				if ($win.width() >= 1024) {
					$this.on("mouseenter", function () {
						$this
							.addClass("is-active")
							.siblings()
							.removeClass("is-active");

						if ($this.hasClass("has-dropdown")) {
							$(".js-header-bg").addClass("is-active");
						} else {
							$(".js-header-bg").removeClass("is-active");
						}
					});

					$this.on("mouseleave", function () {
						$this.removeClass("is-active");

						$(".js-header-bg").removeClass("is-active");
					});

					$closeDropdown.on("click", function (e) {
						e.preventDefault();
						$this.removeClass("is-active");
						$(".js-header-bg").removeClass("is-active");
					});
				} else {
					$(".js-nav-dropdown").slideUp();
					var $link = $this.children("a");
					$link.off().on("click", function (e) {
						$this
							.toggleClass("is-active")
							.siblings()
							.removeClass("is-active")
							.find(".js-nav-dropdown")
							.slideUp();

						$this.find(".js-nav-dropdown").slideToggle();
					});
				}
			});
		});
	}

	function expandHeader() {
		$(".js-expand-header").on("click", function (e) {
			e.preventDefault();

			$(".header").removeClass("is-small");
			$(".js-wrapper-page").removeClass("is-large");
		});
	}

	function collapseHeader() {
		$(".js-collapse-header").on("click", function (e) {
			e.preventDefault();

			$(".header").addClass("is-small");
			$(".js-wrapper-page").addClass("is-large");
		});
	}

	function openSearch() {
		$(".js-open-search").on("click", function (e) {
			e.preventDefault();
			$(".js-search-popup").addClass("is-active");
			$("body").addClass("is-hidden");
		});

		$(".js-close-search").on("click", function (e) {
			e.preventDefault();
			$(".js-search-popup").removeClass("is-active");
			$("body").removeClass("is-hidden");
		});
	}

	function initializeFlickitySliders() {
		var $element = $(".js-slider-flickity");

		if (!$element.length) {
			return false;
		}

		$element.each(function () {
			var $slider = $(this);
			var $sliderSlides = $slider.find(".main-carousel");

			// Plugin options

			$sliderSlides.flickity({
				pageDots: true,
				prevNextButtons: true,
				groupCells: false,
				freeScroll: false,
				draggable: true,
				autoPlay: 2000,
			});

			if (isMobile()) {
				$sliderSlides.flickity({
					pageDots: true,
					prevNextButtons: true,
					groupCells: false,
					freeScroll: false,
					draggable: true,
					contain: true,
					wrapAround: true,
				});
			}
		});
	}

	function isIe() {
		return userAgent.indexOf("Trident/") > 0;
	}

	$.fn.isInViewport = function () {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	function mobileHeader() {
		if ($win.width() <= 1023) {
			if ($(".js-bar-info").length) {
				var barHeight = $(".js-bar-info").innerHeight();

				$(".header").addClass("is-have-bar");
				$(".js-wrapper-page").addClass("is-have-bar");

				$(".header").css({
					top: barHeight,
				});
			} else {
				$(".header").css({
					top: 0,
				});
			}

			$(".js-nav-trigger-mobile").on("click", function (e) {
				e.preventDefault();
				$(this).toggleClass("is-active");

				$("body").toggleClass("is-hidden");

				$(".header").toggleClass("is-active");
			});
		} else {
			$(".header").css({
				top: 0,
			});
		}
	}

	$.fn.equalizeHeight = function () {
		var maxHeight = 0;
		var itemHeight;

		this.height("");

		for (var i = 0; i < this.length; i++) {
			itemHeight = $(this[i]).height("auto").height();
			if (maxHeight < itemHeight) {
				maxHeight = itemHeight;
			}
		}

		return this.height(maxHeight);
	};

	function expandButtons() {
		if (isMobile()) {
			$(".js-bar-inner").slideUp();
		}
		$(".js-expand-buttons")
			.off()
			.on("click", function (e) {
				e.preventDefault();
				$(this).toggleClass("is-active");
				$(".js-bar-inner").slideToggle();
			});
	}

	if (isIe()) {
		$(".js-image-fit").each(function (i, container) {
			var $container = $(container);
			var $image = $container.find("img");
			var imageSource = $image.attr("src") || $image.data("src");
			$container.css("background-image", "url(" + imageSource + ")");
			$image.addClass("sr-only");
		});
	}

	var $sticky = $(".js-sticky");
	var $stickyAnchor = $("#sticky-anchor");
	var $intro = $(".intro");
	var $nav = $(".js-sticky-bar");
	var $sectionNav = $(".js-bar-holder");

	if ($nav.attr("data-sticky") == "true") {
		$win.on("load scroll", function () {
			if ($nav.length) {
				var startPosition = $sectionNav.offset().top;

				stickyEl($nav, startPosition, false);
			}
		});
	}

	function stickyEl($el, startPosition, isAnchoredOnTop) {
		if ($el.length) {
			isAnchoredOnTop = isAnchoredOnTop == false ? isAnchoredOnTop : true;

			$el.toggleClass(
				"is-fixed",
				$win.scrollTop() + $(".header").innerHeight() > startPosition
			);
		}
	}

	function fonSizeUpdate() {
		var size = parseInt($("html").css("font-size"));

		$(".js-increase-font").on("click", function (e) {
			e.preventDefault();

			if (size > 12) {
				return;
			}

			size += 1;

			$("html").css("font-size", size + "px");

			$(".service").equalizeHeight();
			$(".js-service .service__body").equalizeHeight();
		});

		$(".js-decrease-font").on("click", function (e) {
			e.preventDefault();

			if (size < 8) {
				return;
			}

			size -= 1;

			$("html").css("font-size", size + "px");

			$(".service").equalizeHeight();
			$(".js-service .service__body").equalizeHeight();
		});
	}

	function passwordsMatch($form) {
		var $passwordField = $form.find('input[name="password"]');
		var $repeatPassField = $form.find('input[name="repeat_password"]');
		var password = $passwordField.val();
		var repeatPass = $repeatPassField.val();
		var passwordsMatch = password === repeatPass;

		if (!passwordsMatch) {
			$passwordField.addClass("has-error");
			$repeatPassField
				.addClass("has-error")
				.closest(".form__row")
				.find(".form__notice")
				.removeClass("hidden");
		} else {
			$passwordField.removeClass("has-error");
			$repeatPassField
				.removeClass("has-error")
				.closest(".form__row")
				.find(".form__notice")
				.addClass("hidden");
		}

		return passwordsMatch;
	}

	function uploadImages() {
		var $uploader = $("#field-images");
		var $images = $(".form .form__thumbnails ul");

		$uploader.on("change", function () {
			$images.html("");

			Array.from($uploader[0].files).forEach((file) => {
				var reader = new FileReader();

				reader.onload = function (event) {
					$images.prepend(
						`<li class="image-fit js-image-fit">
							<img src="${event.target.result}" rel="${event.target.result}" alt="img">
						</li>`
					);
				};

				reader.readAsDataURL(file);
			});
		});
	}

	$win.on("load resize", function () {
		mobileHeader();
		setTimeout(function () {
			$(".service").equalizeHeight();
			$(".accreditation").equalizeHeight();
			$(".js-service .service__body").equalizeHeight();
		}, 1000);

		expandButtons();

		initializeFlickitySliders();
	});

	$win.on("resize scroll", function () {
		if ($(".js-hero").length) {
			if (!$(".js-hero").isInViewport()) {
				$(".js-bar").addClass("is-visible");
			} else {
				$(".js-bar").removeClass("is-visible");
			}
		}
	});

	$doc.ready(function () {
		navDropdown();
		openSearch();
		fonSizeUpdate();
		uploadImages();
		expandHeader();
		collapseHeader();

		Stripe.setPublishableKey("pk_test_KgMDNEklH2ZaGxfmL7YUOCR2");
	});

	$win.on("load", function () {
		AOS.init({
			once: true,
			delay: 200,
			duration: 800,
			offset: 0,
			disable: "mobile",
		});
	});

	$doc.on("submit", ".js-register", function (event) {
		event.preventDefault();

		if (ajaxLoading) {
			return;
		}

		var $form = $(this);
		var formData = $form.serializeArray();
		var shouldRedirect = false;

		if (!passwordsMatch($form)) {
			return;
		}

		$.ajax({
			url: "app/register.php",
			method: "POST",
			data: formData,
			beforeSend: function () {
				$form.find(".field").removeClass("has-error");
				$form.find(".form__notice").addClass("hidden");

				ajaxLoading = true;
				$form.find(".form__btn").attr("disabled", true);
			},
			success: function (response) {
				var parsedResponse = JSON.parse(response);
				if (parsedResponse.status === "failed") {
					for (var field in parsedResponse.errors) {
						$(`[name="${field}"]`)
							.addClass("has-error")
							.closest(".form__row")
							.find(".form__notice")
							.html(parsedResponse.errors[field])
							.removeClass("hidden");
					}

					if (parsedResponse.message) {
						console.error(parsedResponse.message);
					}
				} else {
					shouldRedirect = true;
				}
			},
			error: function (error) {
				console.error(error);
			},
			complete: function () {
				ajaxLoading = false;
				$form.find(".form__btn").attr("disabled", false);

				if (shouldRedirect) {
					window.location.href = "shop";
				}
			},
		});
	});

	$doc.on("submit", ".js-login", function (event) {
		event.preventDefault();

		if (ajaxLoading) {
			return;
		}

		var $form = $(this);
		var formData = $form.serializeArray();
		var shouldRedirect = false;

		$.ajax({
			url: "app/login.php",
			method: "POST",
			data: formData,
			beforeSend: function () {
				$form.find(".form__error").addClass("hidden");
				$form.find(".field").removeClass("has-error");
				$form.find(".form__notice").addClass("hidden");

				ajaxLoading = true;
				$form.find(".form__btn").attr("disabled", true);
			},
			success: function (response) {
				var parsedResponse = JSON.parse(response);
				if (parsedResponse.status === "failed") {
					for (var field in parsedResponse.errors) {
						$(`[name="${field}"]`)
							.addClass("has-error")
							.closest(".form__row")
							.find(".form__notice")
							.html(parsedResponse.errors[field])
							.removeClass("hidden");
					}

					if (parsedResponse.auth_error) {
						$form.find(".form__error").removeClass("hidden");
					}
				} else {
					shouldRedirect = true;
				}
			},
			error: function (error) {
				console.error(error);
			},
			complete: function () {
				ajaxLoading = false;
				$form.find(".form__btn").attr("disabled", false);

				if (shouldRedirect) {
					window.location.href = "shop";
				}
			},
		});
	});

	$doc.on("submit", ".js-add-listing", function (event) {
		event.preventDefault();

		if (ajaxLoading) {
			return;
		}

		var $form = $(this);
		var formData = new FormData(this);
		var shouldRedirect = false;

		Array.from($form.find("input[type=file]")[0].files).forEach((file) => {
			formData.append("images[]", file, file.name);
		});

		$.ajax({
			url: "app/listing.php",
			data: formData,
			type: "POST",
			contentType: false,
			processData: false,
			beforeSend: function () {
				$form.find(".form__error").addClass("hidden");
				$form.find(".field").removeClass("has-error");
				$form.find(".textarea").removeClass("has-error");
				$form.find(".form__notice").addClass("hidden");

				ajaxLoading = true;
				$form.find(".form__btn").attr("disabled", true);
			},
			success: function (response) {
				var parsedResponse = JSON.parse(response);
				if (parsedResponse.status === "failed") {
					for (var field in parsedResponse.errors) {
						$(`[name="${field}"]`)
							.addClass("has-error")
							.closest(".form__row")
							.find(".form__notice")
							.html(parsedResponse.errors[field])
							.removeClass("hidden");
					}

					if (parsedResponse.db_error) {
						$form
							.find(".form__error")
							.text(parsedResponse.db_error)
							.removeClass("hidden");
					}
				} else {
					shouldRedirect = true;
				}
			},
			error: function (error) {
				console.error(error);
			},
			complete: function () {
				ajaxLoading = false;
				$form.find(".form__btn").attr("disabled", false);

				if (shouldRedirect) {
					window.location.href = "profile";
				}
			},
		});
	});

	$doc.on("click", ".js-logout", function (event) {
		event.preventDefault();

		$.ajax({
			url: "app/logout.php",
			method: "POST",
			complete: function () {
				window.location.href = "https://dkrystev.online/";
			},
		});
	});

	$doc.on("click", ".js-scroll", function (event) {
		event.preventDefault();

		var $link = $(this);
		var $target = $($link.attr("href"));

		$("html, body")
			.stop()
			.animate(
				{ scrollTop: $target.offset().top },
				1000,
				"swing",
				function () {}
			);
	});

	$(".slider-popup").slick({
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$doc.on("click", ".js-details", function (event) {
		event.preventDefault();

		var $link = $(this);
		var $parent = $link.closest(".box");
		var $target = $parent.find(".popup");

		$target.addClass("is-active");
	});

	$doc.on("click", ".js-close", function (event) {
		event.stopPropagation();

		var $button = $(this);
		var $target = $button.closest(".popup");

		$target.removeClass("is-active");
	});

	$doc.on("click", ".js-delete", function (event) {
		event.preventDefault();

		var $link = $(this);
		var listingId = $link.data("listing");
		var shouldRemove = false;

		if (listingId) {
			$.ajax({
				url: "app/delete.php",
				method: "POST",
				data: {
					listing_id: listingId,
				},
				success: function (response) {
					var parsedResponse = JSON.parse(response);

					if (parsedResponse.status === "ok") {
						shouldRemove = true;
					}
				},
				complete: function () {
					if (shouldRemove) {
						$link.closest(".box").remove();
					}

					if (!$(".box").length) {
						$(".js-boxes").html(`
							<h6>
								You haven't created any listings yet.
							</h6>

							<a href="#form-listing" class="btn btn--border btn--border-base js-scroll">
								<span>Create a listing</span>
							</a>
						`);
					}
				},
			});
		}
	});

	$doc.on("click", ".js-add", function (event) {
		event.preventDefault();

		var $link = $(this);
		var listingId = $link.data("listing");
		var shouldRedirect = false;

		if (listingId) {
			$.ajax({
				url: "app/add.php",
				method: "POST",
				data: {
					listing_id: listingId,
				},
				success: function (response) {
					var parsedResponse = JSON.parse(response);

					if (parsedResponse.status === "ok") {
						shouldRedirect = true;
					}
				},
				complete: function () {
					$(".popup").removeClass("is-active");

					$link.closest(".box").remove();

					if (!$(".box").length) {
						window.location.href = "cart";
					}
				},
			});
		}
	});

	$doc.on("click", ".js-remove", function (event) {
		event.preventDefault();

		var $link = $(this);
		var listingId = $link.data("listing");
		var shouldRemove = false;

		if (listingId) {
			$.ajax({
				url: "app/remove.php",
				method: "POST",
				data: {
					listing_id: listingId,
				},
				success: function (response) {
					var parsedResponse = JSON.parse(response);

					if (parsedResponse.status === "ok") {
						shouldRemove = true;
					}
				},
				complete: function () {
					if (shouldRemove) {
						$.ajax({
							url: window.location.href,
							success: function (response) {
								var newCart = $(response)
									.find(".js-cart")
									.html();
								$(".js-cart").html(newCart);
							},
						});
					}
				},
			});
		}
	});

	$doc.on("click", ".js-language", function (event) {
		event.preventDefault();

		var $link = $(this);
		var langCode = $link.data("language");
		var shouldReload = false;

		if (langCode) {
			$.ajax({
				url: "app/language.php",
				method: "POST",
				data: {
					language_code: langCode,
				},
				success: function (response) {
					var parsedResponse = JSON.parse(response);

					if (parsedResponse.status === "ok") {
						shouldReload = true;
					}
				},
				complete: function () {
					if (shouldReload) {
						window.location.reload();
					}
				},
			});
		}
	});

	$doc.on("click", ".js-checkout", function (event) {
		event.preventDefault();

		$(".popup").addClass("is-active");
	});

	$doc.on("click", ".js-order-details", function (event) {
		event.preventDefault();

		var target = $(this).data("target");

		$(target).addClass("is-active");
	});

	$doc.on("submit", ".js-contact", function (event) {
		event.preventDefault();

		if (ajaxLoading) {
			return;
		}

		var $form = $(this);
		var formData = $form.serializeArray();
		var shouldRedirect = false;

		$.ajax({
			url: "app/contact.php",
			method: "POST",
			data: formData,
			beforeSend: function () {
				$form.find(".form__error").addClass("hidden");
				$form.find(".field").removeClass("has-error");
				$form.find(".form__notice").addClass("hidden");

				ajaxLoading = true;
				$form.find(".form__btn").attr("disabled", true);
			},
			success: function (response) {
				var parsedResponse = JSON.parse(response);
				if (parsedResponse.status === "failed") {
					for (var field in parsedResponse.errors) {
						$(`[name="${field}"]`)
							.addClass("has-error")
							.closest(".form__col")
							.find(".form__notice")
							.html(parsedResponse.errors[field])
							.removeClass("hidden");
					}
				} else {
					shouldRedirect = true;
				}
			},
			error: function (error) {
				console.error(error);
			},
			complete: function () {
				ajaxLoading = false;
				$form.find(".form__btn").attr("disabled", false);

				if (shouldRedirect) {
					window.location.href = "thank-you";
				}
			},
		});
	});

	$doc.on("change", ".js-payment", function () {
		var $select = $(this);
		var selectedOption = $select.find("option:selected").val();

		if (selectedOption == "cc") {
			var creditCardHtml = "";
			var currentLang = getCookie("app_lang");

			if (!currentLang) {
				currentLang = "en";
			}

			if (currentLang == "bg") {
				creditCardHtml = `
					<div class="form__cols form__cols--cc">
						<div class="form__col form__col--1of2">
							<label class="form__label" for="field-number">
								* Номер на кредитната карта
							</label>

							<div class="form__row__inner">
								<div class="form__cols">
									<div class="form__controls form__col form__col--1of4" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,4);" onKeyUp="maxLen(this,4);" min="0" name="card-group-1" id="card-group-1" class="field" placeholder="XXXX" required>
									</div><!-- /.form__controls form__col form__col-/-1of4 -->

									<div class="form__controls form__col form__col--1of4" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,4);" onKeyUp="maxLen(this,4);" min="0" name="card-group-2" id="card-group-2" class="field" placeholder="XXXX" required>
									</div><!-- /.form__controls form__col form__col-/-1of4 -->

									<div class="form__controls form__col form__col--1of4" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,4);" onKeyUp="maxLen(this,4);" min="0" name="card-group-3" id="card-group-3" class="field" placeholder="XXXX" required>
									</div><!-- /.form__controls form__col form__col-/-1of4 -->

									<div class="form__controls form__col form__col--1of4" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,4);" onKeyUp="maxLen(this,4);" min="0" name="card-group-4" id="card-group-4" class="field" placeholder="XXXX" required>
									</div><!-- /.form__controls form__col form__col-/-1of4 -->

									<input type="hidden" class="card-number" data-stripe="number">
								</div><!-- /.form__cols -->
							</div><!-- /.form__row__inner -->
						</div><!-- /.form__col -->

						<div class="form__col form__col--1of2">
							<label class="form__label" for="field-holder">
								* Име изписано върху картата
							</label>

							<div class="form__controls">
								<input id="field-holder" class="field billing-address-name form-control"
								type="text" name="name"
								placeholder="Въведи името изписано върху картата">
							</div><!-- /.form__controls -->
						</div><!-- /.form__col -->

						<div class="form__col form__col--1of2">
							<label class="form__label">
								* Валидност на картата
							</label>

							<div class="form__row__inner">
								<div class="form__cols">
									<div class="form__controls form__controls--alt form__col form__col--1of2" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,2);" onKeyUp="maxLen(this,2);" name="month" id="month" class="field expiration-month-and-year" placeholder="MM" data-stripe="exp_month" required />
									</div><!-- /.form__controls form__controls-/-alt form__col form__col-/-1of2 -->

									<div class="form__controls form__controls--alt form__col form__col--1of2" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,2);" onKeyUp="maxLen(this,2);" name="year" id="year" class="field" placeholder="ГГ" data-stripe="exp_year" required />
									</div><!-- /.form__controls form__controls-/-alt form__col form__col-/-1of2 -->
								</div><!-- /.form__cols -->
							</div><!-- /.form__row__inner -->
						</div><!-- /.form__col -->

						<div class="form__col form__col--1of2">
							<label class="form__label" for="field-cvv">
								* CVV
							</label>

							<div class="form__controls">
								<input id="field-cvv" class="field security-code form-control"·
								inputmode="numeric"
								onKeyDown="maxLen(this,3);" onKeyUp="maxLen(this,3);"
								type="text" name="security-code"
								placeholder="&#149;&#149;&#149;">
							</div><!-- /.form__controls -->
						</div><!-- /.form__col -->

						<div class="card-type hidden">
						</div>

						<span class="form__notice form__notice--error js-card-error hidden">Error!</span>
					</div><!-- /.form__cols -->
				`;
			} else {
				creditCardHtml = `
					<div class="form__cols form__cols--cc">
						<div class="form__col form__col--1of2">
							<label class="form__label" for="field-number">
								* Card Number
							</label>

							<div class="form__row__inner">
								<div class="form__cols">
									<div class="form__controls form__col form__col--1of4" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,4);" onKeyUp="maxLen(this,4);" min="0" name="card-group-1" id="card-group-1" class="field" placeholder="XXXX" required>
									</div><!-- /.form__controls form__col form__col-/-1of4 -->

									<div class="form__controls form__col form__col--1of4" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,4);" onKeyUp="maxLen(this,4);" min="0" name="card-group-2" id="card-group-2" class="field" placeholder="XXXX" required>
									</div><!-- /.form__controls form__col form__col-/-1of4 -->

									<div class="form__controls form__col form__col--1of4" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,4);" onKeyUp="maxLen(this,4);" min="0" name="card-group-3" id="card-group-3" class="field" placeholder="XXXX" required>
									</div><!-- /.form__controls form__col form__col-/-1of4 -->

									<div class="form__controls form__col form__col--1of4" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,4);" onKeyUp="maxLen(this,4);" min="0" name="card-group-4" id="card-group-4" class="field" placeholder="XXXX" required>
									</div><!-- /.form__controls form__col form__col-/-1of4 -->

									<input type="hidden" class="card-number" data-stripe="number">
								</div><!-- /.form__cols -->
							</div><!-- /.form__row__inner -->
						</div><!-- /.form__col -->

						<div class="form__col form__col--1of2">
							<label class="form__label" for="field-holder">
								* Name on Card
							</label>

							<div class="form__controls">
								<input id="field-holder" class="field billing-address-name form-control"
								type="text" name="name"
								placeholder="John Smith">
							</div><!-- /.form__controls -->
						</div><!-- /.form__col -->

						<div class="form__col form__col--1of2">
							<label class="form__label">
								* Expiry
							</label>

							<div class="form__row__inner">
								<div class="form__cols">
									<div class="form__controls form__controls--alt form__col form__col--1of2" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,2);" onKeyUp="maxLen(this,2);" name="month" id="month" class="field expiration-month-and-year" placeholder="MM" data-stripe="exp_month" required />
									</div><!-- /.form__controls form__controls-/-alt form__col form__col-/-1of2 -->

									<div class="form__controls form__controls--alt form__col form__col--1of2" style="margin-bottom: 0;">
										<input type="number" onKeyDown="maxLen(this,2);" onKeyUp="maxLen(this,2);" name="year" id="year" class="field" placeholder="YY" data-stripe="exp_year" required />
									</div><!-- /.form__controls form__controls-/-alt form__col form__col-/-1of2 -->
								</div><!-- /.form__cols -->
							</div><!-- /.form__row__inner -->
						</div><!-- /.form__col -->

						<div class="form__col form__col--1of2">
							<label class="form__label" for="field-cvv">
								* CVV
							</label>

							<div class="form__controls">
								<input id="field-cvv" class="field security-code form-control"·
								inputmode="numeric"
								onKeyDown="maxLen(this,3);" onKeyUp="maxLen(this,3);"
								type="text" name="security-code"
								placeholder="&#149;&#149;&#149;">
							</div><!-- /.form__controls -->
						</div><!-- /.form__col -->

						<div class="card-type hidden">
						</div>

						<span class="form__notice form__notice--error js-card-error hidden">Error!</span>
					</div><!-- /.form__cols -->
				`;
			}

			$(".credit-card-wrapper")
				.html(creditCardHtml)
				.removeClass("hidden");
		} else {
			$(".credit-card-wrapper").html("").addClass("hidden");
		}
	});

	$doc.on("submit", ".js-form-checkout", function (event) {
		event.preventDefault();

		var $form = $(this);
		$(".js-card-error").html("").addClass("hidden");
		var paymentType = $form.find("#field-payment-type").val();
		var isValid = true;
		var formData = $form.serializeArray();

		if (paymentType == "cc") {
			let cardNum1 = $("#card-group-1").val();
			let cardNum2 = $("#card-group-2").val();
			let cardNum3 = $("#card-group-3").val();
			let cardNum4 = $("#card-group-4").val();

			$form
				.find(".card-number")
				.val(`${cardNum1}${cardNum2}${cardNum3}${cardNum4}`);

			Stripe.card.createToken($form, stripeResponseHandler);

			return;
		}

		if (!isValid) {
			return;
		}

		createOrder(formData);
	});

	function stripeResponseHandler(status, response) {
		if (response.error) {
			$(".js-card-error")
				.html(response.error.message)
				.removeClass("hidden");
		} else {
			var token = response.id;
			var $form = $(".js-form-checkout");
			var formData = $form.serializeArray();
			var amount = $form.data("amount");
			var email = $form.find('input[name="email"]').val();
			var name =
				$form.find('input[name="first"]').val() +
				" " +
				$form.find('input[name="last"]').val();
			$form.append(
				$('<input type="hidden" name="stripeToken">').val(token)
			);

			$.ajax({
				url: "app/charge.php",
				type: "POST",
				data: {
					stripe_token: token,
					total_amount: amount,
					email: email,
					name: name,
				},
				beforeSend: function () {
					$form.find(".form__error").addClass("hidden");
					$form.find(".field").removeClass("has-error");
					$form.find(".form__notice").addClass("hidden");
					ajaxLoading = true;
					$form.find(".form__btn").attr("disabled", true);
				},
				success: function (response) {
					createOrder(formData);
				},
				complete: function () {
					ajaxLoading = false;
					$form.find(".form__btn").attr("disabled", false);
				},
			});
		}
	}

	function createOrder(formData) {
		var $form = $(".js-form-checkout");
		var shouldRedirect = false;

		$.ajax({
			url: "app/order.php",
			type: "POST",
			data: formData,
			beforeSend: function () {
				ajaxLoading = true;

				$form.find(".form__error").addClass("hidden");
				$form.find(".field").removeClass("has-error");
				$form.find(".form__notice").addClass("hidden");
				$form.find(".form__btn").attr("disabled", true);
			},
			success: function (response) {
				var parsedResponse = JSON.parse(response);
				if (parsedResponse.status === "failed") {
					for (var field in parsedResponse.errors) {
						$(`[name="${field}"]`)
							.addClass("has-error")
							.closest(".form__col")
							.find(".form__notice")
							.html(parsedResponse.errors[field])
							.removeClass("hidden");
					}
				} else {
					shouldRedirect = true;
				}
			},
			complete: function () {
				ajaxLoading = false;
				$form.find(".form__btn").attr("disabled", false);

				if (shouldRedirect) {
					window.location.href = "order";
				}
			},
		});
	}

	if ($(".table").length) {
		$(window)
			.on("resize", function () {
				if ($(this).width() < 760) {
					$("tr td:first-child").click(function () {
						$(this).siblings().css({ display: "inline-block" });

						var $this = $(this);
						setTimeout(function () {
							$this.siblings().css("transform", "translateY(0)");
						}, 0);

						$("tr td:first-child").not($(this)).siblings().css({
							display: "none",
							transform: "translateY(-9999px)",
						});
					});
				} else if ($(this).width() > 760) {
					//unbind click : name is not clickable when screen is > 700px
					$("tr td:first-child").unbind("click");
					//remove with jquery added styles
					$("tr td:first-child")
						.siblings()
						.css({ display: "", transform: "" });
				}
			})
			.resize();
	}

	function getCookie(name) {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(";").shift();
	}
})(jQuery, window, document);
