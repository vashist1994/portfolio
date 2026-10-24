export default function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading">
    <div className="eyebrow"><span className="heading-dash"/> {eyebrow}</div>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}