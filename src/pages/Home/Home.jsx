import { useState } from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";
import { techStack, translations } from "../../data/siteContent";

import "./Home.css";

function Home() {
  const { language } = useLanguage();
  const content = translations[language].home;
  const [terminalLines, setTerminalLines] = useState(["ready"]);
  const [running, setRunning] = useState(false);

  const runCode = () => {
    if (running) {
      return;
    }

    setRunning(true);
    setTerminalLines(["> javac Developer.java"]);

    setTimeout(() => {
      setTerminalLines((lines) => [...lines, "> java Developer"]);
    }, 700);

    setTimeout(() => {
      setTerminalLines((lines) => [...lines, "progress"]);
    }, 1400);

    setTimeout(() => {
      setTerminalLines((lines) => [...lines, "success"]);
      setRunning(false);
    }, 2100);
  };

  const codeSkills = [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "MySQL",
    "Git",
  ];

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">{content.intro}</p>

          <h1>
            Abdelkhalek <span>Sarhan</span>
          </h1>

          <h2>
            {content.role}
            <span className="role-separator"> & </span>
            {content.specialist}
          </h2>

          <p className="hero-description">{content.description}</p>

          <div className="hero-stack">
            {techStack.map(({ name, Icon }) => (
              <div className="stack-item" key={name}>
                <Icon />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              {content.projectButton}
              <span className="btn-arrow">→</span>
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              {content.contactButton}
            </Link>
          </div>

          <div className="hero-status">
            <span className="status-dot"></span>
            <span>{content.availability}</span>
          </div>
        </div>

        <div className="hero-code">
          <div className="code-window">
            <div className="code-header">
              <div className="window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="code-file">Developer.java</span>

              <button className="code-run" onClick={runCode} disabled={running}>
                {running ? content.running : content.run}
              </button>
            </div>

            <div className="code-content">
              <div>
                <span className="code-keyword">public class</span> Developer {"{"}
              </div>

              <br />

              <div className="indent-1">
                <span className="code-type">String</span> name ={" "}
                <span className="code-string">"Abdelkhalek Sarhan"</span>;
              </div>

              <div className="indent-1">
                <span className="code-type">String</span> role ={" "}
                <span className="code-string">"Full Stack Developer"</span>;
              </div>

              <br />

              <div className="indent-1">
                <span className="code-type">String[]</span> stack = {"{"}
              </div>

              {codeSkills.map((technology) => (
                <div className="indent-2" key={technology}>
                  <span className="code-string code-stack-item">{`"${technology}"`}</span>,
                </div>
              ))}

              <div className="indent-1">{"};"}</div>

              <br />

              <div className="indent-1">
                <span className="code-keyword">void</span> build() {"{"}
              </div>

              <div className="indent-2">
                System.out.println(
                <span className="code-string">"{content.codeMessage}"</span>
                );
              </div>

              <div className="indent-1">{"}"}</div>

              <div>{"}"}</div>
            </div>

            <div className="code-terminal">
              <div className="terminal-title">{content.terminalTitle}</div>

              <div className="terminal-output">
                {terminalLines.map((line, index) => (
                  <div
                    key={`${line}-${index}`}
                    className={line === "success" ? "terminal-success" : ""}
                  >
                    <span className="terminal-symbol">
                      {line.startsWith(">") ? "" : "› "}
                    </span>
                    {line === "ready"
                      ? content.terminalReady
                      : line === "progress"
                        ? content.terminalProgress
                        : line === "success"
                          ? content.terminalSuccess
                          : line}
                  </div>
                ))}

                {running && <span className="terminal-cursor"></span>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
