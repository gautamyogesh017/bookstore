const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: { type: String },
    author: { type: String },
    category: { type: String },
    price: { type: String },
  },
  {
    collection: "Books",
  }
);
const bookModel = mongoose.model("Book", bookSchema);
module.exports = bookModel;
