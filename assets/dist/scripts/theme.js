!function($, window, document) {
    var $win = $(window), $doc = $(document), get = ($win.scrollTop(), {
        Scroll: 0,
        WinWidth: 0
    });
    function isMobile() {
        return $win.width() < 768;
    }
    function videoPopup() {
        $(".js-video-popup").each((function(index, el) {
            $(this).magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1,
                iframe: {
                    patterns: {
                        youtube_short: {
                            index: "youtu.be/",
                            id: "youtu.be/",
                            src: "//www.youtube.com/embed/%id%?autoplay=1"
                        }
                    }
                }
            });
        }));
    }
    window.onload = function() {
        var chart = new CanvasJS.Chart("chart", {
            rangeSelector: {
                buttonStyle: {
                    backgroundColorOnHover: "#1C0E38"
                }
            },
            theme: "light1",
            animationEnabled: !0,
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
                labelFormatter: function(e) {
                    return "";
                }
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
                labelLineThickness: 0
            },
            toolTip: {
                shared: !0,
                reversed: !0,
                fontColor: "#fff",
                fontFamily: "acumin-pro",
                fontSize: "16",
                borderThickness: 1,
                backgroundColor: "#1C0E38",
                contentFormatter: function(e) {
                    return "<p><strong>" + e.entries[0].dataPoint.name + "</strong> " + e.entries[0].dataPoint.label + "</p><p><strong>" + e.entries[0].dataSeries.name + "</strong> $" + e.entries[0].dataPoint.y + ",00</p>";
                }
            },
            dataPointMaxWidth: 57,
            data: [ {
                type: "column",
                yValueFormatString: "$0.00",
                name: "DAP",
                indexLabel: "{y}",
                indexLabelFontFamily: "acumin-pro",
                indexLabelFontSize: 16,
                indexLabelFontWeight: "500",
                indexLabelFontColor: "#1C0E38",
                hoverBackgroundColor: "#1c0e38",
                highlightEnabled: !1,
                dataPoints: [ {
                    y: 0,
                    label: "$550,000",
                    name: "RAD",
                    color: "#fff",
                    highlightColor: "#1c0e38",
                    mouseover: onMouseover,
                    mouseout: onMouseout
                }, {
                    y: 15,
                    label: "$440,000",
                    name: "RAD",
                    color: "#fff",
                    highlightColor: "#1c0e38",
                    mouseover: onMouseover,
                    mouseout: onMouseout
                }, {
                    y: 30,
                    label: "$330,000",
                    name: "RAD",
                    color: "#fff",
                    highlightColor: "#1c0e38",
                    mouseover: onMouseover,
                    mouseout: onMouseout
                }, {
                    y: 45,
                    label: "$220,000",
                    name: "RAD",
                    color: "#fff",
                    highlightColor: "#1c0e38",
                    mouseover: onMouseover,
                    mouseout: onMouseout
                }, {
                    y: 60,
                    label: "$110,000",
                    name: "RAD",
                    color: "#fff",
                    highlightColor: "#1c0e38",
                    mouseover: onMouseover,
                    mouseout: onMouseout
                }, {
                    y: 75,
                    label: "$0,00",
                    name: "RAD",
                    color: "#fff",
                    highlightColor: "#1c0e38",
                    mouseover: onMouseover,
                    mouseout: onMouseout
                } ]
            } ]
        });
        function onMouseover(e) {
            this.color = e.dataPoint.highlightColor, chart.render();
        }
        function onMouseout(e) {
            this.color = "#fff", chart.render();
        }
        $("#chart").length && chart.render();
    }, $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top, elementBottom = elementTop + $(this).outerHeight(), viewportTop = $(window).scrollTop(), viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }, $.fn.equalizeHeight = function() {
        var itemHeight, maxHeight = 0;
        this.height("");
        for (var i = 0; i < this.length; i++) maxHeight < (itemHeight = $(this[i]).height("auto").height()) && (maxHeight = itemHeight);
        return this.height(maxHeight);
    }, $(".js-bar-inner-alt li a").on("click", (function(e) {
        e.preventDefault();
        var currentHref = $(this).attr("href"), targetOffset = $(currentHref).offset().top - $(".header").innerHeight();
        $("html, body").stop().animate({
            scrollTop: targetOffset
        }, "500"), $(".js-bar-inner").slideUp(), $(".js-expand-buttons").removeClass("is-active");
    }));
    $(".js-sticky"), $("#sticky-anchor"), $(".intro");
    var $nav = $(".js-sticky-bar"), $sectionNav = $(".js-bar-holder");
    function initChart() {
        if ($("#myChart").length) {
            Chart.plugins.register({
                afterDraw: function(chartInstance) {
                    if (chartInstance.config.options.showDatapoints) {
                        var helpers = Chart.helpers, ctx = chartInstance.chart.ctx;
                        helpers.getValueOrDefault(chartInstance.config.options.showDatapoints.fontColor, chartInstance.config.options.defaultFontColor);
                        ctx.font = Chart.helpers.fontString(16, "bold", "acumin-pro-semi-condensed,Arial,sans-serif"), 
                        ctx.textAlign = "center", ctx.textBaseline = "bottom", ctx.fillStyle = "#1C0E38", 
                        chartInstance.data.datasets.forEach((function(dataset) {
                            for (var i = 0; i < dataset.data.length; i++) {
                                var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model, scaleMax = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight, yPos = (scaleMax - model.y) / scaleMax >= .93 ? model.y + 20 : model.y - 5;
                                yPos = yPos < 50 ? 16 : yPos, ctx.fillText("$" + dataset.data[i].toFixed(2), model.x, yPos);
                            }
                        }));
                    }
                }
            });
            var ctx = document.getElementById("myChart").getContext("2d");
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [ "$550,000", "$440,000", "$330,000", "$220,000", "$110,000", "$0.00" ],
                    datasets: [ {
                        hoverBackgroundColor: "#1c0e38",
                        backgroundColor: "#fff",
                        data: [ 0, 15, 30, 45, 60, 75 ]
                    } ]
                },
                options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    showDatapoints: !0,
                    legend: {
                        display: !1
                    },
                    scales: {
                        yAxes: [ {
                            gridLines: {
                                display: !1,
                                color: "#fff",
                                lineWidth: 2
                            },
                            ticks: {
                                display: !1,
                                beginAtZero: !0
                            }
                        } ],
                        xAxes: [ {
                            gridLines: {
                                display: !1,
                                color: "#fff",
                                lineWidth: 2
                            },
                            ticks: {
                                beginAtZero: !0,
                                fontColor: "#1C0E38",
                                fontStyle: "bold",
                                fontSize: 16,
                                padding: 5
                            }
                        } ]
                    },
                    tooltips: {
                        enabled: !1,
                        callbacks: {
                            title: function() {
                                return "Estimated Refund(YTD)";
                            },
                            label: function(tooltipItem) {
                                return "$" + parseFloat(tooltipItem.yLabel).toFixed(2) + "+" + tooltipItem.xLabel;
                            }
                        },
                        custom: function(tooltip) {
                            var dataPoints = tooltip.dataPoints && tooltip.dataPoints.pop();
                            if (dataPoints && dataPoints.datasetIndex > 0) return !1;
                            if (tooltip.labelColors && 1 != tooltip.labelColors.length) return !1;
                            var tooltipEl = document.getElementById("chartjs-tooltip");
                            if (tooltipEl || ((tooltipEl = document.createElement("div")).id = "chartjs-tooltip", 
                            this._chart.canvas.parentNode.appendChild(tooltipEl)), 0 !== tooltip.opacity) {
                                if (tooltip.body) {
                                    tooltip.title;
                                    var innerHtml = "<div><p><strong>RAD:</strong>" + tooltip.body[0].lines[0].split("+")[0] + "</p><p><strong>Dap:</strong>" + tooltip.body[0].lines[0].split("+")[1] + "</p></div>";
                                    tooltipEl.innerHTML = innerHtml;
                                }
                                this._chart.canvas.offsetTop, this._chart.canvas.offsetLeft;
                                tooltipEl.style.opacity = 1, tooltipEl.style.left = tooltip.caretX + "px", tooltipEl.style.top = tooltip.caretY + "px";
                            } else tooltipEl.style.opacity = 0;
                        }
                    }
                }
            });
            if ($(".wrapper").hasClass("is-contrast")) new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [ "$550,000", "$440,000", "$330,000", "$220,000", "$110,000", "$0.00" ],
                    datasets: [ {
                        hoverBackgroundColor: "#1c0e38",
                        backgroundColor: "#1c0e38",
                        data: [ 0, 15, 30, 45, 60, 75 ]
                    } ]
                },
                options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    showDatapoints: !0,
                    legend: {
                        display: !1
                    },
                    scales: {
                        yAxes: [ {
                            gridLines: {
                                display: !1,
                                color: "#1c0e38",
                                lineWidth: 2
                            },
                            ticks: {
                                display: !1,
                                beginAtZero: !0
                            }
                        } ],
                        xAxes: [ {
                            gridLines: {
                                display: !1,
                                color: "#1c0e38",
                                lineWidth: 2
                            },
                            ticks: {
                                beginAtZero: !0,
                                fontColor: "#1C0E38",
                                fontStyle: "bold",
                                fontSize: 16,
                                padding: 5
                            }
                        } ]
                    },
                    tooltips: {
                        enabled: !1,
                        callbacks: {
                            title: function() {
                                return "Estimated Refund(YTD)";
                            },
                            label: function(tooltipItem) {
                                return "$" + parseFloat(tooltipItem.yLabel).toFixed(2) + "+" + tooltipItem.xLabel;
                            }
                        },
                        custom: function(tooltip) {
                            var dataPoints = tooltip.dataPoints && tooltip.dataPoints.pop();
                            if (dataPoints && dataPoints.datasetIndex > 0) return !1;
                            if (tooltip.labelColors && 1 != tooltip.labelColors.length) return !1;
                            var tooltipEl = document.getElementById("chartjs-tooltip");
                            if (tooltipEl || ((tooltipEl = document.createElement("div")).id = "chartjs-tooltip", 
                            this._chart.canvas.parentNode.appendChild(tooltipEl)), 0 !== tooltip.opacity) {
                                if (tooltip.body) {
                                    tooltip.title;
                                    var innerHtml = "<div><p><strong>RAD:</strong>" + tooltip.body[0].lines[0].split("+")[0] + "</p><p><strong>Dap:</strong>" + tooltip.body[0].lines[0].split("+")[1] + "</p></div>";
                                    tooltipEl.innerHTML = innerHtml;
                                }
                                this._chart.canvas.offsetTop, this._chart.canvas.offsetLeft;
                                tooltipEl.style.opacity = 1, tooltipEl.style.left = tooltip.caretX + "px", tooltipEl.style.top = tooltip.caretY + "px";
                            } else tooltipEl.style.opacity = 0;
                        }
                    }
                }
            });
        }
    }
    "true" == $nav.attr("data-sticky") && $win.on("load scroll", (function() {
        if ($nav.length) {
            var startPosition = $sectionNav.offset().top;
            !function stickyEl($el, startPosition, isAnchoredOnTop) {
                $el.length && (isAnchoredOnTop = 0 != isAnchoredOnTop || isAnchoredOnTop, $el.toggleClass("is-fixed", $win.scrollTop() + $(".header").innerHeight() > startPosition));
            }($nav, startPosition, !1);
        }
    })), $win.on("load scroll resize", (function() {
        get.Scroll = $win.scrollTop(), $win.width() >= 1024 && function expandHeader(winST) {
            $(".header").hasClass("is-home") ? winST >= 500 ? ($(".header").addClass("is-small"), 
            $(".js-wrapper-page").addClass("is-large")) : ($(".header").removeClass("is-small"), 
            $(".js-header-bg").removeClass("is-active"), $(".js-wrapper-page").removeClass("is-large")) : $(".header").hasClass("is-small") && $win.on("scroll", (function() {
                $(".header").addClass("is-small"), $(".js-wrapper-page").addClass("is-large");
            })), $(".js-expand-header").on("click", (function(e) {
                e.preventDefault(), $(".header").removeClass("is-small"), $(".js-wrapper-page").removeClass("is-large");
            }));
        }(get.Scroll);
    })), $win.on("load resize", (function() {
        !function mobileHeader() {
            if ($win.width() <= 1023) {
                if ($(".js-bar-info").length) {
                    var barHeight = $(".js-bar-info").innerHeight();
                    $(".header").addClass("is-have-bar"), $(".js-wrapper-page").addClass("is-have-bar"), 
                    $(".header").css({
                        top: barHeight
                    });
                } else $(".header").css({
                    top: 0
                });
                $(".js-nav-trigger-mobile").on("click", (function(e) {
                    e.preventDefault(), $(this).toggleClass("is-active"), $("body").toggleClass("is-hidden"), 
                    $(".header").toggleClass("is-active");
                }));
            } else $(".header").css({
                top: 0
            });
        }(), setTimeout((function() {
            $(".service").equalizeHeight(), $(".accreditation").equalizeHeight(), $(".js-service .service__body").equalizeHeight();
        }), 1e3), function expandButtons() {
            isMobile() && $(".js-bar-inner").slideUp(), $(".js-expand-buttons").off().on("click", (function(e) {
                e.preventDefault(), $(this).toggleClass("is-active"), $(".js-bar-inner").slideToggle();
            }));
        }(), function initializeFlickitySliders() {
            var $element = $(".js-slider-flickity");
            if (!$element.length) return !1;
            $element.each((function() {
                var $sliderSlides = $(this).find(".main-carousel");
                $sliderSlides.flickity({
                    pageDots: !0,
                    prevNextButtons: !0,
                    groupCells: !1,
                    freeScroll: !1,
                    draggable: !0
                }), isMobile() && $sliderSlides.flickity({
                    pageDots: !0,
                    prevNextButtons: !0,
                    groupCells: !1,
                    freeScroll: !1,
                    draggable: !0,
                    contain: !0
                });
            }));
        }();
    })), $win.on("load", (function() {
        !function initMap() {
            $("#map").each((function(index, Element) {
                var center = $(this).data("center"), myOptions = {
                    zoom: 15,
                    center: center
                }, map = new google.maps.Map(Element, myOptions);
                new google.maps.Marker({
                    position: center,
                    map: map,
                    icon: {
                        url: "assets/dist/images/ico-pin.png",
                        scaledSize: new google.maps.Size(51, 80)
                    }
                }), google.maps.event.addDomListener(window, "resize", (function() {
                    map.setCenter(center);
                }));
            }));
        }(), initChart();
    })), $win.on("resize scroll", (function() {
        $(".js-hero").length && ($(".js-hero").isInViewport() ? $(".js-bar").removeClass("is-visible") : $(".js-bar").addClass("is-visible"));
    })), $doc.ready((function() {
        !function navDropdown() {
            $(".js-nav-element").each((function(index, el) {
                var $this = $(this), $closeDropdown = $this.find(".js-dropdown-close");
                $win.on("load resize", (function() {
                    if ($win.width() >= 1024) $this.on("mouseenter", (function() {
                        $this.addClass("is-active").siblings().removeClass("is-active"), $this.hasClass("has-dropdown") ? $(".js-header-bg").addClass("is-active") : $(".js-header-bg").removeClass("is-active");
                    })), $this.on("mouseleave", (function() {
                        $this.removeClass("is-active"), $(".js-header-bg").removeClass("is-active");
                    })), $closeDropdown.on("click", (function(e) {
                        e.preventDefault(), $this.removeClass("is-active"), $(".js-header-bg").removeClass("is-active");
                    })); else {
                        $(".js-nav-dropdown").slideUp();
                        var $link = $this.children("a");
                        $link.off().on("click", (function(e) {
                            console.log($link), e.preventDefault(), $this.toggleClass("is-active").siblings().removeClass("is-active").find(".js-nav-dropdown").slideUp(), 
                            $this.find(".js-nav-dropdown").slideToggle();
                        }));
                    }
                }));
            }));
        }(), function initSelect() {
            const $select = $(".js-select select");
            if (!$select.length) return !1;
            $select.each((function() {
                $(this).selectric({});
            })), $(".js-select").each((function() {
                $(this).find("label").insertBefore($(this).find(".selectric .label"));
            }));
        }(), function openSearch() {
            $(".js-open-search").on("click", (function(e) {
                e.preventDefault(), $(".js-search-popup").addClass("is-active"), $("body").addClass("is-hidden");
            })), $(".js-close-search").on("click", (function(e) {
                e.preventDefault(), $(".js-search-popup").removeClass("is-active"), $("body").removeClass("is-hidden");
            }));
        }(), function initializeSliders() {
            var $element = $(".js-slider");
            if (!$element.length) return !1;
            $element.each((function() {
                var $slider = $(this), $sliderSlides = ($slider.attr("id"), $slider.find(".js-slider-slides")), $sliderArrows = $slider.find(".js-slider-arrows"), $sliderDots = $slider.find(".js-slider-dots"), showSlides = ($slider.find(".embed-player"), 
                parseInt($slider.attr("data-slidestoshow")) ? parseInt($slider.attr("data-slidestoshow")) : 1), showSlidesMobile = (parseInt($slider.attr("data-slidestoshow-tablet")) && parseInt($slider.attr("data-slidestoshow-tablet")), 
                parseInt($slider.attr("data-slidestoshow-mobile")) ? parseInt($slider.attr("data-slidestoshow-mobile")) : 1), autoplaySlides = "true" == $slider.attr("data-autoplay"), autoplayDelay = $slider.attr("data-autoplay-delay") || 5e3, autoHeight = "true" == $slider.attr("data-autoheight"), loopSlides = "false" != $slider.attr("data-loop"), centerSlides = "true" == $slider.attr("data-center"), slidesWidth = "false" == $slider.attr("data-width"), fadeSlides = "true" == $slider.attr("data-fade"), settings = {
                    arrows: !0,
                    appendArrows: $sliderArrows,
                    prevArrow: $sliderArrows.find(".js-slider-arrow--prev"),
                    nextArrow: $sliderArrows.find(".js-slider-arrow--next"),
                    dots: !0,
                    appendDots: $sliderDots,
                    infinite: loopSlides,
                    slidesToShow: showSlides,
                    adaptiveHeight: autoHeight,
                    autoplay: autoplaySlides,
                    centerMode: centerSlides,
                    autoplaySpeed: autoplayDelay,
                    speed: 400,
                    touchMove: !0,
                    mobileFirst: !0,
                    fade: fadeSlides,
                    variableWidth: slidesWidth,
                    accessibility: !0,
                    cssEase: "linear",
                    responsive: [ {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: showSlidesMobile
                        }
                    } ]
                };
                if ($sliderSlides.slick(settings), 0 == $slider.attr("data-slidestoshow")) {
                    var $destroySlidesXs = $(this).find(".js-slider-slides");
                    $(window).on("load resize", (function() {
                        setTimeout((function() {
                            !isMobile() && $destroySlidesXs.hasClass("slick-initialized") && ($destroySlidesXs.slick("unslick"), 
                            videoPopup()), isMobile() && !$destroySlidesXs.hasClass("slick-initialized") && $destroySlidesXs.slick(settings);
                        }), 350);
                    }));
                }
            }));
        }(), videoPopup(), function initAccordions() {
            var $accordion = $(".js-accordion");
            $(".accordion__section").not(".is-current").find(".accordion__body").hide(), $accordion.on("click", ".accordion__head", (function(event) {
                var $accordionSection = $(this).closest(".accordion__section");
                $accordionSection.find(".accordion__body").stop().slideToggle(), $accordionSection.toggleClass("is-current");
            }));
        }(), function addLabel() {
            var $parentField = $(".js-form .gfield_radio li").last().find("input[type='text']"), $parentFieldRadio = $(".js-form .gfield_radio li").last().find("input[type='radio']"), $control = ($(".js-form .gfield_radio li").last().append('<div class="gform_control"></div>'), 
            $(".js-form .gfield_radio li").last().find(".gform_control")), parentFieldId = $parentFieldRadio.attr("id");
            $parentField.val(""), $('<label id="' + parentFieldId + '" for="' + parentFieldId + '">Other</label>').insertBefore($parentField), 
            $control.append($parentField);
        }(), function fonSizeUpdate() {
            var size = parseInt($("html").css("font-size"));
            $(".js-increase-font").on("click", (function(e) {
                e.preventDefault(), (size += 1) > 12 || ($("html").css("font-size", size + "px"), 
                $(".service").equalizeHeight(), $(".js-service .service__body").equalizeHeight());
            })), $(".js-decrease-font").on("click", (function(e) {
                e.preventDefault(), (size -= 1) < 8 || ($("html").css("font-size", size + "px"), 
                $(".service").equalizeHeight(), $(".js-service .service__body").equalizeHeight());
            }));
        }(), function contrastButton() {
            $(".js-contast").on("click", (function(e) {
                e.preventDefault(), $(".wrapper").toggleClass("is-contrast"), initChart();
            }));
        }();
    })), $win.on("load", (function() {
        AOS.init({
            once: !0,
            delay: 200,
            duration: 800,
            offset: 0,
            disable: "mobile"
        });
    }));
}(jQuery, window, document);