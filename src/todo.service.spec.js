const { expect } = require("chai");
const sinon = require("sinon");

const TodoService = require("./todo.service");
const TodoModel = require("./todo.model");

const sandbox = sinon.createSandbox();

let mockedTodoModel;

describe("TodoService", () => {
  beforeEach(() => {
    mockedTodoModel = sandbox.createStubInstance(TodoModel);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should create a TodoService instance", () => {
    const todoService = new TodoService(mockedTodoModel);

    expect(todoService).to.be.a("object");
  });

  it("should set the todoModel given by the constructor", () => {
    const todoService = new TodoService(mockedTodoModel);

    expect(todoService.todoModel).instanceOf(TodoModel);
  });
});
