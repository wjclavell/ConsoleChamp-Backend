// dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");

// global variables
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

// CORS security config
const whitelist = ["http://localhost:3000/"];
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
// app.use("/", routes);
app.get("/", (req, res) => {
  res.send("The server is connected");
});

// listener
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}.`);
});
