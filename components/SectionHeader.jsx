import EditorialRule from "./EditorialRule";

export default function SectionHeader({ title, description, id }) {
  return (
    <header className="section-header" id={id}>
      <div className="section-header__row">
        <h2>{title}</h2>
        <EditorialRule />
      </div>
      {description ? <p>{description}</p> : null}
    </header>
  );
}
