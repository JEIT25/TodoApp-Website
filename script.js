document.body.style.backgroundImage = "url(background-image.jpg)";
// Sidebar Toggling
let sidebarContainer = document.querySelector('.sidebar-container');
let sidebarIcon = document.querySelector('.sidebar-icon');
let closeIcon = document.createElement('img')
let okBtn = document.querySelector('.ok-btn');
closeIcon.src = 'close-icon.svg';
closeIcon.style.alignSelf = 'center';
closeIcon.classList.add('sidebar-item2');
sidebarIcon.addEventListener('click', (evt) => {
    sidebarContainer.classList.add('animation-RTL');
    sidebarContainer.style.display = 'flex';
    sidebarIcon.replaceWith(closeIcon);
});
closeIcon.addEventListener('click', () => {
    sidebarContainer.style.display = 'none';
    closeIcon.replaceWith(sidebarIcon);
});

// Adding New Todos
let dateContainer = document.querySelector('.date-container');
let currentFullDate1 = document.createElement('p');
let currentFullDate2 = document.createElement('p');
let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
let todayDate = `${day}/0${month}/${year}`;
let doneMessage = document.querySelector('.done-message')
const todoListContainer = document.querySelector('.todo-list-container');
let todoInput = document.querySelector('.todo-input');
let addTodoBtn = document.querySelector('.add-button');
let donePopContainer = document.querySelector('.done-pop-up-container');
let newTodoList = [];
currentFullDate1.style.marginLeft = '5px';
currentFullDate1.classList.toggle('small-text');
currentFullDate2.style.marginLeft = '5px';
currentFullDate2.classList.toggle('small-text');
currentFullDate1.innerText = todayDate;
currentFullDate2.innerText = todayDate;
dateContainer.append(currentFullDate1)
doneMessage.append(currentFullDate2)
addTodoBtn.addEventListener('click', () => {
    if (todoInput.value.length !== 0) {
        newTodoList.push(todoInput.value);
        for (i = 0; i < newTodoList.length; i++) {
            let newTodo = document.createElement('section');
            newTodo.classList.toggle('todo-item');
            let layer2 = document.createElement('section');
            layer2.style.marginLeft = '-10rem';
            let todoDescription = document.createElement('p');
            todoDescription.innerText = newTodoList[i];
            let deleteTodo = document.createElement('img');
            let checkTodo = document.createElement('img');
            deleteTodo.src = 'delete-icon.svg';
            checkTodo.src = 'check-icon.svg';
            for (j = 0; j < newTodoList.length; j++) {
                layer2.append(checkTodo);
                layer2.append(deleteTodo);
                newTodo.append(layer2);
                newTodo.append(todoDescription);
                todoListContainer.append(newTodo);
                deleteTodo.addEventListener('click', (evt) => {
                    deleteTodo.parentElement.parentElement.remove(); //remove the whole element(todo)
                })
                checkTodo.addEventListener('click', (evt) => {
                    donePopContainer.classList.add('animation-TTM');
                    donePopContainer.style.display = 'flex'; //remove the whole element(todo)
                    deleteTodo.parentElement.parentElement.remove(); //remove the whole element(todo)
                })
                okBtn.addEventListener('click', (evt) => {
                    donePopContainer.style.display = 'none'; //remove the whole element(todo)                    
                })
            }
        }
    } else {
        null
    }
    newTodoList = [];
    todoInput.value = '';
})
