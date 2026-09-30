export default function QuoteBlock({ quote, attribution, className = "" }) {
  return (
    <figure className={`quote-block ${className}`.trim()}>
      <blockquote className="type-quote">“{quote}”</blockquote>
      {attribution ? <figcaption className="type-meta">{attribution}</figcaption> : null}
    </figure>
  );
}
