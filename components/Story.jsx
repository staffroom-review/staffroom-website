export default function Story({
  eyebrow,
  title,
  dek,
  art,
  variant = "side",
  compact = false,
  href = "#story",
  meta = "Staffroom Review",
}) {
  return (
    <article className={`story story--${variant} ${compact ? "story--compact" : ""}`.trim()}>
      {art ? (
        <div className="art-frame" aria-hidden="true">
          <img className="art-frame__image" src={art.src} alt="" loading="lazy" decoding="async" />
        </div>
      ) : null}
      <div className="story__body">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h3><a href={href}>{title}</a></h3>
        {dek ? <p className="story__dek">{dek}</p> : null}
        <p className="story__meta">{meta}</p>
      </div>
    </article>
  );
}
