const tags = document.querySelector('.tags');
const textarea = document.querySelector('#textarea');

//focus on textarea
textarea.focus();

//call function if enter pressed
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});

//create tags from text
const createTags = (text) => {
  const trimmedTags = text
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  //clear after each text
  tags.innerHTML = '';

  //create spans and add to div
  trimmedTags.forEach((tag) => {
    const tagEle = document.createElement('span');
    tagEle.classList.add('tag');
    tagEle.innerText = tag;
    tags.appendChild(tagEle);
  });
};

const randomSelect = () => {
  const times = 30;

  //Animation of highlight and unhighlight
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      RemoveHighlightTag(randomTag);
    }, 100);
  }, 100);

  // Stop the animation and pick one to highlight
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};

//Picks random tag
const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

//highlights the tag
const highlightTag = (tag) => {
  tag.classList.add('highlight');
};

//Unhighlights the tag
const RemoveHighlightTag = (tag) => {
  tag.classList.remove('highlight');
};
