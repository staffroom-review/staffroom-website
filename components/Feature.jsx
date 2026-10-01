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
      <div className="art-frame art-frame--feature" data-art={art} aria-hidden="true">
        <span>{art.replaceAll("-", " ")}</span>
      </div>
      <div className="feature__body">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1><a href="#feature">{title}</a></h1>
        {dek ? <p>{dek}</p> : null}
      </div>
    </article>
  );
}
