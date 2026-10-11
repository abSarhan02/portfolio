import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/siteContent";

import "./About.css";

function About() {
  const { language } = useLanguage();
  const content = translations[language].about;

  return (
    <main className="about-page">
      <section className="about-header">
        <p className="section-label">{content.label}</p>

        <h1>{content.title}</h1>

        <p>{content.intro}</p>
      </section>

      <section className="about-grid">
        {content.cards.map((card) => (
          <div className="about-card" key={card.number}>
            <span className="about-number">{card.number}</span>

            <h2>{card.title}</h2>

            <p>{card.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default About;