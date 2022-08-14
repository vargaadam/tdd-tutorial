const { expect } = require("chai");

const TodoService = require("./todo.service");

describe("TodoService", () => {

  it("should have a list function", () => {
    const todoService = new TodoService();

    expect(todoService).to.be.a("object");
  });
});
