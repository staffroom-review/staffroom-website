import StoryMeta from "./StoryMeta";

export default function StoryCard({
  eyebrow,
  title,
  dek,
  image,
  imageAlt = "",
  imageRatio = "standard",
  section,
  format,
  author,
  date,
  readingTime,
  href = "#",
  className = "",
}) {
  return (
    <article className={`story-card ${className}`.trim()}>
      {image ? (
        <a className={`image-frame image-frame--${imageRatio}`} href={href} aria-label={title}>
          <img src={image} alt={imageAlt} />
        </a>
      ) : null}
      <div className="story-card__body">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h3 className="type-card story-card__title">
          <a href={href}>{title}</a>
        </h3>
        {dek ? <p className="type-body story-card__dek">{dek}</p> : null}
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
