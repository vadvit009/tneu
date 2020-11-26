const mongoose = require("mongoose");

const Pages = new mongoose.Schema({
  title: String,
  desc: String,
  gallery: [{data: Buffer, contentType: String}],
}, {
  timestamp: true
});

module.exports = mongoose.model("Pages", Pages, "pages");
