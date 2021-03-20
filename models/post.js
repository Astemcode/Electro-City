const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: { type: String, required: true },
  seller: { type: String, required: true },
  description: String,
  state: {type: String, required: true},
  city: {type: String, required: true},
  date: { type: Date, default: Date.now },
  password: {type: String, required: true},
  price: {type: Number, required: true},
  imageURL:{type: String}
  
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
