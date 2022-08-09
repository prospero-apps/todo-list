import { createIcon } from './dom';
import { mainPanel } from './dom';
import displayList from './listDisplay';
import { navPanel } from './navDisplay';

function displayNavItem(list, icon) {
    const navItem = document.createElement('div');
    navItem.className = 'nav-item';

    navItem.addEventListener('click', () => {
        for(let child of navPanel.children) {
            if(child.classList.contains('selected')) {
                child.classList.remove('selected');
            }
            if(child.hasChildNodes()) {
                for(let subchild of child.children) {
                    if(subchild.classList.contains('selected')) {
                        subchild.classList.remove('selected');
                    }
                }
            }
        }

        navItem.classList.add('selected');
        mainPanel.replaceChild(displayList(list), mainPanel.children[0]);
    });

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
    
    return navItem;
}

export default displayNavItem;