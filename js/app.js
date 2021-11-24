$(function () {

    //============================scroll to top section start============================//
    $(".scroll_to_top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            00);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

        if (scrolling > 100) {
            $(".scroll_to_top").fadeIn(800);
        } else {
            $(".scroll_to_top").fadeOut(800);
        }


        if (scrolling > 150) {
            $(".main_nav").addClass("nav_sticky");
        } else {
            $(".main_nav").removeClass("nav_sticky")
        }
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


    //======================lightbox start======================// 
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true,
        'showImageNumberLabel': false,
    })

    //======================lightbox end======================// 


    //======================lightbox end======================// 
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top - 0
            }, 00, function () {
                window.location.hash = hash;
            });
        }
    });

    //======================lightbox end======================// 

});