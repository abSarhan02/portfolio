import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tech">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <Link to={`/projects/${project.id}`} className="project-link">
        Scopri il progetto →
      </Link>
    </article>
  );
}

export default ProjectCard;
