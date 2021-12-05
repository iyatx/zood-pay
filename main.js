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
    slidesPerView: 'auto',
    spaceBetween: 30,

    breakpoints: {
        600: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 6,
        },
    }
})


function show(value) {
    document.querySelector(".text-box").value = value;
}

let dropdown = document.querySelector(".dropdown")
dropdown.onclick = function() {
    dropdown.classList.toggle("active")
}