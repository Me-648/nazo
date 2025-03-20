document.addEventListener('DOMContentLoaded', () => {
  const images = ['img/hi.jpeg', 'img/hi2.jpeg'];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    document.documentElement.style.cursor = `url('${images[currentIndex]}'), auto`;
  }, 400);
});

const textEx = document.getElementById('textEx');
let opacity = 1;
let isFadingOut = true;

setInterval(() => {
  if (isFadingOut) {
    opacity -= 0.1;
    if (opacity <= 0.2) {
      isFadingOut = false;
    }
  } else {
    opacity += 0.1;
    if (opacity >= 1) {
      isFadingOut = true;
    }
  }
  textEx.style.opacity = opacity;
}, 150);