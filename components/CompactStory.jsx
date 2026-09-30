import StoryMeta from "./StoryMeta";

export default function CompactStory({
  eyebrow,
  title,
  dek,
  image,
  imageAlt = "",
  href = "#",
  section,
  format,
  author,
  date,
  readingTime,
  className = "",
}) {
  return (
    <article className={`compact-story ${className}`.trim()}>
      {image ? (
        <a className="image-frame image-frame--wide" href={href} aria-label={title}>
          <img src={image} alt={imageAlt} />
        </a>
      ) : null}
      <div className="compact-story__body">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h3 className="type-card compact-story__title">
          <a href={href}>{title}</a>
        </h3>
        {dek ? <p className="type-body compact-story__dek">{dek}</p> : null}
        <StoryMeta
          section={section}
          format={format}
          author={author}
          date={date}
          readingTime={readingTime}
        />
      </div>
    </article>
  );
}
