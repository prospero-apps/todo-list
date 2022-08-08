import { allLists } from './setup';
import displayNavItem from './navItemDisplay';
import { createHomeList, createTodayList, createWeekList } from './specialLists';
import { createIcon, content, screen } from './dom';
import { displayAddList } from './addListDisplay';
import { displayAddTodo } from './addTodoDisplay';

// icons
import HomeIcon from './icons/home.png';
import TodayIcon from './icons/today.png';
import WeekIcon from './icons/week.png';
import MyListsIcon from './icons/projects.png';

// create special lists
let homeList = createHomeList(allLists);
let todayList = createTodayList(homeList);
let weekList = createWeekList(homeList);

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

    const myListsPanel = document.createElement('div');
    myListsPanel.classList.add('my-lists-panel');

    for(let list of allLists.getLists()) {
        const listName = displayNavItem(list, '');       
        listName.classList.add('list-name');
        myListsPanel.appendChild(listName);
    }  

    // buttons
    navPanel.appendChild(myListsPanel);

    const addListButton = document.createElement('button');
    addListButton.classList.add('add-button');
    addListButton.id = 'add-list-button';
    addListButton.textContent = 'Add List';
    addListButton.addEventListener('click', () => {
        screen.style.display = 'grid';
        content.appendChild(displayAddList());
    });

    navPanel.appendChild(addListButton);

    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('add-button');
    addTodoButton.id = 'add-todo-button';
    addTodoButton.textContent = 'Add Todo';
    addTodoButton.addEventListener('click', () => {
        screen.style.display = 'grid';
        content.appendChild(displayAddTodo());
    });

    navPanel.appendChild(addTodoButton);

    return navPanel;
}

export default displayNav;
export { homeList, todayList, weekList };




