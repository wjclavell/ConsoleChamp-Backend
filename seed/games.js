const db = require("../db");
const Game = require("../models/game");

const gameSeed = [
  {
    title: "The Last of Us Part II",
    boxArt:
      "https://static.metacritic.com/images/products/games/3/976dc172a149f212d4b059e6eede1900-98.jpg",
    console: "PS4",
    genre: ["Action", "Adventure", "Survival"],
    releaseDate: "June 19, 2020",
    description:
      "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.",
  },
  {
    title: "Ghost of Tsushima",
    boxArt:
      "https://static.metacritic.com/images/products/games/0/260ef84455c9c9e47a0cdd2df24622bb-98.jpg",
    console: "PS4",
    genre: ["Action", "Adventure", "Open World"],
    releaseDate: "July 17, 2020",
    description:
      "The year is 1274. Samurai warriors are the legendary defenders of Japan -- until the fearsome Mongol Empire invades the island of Tsushima, wreaking havoc and conquering the local population. As one of the last surviving samurai, you rise from the ashes to fight back. But, honorable tactics won't lead you to victory. You must move beyond your samurai traditions to forge a new way of fighting -- the way of the Ghost -- as you wage an unconventional war for the freedom of Japan.",
  },
  {
    title: "Gears 5",
    boxArt:
      "https://static.metacritic.com/images/products/games/8/70028976bc460eae02fae019eb51beb9-98.jpg",
    console: "Xbox One",
    genre: ["Action", "Third-Person Shooter"],
    releaseDate: "Sep 6 2019",
    description:
      "Sera is crumbling, your enemies uniting. Humanity’s reliance on technology has become their downfall and enemies are uniting to wipe out all survivors. As Kait, journey back to uncover the origins of the Locust, and fight with your squad to protect what’s left.",
  },
  {
    title: "Paper Mario: The Origami King",
    boxArt:
      "https://static.metacritic.com/images/products/games/6/7a879a7f9cd698fe012c5dd4858f85d8-98.jpg",
    console: "Nintendo Switch",
    genre: ["Role-Playing"],
    releaseDate: "July 17, 2020",
    description:
      "Featuring a new ring-based battle system that mixes puzzle-solving skills with traditional turn-based combat, Paper Mario: The Origami King aims to put new twists in the series' established formula.",
  },
  {
    title: "Animal Crossing: New Horizons",
    boxArt:
      "https://static.metacritic.com/images/products/games/5/3a9359329fd2b8b0022bc57246aca1c8-98.jpg",
    console: "Nintendo Switch",
    genre: ["Simulation", "Virtual Life"],
    releaseDate: "Mar 20, 2020",
    description:
      "If the hustle and bustle of modern life’s got you down, Tom Nook has a new business venture up his sleeve that he knows you’ll adore: the Nook Inc. Deserted Island Getaway Package. Sure, you’ve crossed paths with colorful characters near and far. Had a grand time as one of the city folk. May’ve even turned over a new leaf and dedicated yourself to public service. But deep down, isn’t there a part of you that longs for…freedom? Then perhaps a long walk on the beach of a deserted island, where a rich wealth of untouched nature awaits, is just what the doctor ordered. Peaceful creativity and charm await as you roll up your sleeves and make your new life whatever you want it to be. Collect resources and craft everything from creature comforts to handy tools. Embrace your green thumb as you interact with flowers and trees in new ways. Set up a homestead where the rules of what goes indoors and out no longer apply. Make friends with new arrivals, enjoy the seasons, pole-vault across rivers as you explore, and more.",
  },
  {
    title: "Ori and the Will of the Wisps",
    boxArt:
      "https://static.metacritic.com/images/products/games/2/fb071eb430c986bc8f42f07da0a7339e-98.jpg",
    console: "Xbox One",
    releaseDate: "Mar 11, 2020",
    description:
      "The little spirit Ori is no stranger to peril, but when a fateful flight puts the owlet Ku in harm’s way, it will take more than bravery to bring a family back together, heal a broken land, and discover Ori’s true destiny. From the creators of the acclaimed action-platformer Ori and the Blind Forest comes the highly anticipated sequel. Embark on an all-new adventure in a vast world filled with new friends and foes that come to life in stunning, hand-painted artwork. Set to a fully orchestrated original score, Ori and the Will of the Wisps continues the Moon Studios tradition of tightly crafted platforming action and deeply emotional storytelling.",
    genre: ["Action", "Platformer"],
  },
];

Game.insertMany(gameSeed, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
  db.close();
});
