const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// import
const cors = require("cors");
const mongoose = require("mongoose");

//settings
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "public"));

// routes

// database
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.MONGO_LINK + DB_NAME;

mongoose
  .connect(DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Mongoose found his way to the database...");
  })
  .catch((err) => {
    console.log(err);
  });
// listen
app.listen(PORT, () => {
  console.log(`Listen to PORT ${PORT} `);
});
