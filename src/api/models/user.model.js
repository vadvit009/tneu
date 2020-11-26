const mongoose = require("mongoose");

const User = new mongoose.Schema({
  email: String,
  pass: String
}, {
  timestamp: true
});

module.exports = mongoose.model("User", User, "user");
