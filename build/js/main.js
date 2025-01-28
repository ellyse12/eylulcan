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

document.addEventListener('DOMContentLoaded', initApp)
