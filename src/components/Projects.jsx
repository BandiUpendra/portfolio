function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using React and CSS.",
      tech: "React, CSS",
    },
    {
      title: "Weather App",
      description: "A weather application that shows real-time weather data.",
      tech: "JavaScript, API",
    },
    {
      title: "Todo App",
      description: "A task management application.",
      tech: "React",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <strong>{project.tech}</strong>

            <br />

            <button>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
