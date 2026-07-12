import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: "Advanced" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "Advanced" },
    { name: "JavaScript", icon: <FaJs />, level: "Intermediate" },
    { name: "React", icon: <FaReact />, level: "Intermediate" },
    { name: "Git & GitHub", icon: <FaGithub />, level: "Intermediate" },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>

            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
