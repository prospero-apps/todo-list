import { createIcon } from './dom';

function displayNavItem(list, icon) {
    const navItem = document.createElement('div');
    navItem.className = 'nav-item';

    // icon + name
    const navIconName = document.createElement('div');
    navIconName.className = 'nav-icon-name';

    // icon
    const navIcon = document.createElement('div');
    navIcon.className = 'nav-icon';
    if (icon) {
        navIcon.appendChild(createIcon(icon));
        navIconName.appendChild(navIcon);
    }

    // name
    const navName = document.createElement('div');
    navName.className = 'nav-name';
    navName.textContent = list.getName();
    navIconName.appendChild(navName);

    navItem.appendChild(navIconName);

    // counter
    const navCounter = document.createElement('div');
    navCounter.className = 'nav-counter';
    navCounter.textContent = list.count();
    navItem.appendChild(navCounter);

    console.log(list);

    return navItem;
}

export default displayNavItem;