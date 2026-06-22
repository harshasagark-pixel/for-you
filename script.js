let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function nextSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
}
