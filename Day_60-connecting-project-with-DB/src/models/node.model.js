const mongose = require("mongoose");

const noteSchema = new mongose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, minlength: 10 },
});

const NoteModel = mongose.model("notes", noteSchema);
module.exports = NoteModel;
