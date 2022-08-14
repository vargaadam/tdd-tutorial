const TodoController = require("./todo.controller");
const TodoModel = require("./todo.model");
const TodoService = require("./todo.service");

module.exports = {
  initTodoModule: (app, db) => {
    const todoModel = new TodoModel(db);
    const todoService = new TodoService(todoModel);
    const todoController = new TodoController(todoService);

    app.get("/todos", todoController.getAll);
    app.post("/todos", todoController.create);
  },
};
