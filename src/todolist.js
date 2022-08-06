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

export default TodoList;