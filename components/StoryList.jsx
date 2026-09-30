export default function StoryList({ stories = [], className = "" }) {
  return (
    <div className={`story-list ${className}`.trim()}>
      {stories.map((story, index) => (
        <article className="story-list__item" key={story.id ?? `${story.title}-${index}`}>
          <div className="story-list__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="story-list__content">
            {story.eyebrow ? <p className="eyebrow">{story.eyebrow}</p> : null}
            <h3 className="type-card">
              <a href={story.href ?? "#"}>{story.title}</a>
            </h3>
            {story.dek ? <p className="type-body">{story.dek}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}
