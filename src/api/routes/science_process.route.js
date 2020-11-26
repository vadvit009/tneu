const app = require("express").Router();

const {
  getAllScienceProcess,
  getScienceProcess,
  createScienceProcess,
  deleteScienceProcess,
  updateScienceProcess
} = require("../contollers/scienceProcess");

const {verifyAdminToken} = require("../middleware/jwt");

app.get("/science_process",/*cache(3600),*/ getAllScienceProcess);

app.get("/science_process/:id", getScienceProcess);

app.post("/science_process", verifyAdminToken, createScienceProcess);

app.patch("/science_process/:id", verifyAdminToken, updateScienceProcess);

app.delete("/science_process/:id", verifyAdminToken, deleteScienceProcess);

module.exports = app;
