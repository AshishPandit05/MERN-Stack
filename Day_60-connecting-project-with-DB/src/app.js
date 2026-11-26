const express = require("express");
const NoteModel = require("./models/node.model");
const app = express();

// apis---

app.post("/create", async (req, res) => {
  let { title, discription } = req.body;

  let newNote = await NoteModel.create({
    title,
    discription,
  });

  res.send({
    success: ture,
    message: "note create successfully",
    data: newNote,
  });
});
module.exports = app;
