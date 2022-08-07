import './style.css';
import displayList from './listDisplay';
import { allLists } from './sample';

import {
    content,
    container, 
    header,
    sidebar,
    notesPanel,
    mainPanel,
} from './dom';

const chosenList = allLists.getLists()[2];
mainPanel.appendChild(displayList(chosenList));