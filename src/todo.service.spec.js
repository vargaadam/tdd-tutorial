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

    it("should return with the todos", () => {
      const expectedTodoList = [
        {
          name: "test1",
          active: true,
        },
        { name: "test2", active: false },
      ];

      mockedTodoModel.list.returns(expectedTodoList);

      const todoService = new TodoService(mockedTodoModel);
      const todoList = todoService.list();

      expect(todoList).to.deep.eq(expectedTodoList);
    });

    it("should return with the active todos if the param is set to true", () => {
      const expectedTodoList = [
        {
          name: "test1",
          active: true,
        },
        { name: "test2", active: false },
      ];

      mockedTodoModel.list.returns(expectedTodoList);

      const todoService = new TodoService(mockedTodoModel);
      const todoList = todoService.list(true);

      expect(todoList.length).to.eql(1);
      expect(todoList).to.deep.eq([expectedTodoList[0]]);
    });
  });
});
