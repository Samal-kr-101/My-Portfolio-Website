import "../styles/education.css";

export default function Education() {
  return (
    <section id="education" className="container section">

      <div className="section-header">
        <span className="section-tag">Education</span>
        <h2>Academic Background</h2>
      </div>

      <div className="education-card glass">

        <div className="edu-item">
          <h3>Bachelor of Technology (B.Tech)</h3>

          <div className="edu-meta">
            <span className="college">Raipur Institute Of Technology, Chhattisgarh</span>
            <span className="duration">2023 – 2027</span>
          </div>

          <p className="desc">
            Computer Science & Engineering student focused on full-stack development
            and software engineering fundamentals.
          </p>

          <div className="focus">
            <span>Data Structures</span>
            <span>Web Development</span>
            <span>Databases</span>
            <span>Object-Oriented Programming</span>
            <span>REST APIs</span>
            <span>System Design Basics</span>
          </div>
        </div>

      </div>
    </section>
  );
}