const db = require("../db");
const Game = require("../models/game");
const Critic = require("../models/critic");

//* CREATE
const create = async (req, res) => {
  try {
    let videoGame = await Game.findOne({ title: req.body.game });
    req.body.game = videoGame._id;
    const rating = await Critic.create(req.body);
    await videoGame.criticRating.push(rating._id);
    await videoGame.save();
    res.status(200).json(rating);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* UPDATE
const update = async (req, res) => {
  try {
    const updatedCritic = await Critic.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCritic);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { create, update };
