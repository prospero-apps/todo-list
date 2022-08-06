import Todo from "./todo";

class TodoList {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    count() {
        return this.todos.length;
    }

    add(todo) {
        this.todos.push(todo);
    }

    remove(todo) {
        let todoIndex = todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
    }
}

// create sample TodoLists
// sample todos
todo1 = new Todo(
    'write the essay',
    'the essay for my English class',
    '2022-06-20',
    'low');

todo2 = new Todo(
    "get Amy's kids from school",
    "Amy's kids finish classes two hours earlier today",
    '2022-06-20',
    'high');

todo3 = new Todo(
    'run 10 km',
    'go to park and run two laps around the lake',
    '2022-06-20',
    'low');

todo4 = new Todo(
    'get cake',
    "go to Stacy's bakery to collect the birthday cake for Chris",
    '2022-06-21',
    'high');

todo5 = new Todo(
    'sell the car',
    'look at some ads in local newspapers and online to find someone who wants to buy my car',
    '2022-06-25',
    'low');

todo6 = new Todo(
    'paint kitchen',
    'get yellow paint and paint all the walls plus ceiling in the kitchen',
    '2022-07-15',
    'low');

// create TodoLists and add todos to them
list1 = new TodoList('School');
list1.add(todo1);

list2 = new TodoList('Workout');
list2.add(todo3);

list3 = new TodoList('Home and Family')
list3.add(todo2);
list3.add(todo4);
list3.add(todo6);

list4 = new TodoList('Miscellaneous');
list4.add(todo5);

export default TodoList;