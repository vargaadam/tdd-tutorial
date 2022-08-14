class TodoService {
  todoModel;

  constructor(todoModel) {
    this.todoModel = todoModel;
  }

  list(onlyActive) {
    const todoList = this.todoModel.list();

    if (onlyActive) {
      return todoList.filter((todo) => todo.active === onlyActive);
    }

    return todoList;
  }
}

module.exports = TodoService;
