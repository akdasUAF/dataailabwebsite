let currentIndex = 0;
const track = document.getElementById("banner-track");
const slides = document.querySelectorAll(".banner-slide");
const totalSlides = slides.length;

function updateSlidePosition(animate = true) {
  if (!animate) {
    track.classList.add("no-transition");
  } else {
    track.classList.remove("no-transition");
  }
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

window.nextSlide = function () {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlidePosition();
  } else {
    currentIndex++;
    updateSlidePosition();
    setTimeout(() => {
      currentIndex = 0;
      updateSlidePosition(false);
    }, 400);
  }
};

window.prevSlide = function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  } else {
    currentIndex = totalSlides - 1;
    updateSlidePosition(false);
    setTimeout(() => {
      updateSlidePosition(true);
    }, 40);
  }
};

setInterval(() => {
  nextSlide();
}, 4000);
