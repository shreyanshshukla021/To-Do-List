// grab the elements from the html

const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

// create an array to hold the tasks this will be an empty array at first

let tasks = [];

addTaskButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(newTask);
  todoInput.value = ""; // clear the input field
  console.log(tasks);
})