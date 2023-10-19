const imagesContainer = document.querySelector(".image-container");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const images = document.querySelectorAll("#imgs img");

let index = 0;

let interval = setInterval(run, 2000);

// automatinc slide
function run() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  imagesContainer.style.transform = `translateX(${-index * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
}

leftBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});

rightBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});
