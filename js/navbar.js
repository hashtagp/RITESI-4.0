document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = () => {
        document.querySelector('.nav-links').classList.toggle('active');
    };

    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
});