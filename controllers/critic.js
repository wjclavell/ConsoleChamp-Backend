const db = require("../db");
const Game = require("../models/game");
const Critic = require("../models/critic");

//* INDEX
const index = async (req, res) => {
  try {
    const allCritics = await Critic.find({});
    res.status(200).json(allCritics);
  } catch (err) {
    res.status(400).send(err);
  }
};

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

//* DELETE
//* DELETE
const destroy = async (req, res) => {
  try {
    const deletedCritic = await Critic.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCritic);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { create, update, index, destroy };
