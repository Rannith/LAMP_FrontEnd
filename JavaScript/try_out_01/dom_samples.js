const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load event handeler
loadEventListeners();

function loadEventListeners(){
    
    form.addEventListener('submit', addTask);
    
    taskList.addEventListener('click', removeTask);
    
    clearButton.addEventListener('click', clearTask);
}

//add task function
function addTask(e){
    if(taskInput.value == ''){
        alert('Add task');
    }
    
    // create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<button class="fa fa-remove">X</button>';
    li.appendChild(link);
    
    taskList.appendChild(li);
    
    taskInput.value = '';
    
    e.preventDefault();
}

//remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

//clear Task
function clearTask(e){
    taskList.innerHTML = '';
}



