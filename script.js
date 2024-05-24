const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const testimonialSlide = document.querySelector('.testimonial-slide');
const currentSlideIndicator = document.getElementById('current-slide');
const progressBar = document.querySelector('.brown-bar');

let currentIndex = 1; 

prevButton.addEventListener('click', () => {
    updateIndex(-1); // Move back by one slide
    updateSlidePosition();
});

nextButton.addEventListener('click', () => {
    updateIndex(1); // Move forward by one slide
    updateSlidePosition();
});

function updateIndex(delta) {
    const totalSlides = testimonialSlide.children.length;
    currentIndex += delta;
    if (currentIndex < 1) {
        currentIndex = 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = totalSlides - 1;
    }
}

function updateSlidePosition() {
    const slideWidth = testimonialSlide.children[0].getBoundingClientRect().width + 40;
    testimonialSlide.style.transform = `translateX(-${(currentIndex - 1) * slideWidth}px)`;
    currentSlideIndicator.textContent = currentIndex + 1;

    const totalSlides = testimonialSlide.children.length;
    const progressWidth = ((currentIndex) / (totalSlides - 1)) * 100;
    progressBar.style.width = `${progressWidth}%`;
}