$(document).ready(function() {

    $('.b-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('.mobile-menu').click(function() {
        $('.menu').slideToggle("slow");
        $('.mobile-menu i').toggleClass('fa-bars fa-xmark');
        return false;
    });

    $(window).resize(function() {
        if ($(window).width() >= 901) {
            $('.menu').slideUp("slow");
            $('.mobile-menu i').removeClass('fa-xmark');
            $('.mobile-menu i').addClass('fa-bars');
        }
    });


});
