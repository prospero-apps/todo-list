// helper functions
function createPanel(id) {
    const panel = document.createElement('div');
    panel.id = id;
    return panel;
}

// main container
const content = document.getElementById('content');
const container = content.appendChild(createPanel('container'));
const header = content.appendChild(createPanel('header'));
const sidebar = content.appendChild(createPanel('sidebar'));
const notesPanel = content.appendChild(createPanel('notes-panel'));
const mainPanel = content.appendChild(createPanel('main-panel'));

container.appendChild(header);
container.appendChild(sidebar);
container.appendChild(mainPanel);





export {
    content,
    container, 
    header,
    sidebar,
    notesPanel,
    mainPanel,
}


