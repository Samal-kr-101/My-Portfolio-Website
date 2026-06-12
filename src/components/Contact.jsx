import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="container section">

      <div className="section-header">
        <span className="section-tag">Contact</span>
        <h2>Let's Build Something Great</h2>
        <p>
          Open to internships, freelance opportunities, and software
          development roles. Feel free to reach out.
        </p>
      </div>

      <div className="contact-card glass">

        <a
          href="mailto:samalkr7739@gmail.com"
          className="contact-item"
        >
          <FaEnvelope />
          <div>
            <h4>Email</h4>
            <span>samalkr7739@gmail.com</span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/samal-kumar-choudhary-0139582a9/"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <FaLinkedin />
          <div>
            <h4>LinkedIn</h4>
            <span>Connect with me</span>
          </div>
        </a>

        <a
          href="https://github.com/Samal-kr-101"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <FaGithub />
          <div>
            <h4>GitHub</h4>
            <span>View my projects</span>
          </div>
        </a>

      </div>

    </section>
  );
}