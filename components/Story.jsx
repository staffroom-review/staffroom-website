export default function Story({
  eyebrow,
  title,
  dek,
  art,
  variant = "side",
  compact = false,
}) {
  return (
    <article className={`story story--${variant} ${compact ? "story--compact" : ""}`.trim()}>
      {art ? (
        <div className="art-frame" data-art={art} aria-hidden="true">
          <span>{art.replaceAll("-", " ")}</span>
        </div>
      ) : null}
      <div className="story__body">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h3><a href="#story">{title}</a></h3>
        {dek ? <p className="story__dek">{dek}</p> : null}
        <p className="story__meta">Staffroom Review</p>
      </div>
    </article>
  );
}
