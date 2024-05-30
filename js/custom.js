$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 4) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })


    var swiper = new Swiper(".banner_slide", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            769: {
                slidesPerView: 2,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    var swiper = new Swiper(".product_slide", {
        loop: true,

        slidesPerView: 1,
        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: '.main_product .arrows .next',
            prevEl: '.main_product .arrows .prev',
        },
    });




    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/mR1fQeRqUEY',
        containment: '.main_movie .video_box',
        showControls: true,
        showYTLogo: false,
        playOnlyIfVisible: true,
        autoPlay: true,
    })






    $('.to_top button').on('click', function () {
        $('html, body').animate({ scrollTop: 0, }, 300)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 830) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })


})