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

  it("should have a create function", () => {
    const todoService = new TodoService(mockedTodoModel);

    expect(todoService.create).to.be.a("function");
  });

  describe("#create", () => {
    it("should call the mockedTodoModel find function", () => {
      const name = "test1";

      const mockedModelFind = mockedTodoModel.find.withArgs(name).returns();

      const todoService = new TodoService(mockedTodoModel);
      todoService.create(name);

      expect(mockedModelFind.calledOnce).to.true;
    });

    it("should throw an error if a Todo is found with specified name", () => {
      const name = "test";
      mockedTodoModel.find.returns({ name });

      const todoService = new TodoService(mockedTodoModel);

      expect(() => todoService.create(name)).to.throw(Error);
    });

    it("should call the mockedTodoModel create function", () => {
      const expectedTodo = {
        name: "test1",
        active: true,
      };

      const mockedModelFind = mockedTodoModel.create
        .withArgs(expectedTodo.name)
        .returns(expectedTodo);

      const todoService = new TodoService(mockedTodoModel);
      const createdTodo = todoService.create(expectedTodo.name);

      expect(mockedModelFind.calledOnce).to.true;
      expect(createdTodo).to.eql(expectedTodo);
    });
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
