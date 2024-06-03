$(document).ready(function () {
    header();
    jQuery(window).scroll(function() {
        header();
    });

    $(document).on("click", ".menu_item .arrow", function () {
        $(this).parent().toggleClass("open");
        $(this).parent().parent().find('.sub-menu').slideToggle(800);
    });
    $(document).on("click", ".header_menu", function () {
       $(".menu").addClass("open");
       $('body').addClass('none_scroll');
    });
    $(document).on("click", ".close", function () {
        $(".menu").removeClass("open");
        $('body').removeClass('none_scroll');
     });
});

function header() {
    // Scroll article
    jQuery(window).scroll(function(event) {
        var scroll = jQuery(window).scrollTop();
        if (scroll > 300) {
            jQuery('.header').addClass('active');
        } else {
            jQuery('.header').removeClass('active');
        }
    });
}