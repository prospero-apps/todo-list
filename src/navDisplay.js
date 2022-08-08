import { allLists } from './setup';
import displayNavItem from './navItemDisplay';
import { createHomeList, createTodayList, createWeekList } from './specialLists';
import { createIcon } from './dom';

// icons
import HomeIcon from './icons/home.png';
import TodayIcon from './icons/today.png';
import WeekIcon from './icons/week.png';
import MyListsIcon from './icons/projects.png';

// create special lists
const homeList = createHomeList(allLists);
const todayList = createTodayList(homeList);
const weekList = createWeekList(homeList);

function displayNav() {
    const navPanel = document.createElement('div');
    navPanel.className = 'nav-panel';
  
    const homeSpecialList = displayNavItem(homeList, HomeIcon);
    homeSpecialList.classList.add('home-list');
    navPanel.appendChild(homeSpecialList);

    const todaySpecialList = displayNavItem(todayList, TodayIcon);
    todaySpecialList.classList.add('today-list');
    navPanel.appendChild(todaySpecialList);

    const weekSpecialList = displayNavItem(weekList, WeekIcon);
    weekSpecialList.classList.add('week-list');
    navPanel.appendChild(weekSpecialList);
                
    const myLists = document.createElement('div');
    myLists.classList.add('my-lists');
    const myListsIcon = document.createElement('div');
    myListsIcon.appendChild(createIcon(MyListsIcon)); 
    myLists.appendChild(myListsIcon);
    const myListsName = document.createElement('div');
    myListsName.className = 'nav-name';
    myListsName.textContent = 'My Lists';
    myLists.appendChild(myListsName);

    navPanel.appendChild(myLists);   
    
    for(let list of allLists.getLists()) {
        const listName = displayNavItem(list, '');       
        listName.classList.add('list-name');
        navPanel.appendChild(listName);
    }  

    return navPanel;
}

export default displayNav;




