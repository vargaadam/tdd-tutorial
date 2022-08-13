class Database {
  todoList;

  constructor() {
    this.todoList = [];
  }

  clear() {
    this.todoList = [];
  }
}

module.exports = Database;
