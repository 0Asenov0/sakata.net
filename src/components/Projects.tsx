import React from "react";

export interface Project {
  image: string;
  title: string;
  description: string;
  status: string;
  tech: string[];
  statusColor?: string;
  url:string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="project-content">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <span
                  className="status"
                  style={{ color: project.statusColor || "#49ba11" }}
                >
                  Status: {project.status}
                </span>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 👇 Inline style to keep link pinned at bottom */}
              <div
                className="project-links"
                style={{
                  marginTop: "auto",
                  paddingTop: "10px",
                }}
              >
                <a
                  href={project.url}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                   data-testid={`github-link-${project.title}`}
                >
                  <i className="fa-brands fa-github"></i> Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
