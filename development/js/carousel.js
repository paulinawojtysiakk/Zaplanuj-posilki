const slides = Array.from(document.querySelectorAll("li.carousel_item"));
const prevBtn = document.querySelector(".carousel_prev");
const nextBtn = document.querySelector(".carousel_next");

let slideIndex = 1;

// Pokazanie początkowego slajdu
showSlide(slideIndex);

// Przypisanie zdarzeń dla przycisków poprzedni/następny
prevBtn.addEventListener("click", () => changeSlide(-1));
nextBtn.addEventListener("click", () => changeSlide(1));

// Funkcja zmieniająca slajd
function changeSlide(n) {
  showSlide((slideIndex += n));
}

// Funkcja pokazująca wybrany slajd
function showSlide(index) {
  // Ustalenie poprawnego indeksu slajdu
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  // Ukrycie wszystkich slajdów
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Pokazanie wybranego slajdu
  slides[slideIndex].style.display = "flex";
}
