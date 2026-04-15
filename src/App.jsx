import React, { useEffect, useState } from 'react';
import { siteContent } from './data/siteContent';

function App() {
  const {
    seo,
    hero,
    about,
    services,
    skills,
    achievements,
    projects,
    experience,
    contact,
    footer,
  } = siteContent;
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const sectionLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Focus' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    document.title = seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }
  }, [seo.description, seo.title]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === '1') {
      setShowSuccess(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = sectionLinks
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionLinks]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="page-shell">
      <div className="page-orb page-orb-left" aria-hidden="true" />
      <div className="page-orb page-orb-right" aria-hidden="true" />
      <div className="page-orb page-orb-center" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />

      <aside className="section-dock" data-reveal>
        {sectionLinks.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeSection === section.id ? 'active' : ''}
          >
            {section.label}
          </a>
        ))}
      </aside>

      <header className="hero section" id="top" data-reveal>
        <nav className="topbar topbar-sticky">
          <a className="brand" href="#top">
            <span className="brand-mark" />
            {hero.name}
          </a>

          <div className="nav-links">
            {sectionLinks.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
          </div>

          <button className="theme-toggle" type="button" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">{hero.greeting}</p>
            <h1>{hero.name}</h1>
            <p className="hero-role">{hero.role}</p>
            <p className="hero-summary">{hero.summary}</p>

            <div className="hero-badges">
              {hero.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>

            <div className="cta-row">
              <a className="button button-primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </a>
              <a className="button button-secondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-card hero-card-intro">
              <p className="card-label">Now Building</p>
              <h2>{hero.featuredTitle}</h2>
              <p>{hero.featuredSummary}</p>
            </div>

            <div className="hero-stats">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section" id="about" data-reveal>
          <div className="section-heading">
            <p>01</p>
            <h2>{about.title}</h2>
          </div>

          <div className="about-grid">
            <div className="panel">
              <p>{about.text}</p>
            </div>

            <div className="fact-grid">
              {about.highlights.map((highlight) => (
                <div key={highlight.label} className="fact-card">
                  <p className="card-label">{highlight.label}</p>
                  <span>{highlight.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services" data-reveal>
          <div className="section-heading">
            <p>02</p>
            <h2>{services.title}</h2>
          </div>

          <div className="service-grid">
            {services.items.map((service) => (
              <article key={service.title} className="service-card">
                <p className="card-index">{service.index}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills" data-reveal>
          <div className="section-heading">
            <p>03</p>
            <h2>{skills.title}</h2>
          </div>
          <div className="chip-grid">
            {skills.items.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="achievements" data-reveal>
          <div className="section-heading">
            <p>04</p>
            <h2>{achievements.title}</h2>
          </div>

          <div className="achievement-grid">
            {achievements.items.map((achievement) => (
              <article key={achievement.title} className="achievement-card">
                <p className="card-label">{achievement.label}</p>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects" data-reveal>
          <div className="section-heading">
            <p>05</p>
            <h2>{projects.title}</h2>
          </div>

          <div className="project-grid">
            {projects.items.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-top">
                  <div>
                    <p className="card-label">{project.tag}</p>
                    <h3>{project.name}</h3>
                  </div>

                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live
                    </a>
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  </div>
                </div>

                <p>{project.description}</p>

                <ul className="project-points">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience" data-reveal>
          <div className="section-heading">
            <p>06</p>
            <h2>{experience.title}</h2>
          </div>

          <div className="timeline">
            {experience.items.map((item) => (
              <article key={`${item.period}-${item.title}`} className="timeline-item">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact" data-reveal>
          <div className="section-heading">
            <p>07</p>
            <h2>{contact.title}</h2>
          </div>

          <div className="contact-card">
            <div className="contact-copy">
              <p>{contact.summary}</p>
            </div>

            <div className="contact-details">
              <div>
                <p className="contact-label">Preferred Reply</p>
                <p>{contact.responseNote}</p>
              </div>
              <div>
                <p className="contact-label">Location</p>
                <p>{contact.location}</p>
              </div>
              <div className="contact-links">
                {contact.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            action={contact.formAction}
            method="POST"
          >
            <input type="hidden" name="_subject" value={contact.formSubject} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={contact.successRedirect} />
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
            <label className="form-field-full">
              <span>Message</span>
              <textarea name="message" rows="6" placeholder="Tell me about your project or role." required />
            </label>
            <button className="button button-primary form-submit" type="submit">
              Send Message
            </button>
          </form>

          {showSuccess ? <p className="form-success">{contact.successMessage}</p> : null}
        </section>
      </main>

      <footer className="footer" data-reveal>
        <p>{footer.copy}</p>
      </footer>
    </div>
  );
}

export default App;
