const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const emptyMessage = document.getElementById("empty-message");

let todos = [];

// Loading LocalStorage
const loadTodos = function () {
  const saved = localStorage.getItem("todos");
  if (saved) {
    todos = JSON.parse(saved);
    renderTodos();
  }
};

// Rendering List

function renderTodos() {
  todoList.innerHTML = "";
  if (todos.length === 0) {
    emptyMessage.classList.remove("hidden");
    return;
  }
  emptyMessage.classList.add("hidden");

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.classList =
      "bg-white/10 backdrop-blur rounded-lg p-4 flex items-center justify-between hover:bg-white/20 transition";
    li.innerHTML = `
      <span class="${todo.completed ? "line-through text-gray-500" : ""}">${
      todo.text
    }</span>
          <div class="flex gap-2">
          <button class="complete-btn text-green-400 hover:text-green-300" data-index="${index}">
          ${todo.completed ? "↩" : "✔"}
          </button>
          <button class="delete-btn text-red-400 hover:text-red-300" data-index="${index}">✖</button>
          </div>
          `;
    todoList.appendChild(li);
  });
}

// Adding Tasks

function addTodo() {
  const text = input.value.trim();
  if (text) {
    todos.push({ text, completed: false });
    input.value = "";
    saveAndRender();
  }
}

// Completing/Cancel

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  saveAndRender();
}

// Deleting Tasks

function deleteTodo(index) {
  todos.splice(index, 1);
  saveAndRender();
}

// Save & Render

function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// EventListeners

addBtn.addEventListener("click", addTodo);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Event Delegation fot btns

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("complete-btn")) {
    const index = parseInt(e.target.dataset.index);
    toggleComplete(index);
  }
  if (e.target.classList.contains("delete-btn")) {
    const index = parseInt(e.target.dataset.index);
    deleteTodo(index);
  }
});

// Start
loadTodos();
