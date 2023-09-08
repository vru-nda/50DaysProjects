const cardHeader = document.getElementById('header');
const cardTitle = document.getElementById('title');
const cardExcerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const authorName = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  cardHeader.innerHTML = `<img
  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQi0jEyMDd9&auto=format&fit=crop&w-2102&q=80"
  alt="bg-alt"
/>`;

  cardTitle.innerHTML = 'Lorem ipsum dolor sit amet.';
  cardExcerpt.innerHTML =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, animi?';
  profileImg.innerHTML = `<img
    src="https://randomuser.me/api/portraits/women/45.jpg"
    alt="pfp"
  />`;
  authorName.innerHTML = 'Jenna Ortego';
  date.innerHTML = 'Oct 08, 202';

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
