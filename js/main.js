// State
const state = {
    popupShowClass: 'feedback__popup--show'
}

// Select language variables
const toggleLanguageDropdown = document.querySelector(".dropdown");
const activeLanguage = document.querySelector('.text-box');
const languageOptions = document.querySelectorAll('.header__toggle-language .options div');

// Popups variables
const feedbackPopupCloseBtn = document.querySelector('.feedback__popup-cancel');
const feedbackPopup = document.querySelector('.feedback__popup');
const feedbackPopupOverlay = document.querySelector('.popup__overlay');
const feedbackShowPopupBtns = document.querySelectorAll('.feedback-btn');

// Methods
const changeLanguage = (option) => {
    activeLanguage.value = option.textContent
}

const toggleDropdownOptions = () => {
    toggleLanguageDropdown.classList.toggle("active")
}

const toggleFeedbackPopup = () => {
    feedbackPopup.classList.toggle(state.popupShowClass)
    const body = document.body;

    if (feedbackPopup.classList.contains(state.popupShowClass)) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'initial'
    }
}

// Listeners
toggleLanguageDropdown.addEventListener('click', toggleDropdownOptions);
feedbackPopupOverlay.addEventListener('click', toggleFeedbackPopup)
feedbackPopupCloseBtn.addEventListener('click', toggleFeedbackPopup)
feedbackShowPopupBtns.forEach((item) => {
    item.addEventListener('click', toggleFeedbackPopup);
})
languageOptions.forEach(item => item.addEventListener('click', () => changeLanguage(item)))


// Sliders
new Swiper('.header__slider', {
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

new Swiper('.think__slider', {
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