const Todo = require("./todo");

class TodoModel {
  create(name, active) {
    const todo = new Todo(name, active);

    return todo;
  }
}

module.exports = TodoModel;
