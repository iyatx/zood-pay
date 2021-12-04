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


const languageSelect = document.querySelector('.language__title');
const dropdownList = document.querySelector('.language__dropdown');

languageSelect.addEventListener('click', (e) => {
    dropdownList.classList.toggle('dropdown--show')
})