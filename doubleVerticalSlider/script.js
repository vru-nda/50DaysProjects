const sliderContainer = document.querySelector('.slider-container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
const slideLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;
leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  const sliderheight = sliderContainer.clientHeight;

  if (direction === 'up') {
    activeSlideIndex++;

    if (activeSlideIndex > slideLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slideLength - 1;
    }
  }
  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderheight
  }px)`;

  leftSlide.style.transform = `translateY(${
    activeSlideIndex * sliderheight
  }px)`;
};

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));
