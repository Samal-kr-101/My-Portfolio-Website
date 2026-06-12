import "../styles/hero.css";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-left">

        <h1 className="hero-name">
          Samal Kumar
        </h1>

        <h2 className="hero-title">
          Full Stack Developer | MERN Stack | Java Developer
        </h2>

        <p className="hero-description">
          I build full-stack web applications using React, Node.js, Express, MongoDB, and Java. Passionate about backend development, scalable software systems, and solving complex problems through Data Structures & Algorithms. Currently seeking Software Development Internship and Entry-Level SDE opportunities.
        </p>

        <div className="hero-actions">
          <a
            href="/Samal-Kumar-Resume.pdf"
            download
            className="primary"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="secondary"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right">
  <img
    src={profileImg}
    alt="Samal Kumar"
    className="hero-image"
  />

  <p className="hero-greeting">
    <span className="status-dot"></span>
    Open to Internships & SDE Opportunities
  </p>
</div>
    </section>
  );
}