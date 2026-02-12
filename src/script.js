document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input")
    const addTaskBtn = document.getElementById("add-task-btn")
    const todoList = document.getElementById("todo-list")
    const emptyState = document.getElementById("empty-state")
    const statsBar = document.getElementById("stats-bar")
    const totalCount = document.getElementById("total-count")
    const doneCount = document.getElementById("done-count")
    const pendingCount = document.getElementById("pending-count")

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    renderTasks()

    addTaskBtn.addEventListener("click", function () {
        const addTask = todoInput.value.trim()
        if (addTask === "") return;

        const newTask = {
            id: Date.now(),
            name: addTask,
            completed: false
        }

        tasks.push(newTask)
        saveTasks()
        todoInput.value = ""
        renderTasks()

        // Focus back on input for quick successive adds
        todoInput.focus()
    })

    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    })

    function renderTasks() {
        todoList.innerHTML = ""

        // Update stats
        const total = tasks.length
        const done = tasks.filter(t => t.completed).length
        const pending = total - done

        if (total > 0) {
            emptyState.classList.add("hidden")
            statsBar.classList.remove("hidden")
            statsBar.classList.add("flex")
            totalCount.textContent = `${total} task${total !== 1 ? 's' : ''}`
            doneCount.textContent = `${done} done`
            pendingCount.textContent = `${pending} pending`
        } else {
            emptyState.classList.remove("hidden")
            statsBar.classList.add("hidden")
            statsBar.classList.remove("flex")
        }

        // Sort: pending first, then completed, newest first within each group
        tasks.sort((a, b) => {
            if (a.completed !== b.completed) return a.completed ? 1 : -1
            return b.id - a.id
        })

        tasks.forEach((task, index) => {
            const li = document.createElement("li")
            li.className = task.completed ? "task-item completed" : "task-item"
            li.style.animationDelay = `${index * 0.03}s`

            // Checkbox
            const checkbox = document.createElement("button")
            checkbox.className = "flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 " +
                (task.completed
                    ? "border-success bg-success/20"
                    : "border-gray-600 hover:border-accent")
            checkbox.innerHTML = task.completed
                ? '<i class="fa-solid fa-check text-[10px] text-success"></i>'
                : ''
            checkbox.addEventListener("click", function () {
                task.completed = !task.completed
                saveTasks()
                renderTasks()
            })

            // Task text
            const textSpan = document.createElement("span")
            textSpan.className = "task-text flex-1 text-sm transition-all duration-200 " +
                (task.completed ? "line-through text-gray-500" : "text-gray-200")
            textSpan.textContent = task.name

            // Buttons container
            const buttons = document.createElement("div")
            buttons.className = "flex items-center gap-2 flex-shrink-0"

            // Delete button
            const deleteBtn = document.createElement("button")
            deleteBtn.className = "btn-danger"
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can text-xs"></i>'
            deleteBtn.addEventListener("click", function () {
                li.style.transition = "all 0.2s ease-out"
                li.style.opacity = "0"
                li.style.transform = "translateX(20px)"
                setTimeout(() => {
                    deleteTask(task.id)
                }, 200)
            })

            buttons.appendChild(deleteBtn)

            li.appendChild(checkbox)
            li.appendChild(textSpan)
            li.appendChild(buttons)
            todoList.appendChild(li)
        });
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => {
            return task.id != id
        })
        saveTasks()
        renderTasks()
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})