class TodoLists {
    constructor() {
        this.lists = [];
    }

    getLists() {
        return this.lists;
    }

    count() {
        return this.lists.length;
    }

    add(list) {
        this.lists.push(list);
    }

    remove(list) {
        let listIndex = lists.indexOf(list);
        this.lists.splice(listIndex, 1);
    }

    clear() {
        this.lists = [];
    }
}

export default TodoLists;