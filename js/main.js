const createTask = document.querySelector(".create-task");
const taskInput = document.querySelector(".task-input");
const closeInputButton = document.querySelector("#close-input");
const createTaskButton = document.querySelector("#create-task");

createTask.addEventListener("click", () => {
    taskInput.classList.toggle("toggle-create");
});

closeInputButton.addEventListener("click", () => {
    taskInput.classList.toggle("toggle-create");
});

createTaskButton.addEventListener("click", () => {
    const taskList = document.querySelector(".tasks");

    // check how to add new items to list => DOM manipulation
});
