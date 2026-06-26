/**
 * Parallax wrapper — the markup half of the parallax system (companion to Reveal).
 * A dumb, JS-free server component: it only emits the `.parallax` class + data
 * attributes. The standalone ScrollParallax engine (mounted in layout.js) reads
 * those and drives the transform. If JS never runs, this is an inert wrapper and
 * content sits exactly where it should.
 *
 * IMPORTANT: keep parallax on its own element — don't put `speed` on a Reveal or
 * a hover target. Nest them instead (parallax > reveal > photo) so each owns one
 * transform/property and they compose cleanly.
 *
 * speed: + = drifts opposite to scroll (deeper / slower), - = with scroll (closer)
 * axis : "y" (default) | "x" (gentle horizontal sway)
 */
export default function Parallax({
  speed = 0.1,
  axis = "y",
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={`parallax ${className}`}
      data-parallax={speed}
      data-parallax-axis={axis}
      {...rest}
    >
      {children}
    </Tag>
  );
}
