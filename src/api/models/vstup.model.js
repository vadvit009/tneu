const mongoose = require("mongoose");

const Vstup = new mongoose.Schema({
  title: String,
  desc: String,
  gallery: [{data: Buffer, contentType: String}],
}, {
  timestamp: true
});

module.exports = mongoose.model("Vstup", Vstup, "vstup");
