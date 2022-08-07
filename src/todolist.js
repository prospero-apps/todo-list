import Todo from "./todo";

class TodoList {
    constructor(name) {
        this.name = name;
        this.todos = [];
        this.addedTime = new Date();
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getTodos() {
        return this.todos;
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

    clear() {
        this.todos = [];
    }

    sortByAddedTimeDesc() {
        this.todos.sort((a, b) => b.addedTime - a.addedTime);
    }

}

export default TodoList;