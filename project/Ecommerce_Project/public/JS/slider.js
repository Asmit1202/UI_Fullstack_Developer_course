let currentSlideIndex = 0;
let slides, dots, autoplayInterval;

function initializeSlider() {
    slides = document.querySelectorAll('.slide');
    dots = document.querySelectorAll('.dot');
    startAutoplay();
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(index);
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        changeSlide(1);
    }, 2000);
}

// Initialize slider when DOM is loaded
window.onload = initializeSlider;