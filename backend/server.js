const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ===============================
// Project Schema
// ===============================
const Project = mongoose.model("Project", {
    title: String,
    description: String,
    technologies: String,
    github: String,
    live: String
});

// ===============================
// Home Route
// ===============================
app.get('/', (req, res) => {
    res.send("API Running Successfully");
});

// ===============================
// Add Sample Project (Browser Test)
// ===============================
app.get('/add', async (req, res) => {

    const newProject = new Project({
        title: "Personal Portfolio Website",
        description: "My first full stack portfolio project",
        technologies: "React, Node.js, MongoDB",
        github: "https://github.com/yourgithub",
        live: "https://yourwebsite.com"
    });

    await newProject.save();

    res.send("Project Saved Successfully");
});

// ===============================
// Get All Projects
// ===============================
app.get('/projects', async (req, res) => {

    const projects = await Project.find();

    res.json(projects);
});

// ===============================
// Delete Project
// ===============================
app.get('/delete/:id', async (req, res) => {

    await Project.findByIdAndDelete(req.params.id);

    res.send("Project Deleted");
});

// ===============================
// Start Server
// ===============================
app.listen(5000, () => {

    console.log("Server running on port 5000");

});