const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

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

const update = () => {
  circles.forEach((circle, index) => {
    if (index < current) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll(".active");
};
