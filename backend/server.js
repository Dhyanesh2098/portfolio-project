const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Project = mongoose.model("Project", projectSchema);

// Default Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

// Get Projects
app.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Add Project
app.post("/add", async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});