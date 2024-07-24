const slidesContainer = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const dots = document.querySelectorAll(".dot");
let currentSlideIndex = 0;

// Funkcja aktualizująca kropki
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function goToSlide(index) {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.scrollLeft = index * slideWidth;
  currentSlideIndex = index;
  updateDots();
}

nextButton.addEventListener("click", () => {
  if (currentSlideIndex < slides.length - 1) {
    goToSlide(currentSlideIndex + 1);
  }
});

prevButton.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    goToSlide(currentSlideIndex - 1);
  }
});

// Ustaw początkowy stan kropek
updateDots();

// Obsługa przesunięć na urządzeniach mobilnych
let startX = 0;

slidesContainer.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

slidesContainer.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0].clientX;
  const deltaX = startX - endX;

  if (deltaX > 0 && currentSlideIndex < slides.length - 1) {
    goToSlide(currentSlideIndex + 1);
  } else if (deltaX < 0 && currentSlideIndex > 0) {
    goToSlide(currentSlideIndex - 1);
  }
});