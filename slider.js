let slideIndex = 0;
let slideTimer;

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // Check if there are no slides or if slideIndex is out of bounds
    if (slides.length === 0 || slideIndex < 0 || slideIndex >= slides.length) {
        return;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Clear the previous timer (if any)
    if (slideTimer) {
        clearTimeout(slideTimer);
    }

    // Set a new timer for automatic sliding
    slideTimer = setTimeout(showSlides, 4000);
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(); // Initialize the slider
});
