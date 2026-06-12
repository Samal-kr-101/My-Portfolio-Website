import "../styles/projects.css";

const projectData = [
  {
    title: "Stayo",
    description:
      "A full-stack hotel booking platform with authentication, property management, and booking workflows.",

    image: "/projects/stayo.png",

    tech: ["JavaScript", "Node.js", "Express", "MongoDB","Cloudinary"],

    github: "https://github.com/Samal-kr-101/Stayo-Project",

    live: "https://stayo-project.onrender.com/listings",
  },

  {
    title: "Thumblify",
    description:
      "AI-powered SaaS application for generating and managing YouTube thumbnails.",

    image: "/projects/thumblify.png",

    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],

    github: "https://github.com/Samal-kr-101/Thumblify-AI-Thumbnail-Generator",

    live: "https://thumblify-ai-thumbnail-generator-2e.vercel.app/",
  },

  {
    title: "Smart CRM",
    description:
      "Customer relationship management system with dashboards, lead tracking, and analytics.",

    image: "/projects/crm.png",

    tech: ["React", "Node.js", "Express", "MongoDB"],

    github: "https://github.com/Samal-kr-101/smart-lead-dashboard",

    live: "https://smart-lead-dashboard-bay.vercel.app/login",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects container">

      <div className="section-header">
        <span className="section-tag">Projects</span>

        <h2>Featured Projects</h2>

        <p>
          A selection of projects showcasing my full-stack development
          skills and problem-solving abilities.
        </p>
      </div>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="primary"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>
        ))}
      </div>

      <div className="more-projects">
        <a
          href="https://github.com/Samal-kr-101?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          View More Projects →
        </a>
      </div>

    </section>
  );
}