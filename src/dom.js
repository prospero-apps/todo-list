// icons
import ListIcon from './icons/list.png';

// helper functions
function createPanel(id) {
    const panel = document.createElement('div');
    panel.id = id;
    return panel;
}

function createIcon(source) {
    const icon = new Image();
    icon.src = source;
    return icon;
}

function add(element, ...children) {
    for(const child of children) {
        element.appendChild(child);
    }
}

// main container
const content = document.getElementById('content');
const container = content.appendChild(createPanel('container'));
const header = content.appendChild(createPanel('header'));
const sidebar = content.appendChild(createPanel('sidebar'));
const mainPanel = content.appendChild(createPanel('main-panel'));

const screen = content.appendChild(createPanel('screen'));

add(container, screen, header, sidebar, mainPanel);

// header
const headerText = document.createElement('div');
headerText.textContent = 'TO-DO LIST';
headerText.id = 'header-text';
const headerIcon = createIcon(ListIcon);
add(header, headerIcon, headerText); 

export {
    createIcon,
    content,
    screen,
    container, 
    header,
    sidebar,
    mainPanel,
}


