import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const Card = project.demoUrl ? "a" : "article";

  return <Card
    className={`project-card accent-${project.accent}`}
    {...(project.demoUrl ? {
      href: project.demoUrl,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `Open ${project.title} live demo`
    } : {})}
  >
    <div className="project-top"><span className="project-number">{project.number} / 0{index + 1}</span><span className="project-type">{project.type}</span></div>
    <div className="project-art" aria-hidden="true">
      <div className="art-grid"/><div className="art-ring ring-a"/><div className="art-ring ring-b"/>
      <div className="art-center"><Layers3 size={31}/></div>
      <span className="art-node node-a"/><span className="art-node node-b"/><span className="art-node node-c"/>
      <span className="art-coordinate">0{index + 1} : SIGNAL / SYSTEM</span>
    </div>
    <div className="project-content"><div className="project-category">{project.category}</div><h3>{project.title}</h3><p>{project.description}</p>
      <div className="project-approach"><span className="approach-label">FOCUS AREAS</span><ul>{project.approach.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="tech-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      {project.demoUrl ? <span className="project-link">Open live demo <ExternalLink size={15}/></span> : project.repoUrl ? <a className="project-link" href={project.repoUrl} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16}/></a> : <span className="project-link project-link-muted">Add case study / repo link <ExternalLink size={15}/></span>}
    </div>
  </Card>;
}