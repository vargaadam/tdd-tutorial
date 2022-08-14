class TodoService {
  todoModel;

  constructor(todoModel) {
    this.todoModel = todoModel;
  }

  list() {
    return this.todoModel.list();
  }
}

module.exports = TodoService;
