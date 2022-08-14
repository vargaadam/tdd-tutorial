const Todo = require("./todo");

class TodoModel {
  db;

  constructor(db) {
    this.db = db;
  }

  create(name, active) {
    const todo = new Todo(name, active);

    this.db.todoList.push(todo);

    return todo;
  }

  list() {
    return this.db.todoList;
  }

  find(name) {
    return this.db.todoList.find((todo) => todo.name === name);
  }
}

module.exports = TodoModel;
