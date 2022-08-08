function displayAddTodo(list) {    
    const addTodoDialog = document.createElement('div');
    addTodoDialog.className = 'add-todo-dialog';
    
    // top bar
    const bar = document.createElement('div');
    bar.className = 'bar';

    const addTodoCloseButton = document.createElement('button');
    addTodoCloseButton.className = 'close';
    addTodoCloseButton.textContent = 'x';
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

    // submit button
    const addTodoButton = document.createElement('button');
    addTodoButton.className = 'form-button';
    addTodoButton.textContent = 'Create Todo';
    addTodoForm.appendChild(addTodoButton);

    addTodoDialog.appendChild(addTodoForm); 

    return addTodoDialog;
}

export { displayAddTodo };