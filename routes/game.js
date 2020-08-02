const express = require("express");
const gameRouter = express.Router();
const {
  index,
  show,
  console,
  /*ps4,
  xbox,
  Nswitch,*/
  create,
  update,
  destroy,
} = require("../controllers/game");

// show all games
gameRouter.get("/", index);

// //ps4 games filter
// gameRouter.get("/play-station-4", ps4);

// //xbox one games filter
// gameRouter.get("/xbox-one", xbox);

// //nintendo switch games filter
// gameRouter.get("/nintendo-switch", Nswitch);

//console filter
gameRouter.get("/console/:console", console);

// show one game
gameRouter.get("/:id", show);

//create a new game
gameRouter.post("/", create);

//update existing game
gameRouter.put("/:id", update);

//delete existing game
gameRouter.delete("/:id", destroy);

module.exports = gameRouter;
