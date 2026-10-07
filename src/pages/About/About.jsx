import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-header">
        <p className="section-label">ABOUT ME</p>

        <h1>Chi sono</h1>

        <p>
          Full Stack Developer e IT Specialist con esperienza
          nello sviluppo web, supporto IT e gestione di
          applicazioni software.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <span className="about-number">01</span>

          <h2>Sviluppo</h2>

          <p>
            Mi concentro principalmente sullo sviluppo con Java,
            Spring Boot e tecnologie frontend moderne come React,
            Angular e Vue.
          </p>
        </div>

        <div className="about-card">
          <span className="about-number">02</span>

          <h2>Esperienza IT</h2>

          <p>
            Ho lavorato anche in ambito supporto IT,
            e-learning, gestione applicativa e deployment.
          </p>
        </div>

        <div className="about-card">
          <span className="about-number">03</span>

          <h2>Obiettivo</h2>

          <p>
            Voglio continuare a crescere come sviluppatore,
            lavorando su applicazioni concrete e progetti
            strutturati.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;