'use client'

import { useEffect, useState } from 'react'

const projects = [
  {
    name: 'Northstar',
    type: 'Product platform',
    year: '2025',
    description: 'A calmer operating system for ambitious teams.',
    tone: 'project-slate',
    mark: 'N',
  },
  {
    name: 'Morrow',
    type: 'Brand + commerce',
    year: '2024',
    description: 'A considered digital home for everyday objects.',
    tone: 'project-amber',
    mark: 'M',
  },
  {
    name: 'Field Notes',
    type: 'Editorial tool',
    year: '2024',
    description: 'Making research feel tactile, legible, and useful.',
    tone: 'project-olive',
    mark: 'F',
  },
]

const services = [
  ['01', 'Product design', 'From rough idea to a clear, usable product system.'],
  ['02', 'Frontend development', 'Thoughtful interfaces built to feel fast and last.'],
  ['03', 'Creative direction', 'A sharper point of view for digital brands in motion.'],
]

function ArrowLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a className="arrow-link" href={href}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className={`project-card reveal ${project.tone}`} style={{ transitionDelay: `${index * 90}ms` }}>
      <div className="project-art" aria-hidden="true">
        <span className="project-art-label">{project.name}</span>
        <span className="project-art-mark">{project.mark}</span>
        <span className="project-art-line" />
      </div>
      <div className="project-meta">
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-side">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </article>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Alex Morgan home">
          AM<span>.</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-nav">
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact <span aria-hidden="true">↗</span></a>
        </nav>
        <span className="availability"><i /> Available for select projects</span>
      </header>

      <section className="hero page-wrap" id="top">
        <div className="hero-kicker reveal"><span>Independent developer</span><span>New York / Remote</span></div>
        <h1 className="hero-title reveal">Building digital<br /><em>things</em> with<br />good people<span>.</span></h1>
        <div className="hero-bottom reveal">
          <p>Design-minded frontend developer partnering with thoughtful teams to turn complex ideas into simple, useful experiences.</p>
          <ArrowLink href="#work">See selected work</ArrowLink>
        </div>
      </section>

      <section className="intro page-wrap reveal" id="about">
        <SectionLabel>01 / About</SectionLabel>
        <div className="intro-copy">
          <p className="large-copy">I care about the space where a sharp idea meets a well-made interface.</p>
          <div className="body-copy">
            <p>I&apos;m Alex — a freelance developer and designer who helps early-stage teams and independent brands find their clearest digital expression.</p>
            <p>My work moves between strategy, interaction, and code. The best projects feel considered in every detail, but never overworked.</p>
            <ArrowLink href="mailto:hello@alexmorgan.dev">Let&apos;s work together</ArrowLink>
          </div>
        </div>
      </section>

      <section className="work page-wrap" id="work">
        <div className="section-heading reveal"><SectionLabel>02 / Selected work</SectionLabel><span className="muted">A few things I&apos;ve helped shape</span></div>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
      </section>

      <section className="services page-wrap" id="services">
        <div className="section-heading reveal"><SectionLabel>03 / What I do</SectionLabel><span className="muted">Useful from first sketch to final deploy</span></div>
        <div className="services-list">{services.map(([number, title, description]) => <div className="service-row reveal" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="service-arrow" aria-hidden="true">↗</span></div>)}</div>
      </section>

      <section className="contact page-wrap reveal" id="contact">
        <SectionLabel>04 / Start a conversation</SectionLabel>
        <div className="contact-content"><h2>Have a good<br /><em>idea?</em> Let&apos;s talk<span>.</span></h2><ArrowLink href="mailto:hello@alexmorgan.dev">hello@alexmorgan.dev</ArrowLink></div>
      </section>

      <footer className="site-footer page-wrap"><span>© 2026 Alex Morgan</span><div><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  )
}
