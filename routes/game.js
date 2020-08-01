const express = require("express");
const gameRouter = express.Router();
const {
  index,
  ps4,
  xbox,
  Nswitch,
  create,
  update,
  destroy,
} = require("../controllers/game");

// show all games
gameRouter.get("/", index);

//ps4 games filter
gameRouter.get("/ps4", ps4);

//xbox one games filter
gameRouter.get("/xbox1", xbox);

//nintendo switch games filter
gameRouter.get("/ns", Nswitch);

//create a new game
gameRouter.post("/", create);

//update existing game
gameRouter.put("/:id", update);

//delete existing game
gameRouter.delete("/:id", destroy);

module.exports = gameRouter;
