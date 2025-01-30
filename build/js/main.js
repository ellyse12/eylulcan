const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('animate-open-menu')
            mobileMenu.classList.remove('animate-close-menu')
        }
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('animate-open-menu');
        mobileMenu.classList.add('animate-close-menu');

        mobileMenu.addEventListener('animationend', () => {
            mobileMenu.classList.toggle('hidden')
            mobileMenu.classList.toggle('flex')
        }, { once: true });
    })
}

// Initialize Rocket Swiper
const rocketSwiper = new Swiper(".rocketSwiper", {
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    speed: 1000, // Transition speed in ms
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// Initialize Audio Swiper
const audioSwiper = new Swiper(".audioSwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            // Tüm audio elementlerini seç
            const audios = document.querySelectorAll('.audioSwiper audio');
            // Her bir audio elementini durdur
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0; // İsterseniz sesin başa dönmesini sağlayabilirsiniz
            });
        },
    },
});

document.addEventListener('DOMContentLoaded', initApp)
