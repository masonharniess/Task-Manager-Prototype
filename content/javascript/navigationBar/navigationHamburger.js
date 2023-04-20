// Navigation hamburger functionality

function navigationHamburger() {
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.navigation_menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    toggle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            menu.classList.toggle('active');
        }
    });
}
