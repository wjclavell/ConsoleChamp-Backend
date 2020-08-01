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

//* SHOW
const show = async (req, res) => {
  try {
    const oneGame = await Game.findById(req.params.id);
    res.status(200).json(oneGame);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* show ps4 games
const ps4 = async (req, res) => {
  try {
    const ps4games = await Game.find({ console: "PS4" }).populate(
      "criticRating"
    );
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

//* CREATE
const create = async (req, res) => {
  try {
    const newGame = await Game.create(req.body);
    res.status(200).json(newGame);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* UPDATE
const update = async (req, res) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedGame);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* DELETE
const destroy = async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedGame);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { index, show, ps4, xbox, Nswitch, create, update, destroy };
