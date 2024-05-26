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

    var swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

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