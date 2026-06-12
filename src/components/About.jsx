import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about container">

      <div className="section-header">
        <span className="section-tag">About Me</span>

        <h2>
          Building, Learning & Growing Every Day
        </h2>

      <p className="section-description">
          I'm a Full Stack Developer passionate about building real-world applications.
          Alongside MERN Stack development, I'm currently expanding my backend
          engineering skills by learning Java and Spring Boot.
      </p>
      </div>

      <div className="about-content">

        <div className="about-highlights">

          <div className="highlight">
            <span>✓</span>
            <p>Building Real-World Projects</p>
          </div>

          <div className="highlight">
            <span>✓</span>
            <p>Passionate About Backend Development</p>
          </div>

          <div className="highlight">
            <span>✓</span>
            <p>Strong Foundation in DSA</p>
          </div>

          <div className="highlight">
            <span>✓</span>
            <p>Continuous Learning Mindset</p>
          </div>

          <div className="highlight">
            <span>✓</span>
            <p>Problem Solving & Team Collaboration</p>
          </div>

        </div>

        <div className="about-cards">

          <div className="about-card">
            <span className="card-icon">🚀</span>
            <h3>Experience</h3>
            <p>Full Stack Developer Trainee</p>
          </div>

          <div className="about-card">
            <span className="card-icon">💻</span>
            <h3>Tech Stack</h3>
            <p>MERN Stack & Java</p>
          </div>

          <div className="about-card">
            <span className="card-icon">🧠</span>
            <h3>DSA Journey</h3>
            <p>200+ Problems Solved</p>
          </div>

          <div className="about-card">
            <span className="card-icon">🎯</span>
            <h3>Goal</h3>
            <p>Software Engineer</p>
          </div>

        </div>

      </div>

    </section>
  );
}