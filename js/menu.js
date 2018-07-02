var menu_item_containers = document.querySelectorAll('.new');
// Get Product Containers From HTML

    // Loop thru all containers
    for (var i = 0; i < menu_item_containers.length; i++) {
        // Create New HTML Element
        var newElement = document.createElement('div');
        // Create HTML Element String
        newElement.innerHTML = 'New!';
        // Get CSS Class and assign it to the NEW HTML Element
        newElement.className = 'product-ribbon'
        // Append New HTML Element to the Product Containers
        menu_item_containers[i].prepend(newElement);     
    }
