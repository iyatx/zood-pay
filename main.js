const headerSlider = new Swiper('.header__slider', {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})


const thinkSlider = new Swiper('.think__slider', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,
})