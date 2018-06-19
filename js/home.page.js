// DOM elements saved as variables
var header_nav_item = document.querySelectorAll('.nav-item');
var landingSection = document.querySelector('.overlay');
let hamburgerButton = document.querySelector('.mobile-menu');
let menu = document.querySelector('.nav-list-container');

// For Each Element Fire A function to add mouse event
for (var i = 0; i < header_nav_item.length; i++) {
    // Add Mouse Enter for each element by index
    header_nav_item[i].addEventListener('mouseenter', () =>{
        // Change Background of 2nd Var
        landingSection.style.backgroundColor = '#cfcfceda';
        landingSection.style.transitionDuration = '0.35s';
    });
    // Add Mouse Leave for each element by index
    header_nav_item[i].addEventListener('mouseleave', () =>{
        // Change Background of 2nd Var to normal
        landingSection.style.backgroundColor = '#dfd7d29f';
    });
}

// Add event listener to Mobile Menu Icon
hamburgerButton.addEventListener('click', () => {
    // Set Menu Display Style based on CSS Property value
    if (menu.style.display == 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
})


