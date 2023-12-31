const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  },
  {
    collection: "BookList",
  }
);
const bookModel = mongoose.model("Book", bookSchema);
module.exports = bookModel;
