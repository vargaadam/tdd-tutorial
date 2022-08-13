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

  it("should have a list function", () => {
    const todo = new TodoModel();

    expect(todo.list).to.be.a("function");
  });

  describe("#create", () => {
    it("should return with an instance of a Todo class", () => {
      const name = "test";
      const active = false;

      const todoModel = new TodoModel();
      const todo = todoModel.create(name, active);

      expect(todo).to.instanceOf(Todo);
    });

    it("should set the Todo instance name and active prop given by the params", () => {
      const name = "test";
      const active = false;

      const todoModel = new TodoModel();
      const todo = todoModel.create(name, active);

      expect(todo.name).to.eql(name);
      expect(todo.active).to.eql(active);
    });
  });

    describe("#list", () => {
      it("should return with an array", () => {
        const todoModel = new TodoModel();
        const todos = todoModel.list();

        expect(todos).to.be.an("array");
      });
    });
});
