export default function Story({
  eyebrow,
  title,
  dek,
  art,
  variant = "side",
  compact = false,
  href = "#story",
  meta = "Staffroom Review",
  analyticsId = "",
  analyticsSection = "",
  analyticsFormat = "",
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
        <h3>
          <a
            href={href}
            data-analytics-event="select_content"
            data-content-type="story"
            data-content-id={analyticsId || title}
            data-content-title={title}
            data-content-section={analyticsSection}
            data-content-format={analyticsFormat || eyebrow}
            data-link-location="story-card"
          >
            {title}
          </a>
        </h3>
        {dek ? <p className="story__dek">{dek}</p> : null}
        <p className="story__meta">{meta}</p>
      </div>
    </article>
  );
}
