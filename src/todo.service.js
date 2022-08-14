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

  create(name) {
    const foundTodo = this.todoModel.find(name);
  }
}

module.exports = TodoService;
