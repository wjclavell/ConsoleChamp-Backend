require("dotenv").config();
const mongoose = require("mongoose");
// USING ENV URI IF AVAILABLE
let MONGODB_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGODB_URI + "gameRatings" ||
  "mongodb://localhost:27017/";
console.log(MONGODB_URI);
// cononect to db
mongoose
  .connect(MONGODB_URI, {
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
