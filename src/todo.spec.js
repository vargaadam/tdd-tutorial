const { expect } = require("chai");
const Todo = require("./todo");

describe("Todo", () => {
  it("should create a Todo instance", () => {
    const todo = new Todo();

    expect(todo).to.be.an("object");
  });

  it("should have a name and active prop", () => {
    const todo = new Todo();

    expect(todo).to.haveOwnProperty("name");
    expect(todo).to.haveOwnProperty("active");
  });

});
