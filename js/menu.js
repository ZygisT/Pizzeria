// let menuItemData = document.querySelectorAll('.m-item-pricing tr');

// for (let i = 0; i < menuItemData.length; i++) {
//     menuItemData[i].addEventListener('mouseenter', () => {
//         menuItemData[i].style.backgroundColor = 'green';
//         menuItemData[i].style.transitionDuration = '0.25s';
//     });
//     menuItemData[i].addEventListener('mouseleave', () => {
//         menuItemData[i].style.backgroundColor = 'white';
//     });
// }


// Get Product Containers From HTML
let menu_item_containers = document.querySelectorAll('.new');

    // Loop thru all containers
    for (let i = 0; i < menu_item_containers.length; i++) {
        // Create New HTML Element
        let newElement = document.createElement('div');
        // Create HTML Element String
        newElement.innerHTML = 'New!';
        // Get CSS Class and assign it to the NEW HTML Element
        newElement.className = 'product-ribbon'
        // Append New HTML Element to the Product Containers
        menu_item_containers[i].prepend(newElement);     
    }
