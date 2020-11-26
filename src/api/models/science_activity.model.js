const mongoose = require("mongoose");

const ScienceActivity = new mongoose.Schema({
  title: String,
  desc: String,
  gallery: [{data: Buffer, contentType: String}],
}, {
  timestamp: true
});

module.exports = mongoose.model("ScienceActivity", ScienceActivity, "science_activity");
