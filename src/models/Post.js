const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag",
  },
  description: String,
  image: String,
});

module.exports = mongoose.model("Post", postSchema);
