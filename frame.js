document.addEventListener("DOMContentLoaded", function() {
    const frames = document.querySelectorAll('.frame');
    let currentFrameIndex = 0;
    let isScrolling = false;

    const headerHeight = document.querySelector('.header').offsetHeight;

    // Function to scroll to the next frame
    function scrollToNextFrame() {
        if (!isScrolling && currentFrameIndex < frames.length - 1) {
            currentFrameIndex++;
            isScrolling = true;
            console.log("Scrolling to frame", currentFrameIndex + 1);

            // Calculate the scroll distance to the next frame
            const scrollDistance = frames[currentFrameIndex].offsetTop - headerHeight - window.pageYOffset;

            // Scroll to the next frame without smooth behavior
            window.scrollBy({ top: scrollDistance, behavior: 'auto' });

            // Re-enable smooth scrolling after a short delay
            setTimeout(() => {
                isScrolling = false;
            }, 3000); // Adjust the delay as needed
        }
    }

    // Event listener for scrolling
    window.addEventListener('wheel', function(e) {
        console.log("Scroll event detected");
        if (e.deltaY > 0) { // Scrolling down
            scrollToNextFrame();
        }
    });
});
