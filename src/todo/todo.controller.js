class TodoController {
  todoService;

  constructor(todoService) {
    this.todoService = todoService;
  }

  getAll = (req, res) => {
    const todos = this.todoService.list();

    res.send(todos);
  };
}

module.exports = TodoController;
