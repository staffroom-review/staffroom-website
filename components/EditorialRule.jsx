export default function EditorialRule({ variant = "standard", className = "" }) {
  const variantClass = variant === "major" ? " editorial-rule--major" : variant === "accent" ? " editorial-rule--accent" : "";
  return <div className={`editorial-rule${variantClass} ${className}`.trim()} aria-hidden="true" />;
}
