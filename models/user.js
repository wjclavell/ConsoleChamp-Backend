const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    game: { type: String, required: true },
    username: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: String },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
