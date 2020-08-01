const db = require("../db");
const Game = require("../models/game");
const Critic = require("../models/critic");

//* INDEX
const index = async (req, res) => {
  try {
    const allGames = await Game.find({});
    res.status(200).json(allGames);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* show ps4 games
const ps4 = async (req, res) => {
  try {
    const ps4games = await Game.find({ console: "PS4" });
    res.status(200).json(ps4games);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* show xbox games
const xbox = async (req, res) => {
  try {
    const xboxgames = await Game.find({ console: "Xbox One" });
    res.status(200).json(xboxgames);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* show switch games
const Nswitch = async (req, res) => {
  try {
    const switchgames = await Game.find({ console: "Nintendo Switch" });
    res.status(200).json(switchgames);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { index, ps4, xbox, Nswitch };
