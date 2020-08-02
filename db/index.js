require("dotenv").config();
const mongoose = require("mongoose");
// USING ENV URI IF AVAILABLE
const mongoURI = process.env.mongoURI + "gameRatings";
console.log(mongoURI);
// cononect to db
mongoose
  .connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((e) => {
    console.error("Connection error:", e.message);
  });

const db = mongoose.connection;

// connection messages
db.on("error", (err) => console.log(err.message + "\nIs Mongod not running?"));
db.on("connected", () => console.log("MongoDB connected!"));
db.on("disconnected", () => console.log("MongoDB disconnected."));

module.exports = db;
