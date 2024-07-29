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



document.addEventListener("DOMContentLoaded", function() {
  const img = document.getElementById('animatedImage');
  const container = document.querySelector('.flyingobject');
  const containerWidth = container.offsetWidth;
  let imgWidth = img.offsetWidth;
  let position = -imgWidth;

  function animate() {
      if (position >= containerWidth) {
          img.style.visibility = 'hidden'; // Ukrywanie obiektu gdy osiągnie on prawą krawędź
          setTimeout(() => {
              position = -imgWidth; // Resetowanie pozycji obiektu po 2 sekundach od osiągnięcia przez niego prawej krawędzi
              img.style.left = position + 'px';
              img.style.visibility = 'visible'; // Ponowne ukazanie się obiektu
              requestAnimationFrame(animate); // Restart animacji
          }, 1750); // 2 sekundowe opóźnienie
      } else {
          position += 8; // Przesunięcie o x pikseli na klatkę (zmiana szybkości lotu obiektu)
          img.style.left = position + 'px';
          requestAnimationFrame(animate);
      }
  }

  // Initialize image position
  img.style.left = position + 'px';

  // Start the animation
  animate();
});



document.addEventListener("DOMContentLoaded", function() {
  const img = document.getElementById('animatedImage2');
  const container = document.querySelector('.flyingobject2');
  const containerWidth = container.offsetWidth;
  let imgWidth = img.offsetWidth;
  let position = -imgWidth;

  function animate() {
      if (position >= containerWidth) {
          img.style.visibility = 'hidden'; // Ukrywanie elementu gdy osiągnie on prawą krawędź
          setTimeout(() => {
              position = -imgWidth; // Resetowanie pozycji obiektu po 2 sekundach od osiągnięcia przez niego prawej krawędzi
              img.style.left = position + 'px';
              img.style.visibility = 'visible'; // Ponowne ukazanie się obiektu
              requestAnimationFrame(animate); // Restart animacji
          }, 1750); // 2 sekundowe opóźnienie
      } else {
          position += 8; // Przesunięcie o x pikseli na klatkę (zmiana szybkości lotu obiektu)
          img.style.left = position + 'px';
          requestAnimationFrame(animate);
      }
  }

  // Initialize image position
  img.style.left = position + 'px';

  // Start the animation
  animate();
});