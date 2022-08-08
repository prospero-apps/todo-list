import { checkToday, checkWeek } from './datecheck';
import TodoList from './todolist';

// home list
function createHomeList(lists) {    
    let homelist = new TodoList('Home');
    for(let list of lists.getLists()) {
        for(let todo of list.getTodos()) {
            homelist.add(todo);
        }
    }

    return homelist;
}


// today list
function createTodayList(list) {
    let todayList = new TodoList('Today');
    let todos = list.getTodos();

    let filtered = todos.filter((todo) => {
        return checkToday(todo.getDueDate());
    });

    for(let todo of filtered) {
        todayList.add(todo);
    }
    
    return todayList;
}


// week list
function createWeekList(list) {
    let weekList = new TodoList('This Week');
    let todos = list.getTodos();

    let filtered = todos.filter((todo) => {
        return checkWeek(todo.getDueDate());
    });

    for(let todo of filtered) {
        weekList.add(todo);
    }
    
    return weekList;
}

export { createHomeList, createTodayList, createWeekList };

