const body = document.body;
const slides = document.querySelectorAll('.slide');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');

let activeSlide = 0;
setBgToBody();

// increment the active slide on right click
rightBtn.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setctiveSlide();
});

// decrement the active slide on left click
leftBtn.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setctiveSlide();
});

//set the background image
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// set the active slide
const setctiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
};
