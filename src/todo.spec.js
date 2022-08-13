const { expect } = require("chai");
const Todo = require("./todo");

describe("Todo", () => {
  it("should create a Todo instance", () => {
    const todo = new Todo();

    expect(todo).to.be.an("object");
  });
});
