const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require, unique: true },
    email: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
