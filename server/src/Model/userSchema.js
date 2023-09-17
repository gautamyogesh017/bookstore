const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    phoneNumber: { type: String, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    token: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
  },
  {
    collection: "UserRegister",
  }
);
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
