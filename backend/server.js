const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

/* MongoDB Connection */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

/* Project Schema */
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Project = mongoose.model("Project", projectSchema);

/* Default Route */
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running Successfully");
});

/* Projects Route */
app.get("/projects", async (req, res) => {
  try {
    let projects = await Project.find();

    /* If DB Empty → Send Sample Projects */
    if (projects.length === 0) {
      projects = [
        {
          title: "Personal Portfolio Website",
          description:
            "A full stack portfolio website using React, Node.js and MongoDB.",
        },
        {
          title: "Expense Tracker",
          description:
            "Track expenses with category management and responsive design.",
        },
        {
          title: "To-Do List App",
          description:
            "Task management application built using React and Node.js.",
        },
      ];
    }

    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

/* Start Server */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});