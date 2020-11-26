const app = require("express").Router();

const {
  getAllPages,
  getPage,
  createPage,
  deletePage,
  updatePage
} = require("../contollers/pages");

const {verifyAdminToken} = require("../middleware/jwt");

app.get("/pages",/*cache(3600),*/ getAllPages);

app.get("/page/:id", getPage);

app.post("/page", verifyAdminToken, createPage);

app.patch("/page/:id", verifyAdminToken, updatePage);

app.delete("/page/:id", verifyAdminToken, deletePage);

module.exports = app;
