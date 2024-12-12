
let todos = JSON.parse(localStorage.getItem('todoList')) || [];

function renderTodos() {
    let list = document.getElementById('todoList');
    list.innerHTML = '';
    todos.forEach((task, index) => {
        let li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <input type="checkbox" onclick="toggleComplete(${index})" ${task.completed ? 'checked' : ''}>
            <span onclick="editTask(${index})">${task.text}</span>
            <button onclick="deleteTask(${index})" class="delete-button">Delete</button>
        `;
        list.appendChild(li);
    });
}

function addTask() {
    let taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim()) {
        todos.push({ text: taskInput.value.trim(), completed: false });
        localStorage.setItem('todoList', JSON.stringify(todos));
        renderTodos();
        taskInput.value = '';  // Clear input field
    }
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    localStorage.setItem('todoList', JSON.stringify(todos));
    renderTodos();
}

function deleteTask(index) {
    todos.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todos));
    renderTodos();
}

function editTask(index) {
    let newText = prompt("Edit task:", todos[index].text);
    if (newText !== null && newText.trim() !== '') {
        todos[index].text = newText.trim();
        localStorage.setItem('todoList', JSON.stringify(todos));
        renderTodos();
    }
}

function clearAllTasks() {
    todos = [];
    localStorage.setItem('todoList', JSON.stringify(todos));
    renderTodos();
}

renderTodos();  // Initial rendering
