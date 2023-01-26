/* eslint-disable no-unused-expressions */
const tasksApp = () => {
// grabing up the neede HTML elements to be used in JS codes................

  const buttonTask = document.querySelector('form');
  const enterTask = document.querySelector('#lists-input');
  const listContainer = document.querySelector('#list-holder');

  // ****Empty array for storing taskData ****
  let listArray = [];

  // Store the listArray in Local Storage when the form is submitted................

  class UI {
    static displayData() {
      const taskData = listArray.map((item) => `<div class="col-12" id="list">
                <p class="checkboxP"> 
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck">
                <span id="description">${item.description}</span>
                </p>
                <span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
            </div>`);
      listContainer.innerHTML = (taskData).join(' ');
    }
    // cleaning the input field after submition process................

    static cleanInputs() {
      enterTask.value = '';
    }
  }

  // Define the todoListStore object using a function constructor...........

  function TodoListStore(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  buttonTask.addEventListener('submit', (e) => {
    e.preventDefault();
    const index = listArray.length + 1;
    const completed = true;
    if (enterTask.value !== '' || null) {
      const todoObject = new TodoListStore(enterTask.value, completed, index);
      listArray = [...listArray, todoObject];
      localStorage.setItem('listArray', JSON.stringify(listArray));
      UI.displayData();
      UI.cleanInputs();
    }
  });

  // Retrieve the listArray from Local Storage when the page is loaded..............

  if (localStorage.getItem('listArray')) {
    listArray = JSON.parse(localStorage.getItem('listArray'));
    UI.displayData();
  }

  listContainer.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox' && event.target.checked) {
      event.target.nextElementSibling.style.textDecoration = 'line-through';
      event.target.completed = true;
    } else if (event.target.type === 'checkbox' && !event.target.checked) {
      event.target.nextElementSibling.style.textDecoration = 'none';
    }
  });

  listContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-ellipsis-v')) {
      event.target.classList.remove('fa-ellipsis-v');
      event.target.classList.add('fa-trash');
      event.target.parentElement.parentElement.style.backgroundColor = '#b4d5fe';
    } else if (event.target.classList.contains('fa-trash')) {
      const index = event.target.parentElement.parentElement.getAttribute('data-index');
      listArray.splice(index, 1);
      localStorage.setItem('listArray', JSON.stringify(listArray));
      event.target.parentElement.parentElement.remove();
    }
  });

  listContainer.addEventListener('click', (event) => {
    if (event.target.id === 'description') {
      const index = event.target.parentElement.parentElement.getAttribute('data-index');
      const input = document.createElement('input');
      input.value = event.target.innerHTML;
      input.addEventListener('blur', (e) => {
        event.target.innerHTML = e.target.value;
        listArray[index].description = e.target.value;
        localStorage.setItem('listArray', JSON.stringify(listArray));
      });
      event.target.innerHTML = '';
      event.target.appendChild(input);
      input.focus();
    }
  });

  // Function to remove completed items from the listArray and the DOM
  () => {
    listArray = listArray.filter((item) => !item.completed);
    localStorage.setItem('listArray', JSON.stringify(listArray));
    UI.displayData();
    // Select all elements with the completed class and remove them from the DOM
    const completedElements = document.querySelectorAll('.completed');
    completedElements.forEach((element) => element.remove());
  };
};
export default tasksApp;