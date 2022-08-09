import { update } from "./update";
import { save, allLists } from './setup';
import TodoList from "./todolist";
import { content, screen } from "./dom";

function displayAddList() {    
    const addListDialog = document.createElement('div');
    addListDialog.className = 'add-list-dialog';
    
    // top bar
    const bar = document.createElement('div');
    bar.className = 'bar';

    const addListCloseButton = document.createElement('button');
    addListCloseButton.className = 'close';
    addListCloseButton.textContent = 'x';

    addListCloseButton.addEventListener('click', () => {
        content.removeChild(addListDialog);
        screen.style.display = 'none';
    });

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
    addListButton.type = 'button';
    addListButton.className = 'form-button';
    addListButton.textContent = 'Create List';
  
    addListButton.addEventListener('click', () => {
        const name = nameInput.value;
        let newList = new TodoList(name);
        allLists.add(newList);
        save();
        update();
        screen.style.display = 'none';
        content.removeChild(addListDialog);
    });


    addListForm.appendChild(addListButton);
    addListDialog.appendChild(addListForm); 

    return addListDialog;
}

export { displayAddList };