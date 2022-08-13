const { expect } = require("chai");

const TodoModel = require("./todo.model");

describe("TodoModel", () => {

  it("should create a TodoModel instance", () => {
    const todoModel = new TodoModel();

    expect(todoModel).to.be.an("object");
  });

});
