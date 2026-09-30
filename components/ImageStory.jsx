import StoryMeta from "./StoryMeta";

export default function ImageStory({
  eyebrow,
  title,
  dek,
  image,
  imageAlt = "",
  href = "#",
  section,
  format = "Visual Story",
  author,
  date,
  readingTime,
  className = "",
}) {
  return (
    <article className={`image-story ${className}`.trim()}>
      <a className="image-frame image-frame--wide" href={href} aria-label={title}>
        <img src={image} alt={imageAlt} />
      </a>
      <div className="image-story__body">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h3 className="type-secondary image-story__title">
          <a href={href}>{title}</a>
        </h3>
        {dek ? <p className="type-body image-story__dek">{dek}</p> : null}
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
