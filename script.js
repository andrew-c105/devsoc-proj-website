const slides = document.querySelectorAll(".slide");
const aboutText = document.getElementById("aboutText");

let lastSlide = -1;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const screenHeight = window.innerHeight;
  const currentSlide = Math.floor(scrollY / screenHeight);

  if (currentSlide !== lastSlide && slides[currentSlide]) {
    lastSlide = currentSlide;

    aboutText.style.opacity = 0;
    setTimeout(() => {
      aboutText.innerHTML = slides[currentSlide].dataset.text;
      aboutText.style.opacity = 1;
    }, 200);
  }
});