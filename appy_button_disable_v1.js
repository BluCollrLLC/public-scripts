document.addEventListener("DOMContentLoaded", function() {
    console.log('Page loaded, starting to disable Apply button...');

    // Function to disable all "Apply" buttons found on the page
    function disableApplyButtons() {
        const applyBtns = document.querySelectorAll('.apply-btn.apply');
        if (applyBtns.length > 0) {
            applyBtns.forEach(function(btn) {
                console.log('Disabling Apply button:', btn);
                
                // Disable the button and visually make it inactive
                btn.style.pointerEvents = 'none'; // Disable clicking
                btn.style.opacity = '0.5';         // Visually indicate it's disabled
                btn.textContent = 'Please apply below for immediate consideration'; // Hover text
                
                // Add the title for hover effect
                btn.setAttribute('title', 'Please apply below for immediate consideration');
            });
        } else {
            console.log("No Apply buttons found.");
        }
    }

    // Initially disable Apply buttons if they are already on the page
    disableApplyButtons();

    // Use MutationObserver to monitor changes across the entire page (DOM)
    const observer = new MutationObserver(function(mutationsList, observer) {
        console.log('Mutation detected, checking for Apply buttons...');
        
        // Re-run the function when changes happen
        disableApplyButtons();  
    });

    // Start observing the entire document body for changes (child elements or subtree)
    observer.observe(document.body, {
        childList: true,  // Watch for added/removed child elements
        subtree: true     // Watch the entire DOM subtree (all descendants of the body)
    });

    console.log('Mutation observer started.');
});




