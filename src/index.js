import './style.css';
import displayList from './listDisplay';
import displayNav from './navDisplay';
import { homeList } from './navDisplay';
import { displayAddList } from './addListDisplay';
import { displayAddTodo } from './addTodoDisplay';
import {
    content,
    container, 
    header,
    sidebar,
    notesPanel,
    mainPanel,
} from './dom';

content.appendChild(displayAddList());
// content.appendChild(displayAddTodo());
sidebar.appendChild(displayNav());
mainPanel.appendChild(displayList(homeList));