const mongoose = require("mongoose");

const Blog = new mongoose.Schema({
  title: String,
  desc: String,
  short_desc: String,
  gallery: {data: Buffer, contentType: String},
}, {
  timestamp: true
});

module.exports = mongoose.model("Blog", Blog, "blog");
