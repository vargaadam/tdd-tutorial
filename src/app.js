const express = require("express");

const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {
  res.send();
});

module.exports = { app };
