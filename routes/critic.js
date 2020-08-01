const express = require("express");
const criticRouter = express.Router();
const { create, update } = require("../controllers/critic");

//insert a new critic review for a game
criticRouter.post("/", create);

//update a critic review
criticRouter.put("/:id", update);

module.exports = criticRouter;
