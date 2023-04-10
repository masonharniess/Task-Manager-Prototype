function displayHamburger() {
    // Get the hamburger menu button and the menu element
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');

    // Add a click event listener to the hamburger menu button
    toggle.addEventListener('click', () => {
        // Toggle the "active" class on the menu element
        menu.classList.toggle('active');
    });

    // Add a keydown event listener to the hamburger menu button
    toggle.addEventListener('keydown', (event) => {
        // If the Enter or Space key is pressed, toggle the "active" class on the menu element
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent default behavior of the key
            menu.classList.toggle('active');
        }
    });
}
