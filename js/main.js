const tasksList = document.querySelector(".tasks");
const createTask = document.querySelector(".create-task");
const taskInput = document.querySelector(".task-input");
const closeInputButton = document.querySelector("#close-input");
const createTaskButton = document.querySelector("#create-task");
const taskTitle = document.querySelector(`.input__title`);
const taskDescription = document.querySelector(`.input__description`);
const inputHeading = document.querySelector(`.input__heading`);
const inputPlaceholder = document.querySelectorAll(`.input__placeholder`);

let isTaskEdited = false;

// Open input window

createTask.addEventListener("click", () => {
    isTaskEdited = false;
    taskInput.classList.toggle("toggle-create");
    inputHeading.textContent = `Create Task`;

    createTaskButton.textContent = `create`;
    createTaskButton.classList.remove(`button--edit`);

    inputPlaceholder.forEach((input) => {
        input.classList.remove(`edit`);
    });

    return isTaskEdited;
});

// Close input window

closeInputButton.addEventListener("click", () => {
    isTaskEdited = false;
    taskInput.classList.toggle("toggle-create");
    taskTitle.value = "";
    taskDescription.value = "";

    return isTaskEdited;
});

// Create Task

createTaskButton.addEventListener("click", () => {
    if ((!taskTitle.value && !taskDescription.value) || isTaskEdited) return;

    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");

    li.classList.add("task__item");
    h3.classList.add("task__heading");
    p.classList.add("task__description");
    div.classList.add("buttons");
    buttonEdit.classList.add(`button`, `button--outline`, `button--edit`);
    buttonDelete.classList.add(`button`, `button--outline`, `button--delete`);

    h3.textContent = taskTitle.value;
    p.textContent = taskDescription.value;
    buttonEdit.textContent = `Edit`;
    buttonDelete.textContent = `Delete`;

    div.appendChild(buttonEdit);
    div.appendChild(buttonDelete);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(div);
    tasksList.appendChild(li);

    taskTitle.value = "";
    taskDescription.value = "";
    taskInput.classList.toggle("toggle-create");
});

// Delete task

tasksList.addEventListener(`click`, (e) => {
    if (e.target.className.includes(`button--delete`)) {
        const li = e.target.parentElement.parentElement;
        tasksList.removeChild(li);
    }
});

// Edit tasks

tasksList.addEventListener(`click`, (e) => {
    if (e.target.className.includes(`button--edit`)) {
        isTaskEdited = true;
        taskInput.classList.toggle("toggle-create");

        inputHeading.textContent = `Edit Task`;

        createTaskButton.textContent = `Edit`;
        createTaskButton.classList.add(`button--edit`);

        inputPlaceholder.forEach((input) => {
            input.classList.add(`edit`);
        });

        const currentTaskTitle =
            e.target.parentElement.previousElementSibling
                .previousElementSibling;
        const currentTaskDescription =
            e.target.parentElement.previousElementSibling;

        taskTitle.value = currentTaskTitle.textContent;
        taskDescription.value = currentTaskDescription.textContent;

        createTaskButton.addEventListener(`click`, () => {
            if (isTaskEdited) {
                currentTaskTitle.textContent = taskTitle.value;
                currentTaskDescription.textContent = taskDescription.value;
                taskInput.classList.remove("toggle-create");
                taskTitle.value = "";
                taskDescription.value = "";
            }
        });
    }
});
