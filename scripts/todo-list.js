const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  // su dung foreach de lap qua mang thay vi for
  todoList.forEach((todoObject, index) => {  //arrow function
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  // code su dung vong for de lap
  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   //const name = todoObject.name;
  //   //const dueDate = todoObject.dueDate; hang o duoi = 2 hang tren
  //   const { name, dueDate } = todoObject;
  //   const html = `
  //     <div>${name}</div>
  //     <div>${dueDate}</div> 
  //     <button onclick="
  //       todoList.splice(${i}, 1);
  //       renderTodoList();
  //     " class="delete-todo-button">Delete</button>
  //   `;
  //   todoListHTML += html;
  // }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate, dong o duoi = 2 dong tren
    name, dueDate
});

  inputElement.value = '';

  renderTodoList();
}