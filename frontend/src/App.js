import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    axios.get('https://portfolio-project-3efv.onrender.com/projects')
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <h1>Dhyanesh Portfolio</h1>

        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">

        <h2>Hello, I'm Dhyanesh Reddy</h2>

        <p>
          Full Stack Web Developer passionate about building modern web applications using React, Node.js and MongoDB.
        </p>

        <button>View Projects</button>

      </section>

      {/* Skills */}
      <section className="skills">

        <h2>Skills</h2>

        <div className="skill-box">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React.js</div>
          <div>Node.js</div>
          <div>MongoDB</div>
        </div>

      </section>

      {/* Projects */}
      <section className="projects">

        <h2>Projects</h2>

        {
          projects.map((project) => (

            <div className="project-card" key={project._id}>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <p>
                <b>Technologies:</b> {project.technologies}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>

            </div>

          ))
        }

      </section>

    </div>
  );
}

export default App;