const express = require("express");
const Database = require("./database");
const { initTodoModule } = require("./todo");

const app = express();
const database = new Database();

app.use(express.json());

initTodoModule(app, database);

module.exports = { app, database };
