const { expect } = require("chai");
const request = require("supertest");

const { app, database } = require("./app");
const TodoModel = require("./todo/todo.model");

const todoModel = new TodoModel(database);

describe("App", () => {
  beforeEach(() => {
    database.clear();
  });

  describe("#/todos", () => {
    describe("#GET", () => {
      const activeTodo = {
        name: "test1",
        active: true,
      };

      const inactiveTodo = {
        name: "test2",
        active: false,
      };

      beforeEach(() => {
        todoModel.create(activeTodo.name, activeTodo.active);
        todoModel.create(inactiveTodo.name, inactiveTodo.active);
      });

      it("should return with 200", async () => {
        await request(app).get("/todos").expect(200);
      });

      it("should return with all todos", async () => {
        await request(app)
          .get("/todos")
          .expect(200, [activeTodo, inactiveTodo]);
      });

      it("should return with the active Todos by setting the onlyActive query param to true", async () => {
        await request(app)
          .get("/todos")
          .query({ onlyActive: true })
          .expect(200, [activeTodo]);
      });
    });

    describe("#POST", () => {
      it("should return with 200", async () => {
        await request(app).post("/todos").expect(200);
      });

      it("should return with the created Todo", async () => {
        const name = "test1";

        const expectedTodo = {
          name,
          active: true,
        };

        await request(app)
          .post("/todos")
          .send({ name })
          .expect(200, expectedTodo);

        expect(database.todoList.length).to.eql(1);
        expect(database.todoList[0]).to.eql(expectedTodo);
      });

      it("should return with 500 if a Todo has already been created with the same name", async () => {
        const name = "test1";

        todoModel.create(name, true);

        await request(app).post("/todos").send({ name }).expect(500);
      });
    });
  });
});
