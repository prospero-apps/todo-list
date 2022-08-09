class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.selected = false;
        this.done = false;
    }

    getTitle() {
        return this.title;
    }

    setTitle(value) {
        this.title = value;
    }

    getDescription() {
        return this.description;
    }

    setDescription(value) {
        this.description = value;
    }

    getDueDate() {
        return this.dueDate;    
    }

    setDueDate(value) {
        this.dueDate = value;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(value) {
        this.priority = value;
    }

    // getSelected() {
    //     return this.selected;
    // }

    // setSelected(value) {
    //     this.selected = value;
    // }

    // getDone() {
    //     return this.done;
    // }

    // setDone(value) {
    //     this.done = value;
    // }
}

export default Todo;
