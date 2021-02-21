const app = require("express").Router();

const {
  getAllPeoples,
  getPeople,
  createPeople,
  deletePeople,
  updatePeople,
  uploadPhoto
} = require("../contollers/people");

const {verifyAdminToken} = require("../middleware/jwt");

app.get("/people",/*cache(3600),*/ getAllPeoples);

app.get("/people/:id", getPeople);

app.post("/people/:id/upload", verifyAdminToken, uploadPhoto);

app.post("/people", verifyAdminToken, createPeople);

app.patch("/people/:id", verifyAdminToken, updatePeople);

app.delete("/people/:id", verifyAdminToken, deletePeople);

module.exports = app;
