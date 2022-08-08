import Todo from "./todo";
import { allLists } from './setup';
import { screen } from './dom';
import { update } from "./update";

function displayAddTodo() {    
    const addTodoDialog = document.createElement('div');
    addTodoDialog.className = 'add-todo-dialog';
    
    // top bar
    const bar = document.createElement('div');
    bar.className = 'bar';

    const addTodoCloseButton = document.createElement('button');
    addTodoCloseButton.className = 'close';
    addTodoCloseButton.textContent = 'x';

    addTodoCloseButton.addEventListener('click', () => {
        content.removeChild(addTodoDialog);
        screen.style.display = 'none';
    });

    bar.appendChild(addTodoCloseButton);
    addTodoDialog.appendChild(bar);
    
    // form
    const addTodoForm = document.createElement('form');
    addTodoForm.className = 'add-form';

    // title
    const titlePanel = document.createElement('div');
    titlePanel.className = 'form-panel';
    const titleLabel = document.createElement('label');
    titleLabel.className = 'form-label';
    titleLabel.htmlFor = 'add-new-todo-title';
    titleLabel.textContent = '*Title';   
    titlePanel.appendChild(titleLabel); 
    const titleInput = document.createElement('input');
    titleInput.className = 'form-input';
    titleInput.id = 'add-new-todo-title';
    titleInput.placeholder = 'Take a nap';
    titleInput.required = true;    
    titlePanel.appendChild(titleInput);
    addTodoForm.appendChild(titlePanel);

    // description
    const descriptionPanel = document.createElement('div');
    descriptionPanel.className = 'description-panel';
    const descriptionLabel = document.createElement('label');
    descriptionLabel.className = 'form-label';
    descriptionLabel.htmlFor = 'add-new-todo-description';
    descriptionLabel.textContent = 'Description';   
    descriptionPanel.appendChild(descriptionLabel); 
    const descriptionInput = document.createElement('textarea');
    descriptionInput.className = 'form-textarea';
    descriptionInput.id = 'add-new-todo-description';
    descriptionInput.placeholder = 'I deserve some rest.';
    descriptionPanel.appendChild(descriptionInput);
    addTodoForm.appendChild(descriptionPanel);

    // due date
    const datePanel = document.createElement('div');
    datePanel.className = 'date-panel';
    const dateLabel = document.createElement('label');
    dateLabel.className = 'form-label';
    dateLabel.htmlFor = 'add-new-todo-date';
    dateLabel.textContent = '*Due Date';   
    datePanel.appendChild(dateLabel); 
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.className = 'date-input';
    dateInput.id = 'add-new-todo-date';
    dateInput.required = true;    
    datePanel.appendChild(dateInput);
    addTodoForm.appendChild(datePanel);

    // priority
    const priorityPanel = document.createElement('div');
    priorityPanel.className = 'form-panel';
    const priorityLabel = document.createElement('label');
    priorityLabel.className = 'form-label';
    priorityLabel.htmlFor = 'add-new-todo-priority';
    priorityLabel.textContent = 'Priority';   
    priorityPanel.appendChild(priorityLabel); 
    const priorityInput = document.createElement('select');
    priorityInput.className = 'priority-input';
    priorityInput.id = 'add-new-todo-priority';
    priorityInput.placeholder = '';

    const optionLow = document.createElement('option');
    optionLow.value = 'low';
    optionLow.text = 'low';
    priorityInput.add(optionLow);

    const optionHigh = document.createElement('option');
    optionHigh.value = 'high';
    optionHigh.text = 'high';     
    priorityInput.add(optionHigh);

    priorityPanel.appendChild(priorityInput);
    addTodoForm.appendChild(priorityPanel);


    // list to add the todo to
    const listPanel = document.createElement('div');
    listPanel.className = 'form-panel';
    const listLabel = document.createElement('label');
    listLabel.className = 'form-label';
    listLabel.htmlFor = 'add-new-todo-list';
    listLabel.textContent = 'List';   
    listPanel.appendChild(listLabel); 
    const listInput = document.createElement('select');
    listInput.className = 'list-input';
    listInput.id = 'add-new-todo-list';
    listInput.placeholder = '';

    for(const list of allLists.getLists()) {
        let option = document.createElement('option');
        option.value = allLists.getLists().indexOf(list);
        option.text = list.getName();
        listInput.add(option);
    }    

    

    listPanel.appendChild(listInput);
    addTodoForm.appendChild(listPanel);

    // submit button
    const addTodoButton = document.createElement('button');
    addTodoButton.type = 'button';
    addTodoButton.className = 'form-button';
    addTodoButton.textContent = 'Create Todo';

    addTodoButton.addEventListener('click', () => {
        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDate = new Date(dateInput.value);
        const priority = priorityInput.value;
        // const list = listInput.options[listInput.selectedIndex].value;
        
        const selectedList = allLists.getLists()[listInput.options[listInput.selectedIndex].value];
    
        let newTodo = new Todo(title, description, dueDate, priority);

        selectedList.add(newTodo);

        update();
        screen.style.display = 'none';
        content.removeChild(addTodoDialog);
    });

    


    addTodoForm.appendChild(addTodoButton);

    addTodoDialog.appendChild(addTodoForm); 

    return addTodoDialog;
}

export { displayAddTodo };