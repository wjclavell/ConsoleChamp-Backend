const express = require("express");
const gameRouter = express.Router();
const { index, ps4, xbox, Nswitch } = require("../controllers");

// show all games
gameRouter.get("/", index);

gameRouter.get("/ps4", ps4);

gameRouter.get("/xbox1", xbox);

gameRouter.get("/ns", Nswitch);

module.exports = gameRouter;
