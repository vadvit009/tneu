const app = require("express").Router();

const {
  getAllNews,
  getNew,
  createNew,
  deleteNew,
  updateNew
} = require("../contollers/news");

const {verifyAdminToken} = require("../middleware/jwt");

app.get("/news",/*cache(3600),*/ getAllNews);

app.get("/news/:id", getNew);

app.post("/news", verifyAdminToken, createNew);

app.patch("/news/:id", verifyAdminToken, updateNew);

app.delete("/news/:id", verifyAdminToken, deleteNew);

module.exports = app;
