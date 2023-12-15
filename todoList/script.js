const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEle = document.createElement("li");
    if (todo && todo.completed) {
      todoEle.classList.add("completed");
    }

    todoEle.innerText = todoText;

    // toggle completed status
    todoEle.addEventListener("click", (e) => {
      todoEle.classList.toggle("completed");
      updateLocalStorage();
    });

    // Right click to remove todo
    todoEle.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEle.remove();
      updateLocalStorage();
    });

    todosUL.appendChild(todoEle);
    input.value = "";

    // update the localstorage todos
    updateLocalStorage();
  }
}

function updateLocalStorage() {
  const todosEle = document.querySelectorAll("li");
  const todos = [];

  todosEle.forEach((todoEle) => {
    todos.push({
      text: todoEle.innerText,
      completed: todoEle.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
