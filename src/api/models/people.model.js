const mongoose = require("mongoose");

const People = new mongoose.Schema({
    fName: String,
    sName: String,
    gallery: String,
    scienceLevel: String,
    scienceTitle: String,
    desc: String
  },
  {
    timestamp: true
  })
;

module.exports = mongoose.model("People", People, "people");
