class TodoController {
  todoService;

  constructor(todoService) {
    this.todoService = todoService;
  }

  getAll = (req, res) => {
    const onlyActive = req.query.onlyActive === "true";

    const todos = this.todoService.list(onlyActive);

    res.send(todos);
  };

  create = (req, res) => {
    const { name } = req.body;

    const todo = this.todoService.create(name);

    res.send(todo);
  };
}

module.exports = TodoController;
