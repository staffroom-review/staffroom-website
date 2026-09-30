import StoryMeta from "./StoryMeta";

export default function FeatureStory({
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
    <article className={`feature-story ${className}`.trim()}>
      <a className="image-frame image-frame--feature" href={href} aria-label={title}>
        <img src={image} alt={imageAlt} />
      </a>
      <div className="feature-story__body">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="type-lead feature-story__title">
          <a href={href}>{title}</a>
        </h1>
        {dek ? <p className="type-body feature-story__dek">{dek}</p> : null}
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
