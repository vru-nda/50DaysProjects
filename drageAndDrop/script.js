const emptyBoxes = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const emptyBox of emptyBoxes) {
  emptyBox.addEventListener('dragover', dragOver);
  emptyBox.addEventListener('dragenter', dragEnter);
  emptyBox.addEventListener('dragleave', dragLeave);
  emptyBox.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  // clear the box when the image is in hold
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hover';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
