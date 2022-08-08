import './style.css';
import displayList from './listDisplay';
import displayNav from './navDisplay';
import { allLists } from './setup';

import { formatDate, checkToday, checkWeek } from './datecheck';
import { createHomeList, createTodayList, createWeekList } from './specialLists';

import {
    content,
    container, 
    header,
    sidebar,
    notesPanel,
    mainPanel,
} from './dom';

sidebar.appendChild(displayNav());

// checkToday();
checkWeek(new Date(2022, 7, 15));

const chosenList = allLists.getLists()[2];
mainPanel.appendChild(displayList(chosenList));