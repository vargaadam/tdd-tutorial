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

  it("should have a list function", () => {
    const todoService = new TodoService(mockedTodoModel);

    expect(todoService.list).to.be.a("function");
  });

  describe("#list", () => {
    it("should call the mockedTodoModel list function", () => {
      const mockedList = mockedTodoModel.list.returns();

      const todoService = new TodoService(mockedTodoModel);
      todoService.list();

      expect(mockedList.calledOnce).to.true;
    });
  });
});
