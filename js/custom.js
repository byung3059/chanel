$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 1) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })






    var swiper = new Swiper(".banner_slide", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
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
        if (sct > 900) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })


})