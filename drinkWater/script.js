const cups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');

// fill big cup 
const updateBigCup = () => {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = cups.length;

  // show percentage and water level 
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  // show remained level
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
};

// get initial level in big cup
updateBigCup();

// call function on click to small cup
cups.forEach((cup, index) => {
  cup.addEventListener('click', () => fillSmallCups(index));
});

// fill small cups
const fillSmallCups = (index) => {
  //empty the last cup if clicked again
  if (
    cups[index].classList.contains('full') &&
    !cups[index].nextElementSibling.classList.contains('full')
  ) {
    index--;
  }

  // toggle full class
  cups.forEach((cup, id) => {
    if (id <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  updateBigCup();
};
