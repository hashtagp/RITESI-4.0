document.addEventListener('DOMContentLoaded', () => {
    const footerCopyright = document.querySelector('.footer-copyright');
    const currentYear = new Date().getFullYear();
    footerCopyright.textContent = `Copyright © ${currentYear} RITESI Conference - All Rights Reserved.`;
});