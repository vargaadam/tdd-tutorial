const { expect } = require("chai");

const Database = require("../database");
const Todo = require("./todo");
const TodoModel = require("./todo.model");

const db = new Database();

describe("TodoModel", () => {
  beforeEach(() => {
    db.clear();
  });

  describe("#create", () => {
    it("should return with an instance of a Todo class", () => {
      const name = "test";
      const active = false;

      const todoModel = new TodoModel(db);
      const todo = todoModel.create(name, active);

      expect(todo).to.instanceOf(Todo);
    });

    it("should set the Todo instance name and active prop given by the params", () => {
      const name = "test";
      const active = false;

      const todoModel = new TodoModel(db);
      const todo = todoModel.create(name, active);

      expect(todo.name).to.eql(name);
      expect(todo.active).to.eql(active);
    });
  });

  describe("#list", () => {
    it("should return with an array", () => {
      const todoModel = new TodoModel(db);
      const todos = todoModel.list();

      expect(todos).to.be.an("array");
    });

    it("should return with all the previously created Todos", () => {
      const todoModel = new TodoModel(db);
      const todo1 = todoModel.create("name1", true);
      const todo2 = todoModel.create("name2", false);

      const todos = todoModel.list();

      expect(todos[0]).to.eql(todo1);
      expect(todos[1]).to.eql(todo2);
    });
  });

  describe("#find", () => {
    it("should return Todo that matches the given name", () => {
      const todoModel = new TodoModel(db);

      const todo = todoModel.create("name1", true);

      const foundTodo = todoModel.find(todo.name);

      expect(foundTodo).to.eql(todo);
    });
  });
});
