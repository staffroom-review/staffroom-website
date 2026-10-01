export default function Feature({
  eyebrow,
  title,
  dek,
  art,
  centered = false,
  elevated = false,
  className = "",
}) {
  return (
    <article className={`feature ${centered ? "feature--centered" : ""} ${elevated ? "feature--elevated" : ""} ${className}`.trim()}>
      <div className="art-frame art-frame--feature" aria-hidden="true">
        {art ? <img className="art-frame__image" src={art.src} alt="" loading="lazy" decoding="async" /> : null}
      </div>
      <div className="feature__body">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1><a href="#feature">{title}</a></h1>
        {dek ? <p>{dek}</p> : null}
      </div>
    </article>
  );
}
