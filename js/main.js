const tasksList = document.querySelector(".tasks");
const createTask = document.querySelector(".create-task");
const taskInput = document.querySelector(".task-input");
const closeInputButton = document.querySelector("#close-input");
const createTaskButton = document.querySelector("#create-task");
const taskTitle = document.querySelector(`.input__title`);
const taskDescription = document.querySelector(`.input__description`);

let isTaskEdited = false;

// Open input window

createTask.addEventListener("click", () => {
    isTaskEdited = false;
    taskInput.classList.toggle("toggle-create");

    return isTaskEdited;
});

// Close input window

closeInputButton.addEventListener("click", () => {
    isTaskEdited = false;
    taskInput.classList.toggle("toggle-create");

    return isTaskEdited;
});

// Create Task

createTaskButton.addEventListener("click", () => {
    if (!taskTitle.value && !taskDescription.value) return;

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
    buttonEdit.classList.add(`button`, `button--outline`, `edit-button`);
    buttonDelete.classList.add(
        `button`,
        `button--outline`,
        `button--delete`,
        `delete-button`
    );

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
    if (e.target.className.includes(`delete-button`)) {
        const li = e.target.parentElement.parentElement;
        tasksList.removeChild(li);
    }
});

// Edit tasks

tasksList.addEventListener(`click`, (e) => {
    if (e.target.className.includes(`edit-button`)) {
        const inputPlaceholder =
            document.querySelectorAll(`.input__placeholder`);

        isTaskEdited = true;

        taskInput.classList.toggle("toggle-create");

        inputPlaceholder.forEach((input) => {
            input.classList.add(`edit`);
        });

        createTaskButton.textContent = `Edit`;
        createTaskButton.classList.add(`button--edit`);

        const currentTaskTitle =
            e.target.parentElement.previousElementSibling
                .previousElementSibling;
        const currentTaskDescription =
            e.target.parentElement.previousElementSibling;
        console.log(currentTaskTitle, currentTaskDescription);

        taskTitle.value = currentTaskTitle.textContent;
        taskDescription.value = currentTaskDescription.textContent;
    }
});
