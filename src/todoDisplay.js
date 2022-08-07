import { createIcon } from './dom';

// icons
import EditIcon from './icons/edit.png';
import TrashIcon from './icons/trash.png';

function displayTodo(todo) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    // check box + title 
    const todoTitlePanel = document.createElement('div');
    todoTitlePanel.className = 'todo-title-panel';  
    todoTitlePanel.addEventListener('mouseover', () => {
        todoDescription.style.display = 'block';
    })
    todoTitlePanel.addEventListener('mouseout', () => {
        todoDescription.style.display = 'none';
    })  

    // checkbox
    const todoCheckbox = document.createElement('input');
    todoCheckbox.type = 'checkbox';
    todoCheckbox.addEventListener('change', (e) => {
        if(e.target.checked) {
            todoItem.classList.add('done');
        } else {
            todoItem.classList.remove('done');
        }
    })
    todoCheckbox.className = 'todo-checkbox';
    todoTitlePanel.appendChild(todoCheckbox);

    // title
    const todoTitle = document.createElement('div');  
    todoTitle.className = 'todo-title';
    todoTitle.textContent = todo.getTitle();

    // handle priority
    if(todo.getPriority() == 'high') {
        todoItem.classList.add('high-priority');
    }

    todoTitlePanel.appendChild(todoTitle);
    
    todoItem.appendChild(todoTitlePanel);   

    // date + edit + trash
    const todoDateEditTrash = document.createElement('div');
    todoDateEditTrash.className = 'todo-date-edit-trash';

    // date
    const todoDate = document.createElement('div');
    todoDate.textContent = todo.getDueDate();
    todoDate.className = 'todo-date';
    todoDateEditTrash.appendChild(todoDate);

    // edit
    const todoEdit = document.createElement('div');
    todoEdit.className = 'todo-edit';
    todoEdit.appendChild(createIcon(EditIcon));
    todoDateEditTrash.appendChild(todoEdit);

    // trash
    const todoTrash = document.createElement('div');
    todoTrash.className = 'todo-trash';
    todoTrash.appendChild(createIcon(TrashIcon));
    todoDateEditTrash.appendChild(todoTrash);

    todoItem.appendChild(todoDateEditTrash);

    // description
    const todoDescription = document.createElement('div');
    todoDescription.className = 'todo-description';
    todoDescription.textContent = todo.getDescription();
    todoItem.appendChild(todoDescription);

    return todoItem;
}

export default displayTodo;