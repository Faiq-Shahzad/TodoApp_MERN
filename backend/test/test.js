// const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");

require("dotenv").config();

//------------------ TESTING POST FUNCTION -------------------------
describe("POST request", () => {
  test("should add a Task", async () => {
    // Make the POST request
    const res = await request(app).post("/addTask").send({task: "Buy Milk"});
    expect(res.statusCode).toBe(200);
  });
});

//------------------ TESTING GET FUNCTION -------------------------
describe("GET /", () => {
  it("should return all Tasks", async () => {
    // Make the GET request
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});

//------------------ TESTING DELETE FUNCTION -------------------------
describe("DELETE /task/:id", () => {
  it("should delete a task", async () => {
    const res = await request(app).delete(
      "/task/648a1b522454c737c687c38f"
    );
    expect(res.statusCode).toBe(200);
  });
});

//------------------ TESTING UPDATE FUNCTION -------------------------

describe("PUT /task/:id", () => {
  it("should update a task", async () => {
    const res = await request(app)
      .put("/task/648a1b37955caf3a14732407")
      .send({
        completed: true,
        completedTime: Date.now
      });
    expect(res.statusCode).toBe(200);
  });
});