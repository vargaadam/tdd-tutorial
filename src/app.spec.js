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
      it("should return with 200", async () => {
        await request(app).get("/todos").expect(200);
      });

      it("should return with all todos", async () => {
        const activeTodo = {
          name: "test1",
          active: true,
        };

        const inactiveTodo = {
          name: "test2",
          active: false,
        };

        todoModel.create(activeTodo.name, activeTodo.active);
        todoModel.create(inactiveTodo.name, inactiveTodo.active);

        await request(app)
          .get("/todos")
          .expect(200, [activeTodo, inactiveTodo]);
      });
    });
  });
});
