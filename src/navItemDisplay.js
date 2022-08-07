import { createIcon } from './dom';

function displayNavItem(listName, icon, count) {
    const navItem = document.createElement('div');
    navItem.className = 'nav-item';

    // icon + name
    const navIconName = document.createElement('div');
    navIconName.className = 'nav-icon-name';

    // icon
    const navIcon = document.createElement('div');
    navIcon.className = 'nav-icon';
    if(icon) {
        navIcon.appendChild(createIcon(icon));
        navIconName.appendChild(navIcon);
    } 

    // name
    const navName = document.createElement('div');
    navName.className = 'nav-name';
    navName.textContent = listName;
    navIconName.appendChild (navName);

    navItem.appendChild(navIconName);

    // counter
    const navCounter = document.createElement('div');
    navCounter.className = 'nav-counter';
    navCounter.textContent = count;
    navItem.appendChild(navCounter);      

    return navItem;
}

export default displayNavItem;