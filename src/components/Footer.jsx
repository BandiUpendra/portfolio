import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Chinna Portfolio</h2>

        <p>Frontend Developer | React Developer</p>

        <div className="footer-social">
          <a
            href="https://github.com/BandiUpendra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:bandiupendrabandi@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <a href="#home" className="back-top">
          <FaArrowUp />
        </a>

        <hr />

        <p className="copyright">© 2026 Chinna. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
