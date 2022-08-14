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
    });
  });
});
