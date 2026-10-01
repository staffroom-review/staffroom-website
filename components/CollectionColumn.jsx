export default function CollectionColumn({ title, art, leadTitle, stories }) {
  return (
    <article className="collection-column">
      <h2>{title}</h2>
      <div className="art-frame art-frame--collection" aria-hidden="true">
        {art ? <img className="art-frame__image" src={art.src} alt="" loading="lazy" decoding="async" /> : null}
      </div>
      <h3><a href="#collection">{leadTitle}</a></h3>
      <div className="collection-column__stories">
        {stories.map((story) => (
          <a href="#collection-story" key={story}>{story}</a>
        ))}
      </div>
    </article>
  );
}
