// Initialize slideIndex to keep track of the current slide
let slideIndex = 0;

// Variable to store the timer for automatic sliding
let slideTimer;

// Function to display slides
function showSlides() {
    // Get all elements with the class "slide"
    const slides = document.getElementsByClassName("slide");

    // Check if there are no slides or if slideIndex is out of bounds
    if (slides.length === 0 || slideIndex < 0 || slideIndex >= slides.length) {
        return;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slides[slideIndex].style.display = "block";

    // Increment slideIndex
    slideIndex++;

    // If slideIndex is greater than or equal to the number of slides, reset it to 0
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Clear the previous timer (if any)
    if (slideTimer) {
        clearTimeout(slideTimer);
    }

    // Set a new timer for automatic sliding (every 4000 milliseconds or 4 seconds)
    slideTimer = setTimeout(showSlides, 4000);
}

// Function to navigate to previous or next slides
function plusSlides(n) {
    showSlides(slideIndex + n);
}

// Event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
    showSlides(); // Initialize the slider
});
