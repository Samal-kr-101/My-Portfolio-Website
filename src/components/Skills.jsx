import "../styles/skills.css";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiSpringboot,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills container">

      <div className="section-header">
        <span className="section-tag">My Skills</span>
        <h2>Technologies I Work With</h2>
        <p>
          Technologies, tools, and frameworks I use to build modern web
          applications.
        </p>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Frontend</h3>

          <div className="skill-icons">
            <div className="skill-item">
              <FaHtml5 />
              <span>HTML</span>
            </div>

            <div className="skill-item">
              <FaCss3Alt />
              <span>CSS</span>
            </div>

            <div className="skill-item">
              <SiJavascript />
              <span>JavaScript</span>
            </div>

            <div className="skill-item">
              <FaReact />
              <span>React</span>
            </div>
          </div>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>

          <div className="skill-icons">
            <div className="skill-item">
              <FaNodeJs />
              <span>Node.js</span>
            </div>

            <div className="skill-item">
              <SiExpress />
              <span>Express</span>
            </div>

            <div className="skill-item">
              <FaJava />
              <span>Java</span>
            </div>

            <div className="skill-item">
              <SiSpringboot />
              <span>Spring Boot</span>
            </div>
          </div>
        </div>

        <div className="skill-card">
          <h3>Database</h3>

          <div className="skill-icons">
            <div className="skill-item">
              <SiMongodb />
              <span>MongoDB</span>
            </div>

            <div className="skill-item">
              <SiMysql />
              <span>MySQL</span>
            </div>
          </div>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>

          <div className="skill-icons">
            <div className="skill-item">
              <FaGitAlt />
              <span>Git</span>
            </div>

            <div className="skill-item">
              <FaGithub />
              <span>GitHub</span>
            </div>

            <div className="skill-item">
              <SiPostman />
              <span>Postman</span>
            </div>

            <div className="skill-item">
              <SiVercel />
              <span>Vercel</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}