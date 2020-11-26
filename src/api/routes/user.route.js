const app = require("express").Router();

const {
  login
} = require("../contollers/auth");

app.post("/login", login);

module.exports = app;
