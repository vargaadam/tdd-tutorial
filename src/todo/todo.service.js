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

    if (foundTodo) {
      throw new Error(`The given name: ${name} already exists`);
    }

    return this.todoModel.create(name);
  }
}

module.exports = TodoService;
