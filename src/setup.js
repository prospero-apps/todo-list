import Todo from "./todo";
import TodoList from "./todolist";
import TodoLists from "./todolists";

let allLists = new TodoLists();

function save() {    
    localStorage.setItem('data', JSON.stringify(allLists));    
}

// create basic structure with sample data if not yet created
if(localStorage.length === 0){
    // sample todos
    let todo1 = new Todo(
        'write the essay',
        'the essay for my English class',
        new Date(Date.UTC(2022, 7, 8)),
        'low');

    let todo2 = new Todo(
        "get Amy's kids from school",
        "Amy's kids finish classes two hours earlier today",
        new Date(Date.UTC(2022, 7, 8)),
        'high');

    let todo3 = new Todo(
        'run 10 km',
        'go to park and run two laps around the lake',
        new Date(Date.UTC(2022, 7, 8)),
        'low');

    let todo4 = new Todo(
        'get cake',
        "go to Stacy's bakery to collect the birthday cake for Chris",
        new Date(Date.UTC(2022, 7, 12)),
        'high');

    let todo5 = new Todo(
        'sell the car',
        'look at some ads in local newspapers and online to find someone who wants to buy my car',
        new Date(Date.UTC(2022, 7, 19)),
        'low');

    let todo6 = new Todo(
        'paint kitchen',
        'get yellow paint and paint all the walls plus ceiling in the kitchen',
        new Date(Date.UTC(2022, 7, 30)),
        'low');
    
    // sample TodoLists 
    let list1 = new TodoList('School');
    let list2 = new TodoList('Workout');
    let list3 = new TodoList('Home and Family')
    let list4 = new TodoList('Miscellaneous');

    // add sample todos to sample TodoLists 
    list1.add(todo1);
    list2.add(todo3);
    list3.add(todo2);
    list3.add(todo4);
    list3.add(todo6);
    list4.add(todo5);

    // create the list of all Todolists and add the sample lists to it    
    allLists.add(list1);
    allLists.add(list2);
    allLists.add(list3);
    allLists.add(list4);

    save();

    
} else {
    let data = JSON.parse(localStorage.getItem('data'));
    
    for(const list of data.lists) {
        
        const todoList = new TodoList();
        todoList.setName(list.name);
        for(const item of list.todos) {
            const todo = new Todo();
            todo.setTitle(item.title);
            todo.setDescription(item.description);
            todo.setDueDate(new Date(item.dueDate));
            todo.setPriority(item.priority);            
            todoList.add(todo);
        }
        allLists.add(todoList);
    }
}

export { save, allLists }