document.addEventListener("DOMContentLoaded", function() {
    console.log('Page loaded, starting to disable Apply buttons...');

    // Function to disable the "Apply" button based on data-val
    function disableApplyButtonByDataVal(dataVal) {
        const applyBtn = document.querySelector(`.apply-btn.apply[data-val="${dataVal}"]`);
        if (applyBtn) {
            console.log('Disabling Apply button with data-val:', dataVal);

            // Disable the button and visually make it inactive
            applyBtn.style.pointerEvents = 'none'; // Disable clicking
            applyBtn.style.opacity = '0.5';         // Visually indicate it's disabled
            applyBtn.textContent = 'Please apply below for immediate consideration'; // Hover text

            // Add the title for hover effect
            applyBtn.setAttribute('title', 'Please apply below for immediate consideration');
        } else {
            console.log(`No Apply button found with data-val: ${dataVal}`);
        }
    }

    // Initially disable Apply button by its data-val (this is for the first one)
    disableApplyButtonByDataVal('4122-1021-10053'); // Replace with the actual data-val value of the first button

    // Use MutationObserver to monitor changes across the entire page (DOM)
    const observer = new MutationObserver(function(mutationsList, observer) {
        console.log('Mutation detected, checking for Apply buttons...');

        // Re-run the function when changes happen
        disableApplyButtonByDataVal('4122-1021-10053');  // Replace with the data-val of new buttons added dynamically
    });

    // Start observing the entire document body for changes (child elements or subtree)
    observer.observe(document.body, {
        childList: true,  // Watch for added/removed child elements
        subtree: true     // Watch the entire DOM subtree (all descendants of the body)
    });

    console.log('Mutation observer started.');
});






