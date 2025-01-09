import store from "./store.js";

function render() {
    const todos = document.querySelector(".todos");
  
    const todoElememts = store.todos.map(
        (todo) => `<li class="todo" data-id=${todo.id}>
            <span class="todo-title ${todo.completed?"completed":""}"> ${todo.title}</span>
            <div class="toggle-delete">
                <input type="checkbox" name="completed" class="todo-checkbox" ${todo.completed ? "checked" : ""} id="">
                <button class="delete-todo-button">x</button>
            </div>
        </li>`
    ).join("");
    todos.innerHTML = todoElememts
}

export default render;
