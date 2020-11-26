const app = require("express").Router();

const {
  getAllScienceActivity,
  getScienceActivity,
  createScienceActivity,
  deleteScienceActivity,
  updateScienceActivity
} = require("../contollers/scienceActivity");

const {verifyAdminToken} = require("../middleware/jwt");

app.get("/sciences_activity",/*cache(3600),*/ getAllScienceActivity);

app.get("/science_activity/:id", getScienceActivity);

app.post("/science_activity", verifyAdminToken, createScienceActivity);

app.patch("/science_activity/:id", verifyAdminToken, updateScienceActivity);

app.delete("/science_activity/:id", verifyAdminToken, deleteScienceActivity);

module.exports = app;
