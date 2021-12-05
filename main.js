const state = {
    popupShowClass: 'feedback__popup--show'
}


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


// Select language variables
const toggleLanguageDropdown = document.querySelector(".dropdown");
const activeLanguage = document.querySelector('.text-box');
const languageOptions = document.querySelectorAll('.header__toggle-language .options div');

// Popups variables
const feedbackPopupCloseBtn = document.querySelector('.feedback__popup-cancel');
const feedbackPopup = document.querySelector('.feedback__popup');
const feedbackPopupOverlay = document.querySelector('.popup__overlay');
const feedbackShowPopupBtns = document.querySelectorAll('.feedback-btn');

const changeLanguage = (option) => {
    activeLanguage.value = option.textContent
}

const toggleDropdownOptions = () => {
    toggleLanguageDropdown.classList.toggle("active")
}

const closeFeedbackPopup = () => {
    feedbackPopup.classList.remove(state.popupShowClass)
}

const openFeedbackPopup = () => {
    feedbackPopup.classList.add(state.popupShowClass);
}

toggleLanguageDropdown.addEventListener('click', toggleDropdownOptions);
feedbackPopupOverlay.addEventListener('click', closeFeedbackPopup)
feedbackPopupCloseBtn.addEventListener('click', closeFeedbackPopup)
feedbackShowPopupBtns.forEach((item) => {
    item.addEventListener('click', openFeedbackPopup);
})
languageOptions.forEach(item => item.addEventListener('click', () => changeLanguage(item)))