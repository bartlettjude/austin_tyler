import Link from "next/link";

/**
 * variant: "dark" | "outline"
 * Renders a Link if `href`, else a <button>.
 */
export default function Button({
  href,
  variant = "dark",
  children,
  arrow = true,
  className = "",
  ...rest
}) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="btn-arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
