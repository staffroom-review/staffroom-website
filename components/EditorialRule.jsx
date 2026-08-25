export default function EditorialRule({ className = "" }) {
  return (
    <div
      className={`editorial-rule ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
