import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-project-3efv.onrender.com/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          backgroundColor: "#07122b",
          color: "white",
          position: "sticky",
          top: "0",
        }}
      >
        <h2>Dhyanesh Portfolio</h2>

        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
          }}
        >
          <li>
            <a href="#home" style={linkStyle}>
              Home
            </a>
          </li>

          <li>
            <a href="#skills" style={linkStyle}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" style={linkStyle}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          backgroundColor: "#07122b",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "55px", marginBottom: "20px" }}>
          Hello, I'm Dhyanesh Reddy
        </h1>

        <p style={{ fontSize: "22px", maxWidth: "700px" }}>
          Full Stack Web Developer passionate about building modern web
          applications using React, Node.js and MongoDB.
        </p>

        <button
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            marginTop: "30px",
            padding: "15px 35px",
            fontSize: "18px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          View Projects
        </button>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        style={{
          padding: "80px 20px",
          backgroundColor: "#08142f",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "40px", fontSize: "40px" }}>Skills</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "MongoDB",
          ].map((skill, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1e293b",
                padding: "15px 25px",
                borderRadius: "10px",
                fontSize: "18px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          padding: "80px 20px",
          backgroundColor: "#07122b",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "40px", fontSize: "40px" }}>Projects</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#1e293b",
                  padding: "25px",
                  width: "300px",
                  borderRadius: "15px",
                  textAlign: "left",
                }}
              >
                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
          backgroundColor: "#08142f",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "30px", fontSize: "40px" }}>Contact</h2>

        <p>Email: dhyanesh@example.com</p>

        <p>GitHub: Dhyanesh2098</p>

        <p>LinkedIn: Dhyanesh Reddy</p>
      </section>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};

export default App;