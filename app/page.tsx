'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Business Website',
    description:
      'A sharper digital presence for a local business, built to turn attention into action.',
    category: 'Web design + development',
    year: '2026',
    stack: 'Next.js / TypeScript / Tailwind',
    tone: 'lime',
  },
  {
    number: '02',
    title: 'Full-Stack Platform',
    description:
      'A focused product experience with authentication, APIs, database logic and a clear dashboard.',
    category: 'Product engineering',
    year: '2025',
    stack: 'React / Go / PostgreSQL',
    tone: 'blue',
  },
  {
    number: '03',
    title: 'E-commerce Experience',
    description:
      'A fast, considered shopping journey with useful product management and responsive UI.',
    category: 'Commerce',
    year: '2025',
    stack: 'Next.js / Stripe / CMS',
    tone: 'orange',
  },
]

const services = [
  [
    '01',
    'Business websites',
    'Clear, credible websites that make small teams look established and ready.',
  ],
  [
    '02',
    'Landing pages',
    'High-converting pages with a point of view, not another template.',
  ],
  [
    '03',
    'Full-stack applications',
    'Reliable products with the interfaces, APIs and data layer to match.',
  ],
  [
    '04',
    'Website redesigns',
    'A new visual system and better structure for an existing digital presence.',
  ],
  [
    '05',
    'Backend + API development',
    'Practical services that are fast, maintainable and built to grow.',
  ],
]

const stack = [
  ['Frontend', 'TypeScript / React / Next.js / Tailwind CSS'],
  ['Backend', 'Go / REST APIs / Server actions'],
  ['Database', 'PostgreSQL / Data modeling'],
  ['Tools', 'Git / GitHub / Docker / Vercel'],
]

const process = [
  ['01', 'Discover', 'Understand the idea, audience and requirements.'],
  ['02', 'Build', 'Design and develop the smallest useful version.'],
  ['03', 'Refine', 'Test, optimize and polish every important detail.'],
  ['04', 'Launch', 'Deploy, hand over and make sure it works in the real world.'],
]

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openService, setOpenService] = useState<number | null>(null)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <header className="site-nav">
        <a className="brand" href="#top" onClick={closeMenu}>
          <Mark />
          <span>Mohammed Amine Elayachi</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          className={menuOpen ? 'nav-links is-open' : 'nav-links'}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a href="#resume" onClick={closeMenu}>
            Resume <ArrowUpRight size={13} />
          </a>
        </nav>

        <div className="availability">
          <span /> Available for freelance work
        </div>
      </header>

      <section className="hero section-grid" id="top">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Full-stack developer / independent studio
          </p>

          <h1>
            Building digital
            <br />
            <em>experiences</em>
            <br />
            that actually work<span className="accent-dot">.</span>
          </h1>

          <p className="hero-intro">
            I&apos;m Amine — a full-stack web developer focused on building fast,
            responsive and scalable web experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View my work <ArrowUpRight size={17} />
            </a>

            <a className="button button-quiet" href="#contact">
              Let&apos;s talk <span>↗</span>
            </a>
          </div>
        </div>

        <div
          className="hero-terminal reveal-up"
          aria-label="Developer terminal illustration"
        >
          <div className="terminal-top">
            <span>amine@studio:~</span>
            <span className="terminal-dots">
              <i />
              <i />
              <i />
            </span>
          </div>

          <div className="terminal-body">
            <p>
              <b className="green">const</b>{' '}
              <span className="blue-text">project</span> = {'{'}
            </p>
            <p className="indent">
              <span className="muted-code">focus:</span>{' '}
              <span className="orange-text">&apos;useful&apos;</span>,
            </p>
            <p className="indent">
              <span className="muted-code">quality:</span>{' '}
              <span className="orange-text">&apos;non-negotiable&apos;</span>,
            </p>
            <p className="indent">
              <span className="muted-code">status:</span>{' '}
              <span className="green">true</span>,
            </p>
            <p>{'}'}</p>
            <p className="terminal-cursor">_</p>
          </div>

          <div className="terminal-foot">
            <span>01 / 04</span>
            <span>Craft over noise</span>
          </div>
        </div>

        <a className="scroll-cue" href="#work">
          <span>Scroll to explore</span>
          <span className="scroll-line" />
        </a>
      </section>

      <section className="about section-grid" id="about">
        <div className="section-label">
          About <span>01</span>
        </div>

        <div className="about-content">
          <h2>
            I care about the space between a good idea and a{' '}
            <span>great product.</span>
          </h2>

          <p>
            I&apos;m a developer who enjoys turning messy ideas into useful digital
            products. I work across the stack, from the first wireframe to the last
            production deploy, with a bias toward clarity, speed and thoughtful
            details.
          </p>

          <p>
            My usual toolkit is <strong>TypeScript, React, Next.js, Tailwind CSS, Go</strong>{' '}
            and <strong>PostgreSQL</strong> — but the technology is always in service of
            the work.
          </p>
        </div>
      </section>

      <section className="work section-grid" id="work">
        <div className="section-label">
          Selected work <span>02</span>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-info">
                <span className="project-number">{project.number}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                  <span>{project.stack}</span>
                </div>

                <a className="project-link" href="#contact">
                  View case study <ArrowUpRight size={16} />
                </a>
              </div>

              <div className={`project-visual visual-${project.tone}`}>
                <div className="visual-window">
                  <div className="window-bar">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="visual-content">
                    <span className="visual-kicker">
                      {project.number} / {project.category}
                    </span>

                    <strong>
                      {project.title.split(' ')[0]}
                      <br />
                      <i>{project.title.split(' ').slice(1).join(' ')}</i>
                    </strong>

                    <div className="visual-blocks">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section-grid" id="services">
        <div className="section-label">
          Services <span>03</span>
        </div>

        <div className="services-content">
          <div className="services-heading">
            <h2>
              Useful work.
              <br />
              <span>Built well.</span>
            </h2>

            <p>
              Bring me a problem, a rough idea or a product that needs a sharper edge.
            </p>
          </div>

          <div className="service-list">
            {services.map(([number, title, description], index) => (
              <button
                className={openService === index ? 'service is-open' : 'service'}
                key={number}
                onClick={() =>
                  setOpenService(openService === index ? null : index)
                }
              >
                <span>{number}</span>
                <strong>{title}</strong>
                <ChevronDown size={18} />
                <p>{description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="stack section-grid">
        <div className="section-label">
          The toolkit <span>04</span>
        </div>

        <div className="stack-content">
          {stack.map(([label, value]) => (
            <div className="stack-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="process section-grid">
        <div className="section-label">
          How I work <span>05</span>
        </div>

        <div className="process-content">
          <h2>
            A clear process makes
            <br />
            <span>better work.</span>
          </h2>

          <div className="process-list">
            {process.map(([number, title, description]) => (
              <div className="process-step" key={number}>
                <span>{number}</span>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-grid" id="contact">
        <div className="contact-top">
          <span className="eyebrow">
            <span className="eyebrow-line" /> Have a project in mind?
          </span>

          <h2>
            Let&apos;s build
            <br />
            <span>something.</span>
          </h2>
        </div>

        <div className="contact-bottom">
          <a
            className="button button-primary"
            href="mailto:amineelayachi322@gmail.com"
          >
            Start a project <ArrowUpRight size={17} />
          </a>

          <div className="contact-details">
            <a href="mailto:amineelayachi322@gmail.com">
              amineelayachi322@gmail.com
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#top">
          <Mark />
          <span>Mohammed Amine Elayachi</span>
        </a>

        <span>Morocco / Remote</span>

        <span>© 2026 Mohammed Amine Elayachi</span>

        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  )
}