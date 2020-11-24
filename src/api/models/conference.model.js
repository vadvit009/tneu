const mongoose = require("mongoose");

const Conference = new mongoose.Schema({
  title: String,
  desc: String,
  gallery: String,
}, {
  timestamp: true
});

module.exports = mongoose.model("Conference", News, "conference");
