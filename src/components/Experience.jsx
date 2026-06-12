import "../styles/experience.css";

export default function Experience() {
  return (
    <section id="experience" className="container section">
      <div className="section-header">
        <span className="section-tag">Experience</span>
        <h2>My Experience</h2>
        <p>Professional journey in full-stack development and training</p>
      </div>

      <div className="timeline glass">

        {/* ===================== */}
        {/* CURRENT INTERNSHIP */}
        {/* ===================== */}
        <div className="item">
          <div className="item-header">
            <h3>Full Stack Developer Intern</h3>
            <span className="company">IISPPR</span>
            <span className="duration">Present</span>
          </div>

          <ul>
            <li>
              Building scalable MERN stack applications with modular architecture.
            </li>

            <li>
              Developing RESTful APIs using Node.js and Express for seamless data flow.
            </li>

            <li>
              Creating responsive React UI components with focus on performance.
            </li>

            <li>
              Implementing JWT-based authentication and role-based access control.
            </li>

            <li>
              Collaborating with team for feature development, debugging, and enhancements.
            </li>
          </ul>
        </div>

        {/* ===================== */}
        {/* TRAINING */}
        {/* ===================== */}
        <div className="item">
          <div className="item-header">
            <h3>Full Stack Developer Trainee</h3>
            <span className="company">Infynas Learning Solutions</span>
            <span className="duration">Jul 2025 – Completed</span>
          </div>

          <ul>
            <li>
              Completed structured MERN stack training with hands-on projects.
            </li>

            <li>
              Built CRUD applications with authentication and API integration.
            </li>

            <li>
              Learned REST API design, MongoDB schema modeling, and React architecture.
            </li>

            <li>
              Practiced real-world debugging and full-stack development workflows.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}