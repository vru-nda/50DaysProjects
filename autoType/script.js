const textEle = document.getElementById('text');
const speedEle = document.getElementById('speed');
const textInput = document.getElementById('text-input');
const button = document.getElementById('submit-btn');

let idx = 1;
let speed = 300 / speedEle.value;

function writeText(text) {
  textEle.innerText = text.slice(0, idx);
  textEle.style.marginBottom = '20px';
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(() => writeText(text), speed);
}

speedEle.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});

button.addEventListener('click', () => {
  let text = textInput.value;
  writeText(text);
  textInput.value = '';
});
