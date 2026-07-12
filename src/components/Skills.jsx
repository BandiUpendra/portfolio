function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git & GitHub"];

  return (
    <section id="skills" className="skills">
      <h1>My Skills</h1>

      <div className="skill-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
