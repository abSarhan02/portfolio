import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/siteContent";

import "./Contact.css";

function Contact() {
  const { language } = useLanguage();
  const content = translations[language].contact;

  return (
    <main className="contact-page">
      <section className="contact-card">
        <p className="section-label">{content.label}</p>

        <h1>{content.title}</h1>

        <p>{content.description}</p>

        <div className="contact-links">
          <a href="mailto:absarhan02@gmail.com">{content.email}</a>

          <a
            href="https://www.linkedin.com/in/abdelkhalek-sarhan/"
            target="_blank"
            rel="noreferrer"
          >
            {content.linkedIn}
          </a>

          <a
            href="https://github.com/abSarhan02"
            target="_blank"
            rel="noreferrer"
          >
            {content.gitHub}
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;