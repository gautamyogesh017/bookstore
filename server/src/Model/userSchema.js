const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, unique: true },
    password: { type: String, required: true },
    token: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
  },
  {
    collection: "UserRegister",
  }
);
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
