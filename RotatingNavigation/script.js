const open = document.getElementById('open');
const close = document.getElementById('close');
const conatiner = document.querySelector('.container');

open.addEventListener('click', () => {
  conatiner.classList.add('show-nav');
});

close.addEventListener('click', () => {
  conatiner.classList.remove('show-nav');
});
