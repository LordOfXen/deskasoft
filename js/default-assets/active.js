(function ($) {
    'use strict';

    var $constrom_window = $(window);

    // Preloader Active Code
    $constrom_window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // ::  Sticky Header

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
            //$(".site-header--sticky").css("backdrop-filter", "blur(10px)");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
           //$(".site-header--sticky").css("backdrop-filter", "none");
        }
    }

    // :: Animation on Scroll initializing
    if ($.fn.init) {
        AOS.init();
    }

})(jQuery)









