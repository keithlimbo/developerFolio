import React, {useEffect, useState} from "react";
import {
  bigProjects,
  contactInfo,
  educationInfo,
  greeting,
  isHireable,
  skillsSection,
  socialMediaLinks,
  workExperiences
} from "../../portfolio";
import "./StitchPortfolio.scss";

const technologies = [
  {
    title: "Mobile Architecture & Client",
    eyebrow: "RUNTIME / 60FPS",
    description:
      "Interactive mobile experiences with local caching, hardware integrations, and reliable offline behavior.",
    tags: ["Flutter / Dart", "Firebase", "Responsive UI", "Offline-first"]
  },
  {
    title: "Backend & Integrations",
    eyebrow: "CONNECTED / RESTFUL",
    description:
      "Practical service integrations that keep mobile products connected to the systems behind them.",
    tags: ["REST APIs", "Python", "SQL", "WebRTC"]
  },
  {
    title: "Delivery & Product Craft",
    eyebrow: "AUTOMATED / RELIABLE",
    description:
      "Clean interfaces, systematic debugging, documentation, and testing-oriented delivery.",
    tags: ["Git", "Unit testing", "Design systems", "Agile delivery"]
  }
];

const projectCards = [
  {
    name: "The Fun Factory",
    type: "FEATURED PROJECT",
    description: bigProjects.projects[0].projectDesc,
    tags: ["Mobile", "Flutter", "AR / 3D"],
    image: bigProjects.projects[0].image,
    url: bigProjects.projects[0].footerLink[0].url
  },
  {
    name: "FastSend Mobile Solutions",
    type: "MOBILE WALLET",
    description: workExperiences.experience[0].desc,
    tags: ["Flutter", "Mobile wallet", "Reliability"],
    image: workExperiences.experience[0].companylogo
  },
  {
    name: "Libera Global",
    type: "DATA-DRIVEN MOBILE PRODUCT",
    description: workExperiences.experience[1].desc,
    tags: ["API library", "Mobile", "Performance"],
    image: workExperiences.experience[1].companylogo
  }
];

function SectionHeading({index, title, detail}) {
  return (
    <div className="stitch-section-heading">
      <span className="stitch-section-index">[{index}]</span>
      <div>
        <p className="stitch-eyebrow">{detail}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function StitchPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "projects", "stack", "experience", "contact"];
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      {rootMargin: "-30% 0px -55%"}
    );
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="stitch-site">
      <div className="stitch-shell">
        <header className="stitch-header">
          <a className="stitch-brand" href="#about" onClick={closeMenu}>
            <span>&lt;</span>
            {greeting.username}
            <span>/&gt;</span>
          </a>
          <button
            className="stitch-menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
            <span />
          </button>
          <nav className={isMenuOpen ? "stitch-nav is-open" : "stitch-nav"}>
            {["about", "projects", "stack", "experience", "contact"].map(
              section => (
                <a
                  className={activeSection === section ? "is-active" : ""}
                  href={`#${section}`}
                  key={section}
                  onClick={closeMenu}
                >
                  {section}
                </a>
              )
            )}
          </nav>
          <span className="stitch-header-status">● AVAILABLE FOR WORK</span>
        </header>

        <section className="stitch-hero" id="about">
          <div className="stitch-hero-copy">
            <p className="stitch-status">
              <span>●</span> OPEN TO OPPORTUNITIES
            </p>
            <h1>
              Building thoughtful mobile experiences with <em>Flutter.</em>
            </h1>
            <p className="stitch-lede">{greeting.subTitle}</p>
            <div className="stitch-hero-links">
              <a
                className="stitch-button stitch-button-primary"
                href="#projects"
              >
                View selected work <span>↗</span>
              </a>
              <a
                className="stitch-button stitch-button-quiet"
                href={`mailto:${socialMediaLinks.gmail}`}
              >
                Get in touch <span>→</span>
              </a>
            </div>
          </div>
          <div className="stitch-hero-aside">
            <div className="stitch-monogram">KL</div>
            <div className="stitch-signal">
              <span className="stitch-signal-dot" />
              <div>
                <strong>Keith Richard Limbo</strong>
                <small>Mobile application developer</small>
              </div>
            </div>
            <div className="stitch-hero-rule" />
            <div className="stitch-metric-grid">
              <div>
                <strong>FLUTTER</strong>
                <span>PRIMARY CLIENT</span>
              </div>
              <div>
                <strong>REST / API</strong>
                <span>INTEGRATION</span>
              </div>
              <div>
                <strong>UI / UX</strong>
                <span>PRODUCT CRAFT</span>
              </div>
              <div>
                <strong>{isHireable ? "OPEN" : "BUSY"}</strong>
                <span>AVAILABILITY</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stitch-section" id="projects">
          <SectionHeading
            index="01 //"
            title="Selected work"
            detail="FEATURED PROJECTS"
          />
          <div className="stitch-project-grid">
            {projectCards.map((project, index) => (
              <article
                className={`stitch-project-card card-${index + 1}`}
                key={project.name}
              >
                <div className="stitch-project-topline">
                  <span>{project.type}</span>
                  <span>0{index + 1}</span>
                </div>
                <div className="stitch-project-image">
                  <img src={project.image} alt="" />
                  <span className="stitch-project-scan">SYSTEM / PROJECT</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="stitch-tag-row">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.url && (
                  <a
                    className="stitch-inline-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit project <span>↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="stitch-section" id="stack">
          <SectionHeading
            index="02 //"
            title="Core technologies"
            detail="ARCHITECTURE & STACK"
          />
          <div className="stitch-stack-grid">
            {technologies.map((technology, index) => (
              <article className="stitch-stack-card" key={technology.title}>
                <div className="stitch-card-number">0{index + 1}</div>
                <p className="stitch-eyebrow">{technology.eyebrow}</p>
                <h3>{technology.title}</h3>
                <p>{technology.description}</p>
                <div className="stitch-tag-column">
                  {technology.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="stitch-stack-strip">
            <span>PRIMARY TOOLKIT</span>
            {skillsSection.softwareSkills.map(skill => (
              <strong key={skill.skillName}>{skill.skillName}</strong>
            ))}
          </div>
        </section>

        <section className="stitch-section" id="experience">
          <SectionHeading
            index="03 //"
            title="Career trajectory"
            detail="ENGINEERING MILESTONES"
          />
          <div className="stitch-timeline">
            {workExperiences.experience.map((experience, index) => (
              <article
                className="stitch-timeline-item"
                key={`${experience.company}-${experience.date}`}
              >
                <div className="stitch-timeline-date">{experience.date}</div>
                <div className="stitch-timeline-marker">
                  <span />
                </div>
                <div className="stitch-timeline-copy">
                  <p className="stitch-eyebrow">0{index + 1} / EXPERIENCE</p>
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                  <p>{experience.desc}</p>
                  <div className="stitch-bullet-list">
                    {experience.descBullets.slice(0, 3).map(bullet => (
                      <span key={bullet}>{bullet}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
            {educationInfo.schools.map((school, index) => (
              <article className="stitch-timeline-item" key={school.schoolName}>
                <div className="stitch-timeline-date">{school.duration}</div>
                <div className="stitch-timeline-marker">
                  <span />
                </div>
                <div className="stitch-timeline-copy">
                  <p className="stitch-eyebrow">
                    0{workExperiences.experience.length + index + 1} / EDUCATION
                  </p>
                  <h3>{school.subHeader}</h3>
                  <h4>{school.schoolName}</h4>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stitch-contact" id="contact">
          <div>
            <p className="stitch-status">
              <span>●</span> READY FOR DISPATCH
            </p>
            <h2>
              Let’s build something <em>useful.</em>
            </h2>
            <p>{contactInfo.subtitle}</p>
          </div>
          <div className="stitch-contact-actions">
            <a
              className="stitch-button stitch-button-primary"
              href={`mailto:${contactInfo.email_address}`}
            >
              Email me <span>↗</span>
            </a>
            <div className="stitch-contact-links">
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>

        <footer className="stitch-footer">
          <span>KEITH RICHARD LIMBO</span>
          <span>
            DESIGNED & ENGINEERED WITH CLEAN CODE · © {new Date().getFullYear()}
          </span>
          <span>FLUTTER · MOBILE · PRODUCT</span>
        </footer>
      </div>
    </main>
  );
}

export default StitchPortfolio;
