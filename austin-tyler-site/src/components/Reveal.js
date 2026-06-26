/**
 * Scroll-reveal wrapper. Intentionally a dumb, JS-free server component:
 * it only renders the `.reveal` / `.reveal-clip` class. The actual reveal is
 * driven by a small standalone observer injected in layout.js, which runs
 * independently of React hydration. If JS never runs, content stays visible
 * (the hidden state is gated behind the `.js` class — see globals.css).
 *
 * variant: "fade" (default) | "clip" (top→bottom) | "mask" (left→right wipe)
 */
const VARIANT_CLASS = { fade: "reveal", clip: "reveal-clip", mask: "reveal-mask" };

export default function Reveal({
  children,
  variant = "fade",
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const base = VARIANT_CLASS[variant] || "reveal";
  return (
    <Tag
      className={`${base} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
