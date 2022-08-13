const { expect } = require("chai");

const Todo = require("./todo");
const TodoModel = require("./todo.model");

describe("TodoModel", () => {
  it("should create a TodoModel instance", () => {
    const todoModel = new TodoModel();

    expect(todoModel).to.be.an("object");
  });

  it("should have a crate function", () => {
    const todoModel = new TodoModel();

    expect(todoModel.create).to.be.a("function");
  });
  describe("#create", () => {
    it("should return with an instance of a Todo class", () => {
      const name = "test";
      const active = false;

      const todoModel = new TodoModel();
      const todo = todoModel.create(name, active);

      expect(todo).to.instanceOf(Todo);
    });
  });
});
