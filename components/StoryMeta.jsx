export default function StoryMeta({ section, format, author, date, readingTime }) {
  const items = [
    section,
    format,
    author,
    date,
    readingTime,
  ].filter(Boolean);

  return (
    <div className="story-meta" aria-label="Story metadata">
      {items.map((item, index) => (
        <span key={`${item}-${index}`}>{item}</span>
      ))}
    </div>
  );
}
