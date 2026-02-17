/* NAV MENU */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* SLIDER */
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function changeSlide(direction) {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
}

setInterval(() => {
  changeSlide(1);
}, 4000);

/* MOBILE SWIPE */
let startX = 0;
const slider = document.getElementById("slider");

slider.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) changeSlide(1);
  if (endX - startX > 50) changeSlide(-1);
});

