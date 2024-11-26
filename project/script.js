// Initialize slide index for slideshow
let slideIndex = 0;
showSlides();

// Next/previous controls for slideshow
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

// Thumbnail image controls for slideshow
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Automatic slideshow function
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("dot");

    // Loop through slides and set all to not display
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;  // Increment slide index

    // Reset to first slide if at the end
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display current slide and set corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Set timer to change slides every 3 seconds
    setTimeout(showSlides, 3000);
}