const express = require("express");
const Database = require("./database");
const TodoModel = require("./todo/todo.model");
const TodoService = require("./todo/todo.service");

const app = express();
const database = new Database();
const todoModel = new TodoModel(database);
const todoService = new TodoService(todoModel);

app.use(express.json());

app.get("/todos", (req, res) => {
  const todoList = todoService.list();
  res.send(todoList);
});

module.exports = { app, database };
