function displayAddList(lists) {    
    const addListDialog = document.createElement('div');
    addListDialog.className = 'add-list-dialog';
    
    // top bar
    const bar = document.createElement('div');
    bar.className = 'bar';

    const addListCloseButton = document.createElement('button');
    addListCloseButton.className = 'close';
    addListCloseButton.textContent = 'x';
    bar.appendChild(addListCloseButton);
    addListDialog.appendChild(bar);
    
    // form
    const addListForm = document.createElement('form');
    addListForm.className = 'add-form';

    // name
    const namePanel = document.createElement('div');
    namePanel.className = 'form-panel';
    const nameLabel = document.createElement('label');
    nameLabel.className = 'form-label';
    nameLabel.htmlFor = 'add-new-list-name';
    nameLabel.textContent = '*Name';   
    namePanel.appendChild(nameLabel); 
    const nameInput = document.createElement('input');
    nameInput.className = 'form-input';
    nameInput.id = 'add-new-list-name';
    nameInput.placeholder = 'My New List';
    nameInput.required = true;    
    namePanel.appendChild(nameInput);
    addListForm.appendChild(namePanel);

    // submit button
    const addListButton = document.createElement('button');
    addListButton.className = 'form-button';
    addListButton.textContent = 'Create List';
    addListForm.appendChild(addListButton);

    addListDialog.appendChild(addListForm); 

    return addListDialog;
}

export { displayAddList };