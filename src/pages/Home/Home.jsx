import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiSpringboot, SiTypescript, SiMysql } from "react-icons/si";

import "./Home.css";

function Home() {
  const [terminalLines, setTerminalLines] = useState(["Ready to build."]);

  const [running, setRunning] = useState(false);

  const runCode = () => {
    if (running) return;

    setRunning(true);
    setTerminalLines(["> javac Developer.java"]);

    setTimeout(() => {
      setTerminalLines((lines) => [...lines, "> java Developer"]);
    }, 700);

    setTimeout(() => {
      setTerminalLines((lines) => [...lines, "Learning. Building. Improving."]);
    }, 1400);

    setTimeout(() => {
      setTerminalLines((lines) => [...lines, "Build successful !"]);

      setRunning(false);
    }, 2100);
  };

  return (
    <main className="home-page">
      <section className="hero">
        {/* LEFT */}
        <div className="hero-content">
          <p className="hero-small">Ciao, sono</p>

          <h1>
            Abdelkhalek <span>Sarhan</span>
          </h1>

          <h2>
            Full Stack Developer
            <span className="role-separator"> & </span>
            IT Specialist
          </h2>

          <p className="hero-description">
            Sviluppo applicazioni web e software con particolare interesse per
            Java, Spring Boot e tecnologie frontend moderne.
          </p>

          {/* TECH STACK */}
          <div className="hero-stack">
            <div className="stack-item">
              <FaJava />
              <span>Java</span>
            </div>

            <div className="stack-item">
              <SiSpringboot />
              <span>Spring Boot</span>
            </div>

            <div className="stack-item">
              <FaReact />
              <span>React</span>
            </div>

            <div className="stack-item">
              <FaJs />
              <span>JavaScript</span>
            </div>

            <div className="stack-item">
              <SiTypescript />
              <span>TypeScript</span>
            </div>

            <div className="stack-item">
              <FaHtml5 />
              <span>HTML</span>
            </div>

            <div className="stack-item">
              <FaCss3Alt />
              <span>CSS</span>
            </div>

            <div className="stack-item">
              <FaBootstrap />
              <span>Bootstrap</span>
            </div>

            <div className="stack-item">
              <SiMysql />
              <span>MySQL</span>
            </div>

            <div className="stack-item">
              <FaGitAlt />
              <span>Git</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              Vedi i progetti
              <span className="btn-arrow">→</span>
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Contattami
            </Link>
          </div>

          {/* STATUS */}
          <div className="hero-status">
            <span className="status-dot"></span>
            <span>Disponibile per nuove opportunità</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-code">
          <div className="code-window">
            {/* HEADER */}
            <div className="code-header">
              <div className="window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="code-file">Developer.java</span>

              <button className="code-run" onClick={runCode} disabled={running}>
                {running ? "Running..." : "▶ Run"}
              </button>
            </div>

            {/* JAVA CODE */}
            <div className="code-content">
              <div>
                <span className="code-keyword">public class</span> Developer{" "}
                {"{"}
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

              <div className="indent-2">
                <span className="code-string">"Java"</span>,
              </div>

              <div className="indent-2">
                <span className="code-string">"Spring Boot"</span>,
              </div>

              <div className="indent-2">
                <span className="code-string">"React"</span>,
              </div>

              <div className="indent-2">
                <span className="code-string">"JavaScript"</span>,
              </div>
              
              <div className="indent-2">
                <span className="code-string">"TypeScript"</span>,
              </div>

              <div className="indent-2">
                <span className="code-string">"HTML"</span>,
              </div>

              <div className="indent-2">
                <span className="code-string">"CSS"</span>,
              </div>

              <div className="indent-2">
                <span className="code-string">"Bootstrap"</span>,
              </div>

              <div className="indent-2">
                <span className="code-string">"MySQL"</span>,
              </div>

              <div className="indent-2">
                <span className="code-string">"Git"</span>
              </div>

              <div className="indent-1">{"};"}</div>

              <br />

              <div className="indent-1">
                <span className="code-keyword">void</span> build() {"{"}
              </div>

              <div className="indent-2">
                System.out.println(
                <span className="code-string">
                  "Learning. Building. Improving."
                </span>
                );
              </div>

              <div className="indent-1">{"}"}</div>

              <div>{"}"}</div>
            </div>

            {/* TERMINAL */}
            <div className="code-terminal">
              <div className="terminal-title">TERMINAL</div>

              <div className="terminal-output">
                {terminalLines.map((line, index) => (
                  <div
                    key={index}
                    className={
                      line.includes("successful") ? "terminal-success" : ""
                    }
                  >
                    <span className="terminal-symbol">
                      {line.startsWith(">") ? "" : "› "}
                    </span>

                    {line}
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
