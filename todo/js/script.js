'use strict';

class Todo {
  constructor(form, input, todoList, todoCompleted) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
  }
   
    addToStorage() {
      localStorage.setItem('toDoList', JSON.stringify([...this.todoData]))
    }
    render() {
      this.input.value = ''
      this.todoList.textContent = '';
      this.todoCompleted.textContent = '';
      this.todoData.forEach(this.createItem, this)
      // this.todoData.forEach(this.completedItem, this)
      // this.todoData.forEach(this.handler, this)


      this.addToStorage();
  }

  createItem(todo){
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.key = todo.key
    li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
          <button class="todo-remove"></button>
          <button class="todo-complete"></button>
        <div>
    `);

    if (todo.completed){
      this.todoCompleted.append(li)
    } else {
      this.todoList.append(li)
    }

  // const todoComplete = li.querySelector('.todo-complete')
  // todoComplete.addEventListener('click', () => {
  //   console.log(todo);
  // })

  }


  addTodo(e){
    e.preventDefault();
    
    if (this.input.value.trim()){
      const newTodo = {
        value: this.input.value,
        completed: false,
        key: this.generateKey(),
      };
      this.todoData.set(newTodo.key, newTodo);
      this.render()
    }
  }

  generateKey(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  deleteItem(){
    // this.todoData.forEach((item) => {
    //   const index = this.todoData.findIndex(el => el.value === item.value);
    //   if (index !== -1) {
    //     this.todoData.splice(index, 1);
    //   }
    //   render()
    // })
   
    // console.log([...this.todoData]);
    // [...this.todoData].forEach((elem, item, ) => {
    //   console.log(elem[1].completed);
    //   elem[1].completed = !elem[1].completed
    //   console.log(item);

    //   this.render()
    // })
  }

  completedItem(){
    this.todoData.forEach((todo, item) => {
      console.log(todo);
      console.log(item);
          
      todo.completed = !todo.completed
    })
    this.render()
  }

  handler(){
    const todoContainer = document.querySelector('.todo-container');
    todoContainer.addEventListener('click', (event) => {
      let target = event.target;
      if(target.classList.contains('todo-remove')){
        this.deleteItem()
      } 

      if(target.closest('.todo-complete')){
        // console.log('completed target: ', target);
        // console.log('completed elem: ', elem);
        // console.log('completed todo: ', todo);
    
        this.completedItem()
      }

    })
  }

  init(){
    this.form.addEventListener('submit', this.addTodo.bind(this))
    this.render()
    // this.handler()
  }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed')
todo.init()
todo.handler()

// todo.deleteItem()