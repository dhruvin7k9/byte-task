const listContainer = document.querySelector("#list-container");

function addTask() {
    const taskData = document.querySelector("#task-data");
    if (taskData.value === "") return;

    const li = document.createElement("li");
    li.className = "tasks";

    // add task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskData.value;
    li.appendChild(taskSpan);

    // adding edit button
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "edit";
    li.appendChild(editBtn);

    // addding delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "delete";
    li.appendChild(deleteBtn);

    editBtn.addEventListener("click", (event) => editTask(event, li));
    deleteBtn.addEventListener("click", () => deleteTask(li));

    listContainer.appendChild(li);
    taskData.value = "";
}

function deleteTask(li) {
    listContainer.removeChild(li);
}

function editTask(event, li) {
    const taskSpan = li.querySelector("span");
    const editBtn = event.target;
    const input = document.createElement("input");
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "save";
    saveBtn.className = "save-btn";
    
    li.removeChild(taskSpan);
    li.removeChild(editBtn);
    li.prepend(saveBtn);
    li.prepend(input);
    input.value = taskSpan.textContent;

    saveBtn.onclick = () => {
        li.removeChild(input);
        li.removeChild(saveBtn);
        taskSpan.textContent = input.value;
        li.prepend(editBtn)
        li.prepend(taskSpan);
    };
}