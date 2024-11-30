// Select the toggle button, close button, and the target element
const toggleButton = document.querySelector('.nav-link.btn');
const closeButton = document.querySelector('.btn-close');
const targetElement = document.querySelector('#top_menu_collapse_mobile');
const headerElement = document.querySelector('.navbar'); // Select the header element

// Add a click event listener to the toggle button to add the 'show' class
toggleButton.addEventListener('click', () => {
    targetElement.classList.add('show');
    headerElement.classList.add('o_top_menu_collapse_shown'); // Add the class to the header
});

// Add a click event listener to the close button to remove the 'show' class and 'o_top_menu_collapse_shown' class from the header
closeButton.addEventListener('click', () => {
    targetElement.classList.remove('show');
    headerElement.classList.remove('o_top_menu_collapse_shown'); // Remove the class from the header
});

