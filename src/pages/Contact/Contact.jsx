import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-card">
        <p className="section-label">CONTACT</p>

        <h1>Parliamone.</h1>

        <p>
          Sono disponibile per opportunità lavorative,
          collaborazioni e progetti in ambito sviluppo software
          e IT.
        </p>

        <div className="contact-links">
          <a href="mailto:absarhan02@gmail.com">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/abdelkhalek-sarhan/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/abSarhan02"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;