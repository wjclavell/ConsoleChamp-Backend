const express = require("express");
const userRouter = express.Router();
const { index, show, create, update, destroy } = require("../controllers/user");

//view all user reviews
userRouter.get("/", index);

//view one user review
userRouter.get("/:id", show);

//create a new user review
userRouter.post("/", create);

//update a user review
userRouter.put("/:id", update);

//delete a user review
userRouter.delete("/:id", destroy);

module.exports = userRouter;
