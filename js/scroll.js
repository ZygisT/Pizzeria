var scrollBtn = document.querySelector('.scrollBtn');

// Track User's Scroll and display button upon reaching the threshold
window.onscroll = function() {
    // If User Scrolls the page 500px from the top
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        // Show the Scroll Button on the page
        scrollBtn.style.display = 'block';
        // Hide Scroll Button on the page
    } else {
        scrollBtn.style.display = 'none';
    }
}

// jQuery Smooth Scroll
// When User Clicks Button Page Scrolls to the top
$(document).ready(function () {
    // Add smooth scrolling to all links
    $(".scrollBtn a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
