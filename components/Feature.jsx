export default function Feature({
  eyebrow,
  title,
  dek,
  art,
  centered = false,
  elevated = false,
  className = "",
  priority = false,
  href = "#feature",
  meta = "",
  analyticsId = "",
  analyticsSection = "",
  analyticsFormat = "",
}) {
  return (
    <article className={`feature ${centered ? "feature--centered" : ""} ${elevated ? "feature--elevated" : ""} ${className}`.trim()}>
      <div className="art-frame art-frame--feature" aria-hidden="true">
        {art ? <img className="art-frame__image" src={art.src} alt="" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" /> : null}
      </div>
      <div className="feature__body">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>
          <a
            href={href}
            data-analytics-event="select_content"
            data-content-type="feature"
            data-content-id={analyticsId || title}
            data-content-title={title}
            data-content-section={analyticsSection}
            data-content-format={analyticsFormat || eyebrow}
            data-link-location="feature-card"
          >
            {title}
          </a>
        </h2>
        {dek ? <p>{dek}</p> : null}
        {meta ? <p className="story__meta">{meta}</p> : null}
      </div>
    </article>
  );
}
