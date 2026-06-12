import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-content">

        <span className="footer-badge">
                Open to Internships & Full Stack Opportunities
        </span>

        <h2>Building. Learning. Growing.</h2>

        <p>
            Full Stack Developer with hands-on experience in MERN Stack,
            passionate about software engineering, problem solving, and
            building products that deliver real value.
        </p>

        <div className="footer-socials">
          <a href="https://github.com/Samal-kr-101" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/samal-kumar-choudhary-0139582a9/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>

          <a href="mailto:samalkr7739@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Samal Kumar Choudhary</span>
          <span>Built with React & ❤️</span>
        </div>

      </div>
    </footer>
  );
}