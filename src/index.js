import './style.css';
import displayList from './listDisplay';
import displayNav from './navDisplay';
import { allLists } from './sample';

import {
    content,
    container, 
    header,
    sidebar,
    notesPanel,
    mainPanel,
} from './dom';

sidebar.appendChild(displayNav());

const chosenList = allLists.getLists()[2];
mainPanel.appendChild(displayList(chosenList));