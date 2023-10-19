const addBtn = document.querySelector('#add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => addNote(note));
}

addBtn.addEventListener('click', () => addNote());

function addNote(text = '') {
  const noteHTML = `
  <div class="tools">
    <button class="edit">
      <i class="fas fa-edit"></i>
    </button>
    <button class="delete">
      <i class="fas fa-trash-alt"></i>
    </button>
    </div>
    <div class="main ${text ? '' : 'hidden'}">${text}</div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
  `;

  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = noteHTML;

  // const tools = document.querySelector('.tools');
  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const mainDiv = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  mainDiv.innerHTML = marked(text);

  textArea.addEventListener('change', (e) => {
    mainDiv.innerHTML = marked(e.target.value);
    updateLocalStorage();
  });

  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLocalStorage();
  });

  editBtn.addEventListener('click', () => {
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  document.body.appendChild(note);
}

function updateLocalStorage() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];
  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}
