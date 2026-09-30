import EditorialRule from "./EditorialRule";

export default function SectionHeader({ eyebrow, title, description, href, actionLabel = "View all" }) {
  return (
    <header className="section-header">
      <div className="section-header__top">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="type-section section-header__title">{title}</h2>
        </div>
        {href ? (
          <a className="section-header__action type-meta" href={href}>
            {actionLabel} →
          </a>
        ) : null}
      </div>
      {description ? <p className="type-body section-header__description">{description}</p> : null}
      <EditorialRule variant="accent" />
    </header>
  );
}
