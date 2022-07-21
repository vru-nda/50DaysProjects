const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

console.log(progress, prev, next, circles);

let current = 1;

//go to next circle till last one
next.addEventListener('click', () => {
  current++;
  if (current > circles.length) {
    current = circles.length;
  }
  update();
});

//come back to previos circle till first one
prev.addEventListener('click', () => {
  current--;
  if (current < 1) {
    current = 1;
  }

  update();
});

// toggle active class on circle
const update = () => {
  circles.forEach((circle, index) => {
    if (index < current) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  // calculate the width of the progress bar
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // disable buttons accordingly
  if (current === 1) {
    prev.disabled = true;
  } else if (current === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};
