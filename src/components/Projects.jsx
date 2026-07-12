import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: project1,
      description: "A responsive portfolio built with React and CSS.",
      tech: "React • CSS • Vite",
      github: "https://github.com/YOUR_USERNAME/portfolio",
      demo: "https://YOUR-PORTFOLIO.vercel.app",
    },
    {
      title: "Weather App",
      image: project2,
      description: "Real-time weather application using API.",
      tech: "JavaScript • API",
      github: "https://github.com/YOUR_USERNAME/weather-app",
      demo: "#",
    },
    {
      title: "Todo App",
      image: project3,
      description: "Task management application using React.",
      tech: "React • CSS",
      github: "https://github.com/YOUR_USERNAME/todo-app",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>

                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
