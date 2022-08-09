import Todo from "./todo";
import TodoList from "./todolist";
import TodoLists from "./todolists";
// import Note from "./note";
// import NoteList from "./notelist";

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



// /* NOTELIST AND NOTES */

// // sample notes
// let note1 = new Note(
//     'shopping list',
//     '10 eggs, sugar, milk, apples, flour, 2 big cabbages, mineral water');

// let note2 = new Note(
//     'present idea',
//     'Steve wants a new toy car for his fifth birthday.');

// let note3 = new Note(
//     "Amy's new address",
//     '44 Pearl Avenue, Big Bang City 22650');

// let note4 = new Note(
//     'my password to sth I know about',
//     'abc123');

// let note5 = new Note(
//     'info about Mr. Lee',
//     'married, two kids (daughter, 36 and son, 33), math teacher, likes loud music sports, dog person');

// // create the note list and add the notes to it
// let notelist = new NoteList();

// notelist.add(note1);
// notelist.add(note2);
// notelist.add(note3);
// notelist.add(note4);
// notelist.add(note5);


// export { save, allLists, notelist }
export { save, allLists }