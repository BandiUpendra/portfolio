import profile from "../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPaperPlane } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h3>Hello 👋, I'm</h3>

        <h1>Chinna</h1>

        <h2>
          <Typewriter
            words={[
              "Frontend Developer",
              "React Developer",
              "JavaScript Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p>
          Passionate Frontend Developer who builds modern, responsive, and
          user-friendly web applications using HTML, CSS, JavaScript, and React.
        </p>

        <div className="hero-buttons">
          <a href="#contact">
            <button className="hire-button">
              <FaPaperPlane className="hire-icon" />
              Hire Me
            </button>
          </a>

          <a href="/resume.pdf" download>
            <button className="resume-button">
              <FaDownload className="download-icon" />
              Download Resume
            </button>
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/BandiUpendra"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:bandiupendrabandi@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-image" role="img" aria-label="Portrait of Chinna">
        <div className="puzzle-wrapper">
          {[
            { pos: "0% 0%", tx: "-30px", ty: "-22px", r: "-14deg", delay: "0s" },
            { pos: "50% 0%", tx: "18px", ty: "-28px", r: "12deg", delay: "0.2s" },
            { pos: "100% 0%", tx: "28px", ty: "-16px", r: "8deg", delay: "0.4s" },
            { pos: "0% 50%", tx: "-28px", ty: "18px", r: "10deg", delay: "0.6s" },
            { pos: "50% 50%", tx: "0px", ty: "28px", r: "-10deg", delay: "0.8s" },
            { pos: "100% 50%", tx: "30px", ty: "22px", r: "-12deg", delay: "1s" },
            { pos: "0% 100%", tx: "-18px", ty: "22px", r: "16deg", delay: "1.2s" },
            { pos: "50% 100%", tx: "12px", ty: "26px", r: "-18deg", delay: "1.4s" },
            { pos: "100% 100%", tx: "28px", ty: "18px", r: "14deg", delay: "1.6s" },
          ].map((piece, index) => (
            <div
              key={index}
              className="puzzle-piece"
              style={{
                backgroundImage: `url(${profile})`,
                backgroundPosition: piece.pos,
                animationDelay: piece.delay,
                "--tx": piece.tx,
                "--ty": piece.ty,
                "--r": piece.r,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
