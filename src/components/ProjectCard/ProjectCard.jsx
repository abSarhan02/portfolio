import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import projectTranslations from "../../data/projectTranslations";
import { translations } from "../../data/siteContent";

import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { language } = useLanguage();
  const localizedProject =
    language === "en"
      ? projectTranslations[project.id] ?? project
      : project;

  return (
    <article className="project-card">
      <h3>{project.title}</h3>

      <p>{localizedProject.description}</p>

      <div className="project-tech">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <Link to={`/projects/${project.id}`} className="project-link">
        {translations[language].projects.discoverProject} →
      </Link>
    </article>
  );
}

export default ProjectCard;
