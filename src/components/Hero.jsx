import profile from "../assets/profile.png";
import { FaDownload } from "react-icons/fa";
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Bandi Upendra</h1>

        <h2>Frontend Developer</h2>

        <p>
          I create modern and responsive websites using HTML, CSS, JavaScript,
          and React.
        </p>

        <div className="hero-buttons">
          <a href="#contact">
            <button>Hire Me</button>
          </a>

          <div className="hero-buttons">
            <a href="/Bandi_Upendra_Resume.pdf" download>
              <button>
                <FaDownload style={{ marginRight: "8px" }} />
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Hero;
