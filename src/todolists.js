import TodoList from "./todolist";

class TodoLists {
    constructor() {
        this.lists = [];
    }

    count() {
        return this.todos.length;
    }

    add(list) {
        this.lists.push(list);
    }

    remove(list) {
        let listIndex = lists.indexOf(list);
        this.lists.splice(listIndex, 1);
    }
}

export default TodoLists;