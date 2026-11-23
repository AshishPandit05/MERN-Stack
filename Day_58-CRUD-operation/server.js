const express = require("express");
const app = express();
const port = 3000;

// create

// api call - get(read)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// CREATE - POST
app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ - GET ALL
app.get("/students", async (req, res) => {
  const students = await Student.find();

  res.json(students);
});

// READ - GET SINGLE
app.get("/students/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// UPDATE - PUT
app.put("/students/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// DELETE - DELETE
app.delete("/students/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({ message: "Student deleted successfully" });
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
