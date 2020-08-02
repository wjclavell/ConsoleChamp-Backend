const db = require("../db");
const Game = require("../models/game");
const User = require("../models/user");
const { all } = require("../routes/game");

//* INDEX
const index = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* SHOW
const show = async (req, res) => {
  try {
    const oneUser = await User.findById(req.params.id).populate("criticRating");
    res.status(200).json(oneUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* CREATE
const create = async (req, res) => {
  try {
    let videoGame = await Game.findOne({ title: req.body.game });
    req.body.game = videoGame._id;
    const rating = await User.create(req.body);
    await videoGame.userRating.push(rating._id);
    await videoGame.save();
    res.status(200).json(rating);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* UPDATE
const update = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

//* DELETE
const destroy = async (req, res) => {
  try {
    const destroyedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(destroyedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { index, show, create, update, destroy };
