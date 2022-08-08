import displayNav from './navDisplay';
import displayList from './listDisplay';
import { allLists } from './setup';
import { homeList, todayList, weekList } from './navDisplay';
import { createHomeList, createTodayList, createWeekList } from './specialLists';

import {
    sidebar,
    mainPanel,
} from './dom';

function update() {
    homeList = createHomeList(allLists);
    todayList = createTodayList(homeList);
    weekList = createWeekList(homeList);

    sidebar.replaceChild(displayNav(), sidebar.children[0]);
    mainPanel.replaceChild(displayList(homeList), mainPanel.children[0]);
}

export { update };
