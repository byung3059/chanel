$(function () {

    var swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

})