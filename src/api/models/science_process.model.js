const mongoose = require("mongoose");

const ScienceProcess = new mongoose.Schema({
  title: String,
  desc: String,
  gallery: [{data: Buffer, contentType: String}],
}, {
  timestamp: true
});

module.exports = mongoose.model("ScienceProcess", ScienceProcess, "science_process");
