const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mrashishpandit05_db_user:mrashishpandit05db@collegedb-cluste.sc4cl3g.mongodb.net/",
    );
    console.log("connect DB");
  } catch (error) {
    console.log("error in DB connection", error);
  }
};
connectDb();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("i'm listening on port 3000");
});
