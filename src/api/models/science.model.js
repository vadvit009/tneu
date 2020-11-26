const mongoose = require("mongoose");

const Science = new mongoose.Schema({
  title: String,
  desc: String,
  gallery: [{data: Buffer, contentType: String}],
}, {
  timestamp: true
});

module.exports = mongoose.model("Science", Science, "science");
