class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
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
}

export default Todo;
