const { expect } = require("chai");
const Todo = require("./todo");

describe("Todo", () => {
  it("should set the name and active prop", () => {
    const name = "test";
    const active = false;

    const todo = new Todo(name, active);

    expect(todo.name).to.eql(name);
    expect(todo.active).to.eql(active);
  });

  it("should set the active prop to true if not specified", () => {
    const name = "test";

    const todo = new Todo(name);

    expect(todo.name).to.eql(name);
    expect(todo.active).to.eql(true);
  });
});
