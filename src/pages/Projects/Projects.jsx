import { useLanguage } from "../../context/LanguageContext";
import projects, { projectSections } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Projects.css";

function Projects() {
  const { language } = useLanguage();
  const sectionConfig = projectSections[language];

  return (
    <main className="projects-page">
      {sectionConfig.map(({ id, number, title, description }) => {
        const sectionProjects = projects.filter((project) => project.category === id);

        if (sectionProjects.length === 0) {
          return null;
        }

        return (
          <section className="projects-section" key={id}>
            <div className="projects-section-header">
              <span className="projects-section-number">{number}</span>

              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>

            <div
              className={`projects-grid ${
                id === "frontend" ? "projects-grid-frontend" : ""
              }`}
            >
              {sectionProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default Projects;
