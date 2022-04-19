var $ = jQuery.noConflict();

$(document).ready(function($) {
    "use strict";

    /* global google: false */

    /* ==============================================
        Full height home-section
    =============================================== */

    var windowHeight = $(window).height(),
        topSection = $('#hero-section');
    topSection.css('height', windowHeight);

    $(window).resize(function() {
        var windowHeight = $(window).height();
        topSection.css('height', windowHeight);
    });

    /* ==============================================
        Collapse menu on click
    =============================================== */

    $('.navbar-collapse a:not(.dropdown-toggle)').click(function() {
        if ($(window).width() < 768)
            $('.navbar-collapse').collapse('hide');
    });

    /* ==============================================
        Scrollspy
    =============================================== */

    $('body').scrollspy({
        target: '#navigation-nav',
        offset: 140 //px/
    });

    /* ==============================================
        Parallax
    =============================================== */

    $.stellar({
        responsive: true,
        horizontalScrolling: false,
        verticalOffset: 0
    });


    /* ==============================================
        Smooth Scroll on anchors
    =============================================== */

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 66
                }, 1000);
                return false;
            }
        }
    });

    /* ==============================================
     Bootstrap Tooltip
    =============================================== */

    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    /* ==============================================
        Counter increment
    =============================================== */

    function countUp() {
        var dataperc;
        $('.statistic-percent').each(function() {
            dataperc = $(this).attr('data-perc'),
                $(this).find('.percentfactor').delay(6000).countTo({
                    from: 0, // number to begin counting
                    to: dataperc,
                    speed: 1000, // ms
                    refreshInterval: 10,
                });
        });
    }

    $('.statistic-percent').waypoint(function() {
        countUp();
    }, {
        offset: '95%',
        triggerOnce: true
    });


    /* ==============================================
    Placeholder
    =============================================== */

    $('input, textarea').placeholder();

    /* ==============================================
        Animated content
    =============================================== */

    $('.animated').appear(function() {
        var el = $(this);
        var anim = el.data('animation');
        var animDelay = el.data('delay');
        if (animDelay) {

            setTimeout(function() {
                el.addClass(anim + " in");
                el.removeClass('out');
            }, animDelay);

        } else {
            el.addClass(anim + " in");
            el.removeClass('out');
        }
    }, { accY: -150 });




    /* ==============================================
    Fade In .back-to-top
    =============================================== */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
        return false;
    });


    /* ==============================================
        OWL Carousel
    =============================================== */

    $(".owl-carousel").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 3], //number of items displayed on resolution less then 1199px
        itemsDesktopSmall: [979, 3] //number of items displayed on resolution less then 979px

    });


    /* ==============================================
        OWL Carousel (initialize screenshot carousel)
    =============================================== */

    $(".screenshots-carousel").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

});

$(window).load(function() {
    "use strict";

    /* ==============================================
    Isotope
    =============================================== */

    // FIlter
    if ($("#filter").length > 0) {
        var container = $('#filter');
        container.isotope({
            itemSelector: '.gallery-item',
            transitionDuration: '0.8s'
        });
        $(".filter").click(function() {
            $(".filter.active").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            container.isotope({
                filter: selector
            });
            return false;
        });

        $(window).resize(function() {
            setTimeout(function() {
                container.isotope();
            }, 1000);
        }).trigger('resize');
    }


    if ($('#type-masory').length) {

        var $container = $('#type-masory');

        $container.imagesLoaded(function() {
            $container.fadeIn(1000).isotope({
                itemSelector: '.masonry-item'
            });
        });
    }

    /* ==============================================
    Preloader
    =============================================== */

    // will first fade out the loading animation
    $("#loading-animation").fadeOut();
    // will fade out the whole DIV that covers the website.
    $("#preloader").delay(600).fadeOut("slow");

});