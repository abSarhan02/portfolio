import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Projects.css";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.category === "featured",
  );

  const javaProjects = projects.filter(
    (project) => project.category === "java",
  );

  const frontendProjects = projects.filter(
    (project) => project.category === "frontend",
  );

  return (
    <main className="projects-page">
      {/* Progetti principali */}
      {featuredProjects.length > 0 && (
        <section className="projects-section">
          <div className="projects-section-header">
            <span className="projects-section-number">01</span>

            <div>
              <h2>Progetti principali</h2>
              
              <p>I progetti più completi e rappresentativi del mio percorso.</p>
            </div>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Progetti Java */}
      {javaProjects.length > 0 && (
        <section className="projects-section">
          <div className="projects-section-header">
            <span className="projects-section-number">02</span>

            <div>
              <h2>Java</h2>

              <p>
                Progetti dedicati a Java e alla programmazione orientata agli
                oggetti.
              </p>
            </div>
          </div>

          <div className="projects-grid">
            {javaProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Progetti frontend */}
      {frontendProjects.length > 0 && (
        <section className="projects-section">
          <div className="projects-section-header">
            <span className="projects-section-number">03</span>

            <div>
              <h2>HTML / CSS / JavaScript</h2>

              <p>
                Siti web, landing page ed esercitazioni dedicate allo sviluppo
                frontend.
              </p>
            </div>
          </div>

          <div className="projects-grid projects-grid-frontend">
            {frontendProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default Projects;
