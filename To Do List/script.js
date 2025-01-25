// Select elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText) {
    addTask(taskText);
    input.value = ""; // Clear input field
  }
});

// Function to add a task
function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}
