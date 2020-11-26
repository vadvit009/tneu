const app = require("express").Router();

const {
  getAllVstup,
  getVstup,
  createVstup,
  deleteVstup,
  updateVstup
} = require("../contollers/vstup");

const {verifyAdminToken} = require("../middleware/jwt");

app.get("/vstups",/*cache(3600),*/ getAllVstup);

app.get("/vstup/:id", getVstup);

app.post("/vstup", verifyAdminToken, createVstup);

app.patch("/vstup/:id", verifyAdminToken, updateVstup);

app.delete("/vstup/:id", verifyAdminToken, deleteVstup);

module.exports = app;
