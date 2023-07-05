const carouselSlide = document.querySelector(".carousel_slide");
const carouselItems = document.querySelectorAll(".carousel_item");
const carouselPrev = document.querySelector(".carousel_prev");
const carouselNext = document.querySelector(".carousel_next");

let currentIndex = 0;

carouselPrev.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
});

carouselNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
});
