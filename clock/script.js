const hourEle = document.querySelector('.hour');
const minEle = document.querySelector('.min');
const secondEle = document.querySelector('.second');
const timeEle = document.querySelector('.time');
const dateEle = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

// toggle dark mode
toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light Mode';
  }
});

const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const mins = time.getMinutes();
  const seconds = time.getSeconds();

  // show time
  timeEle.innerHTML = `${
    hoursForClock < 10 ? '0' + hoursForClock : hoursForClock
  } : ${mins < 10 ? '0' + mins : mins} ${hours < 12 ? 'AM' : 'PM'}`;

  // show date
  dateEle.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

  // show hour
  hourEle.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  // show mins
  minEle.style.transform = `translate(-50%, -100%) rotate(${scale(
    mins,
    0,
    59,
    0,
    360
  )}deg)`;

  // show seconds
  secondEle.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;
};

// calculation from stack overflow
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// start the clock
setTime();
setInterval(setTime, 1000);
