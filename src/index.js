import './style.css';
import displayList from './listDisplay';
import displayNav from './navDisplay';
import { homeList } from './navDisplay';
import {
    sidebar,
    mainPanel,
} from './dom';

sidebar.appendChild(displayNav());
mainPanel.appendChild(displayList(homeList));