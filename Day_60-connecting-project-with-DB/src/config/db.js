const mongoose = require("mongoose");
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

module.exports = connectDb;
