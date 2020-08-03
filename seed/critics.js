const db = require("../db");
const Critic = require("../models/critic");
const Game = require("../models/game");

const criticSeed = [
  {
    game: "The Last of Us Part II",
    rating: 100,
    critic: "Game Informer",
    link:
      "https://www.gameinformer.com/review/the-last-of-us-part-ii/the-last-of-us-part-ii-review-a-perfect-circle",
    excerpt:
      "It is a game that turned me inside out with each twist of the screw.",
  },
  {
    game: "The Last of Us Part II",
    rating: 100,
    critic: "GamesRadar+",
    link: "https://www.gamesradar.com/last-of-us-part-2-review/",
    excerpt:
      "Naughty Dog's PS4 swansong is an astonishing, absurdly ambitious epic that goes far and beyond what we could have imagined for a sequel to an all-time classic.",
  },
  {
    game: "The Last of Us Part II",
    rating: 80,
    critic: "GameSpot",
    link:
      "https://www.gamespot.com/reviews/the-last-of-us-part-ii-review-spoilerfree/1900-6417483/",
    excerpt:
      "I appreciate the story and characters at its core. I wanted almost none of it to happen the way it did, and that's what's both beautiful and devastating about it.",
  },
  {
    game: "The Last of Us Part II",
    rating: 100,
    critic: "IGN",
    link: "https://www.ign.com/articles/the-last-of-us-part-2-review",
    excerpt:
      "The Last of Us Part 2 is a masterpiece that evolves the gameplay, cinematic storytelling, and rich world design of the original in nearly every way.",
  },
  {
    game: "The Last of Us Part II",
    rating: 85,
    critic: "Destructoid",
    link:
      "https://www.destructoid.com/review-the-last-of-us-part-ii-592974.phtml",
    excerpt:
      "Part II doesn't re-invent the wheel, but it gives us a lasting glimpse of a unique world that's worth visiting time and time again.",
  },
  {
    game: "Animal Crossing: New Horizons",
    rating: 90,
    critic: "Game Informer",
    link:
      "https://www.gameinformer.com/index.php/review/animal-crossing-new-horizons/a-wholesome-island-oasis-animal-crossing-new-horizons-review",
    excerpt:
      "Animal Crossing: New Horizons has something new to experience every day, and, best of all, it’s built on a foundation of joy and earnestness that’s all too rare.",
  },
  {
    game: "Animal Crossing: New Horizons",
    rating: 90,
    critic: "Game Spot",
    link:
      "https://www.gamespot.com/reviews/animal-crossing-new-horizons-review/1900-6417431/",
    excerpt:
      "New Horizons certainly came at the right time, and its strengths are particularly comforting right now.",
  },
  {
    game: "Animal Crossing: New Horizons",
    rating: 90,
    critic: "GamesRadar+",
    link: "https://www.gamesradar.com/animal-crossing-new-horizons-review/",
    excerpt:
      "There continues to be nothing quite like Animal Crossing, and New Horizons proves that there's life in the old Nook yet.",
  },
  {
    game: "Animal Crossing: New Horizons",
    rating: 90,
    critic: "IGN",
    link:
      "https://www.ign.com/articles/animal-crossing-new-horizons-review-for-switch",
    excerpt:
      "Animal Crossing: New Horizons is an expanded, polished, next-generation reboot of a classic Nintendo game that's full of surprises.",
  },
  {
    game: "Animal Crossing: New Horizons",
    rating: 85,
    critic: "Destructoid",
    link:
      "https://www.destructoid.com/review-animal-crossing-new-horizons-583381.phtml",
    excerpt:
      "Based on what I have been able to experience, it's what I've wanted Animal Crossing to be for many years.",
  },
  {
    game: "Gears 5",
    rating: 80,
    critic: "Destructoid",
    link: "https://www.destructoid.com/review-gears-5-566490.phtml",
    excerpt:
      "The writing and action often rivals the best moments in the series, even surpassing its predecessors at times. The overall package is the most robust Gears has ever seen.",
  },
  {
    game: "Gears 5",
    rating: 85,
    critic: "Game Informer",
    link:
      "https://www.gameinformer.com/review/gears-5/gears-5-review-holding-the-line",
    excerpt:
      "This old war vet still packs a punch. The open-world exploration has issues, but that isn’t enough to steal away the thunder The Coalition expertly deploys on the battlefield.",
  },
  {
    game: "Gears 5",
    rating: 80,
    critic: "GamesRadar+",
    link: "https://www.gamesradar.com/gears-5-review/",
    excerpt:
      "Gears 5 doesn’t reinvent the wheel, but it changes enough to keep its signature style of cover-based shooting from feeling monotonous.",
  },
  {
    game: "Gears 5",
    rating: 70,
    critic: "GameSpot",
    link:
      "https://www.gamespot.com/reviews/gears-5-review-a-beneficial-mutation/1900-6417287/",
    excerpt:
      "Gears 5 is very much a return of those best elements of Gears of War, but with a focus on making the game feel somewhat more adaptive to your particular ways of playing.",
  },
  {
    game: "Gears 5",
    rating: 90,
    critic: "IGN",
    link: "https://www.ign.com/articles/2019/09/13/gears-5-review",
    excerpt:
      "What was unexpected is just how effectively it doubles down on story with a character-focused, consequence-filled tale that plays to one of the franchise’s most underappreciated strengths and backs it up with fun, welcome additions to both its gameplay formula and flow.",
  },
  {
    game: "Ghost of Tsushima",
    rating: 95,
    critic: "Destructoid",
    link:
      "https://www.destructoid.com/stories/review-ghost-of-tsushima-595478.phtml",
    excerpt:
      "With Ghost of Tsushima under its belt, Sucker Punch deserves to be in the same conversation as Insomniac, Naughty Dog, and Sony Santa Monica.",
  },
  {
    game: "Ghost of Tsushima",
    rating: 95,
    critic: "Game Informer",
    link:
      "https://www.gameinformer.com/review/ghost-of-tsushima/ghost-of-tsushima-review-a-most-honorable-epic",
    excerpt:
      "Ghost of Tsushima captures the mystique, fierce violence, and barely contained emotional angst of the great samurai films.",
  },
  {
    game: "Ghost of Tsushima",
    rating: 90,
    critic: "GamesRadar+",
    link: "https://www.gamesradar.com/ghost-of-tsushima-review",
    excerpt:
      "Ghost of Tsushima is the samurai Assassin's Creed Ubisoft will wish it had made.",
  },
  {
    game: "Ghost of Tsushima",
    rating: 90,
    critic: "IGN",
    link: "https://www.ign.com/articles/ghost-of-tsushima-review",
    excerpt:
      "Ghost of Tsushima is an enormous and densely packed samurai adventure that often left me completely awestruck with both its visual spectacle and excellent combat.",
  },
  {
    game: "Ghost of Tsushima",
    rating: 70,
    critic: "GameSpot",
    link:
      "https://www.gamespot.com/reviews/ghost-of-tsushima-review-you-khan-do-it/1900-6417501/",
    excerpt:
      "It left me with the same kinds of strong emotions I felt at the end of all my favourite samurai film epics, and had me eager to watch them all again.",
  },
  {
    game: "Paper Mario: The Origami King",
    rating: 80,
    critic: "Destructoid",
    link:
      "https://www.destructoid.com/stories/review-paper-mario-the-origami-king-596029.phtml",
    excerpt:
      "There's room in my heart for both styles of Paper Mario. The old games still exist and this newer, sometimes thinner formula is fine too.",
  },
  {
    game: "Paper Mario: The Origami King",
    rating: 78,
    critic: "Game Informer",
    link:
      "https://www.gameinformer.com/review/paper-mario-the-origami-king/paper-mario-the-origami-king-review-just-above-the-fold",
    excerpt:
      "As a series, Paper Mario constantly explores new concepts and mechanics, which is exciting, but that comes with plenty of risks.",
  },
  {
    game: "Paper Mario: The Origami King",
    rating: 80,
    critic: "GameSpot",
    link:
      "https://www.gamespot.com/reviews/paper-mario-the-origami-king-review-exploring-new-/1900-6417506/",
    excerpt:
      "With a newfound combat system that steals the show and offers a novel take on turn-based combat, its winking, nodding, and adventuring shine all the brighter.",
  },
  {
    game: "Paper Mario: The Origami King",
    rating: 90,
    critic: "GamesRadar+",
    link: "https://www.gamesradar.com/paper-mario-origami-king-review",
    excerpt:
      "Paper Mario: The Origami King is fun, light-hearted and a celebration of Super Mario with a strong story, great humour and brilliant characters.",
  },
  {
    game: "Paper Mario: The Origami King",
    rating: 70,
    critic: "IGN",
    link: "https://www.ign.com/articles/paper-mario-the-origami-king-review",
    excerpt:
      "The Origami King is a truly likeable game despite the shallowness of its new spin on gameplay.",
  },
  {
    game: "Ori and the Will of the Wisps",
    rating: 95,
    critic: "Destructoid",
    link:
      "https://www.destructoid.com/stories/review-ori-and-the-will-of-the-wisps-582480.phtml",
    excerpt:
      "With the need to go bigger, Ori and the Will of the Wisps loses some of the simplicity and innocence of the original game, but it steps up in turn with bite and refinement.",
  },
  {
    game: "Ori and the Will of the Wisps",
    rating: 95,
    critic: "Game Informer",
    link:
      "https://www.gameinformer.com/review/ori-and-the-will-of-the-wisps/ori-and-the-will-of-the-wisps-review-even-better-than-the",
    excerpt:
      "The story is fantastic, the world is breathtaking, and all of that pales in comparison to the wonderfully made gameplay that soars both as a platforming and combat game.",
  },
  {
    game: "Ori and the Will of the Wisps",
    rating: 90,
    critic: "GamesRadar+",
    link: "https://www.gamesradar.com/ori-and-the-will-of-the-wisps-review/",
    excerpt:
      "A gorgeous, tear-jerking platformer which improves on absolutely everything in the first game and ranks among the finest Metroidvanias available today.",
  },
  {
    game: "Ori and the Will of the Wisps",
    rating: 90,
    critic: "IGN",
    link: "https://www.ign.com/articles/ori-and-the-will-of-the-wisps-review",
    excerpt:
      "Its many new elements expand on and add to the first game’s fun without bogging it down or becoming overcomplicated. And that’s really the best praise you can give a sequel.",
  },
  {
    game: "Ori and the Will of the Wisps",
    rating: 80,
    critic: "Gamespot",
    link:
      "https://www.gamespot.com/reviews/ori-and-the-will-of-the-wisps-review/1900-6417425/",
    excerpt:
      "Ori and the Will of the Wisps, is every bit as graceful and lovely as its predecessor, even if some of the emotional beats and exploration feel a little less novel the second time around.",
  },
];

const addRatings = async () => {
  await Promise.all(
    criticSeed.map(async (ratingToAdd) => {
      // find game document with matching title
      let videoGame = await Game.findOne({ title: ratingToAdd.game });

      // update object with game ID
      ratingToAdd.game = videoGame._id;

      // create rating
      const rating = await Critic.create(ratingToAdd);
      console.log(rating);

      await videoGame.criticRating.push(rating._id);
      await videoGame.save();
      console.log(videoGame);
    })
  );

  db.close();
};

addRatings();
