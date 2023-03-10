const todoForm = document.querySelector('.todoInput form');
const todoInput = document.querySelector('.todoInput input');
const todoList = document.querySelector('.todoList');

function showTodos(todo){
  let todoLi = document.createElement('li');
  let deleteBtn = document.createElement('button');
  let todoBtn = document.createElement('button');
  let todoA = document.createElement('a');
  deleteBtn.innerHTML = 'X';
  todoBtn.innerHTML = 'V';
  todoA.innerHTML = todo;
  deleteBtn.classList.add('todoBtn');
  deleteBtn.addEventListener('click', function(){
    deleteBtn.parentNode.remove();
  });
  todoBtn.classList.add('todoBtn');
  todoBtn.addEventListener('click', function(){
    todoBtn.nextSibling.classList.toggle('line-through');
  });
  todoA.classList.add('todoA');
  todoLi.classList.add('todoLi');
  todoLi.appendChild(deleteBtn);
  todoLi.appendChild(todoBtn);
  todoLi.appendChild(todoA);
  todoList.appendChild(todoLi);
}

function submitTodos(e){
  e.preventDefault();
  let todo = todoInput.value;
  todoInput.value = '';
  showTodos(todo);
}

todoForm.addEventListener('submit', submitTodos);
