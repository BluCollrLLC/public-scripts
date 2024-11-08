<script type="text/javascript">
// <![CDATA[
// Run after the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Log when the page is fully loaded
    console.log('Page loaded, starting to check for Apply button...');
    
    // Check if the button is present initially
    hideApplyButton();
    
    // Use MutationObserver to monitor changes across the entire page
    const observer = new MutationObserver(function(mutationsList, observer) {
        console.log('Mutation detected, checking for Apply button...');
        hideApplyButton();  // Re-check for the Apply button on DOM changes
    });

    // Start observing the entire document body for changes
    observer.observe(document.body, {
        childList: true,  // Watch for added/removed child elements
        subtree: true      // Watch the entire DOM subtree (all descendants of the body)
    });

    // Function to hide the Apply button
    function hideApplyButton() {
        console.log('Checking for Apply button...');
        
        // Find all elements with the 'apply-btn' class (regardless of other classes)
        const applyBtns = document.querySelectorAll('.apply-btn');
        
        if (applyBtns.length > 0) {
            console.log('Apply button(s) found! Hiding...');
            // Loop through each Apply button and set display to 'none'
            applyBtns.forEach(function(applyBtn) {
                applyBtn.style.display = 'none';
            });
        } else {
            console.log('No Apply button found.');
        }
    }
});
// ]]>
</script>
