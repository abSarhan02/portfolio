import { Link, useParams } from "react-router-dom";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheck,
  FaArrowLeft
} from "react-icons/fa";

import { useLanguage } from "../../context/LanguageContext";
import projects from "../../data/projects";
import { translations } from "../../data/siteContent";

import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const content = translations[language].projectDetail;

  const project = projects.find(
    (project) => project.id === id
  );

  if (!project) {
    return (
      <main className="project-detail">
        <h1>{content.notFound}</h1>

        <Link
          to="/projects"
          className="project-back"
        >
          <FaArrowLeft />
          {content.goBack}
        </Link>
      </main>
    );
  }

  return (
    <main className="project-detail">

      <section className="project-hero">

        <Link
          to="/projects"
          className="project-back"
        >
          <FaArrowLeft />
          {content.back}
        </Link>

        <p className="section-label">
          {content.project}
        </p>

        <h1>{project.title}</h1>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-actions">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-primary-action"
            >
              {content.liveDemo}
              <FaExternalLinkAlt />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-secondary-action"
            >
              <FaGithub />
              {content.github}
            </a>
          )}

        </div>

      </section>

      {project.live && (
        <section className="project-preview">

          <div className="preview-browser">

            <div className="preview-header">

              <div className="preview-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="preview-url">
                {project.live}
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="preview-open"
              >
                ↗
              </a>

            </div>

            <iframe
              src={project.live}
              title={`${content.open} ${project.title}`}
              className="project-iframe"
              loading="lazy"
            />

          </div>

        </section>
      )}

      <section className="project-content">

        <div className="project-main-content">

          <div className="project-section">

            <p className="project-section-label">
              01 — {content.overview}
            </p>

            <h2>
              {language === "it" ? "Il progetto" : "The project"}
            </h2>

            <p>
              {project.overview || project.description}
            </p>

          </div>

          {project.features && (
            <div className="project-section">

              <p className="project-section-label">
                02 — {content.features}
              </p>

              <h2>
                {content.mainFeatures}
              </h2>

              <div className="features-list">

                {project.features.map((feature) => (
                  <div
                    className="feature-item"
                    key={feature}
                  >
                    <span className="feature-icon">
                      <FaCheck />
                    </span>

                    <span>
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          )}

        </div>

        <aside className="project-sidebar">

          <div className="project-info-card">

            <div className="info-group">

              <span className="info-label">
                {content.stack}
              </span>

              <div className="detail-technologies">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

            </div>

            {project.type && (
              <div className="info-group">

                <span className="info-label">
                  {content.type}
                </span>

                <p>
                  {project.type}
                </p>

              </div>
            )}

            {project.year && (
              <div className="info-group">

                <span className="info-label">
                  {content.year}
                </span>

                <p>
                  {project.year}
                </p>

              </div>
            )}

          </div>

        </aside>

      </section>

    </main>
  );
}

export default ProjectDetail;