import { Link, useParams } from "react-router-dom";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheck,
  FaArrowLeft
} from "react-icons/fa";

import projects from "../../data/projects";

import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === id
  );

  if (!project) {
    return (
      <main className="project-detail">
        <h1>Progetto non trovato</h1>

        <Link
          to="/projects"
          className="project-back"
        >
          <FaArrowLeft />
          Torna ai progetti
        </Link>
      </main>
    );
  }

  return (
    <main className="project-detail">

      {/* =====================
          HEADER
      ====================== */}

      <section className="project-hero">

        <Link
          to="/projects"
          className="project-back"
        >
          <FaArrowLeft />
          Indietro
        </Link>

        <p className="section-label">
          PROGETTO
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
              Live Demo
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
              GitHub
            </a>
          )}

        </div>

      </section>


      {/* =====================
          PREVIEW
      ====================== */}

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
              title={`Preview ${project.title}`}
              className="project-iframe"
              loading="lazy"
            />

          </div>

        </section>
      )}


      {/* =====================
          CONTENT
      ====================== */}

      <section className="project-content">

        {/* LEFT */}

        <div className="project-main-content">

          <div className="project-section">

            <p className="project-section-label">
              01 — PANORAMICA
            </p>

            <h2>
              Il progetto
            </h2>

            <p>
              {project.overview || project.description}
            </p>

          </div>


          {project.features && (
            <div className="project-section">

              <p className="project-section-label">
                02 — FUNZIONALITÀ
              </p>

              <h2>
                Funzionalità principali
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


        {/* =====================
            RIGHT SIDEBAR
        ====================== */}

        <aside className="project-sidebar">

          <div className="project-info-card">

            <div className="info-group">

              <span className="info-label">
                STACK
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
                  TIPO
                </span>

                <p>
                  {project.type}
                </p>

              </div>
            )}


            {project.year && (
              <div className="info-group">

                <span className="info-label">
                  ANNO
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