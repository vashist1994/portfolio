import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { profile } from "./data/profile.js";
import { projects } from "./data/projects.js";
import { skillGroups } from "./data/skills.js";
import SectionHeading from "./components/SectionHeading.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { IconMark } from "./components/IconMark.jsx";

const filters = ["All", "Machine Learning", "Generative AI", "Data Engineering"];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to homepage"><span className="brand-mark">V.</span><span>Vashist<span className="brand-muted"> / Portfolio</span></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={profile.resumeUrl} download="Vashist-Narayan-Singh-Resume.pdf">Resume <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> DATA SCIENCE · AI · ML</div>
            <h1>Turning complex data<br/>into <span className="gradient-text">useful intelligence.</span></h1>
            <p className="hero-intro">I’m {profile.name}, a Senior Data Scientist building practical AI/ML solutions — from predictive models and data pipelines to LLM-powered applications.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a><a className="button button-secondary" href="#contact"><Mail size={16}/> Let’s connect</a></div>
            <div className="hero-footnote"><span className="mini-line"/> Curious by nature. Production-minded by design.</div>
          </div>
          <div className="hero-visual" aria-label="Abstract data visualization">
            <div className="visual-grid"/>
            <div className="orbit orbit-outer"/><div className="orbit orbit-inner"/>
            <div className="core-node"><IconMark size={42}/><span>DATA<br/>→ VALUE</span></div>
            <div className="float-card card-model"><span className="card-kicker">MODEL STATUS</span><strong><i className="status-dot"/> Ready to learn</strong><div className="sparkline"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div>
            <div className="float-card card-signal"><span className="card-kicker">SIGNAL DETECTED</span><strong>Patterns → Insights</strong><span className="signal-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/></span></div>
            <span className="visual-label label-top">FIG. 01 / INTELLIGENCE SYSTEMS</span><span className="visual-label label-bottom">INPUT · LEARN · DEPLOY</span>
          </div>
          <a href="#about" className="scroll-cue"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>The space between <span className="gradient-text">data and decisions.</span></>} />
          <div className="about-grid">
            <p className="about-lead">I enjoy taking ambiguous problems, finding the signal in the noise, and shaping the answer into something teams can actually use.</p>
            <div className="about-detail"><p>My work spans machine learning, time-series analysis, data engineering, and generative AI. I care about the full lifecycle: understanding the problem, building a sound solution, evaluating it honestly, and making it reliable beyond a notebook.</p><p>My approach combines analytical thinking with modular engineering — so the result is not just a model, but a maintainable product.</p><div className="focus-tags"><span>Problem-first thinking</span><span>Reliable pipelines</span><span>Responsible AI</span></div></div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title={<>Projects built to solve <span className="gradient-text">real problems.</span></>} description="A selection of applied AI, predictive analytics, and data engineering work. Select a project card to open its live demo." />
          <div className="project-toolbar"><span className="project-count"><span className="count-number">0{visibleProjects.length}</span> PROJECTS</span><div className="filter-list" role="group" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter-chip active" : "filter-chip"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div>
          <div className="projects-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index}/>)}</div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Tools are useful. <span className="gradient-text">Outcomes matter.</span></>} description="A working toolkit across the data and AI lifecycle — adapt this list to match the skills you want recruiters to notice first." />
          <div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-group" key={group.title}><div className="skill-index">0{index + 1}</div><h3>{group.title}</h3><p>{group.description}</p><div className="skill-pills">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel"><div className="contact-orb"/><div className="eyebrow"><span className="status-dot"/> OPEN TO GOOD CONVERSATIONS</div><h2>Have a problem worth<br/><span className="gradient-text">solving with data?</span></h2><p>Whether it’s an AI product, a data challenge, or an interesting collaboration, I’d love to hear what you’re working on.</p><a className="button button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent("Let's connect")}`}>Start a conversation <ArrowUpRight size={17}/></a><div className="contact-email">{profile.email}</div></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">V.</span><span>Built with curiosity<span className="brand-muted"> & a little bit of code.</span></span></a><span className="footer-copy">© {new Date().getFullYear()} {profile.name}</span><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a></div></footer>
    </div>
  );
}