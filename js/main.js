$(function(){
    function end_loader(){
        $(".loader").fadeOut(400);
    }
    function show_txt(){
        $(".loader-txt").fadeIn(200);
    }
    function hide_txt() {
        $(".loader-txt").fadeOut(200);
    }

    $(window).on('load', function(){
        setTimeout(function(){
            show_txt();
        }, 500);
        setTimeout(function() {
            hide_txt();
        }, 1000);
        setTimeout(function(){
            end_loader();
        }, 1300);
    });
});


// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});