const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");

//* VALIDATION
const Joi = require("@hapi/joi");

const schema = Joi.object({
  username: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

authRouter.post("/register", async (req, res) => {
  // Validate the data before we make a user
  const { error } = await schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// authRouter.post("/login");

module.exports = authRouter;
