const { expect } = require("chai");

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
});
