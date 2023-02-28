const tasksList = document.querySelector(".tasks");
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
    const taskTitle = document.querySelector(`.input__title`);
    const taskDescription = document.querySelector(`.input__description`);
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
    buttonEdit.classList.add(`button`, `button--outline`);
    buttonDelete.classList.add(
        `button`,
        `button--outline`,
        `button--red`,
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
});

tasksList.addEventListener(`click`, (e) => {
    if (e.target.className.includes(`delete-button`)) {
        const li = e.target.parentElement.parentElement;
        tasksList.removeChild(li);
    }
});
