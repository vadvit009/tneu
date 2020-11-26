const mongoose = require("mongoose");

const Reviews = new mongoose.Schema({
  title: String,
  desc: String,
  short_desc: String,
  gallery: {data: Buffer, contentType: String},
}, {
  timestamp: true
});

module.exports = mongoose.model("Reviews", Reviews, "reviews");
