const app = require("express").Router();

const {
  getAllScience,
  getScience,
  createScience,
  deleteScience,
  updateScience
} = require("../contollers/science");

const {verifyAdminToken} = require("../middleware/jwt");

app.get("/sciences",/*cache(3600),*/ getAllScience);

app.get("/science/:id", getScience);

app.post("/science", verifyAdminToken, createScience);

app.patch("/science/:id", verifyAdminToken, updateScience);

app.delete("/science/:id", verifyAdminToken, deleteScience);

module.exports = app;
