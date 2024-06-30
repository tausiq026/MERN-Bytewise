document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");
    const filterButtons = document.querySelectorAll(".filters button");
    const clearAllButton = document.getElementById("clear-all");

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && taskInput.value.trim()) {
            addTask(taskInput.value.trim());
            taskInput.value = "";
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            setActiveFilter(button);
            filterTasks(button.id);
        });
    });

    clearAllButton.addEventListener("click", () => {
        taskList.innerHTML = "";
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
        `;
        taskList.appendChild(li);
    }

    function setActiveFilter(activeButton) {
        filterButtons.forEach(button => button.classList.remove("active"));
        activeButton.classList.add("active");
    }

    function filterTasks(filter) {
        const tasks = taskList.querySelectorAll("li");
        tasks.forEach(task => {
            switch (filter) {
                case "all":
                    task.style.display = "flex";
                    break;
                case "pending":
                    task.style.display = task.querySelector("input").checked ? "none" : "flex";
                    break;
                case "completed":
                    task.style.display = task.querySelector("input").checked ? "flex" : "none";
                    break;
            }
        });
    }
});
