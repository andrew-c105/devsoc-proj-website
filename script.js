const slides = document.querySelectorAll(".slide");
const aboutText = document.getElementById("aboutText");

let currentSlide = 0;
let isScrolling = false;

function updateSlide(index) {
  if (slides[index]) {
    aboutText.style.opacity = 0;
    setTimeout(() => {
      aboutText.innerHTML = slides[index].dataset.text;
      aboutText.style.opacity = 1;
    }, 200);
  }
}

document.querySelector(".circle").addEventListener("wheel", (e) => {
  e.preventDefault();

  if (isScrolling) return;
  isScrolling = true;

  if (e.deltaY > 0 && currentSlide < slides.length - 1) {
    currentSlide++;
  } else if (e.deltaY < 0 && currentSlide > 0) {
    currentSlide--;
  }

  updateSlide(currentSlide);

  setTimeout(() => {
    isScrolling = false;
  }, 500);
});
