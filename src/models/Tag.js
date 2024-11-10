const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: String,
  icon: String,
});

module.exports = mongoose.model("Tag", tagSchema);
