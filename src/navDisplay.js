import { allLists } from './sample';
import displayNavItem from './navItemDisplay';

// icons
import HomeIcon from './icons/home.png';
import TodayIcon from './icons/today.png';
import WeekIcon from './icons/week.png';
import MyListsIcon from './icons/projects.png';

function displayNav() {
    const navPanel = document.createElement('div');
    navPanel.className = 'nav-panel';

    const homeList = displayNavItem('Home', HomeIcon, 12);
    homeList.classList.add('home-list');
    navPanel.appendChild(homeList);

    const todayList = displayNavItem('Today', TodayIcon, 7);
    todayList.classList.add('today-list');
    navPanel.appendChild(todayList);

    const weekList = displayNavItem('This Week', WeekIcon, 1);
    weekList.classList.add('week-list');
    navPanel.appendChild(weekList);

    const myLists = displayNavItem('My Lists', MyListsIcon, 34);
    myLists.classList.add('my-lists');
    navPanel.appendChild(myLists);   
    
    for(let list of allLists.getLists()) {
        const listName = displayNavItem(list.getName(), '', 4);       
        listName.classList.add('list-name');
        navPanel.appendChild(listName);
    }   

    return navPanel;
}

export default displayNav;




