const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true, min: 6 },
    email: { type: String, required: true },
    password: { type: String, required: true, max: 1024, min: 6 },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
