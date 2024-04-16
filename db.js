//? import mongoose
const mongoose = require("mongoose");
require("dotenv").config();

//? define mongoose connection
// const mongoURL = "mongodb://localhost:27017/demodb";
const mongoURL = process.env.DB_URL;

//? se monodb connection
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

//? get defined connection
const db = mongoose.connection;

//? event listner for db connection
// db.on("connected", () => {
//   console.log("connection to mongoDB server");
// });

//? export db connection
module.exports = db;
