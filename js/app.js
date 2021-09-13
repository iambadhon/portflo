$(function () {

    //============================preloader section start============================//
    $(window).on("load", function () {
        $(".preloader").delay(500).fadeOut(800);
    });
    //============================preloader section end============================//

    //============================scroll to top section start============================//
    $(".scroll_to_top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

        if (scrolling > 100) {
            $(".scroll_to_top").fadeIn(800);
        } else {
            $(".scroll_to_top").fadeOut(800);
        }


        // if (scrolling > 150) {
        //     $(".main_manu").addClass("nav_sticky");
        // } else {
        //     $(".main_manu").removeClass("nav_sticky")
        // }
    });
    //============================scroll to top section end============================//


    //======================slick slider start======================// 
    $('.service_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: ".service_prev_arrow",
        nextArrow: ".service_next_arrow",
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, ]
    });


    $('.testimonial_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: ".testimonial_prev_arrow",
        nextArrow: ".testimonial_next_arrow",
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, ]
    });
    //======================slick slider end======================// 

});