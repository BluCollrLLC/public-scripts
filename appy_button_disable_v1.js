document.addEventListener("DOMContentLoaded", function() {
    // Log when the page is fully loaded
    console.log('Page loaded, starting to hide Apply button...');

    // Find the "Apply" button by its class name
    var applyBtn = document.querySelector('.apply-btn.apply');

    // Check if the Apply button exists
    if (applyBtn) {
        console.log("Apply button found!");
        // Hide the button completely by setting display to 'none'
        applyBtn.style.display = 'none';
        console.log("Apply button has been hidden.");
    } else {
        console.log("Apply button not found.");
    }
});

