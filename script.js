const slides = document.querySelectorAll(".slide");
const aboutText = document.getElementById("aboutText");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const screenHeight = window.innerHeight;
  const currentSlide = Math.round(scrollY / screenHeight);

  if (slides[currentSlide]) {
    aboutText.style.opacity = 0;
    setTimeout(() => {
      aboutText.innerHTML = slides[currentSlide].dataset.text;
      aboutText.style.opacity = 1;
    }, 200);
  }
});