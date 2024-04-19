document.addEventListener("DOMContentLoaded", function() {
    const frames = document.querySelectorAll('.frame');
    let currentFrameIndex = 0;

    // Function to scroll to the next frame
    function scrollToNextFrame() {
        if (currentFrameIndex < frames.length - 1) {
            currentFrameIndex++;
            frames[currentFrameIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Event listener for scrolling
    window.addEventListener('wheel', function(e) {
        if (e.deltaY > 0) { // Scrolling down
            scrollToNextFrame();
        }
    });
});
