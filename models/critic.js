const { Schema, model } = require("mongoose");

// critic sites to use: Game Informer, GamesRadar+, Gamespot, IGN, Christ Centered Gamer, Destructoid, PC Gamer

const criticSchema = new Schema(
  {
    game: { type: String, required: true },
    rating: { type: Number, required: true },
    critic: { type: String, required: true },
    link: { type: String, required: true },
    excerpt: { type: String, required: true },
    //maybe need a user reference here
  },
  { timestamps: true }
);

module.exports = model("Critic", criticSchema);
