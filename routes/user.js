const express = require("express");
const userRouter = express.Router();
const { create, update, destroy } = require("../controllers/user");

//create a new user review
userRouter.post("/", create);

//update a user review
userRouter.put("/:id", update);

//delete a user review
userRouter.delete("/:id", destroy);

module.exports = userRouter;
