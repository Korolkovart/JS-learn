'use strict'

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

let todoData = [];
  if (localStorage.getItem('todo'))
    todoData = JSON.parse(localStorage.getItem('todo'));

const render = function(){
  todoList.textContent = '';
  todoCompleted.textContent = '';

  todoData.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = `<span class="text-todo">${item.value}</span>
                    <div class="todo-buttons">
                      <button class="todo-remove"></button>
                      <button class="todo-complete"></button>
                    </div>`;


    if(item.completed){
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    const btnTodoComplete = li.querySelector('.todo-complete');
    btnTodoComplete.addEventListener('click', () => {
      item.completed = !item.completed
      render()
    })

    const todoRemove = li.querySelector('.todo-remove');
    todoRemove.addEventListener('click', () => {
      const index = todoData.findIndex(el => el.value === item.value);
      if (index !== -1) {
        todoData.splice(index, 1);
      }
      render()
    })
  })
  localStorage.setItem('todo', JSON.stringify(todoData));
};

todoControl.addEventListener('submit', (e) => {
  e.preventDefault();

  let newTodo = {
    value: headerInput.value,
    completed: false
  };

  // let check = headerInput.value;

  if(headerInput.value.trim() === ''){
    headerInput.value = ''
    return
  } 
  todoData.push(newTodo);
  render()

 
  headerInput.value = ''
})

render()

