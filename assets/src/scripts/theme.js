(function ($, window, document) {
	var $win = $(window);
	var $doc = $(document);
	var winST = $win.scrollTop();
	var ajaxLoading = false;

	var get = {
		Scroll: 0,
		WinWidth: 0,
	};

	/*
	 *   Is Mobile
	 */
	function isMobile() {
		return $win.width() < 768;
	}

	/*
	 *   Is Tablet
	 */
	function isTablet() {
		return $win.width() < 1023;
	}

	function window_width() {
		var myWidth = 0;
		if (typeof window.innerWidth == "number") myWidth = window.innerWidth;
		else if (
			document.documentElement &&
			document.documentElement.clientWidth
		)
			myWidth = document.documentElement.clientWidth;
		else if (document.body && document.body.clientWidth)
			myWidth = document.body.clientWidth;
		return myWidth;
	}

	function window_height() {
		var myHeight = 0;
		if (typeof window.innerHeight == "number")
			myHeight = window.innerHeight;
		else if (
			document.documentElement &&
			document.documentElement.clientHeight
		)
			myHeight = document.documentElement.clientHeight;
		else if (document.body && document.body.clientHeight)
			myHeight = document.body.clientHeight;
		return myHeight;
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
						console.log($link);
						e.preventDefault();

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

	function expandHeader(winST) {
		if ($(".header").hasClass("is-home")) {
			if (winST >= 500) {
				$(".header").addClass("is-small");
				$(".js-wrapper-page").addClass("is-large");
			} else {
				$(".header").removeClass("is-small");
				$(".js-header-bg").removeClass("is-active");
				$(".js-wrapper-page").removeClass("is-large");
			}
		} else if ($(".header").hasClass("is-small")) {
			$win.on("scroll", function () {
				$(".header").addClass("is-small");
				$(".js-wrapper-page").addClass("is-large");
			});
		}

		$(".js-expand-header").on("click", function (e) {
			e.preventDefault();
			$(".header").removeClass("is-small");
			$(".js-wrapper-page").removeClass("is-large");
		});
	}

	function initSelect() {
		const $select = $(".js-select select");
		if (!$select.length) {
			return false;
		}

		$select.each(function () {
			$(this).selectric({});
		});

		$(".js-select").each(function () {
			var $labelText = $(this).find("label");

			$labelText.insertBefore($(this).find(".selectric .label"));
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

	function initializeSliders() {
		var $element = $(".js-slider");

		if (!$element.length) {
			return false;
		}

		$element.each(function () {
			var $slider = $(this);
			var sliderId = $slider.attr("id");
			var $sliderSlides = $slider.find(".js-slider-slides");
			var $sliderArrows = $slider.find(".js-slider-arrows");
			var $sliderDots = $slider.find(".js-slider-dots");
			var iframes = $slider.find(".embed-player");

			/* Additional Slider's data attributes to change plugin settings */

			var showSlides = parseInt($slider.attr("data-slidestoshow"))
				? parseInt($slider.attr("data-slidestoshow"))
				: 1;
			var showSlidesTablet = parseInt(
				$slider.attr("data-slidestoshow-tablet")
			)
				? parseInt($slider.attr("data-slidestoshow-tablet"))
				: 1;
			var showSlidesMobile = parseInt(
				$slider.attr("data-slidestoshow-mobile")
			)
				? parseInt($slider.attr("data-slidestoshow-mobile"))
				: 1;
			var autoplaySlides =
				$slider.attr("data-autoplay") == "true" ? true : false;
			var autoplayDelay = $slider.attr("data-autoplay-delay") || 5000;
			var autoHeight =
				$slider.attr("data-autoheight") == "true" ? true : false;
			var loopSlides =
				$slider.attr("data-loop") == "false" ? false : true;
			var centerSlides =
				$slider.attr("data-center") == "true" ? true : false;

			var slidesWidth =
				$slider.attr("data-width") == "false" ? true : false;

			var fadeSlides = $slider.attr("data-fade") == "true" ? true : false;

			/* Plugin Settings */

			var settings = {
				arrows: true,
				appendArrows: $sliderArrows,
				prevArrow: $sliderArrows.find(".js-slider-arrow--prev"),
				nextArrow: $sliderArrows.find(".js-slider-arrow--next"),
				dots: true,
				appendDots: $sliderDots,
				infinite: loopSlides,
				slidesToShow: showSlides,
				adaptiveHeight: autoHeight,
				autoplay: autoplaySlides,
				centerMode: centerSlides,
				autoplaySpeed: autoplayDelay,
				speed: 400,
				touchMove: true,
				mobileFirst: true,
				fade: fadeSlides,
				variableWidth: slidesWidth,
				accessibility: true,
				cssEase: "linear",
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesToShow: showSlidesMobile,
						},
					},
				],
			};

			$sliderSlides.slick(settings);

			if ($slider.attr("data-slidestoshow") == 0) {
				var $destroySlidesXs = $(this).find(".js-slider-slides");

				$(window).on("load resize", function () {
					setTimeout(function () {
						if (
							!isMobile() &&
							$destroySlidesXs.hasClass("slick-initialized")
						) {
							$destroySlidesXs.slick("unslick");
							videoPopup();
						}

						if (
							isMobile() &&
							!$destroySlidesXs.hasClass("slick-initialized")
						) {
							$destroySlidesXs.slick(settings);
						}
					}, 350);
				});
			}
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

	function videoPopup() {
		$(".js-video-popup").each(function (index, el) {
			$(this).magnificPopup({
				type: "iframe",
				mainClass: "mfp-fade",
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
				iframe: {
					patterns: {
						youtube_short: {
							index: "youtu.be/",
							id: "youtu.be/",
							src: "//www.youtube.com/embed/%id%?autoplay=1",
						},
					},
				},
			});
		});
	}

	function initMap() {
		$("#map").each(function (index, Element) {
			var center = $(this).data("center");

			var myOptions = {
				zoom: 15,
				center: center,
			};

			var map = new google.maps.Map(Element, myOptions);

			var marker = new google.maps.Marker({
				position: center,
				map: map,
				icon: {
					url: "assets/dist/images/ico-pin.png",
					scaledSize: new google.maps.Size(51, 80),
				},
			});

			google.maps.event.addDomListener(window, "resize", function () {
				map.setCenter(center);
			});
		});
	}

	function initAccordions() {
		var $accordion = $(".js-accordion");
		//Hide the inactive sections
		$(".accordion__section")
			.not(".is-current")
			.find(".accordion__body")
			.hide();

		//Handle the show/hide logic
		$accordion.on("click", ".accordion__head", function (event) {
			var $accordionSection = $(this).closest(".accordion__section");
			var $accordionBody = $accordionSection.find(".accordion__body");

			$accordionBody.stop().slideToggle();

			$accordionSection.toggleClass("is-current");

			/*$accordionSection
				.siblings()
				.removeClass('is-current')
				.find('.accordion__body')
				.slideUp();*/
		});
	}

	window.onload = function () {
		var chart = new CanvasJS.Chart("chart", {
			rangeSelector: {
				buttonStyle: {
					backgroundColorOnHover: "#1C0E38",
				},
			},
			theme: "light1",
			animationEnabled: true,
			backgroundColor: "transparent",
			axisY: {
				title: "Daily Accommodation Payment (DAP)",
				titleFontWeight: "bold",
				titleFontSize: 16,
				titleFontColor: "#1C0E38",
				gridThickness: 0,
				lineThickness: 3,
				labelFontFamily: "acumin-pro",
				lineColor: "#fff",
				tickLength: 0,
				labelFormatter: function (e) {
					return "";
				},
			},
			axisX: {
				title: "Refundable Accommodation Deposit (RAD)",
				titleFontWeight: "bold",
				titleFontSize: 16,
				titleFontColor: "#1C0E38",
				gridThickness: 0,
				lineThickness: 3,
				lineColor: "#fff",
				labelFontFamily: "acumin-pro",
				labelFontSize: 16,
				labelFontWeight: "500",
				labelFontColor: "#1C0E38",
				labelLineThickness: 0,
			},
			toolTip: {
				shared: true,
				reversed: true,
				fontColor: "#fff",
				fontFamily: "acumin-pro",
				fontSize: "16",
				borderThickness: 1,
				backgroundColor: "#1C0E38",
				contentFormatter: function (e) {
					return (
						"<p>" +
						"<strong>" +
						e.entries[0].dataPoint.name +
						"</strong>" +
						" " +
						e.entries[0].dataPoint.label +
						"</p>" +
						"<p>" +
						"<strong>" +
						e.entries[0].dataSeries.name +
						"</strong>" +
						" " +
						"$" +
						e.entries[0].dataPoint.y +
						",00" +
						"</p>"
					);
				},
			},
			dataPointMaxWidth: 57,
			data: [
				{
					type: "column",
					yValueFormatString: "$0.00",
					name: "DAP",
					indexLabel: "{y}",
					indexLabelFontFamily: "acumin-pro",
					indexLabelFontSize: 16,
					indexLabelFontWeight: "500",
					indexLabelFontColor: "#1C0E38",
					hoverBackgroundColor: "#1c0e38",
					highlightEnabled: false,
					dataPoints: [
						{
							y: 0,
							label: "$550,000",
							name: "RAD",
							color: "#fff",
							highlightColor: "#1c0e38",
							mouseover: onMouseover,
							mouseout: onMouseout,
						},
						{
							y: 15,
							label: "$440,000",
							name: "RAD",
							color: "#fff",
							highlightColor: "#1c0e38",
							mouseover: onMouseover,
							mouseout: onMouseout,
						},
						{
							y: 30,
							label: "$330,000",
							name: "RAD",
							color: "#fff",
							highlightColor: "#1c0e38",
							mouseover: onMouseover,
							mouseout: onMouseout,
						},
						{
							y: 45,
							label: "$220,000",
							name: "RAD",
							color: "#fff",
							highlightColor: "#1c0e38",
							mouseover: onMouseover,
							mouseout: onMouseout,
						},
						{
							y: 60,
							label: "$110,000",
							name: "RAD",
							color: "#fff",
							highlightColor: "#1c0e38",
							mouseover: onMouseover,
							mouseout: onMouseout,
						},
						{
							y: 75,
							label: "$0,00",
							name: "RAD",
							color: "#fff",
							highlightColor: "#1c0e38",
							mouseover: onMouseover,
							mouseout: onMouseout,
						},
					],
				},
			],
		});

		function onMouseover(e) {
			this.color = e.dataPoint.highlightColor;
			chart.render();
		}

		function onMouseout(e) {
			this.color = "#fff";
			chart.render();
		}

		if ($("#chart").length) {
			chart.render();
		}
	};

	$.fn.isInViewport = function () {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	function addLabel() {
		var $parentField = $(".js-form .gfield_radio li")
			.last()
			.find("input[type='text']");

		var $parentFieldRadio = $(".js-form .gfield_radio li")
			.last()
			.find("input[type='radio']");

		var $appendItem = $(".js-form .gfield_radio li")
			.last()
			.append('<div class="gform_control"></div>');

		var $control = $(".js-form .gfield_radio li")
			.last()
			.find(".gform_control");

		var parentFieldId = $parentFieldRadio.attr("id");

		$parentField.val("");

		$(
			'<label id="' +
				parentFieldId +
				'" for="' +
				parentFieldId +
				'">Other</label>'
		).insertBefore($parentField);

		//$('<span>$</span>').insertAfter($parentField);
		$control.append($parentField);
	}

	function mobileHeader() {
		if ($win.width() <= 1023) {
			/*$('header .header__content').slideUp();
			$('header .header__foot').slideUp();*/

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

	$(".js-bar-inner-alt li a").on("click", function (e) {
		e.preventDefault();

		var currentHref = $(this).attr("href");

		var targetOffset =
			$(currentHref).offset().top - $(".header").innerHeight();

		$("html, body").stop().animate({ scrollTop: targetOffset }, "500");

		$(".js-bar-inner").slideUp();
		$(".js-expand-buttons").removeClass("is-active");
	});

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

	function initChart() {
		if (!$("#myChart").length) {
			return;
		}

		Chart.plugins.register({
			afterDraw: function (chartInstance) {
				if (chartInstance.config.options.showDatapoints) {
					var helpers = Chart.helpers;
					var ctx = chartInstance.chart.ctx;
					var fontColor = helpers.getValueOrDefault(
						chartInstance.config.options.showDatapoints.fontColor,
						chartInstance.config.options.defaultFontColor
					);

					// render the value of the chart above the bar
					ctx.font = Chart.helpers.fontString(
						16,
						"bold",
						"acumin-pro-semi-condensed,Arial,sans-serif"
					);
					ctx.textAlign = "center";
					ctx.textBaseline = "bottom";
					ctx.fillStyle = "#1C0E38";

					chartInstance.data.datasets.forEach(function (dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model =
								dataset._meta[Object.keys(dataset._meta)[0]]
									.data[i]._model;
							var scaleMax =
								dataset._meta[Object.keys(dataset._meta)[0]]
									.data[i]._yScale.maxHeight;
							var yPos =
								(scaleMax - model.y) / scaleMax >= 0.93
									? model.y + 20
									: model.y - 5;

							yPos < 50 ? (yPos = 16) : (yPos = yPos);

							ctx.fillText(
								"$" + dataset.data[i].toFixed(2),
								model.x,
								yPos
							);
						}
					});
				}
			},
		});

		var ctx = document.getElementById("myChart").getContext("2d");

		var mybarChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: [
					"$550,000",
					"$440,000",
					"$330,000",
					"$220,000",
					"$110,000",
					"$0.00",
				],
				datasets: [
					{
						hoverBackgroundColor: "#1c0e38",
						backgroundColor: "#fff",
						data: [0.0, 15.0, 30.0, 45.0, 60.0, 75.0],
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				showDatapoints: true,
				legend: {
					display: false,
				},
				scales: {
					yAxes: [
						{
							gridLines: {
								display: false,
								color: "#fff",
								lineWidth: 2,
							},
							ticks: {
								display: false,
								beginAtZero: true,
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								display: false,
								color: "#fff",
								lineWidth: 2,
							},
							ticks: {
								beginAtZero: true,
								fontColor: "#1C0E38",
								fontStyle: "bold",
								fontSize: 16,
								padding: 5,
							},
						},
					],
				},
				tooltips: {
					enabled: false,
					callbacks: {
						title: function () {
							return "Estimated Refund(YTD)";
						},
						label: function (tooltipItem) {
							return (
								"$" +
								parseFloat(tooltipItem.yLabel).toFixed(2) +
								"+" +
								tooltipItem.xLabel
							);
						},
					},
					custom: function (tooltip) {
						var dataPoints =
							tooltip.dataPoints && tooltip.dataPoints.pop();

						if (dataPoints) {
							if (dataPoints.datasetIndex > 0) return false;
						}

						if (tooltip.labelColors) {
							if (tooltip.labelColors.length != 1) return false;
						}

						var tooltipEl = document.getElementById(
							"chartjs-tooltip"
						);

						if (!tooltipEl) {
							tooltipEl = document.createElement("div");
							tooltipEl.id = "chartjs-tooltip";
							this._chart.canvas.parentNode.appendChild(
								tooltipEl
							);
						}

						if (tooltip.opacity === 0) {
							tooltipEl.style.opacity = 0;

							return;
						}

						var getBody = (bodyItem) => {
							return bodyItem.lines;
						};

						if (tooltip.body) {
							var titleLines = tooltip.title || [];

							var innerHtml =
								"<div><p><strong>RAD:</strong>" +
								tooltip.body[0].lines[0].split("+")[0] +
								"</p><p><strong>Dap:</strong>" +
								tooltip.body[0].lines[0].split("+")[1] +
								"</p></div>";

							tooltipEl.innerHTML = innerHtml;
						}

						var positionY = this._chart.canvas.offsetTop;
						var positionX = this._chart.canvas.offsetLeft;

						tooltipEl.style.opacity = 1;
						tooltipEl.style.left = tooltip.caretX + "px";
						tooltipEl.style.top = tooltip.caretY + "px";
					},
				},
			},
		});

		if ($(".wrapper").hasClass("is-contrast")) {
			var mybarChart = new Chart(ctx, {
				type: "bar",
				data: {
					labels: [
						"$550,000",
						"$440,000",
						"$330,000",
						"$220,000",
						"$110,000",
						"$0.00",
					],
					datasets: [
						{
							hoverBackgroundColor: "#1c0e38",
							backgroundColor: "#1c0e38",
							data: [0.0, 15.0, 30.0, 45.0, 60.0, 75.0],
						},
					],
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					showDatapoints: true,
					legend: {
						display: false,
					},
					scales: {
						yAxes: [
							{
								gridLines: {
									display: false,
									color: "#1c0e38",
									lineWidth: 2,
								},
								ticks: {
									display: false,
									beginAtZero: true,
								},
							},
						],
						xAxes: [
							{
								gridLines: {
									display: false,
									color: "#1c0e38",
									lineWidth: 2,
								},
								ticks: {
									beginAtZero: true,
									fontColor: "#1C0E38",
									fontStyle: "bold",
									fontSize: 16,
									padding: 5,
								},
							},
						],
					},
					tooltips: {
						enabled: false,
						callbacks: {
							title: function () {
								return "Estimated Refund(YTD)";
							},
							label: function (tooltipItem) {
								return (
									"$" +
									parseFloat(tooltipItem.yLabel).toFixed(2) +
									"+" +
									tooltipItem.xLabel
								);
							},
						},
						custom: function (tooltip) {
							var dataPoints =
								tooltip.dataPoints && tooltip.dataPoints.pop();

							if (dataPoints) {
								if (dataPoints.datasetIndex > 0) return false;
							}

							if (tooltip.labelColors) {
								if (tooltip.labelColors.length != 1)
									return false;
							}

							var tooltipEl = document.getElementById(
								"chartjs-tooltip"
							);

							if (!tooltipEl) {
								tooltipEl = document.createElement("div");
								tooltipEl.id = "chartjs-tooltip";
								this._chart.canvas.parentNode.appendChild(
									tooltipEl
								);
							}

							if (tooltip.opacity === 0) {
								tooltipEl.style.opacity = 0;

								return;
							}

							var getBody = (bodyItem) => {
								return bodyItem.lines;
							};

							if (tooltip.body) {
								var titleLines = tooltip.title || [];

								var innerHtml =
									"<div><p><strong>RAD:</strong>" +
									tooltip.body[0].lines[0].split("+")[0] +
									"</p><p><strong>Dap:</strong>" +
									tooltip.body[0].lines[0].split("+")[1] +
									"</p></div>";

								tooltipEl.innerHTML = innerHtml;
							}

							var positionY = this._chart.canvas.offsetTop;
							var positionX = this._chart.canvas.offsetLeft;

							tooltipEl.style.opacity = 1;
							tooltipEl.style.left = tooltip.caretX + "px";
							tooltipEl.style.top = tooltip.caretY + "px";
						},
					},
				},
			});
		}
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

	$win.on("load scroll resize", function () {
		get.Scroll = $win.scrollTop();
		if ($win.width() >= 1024) {
			expandHeader(get.Scroll);
		}
	});

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

	$win.on("load", function () {
		initMap();
		initChart();
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
		initSelect();
		openSearch();
		initializeSliders();
		videoPopup();
		initAccordions();
		addLabel();
		fonSizeUpdate();
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
			url: "ajax/register.php",
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
					window.location.href = "shop.php";
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
			url: "ajax/login.php",
			method: "POST",
			data: formData,
			beforeSend: function () {
				$form.find('.form__error').addClass('hidden');
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
						$form.find('.form__error').removeClass('hidden');
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
					window.location.href = "shop.php";
				}
			},
		});
	});

	$doc.on('click', '.js-logout', function (event) {
		event.preventDefault();

		$.ajax({
			url: "ajax/logout.php",
			method: "POST",
			complete: function () {
				window.location.href = "index.php";
			},
		});
	});
})(jQuery, window, document);
