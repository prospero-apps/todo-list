import displayTodo from "./todoDisplay";

function displayList(list) {
    const listPanel = document.createElement('div');
    listPanel.className = 'list-panel';

    for(let element of list.getTodos()) {
        listPanel.appendChild(displayTodo(element));
    }

    return listPanel;
}

export default displayList;