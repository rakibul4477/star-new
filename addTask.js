function addTask() {
    if (todoInput.value === '') {
        alert('you must write something!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = todoInput.value;
        todoList.appendChild(li);
        let span = createElement('span');
        span.innerHTML = ('\u00d7');
        li.appendChild(span);
    }
    todoInput.value = '';
}
