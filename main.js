const headerSlider = new Swiper('.header__slider', {
    loop: true,
    effect: "fade",
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})