const request = require("supertest");

const { app } = require("./app");

describe("App", () => {
  describe("#/todos", () => {
    describe("#GET", () => {
      it("should return with 200", async () => {
        await request(app).get("/todos").expect(200);
      });
    });
  });
});
