const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
  {
    title: { type: String, required: true },
    boxArt: { type: String, required: true },
    console: { type: String, required: true },
    genre: { type: Array, required: true },
    releaseDate: { type: String, required: true }, // date("YYYY-mm-dd")
    criticRating: [
      {
        type: Schema.Types.ObjectId,
        ref: "Critic",
      },
    ],
    userRating: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Game", gameSchema);
