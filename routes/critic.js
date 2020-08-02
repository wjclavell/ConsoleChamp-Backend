const express = require("express");
const criticRouter = express.Router();
const { create, update, index, destroy } = require("../controllers/critic");

//view all the critic ratings
criticRouter.get("/", index);

//insert a new critic review for a game
criticRouter.post("/", create);

//update a critic review
criticRouter.put("/:id", update);

//delete a critic review
criticRouter.delete("/:id", destroy);

module.exports = criticRouter;
