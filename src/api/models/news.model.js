const mongoose = require("mongoose");

const News = new mongoose.Schema({
  title: String,
  desc: String,
  short_desc: String,
  gallery: String
}, {
  timestamp: true
});

module.exports = mongoose.model("News", News, "news");
