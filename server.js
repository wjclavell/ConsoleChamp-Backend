// dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const gameRoutes = require("./routes/game");
const criticRoutes = require("./routes/critic");

// global variables
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

// CORS security config
const whitelist = [
  "http://localhost:3000/",
  "https://flamboyant-ramanujan-b00f82.netlify.app/",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error(
          "Not allowed by CORS; origin domain needs to be added to whitelist."
        )
      );
    }
  },
};

// middleware
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

// routes and routers
app.use("/games", gameRoutes);
app.use("/critics", criticRoutes);

app.get("/", (req, res) => {
  res.send("Still working? Yup!");
});

// listener
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}.`);
});
