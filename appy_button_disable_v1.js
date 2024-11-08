document.addEventListener("DOMContentLoaded", function() {
    console.log('Page loaded, starting to hide Apply button...');

    // Function to hide all "Apply" buttons found on the page
    function hideApplyButton() {
        const applyBtns = document.querySelectorAll('.apply-btn.apply');
        if (applyBtns.length > 0) {
            applyBtns.forEach(function(btn) {
                console.log('Hiding Apply button:', btn);
                btn.style.display = 'none'; // Hide each button found
            });
        } else {
            console.log("No Apply buttons found.");
        }
    }

    // Initially hide Apply buttons if they are already on the page
    hideApplyButton();

    // Use MutationObserver to monitor changes across the entire page (DOM)
    const observer = new MutationObserver(function(mutationsList, observer) {
        console.log('Mutation detected, checking for Apply buttons...');
        hideApplyButton();  // Re-run the function when changes happen
    });

    // Start observing the entire document body for changes (child elements or subtree)
    observer.observe(document.body, {
        childList: true,  // Watch for added/removed child elements
        subtree: true     // Watch the entire DOM subtree (all descendants of the body)
    });

    console.log('Mutation observer started.');
});


