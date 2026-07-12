import profile from "../assets/profile.png";
import { FaCheckCircle, FaDownload } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt="Profile" />
        </div>

        <div className="about-content">
          <h3>Hi, I'm Chinna 👋</h3>

          <h4>Frontend React Developer</h4>

          <p>
            I am a passionate Frontend Developer who enjoys building responsive,
            interactive, and modern web applications using HTML, CSS,
            JavaScript, and React.
          </p>

          <p>
            I continuously learn new technologies and enjoy solving real-world
            problems through clean and efficient code.
          </p>

          <div className="about-skills">
            <p>
              <FaCheckCircle /> HTML
            </p>

            <p>
              <FaCheckCircle /> CSS
            </p>

            <p>
              <FaCheckCircle /> JavaScript
            </p>

            <p>
              <FaCheckCircle /> React
            </p>

            <p>
              <FaCheckCircle /> Git & GitHub
            </p>
          </div>

          <a href="/UpendraCM.pdf" download className="resume-btn">
            <FaDownload className="download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
