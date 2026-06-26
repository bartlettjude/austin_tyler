"use client";

import { useEffect } from "react";

/**
 * Single global scroll-parallax engine. Companion to ScrollReveal — same idea:
 * one tiny vanilla loop drives every element on the page, React stays out of it.
 *
 * Markup opts in via data attributes (usually through the <Parallax> wrapper):
 *   data-parallax="0.12"        speed factor. + moves opposite to scroll (slower
 *                               / "deeper"), - moves with scroll (faster / closer).
 *   data-parallax-axis="x"      sway sideways instead of vertically (default "y").
 *
 * Transform is the ONLY property touched, on a dedicated wrapper element, so it
 * never collides with reveal (clip-path / its own translate) or hover (scale).
 * The engine subtracts the offset it applied last frame before measuring, so the
 * mapping is stable and never drifts/oscillates.
 *
 * Mounted once in the root layout. Renders nothing.
 */
export default function ScrollParallax() {
  useEffect(() => {
    // Honour reduced-motion: bail entirely, leaving everything at rest.
    const reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMQ.matches) return;

    const mobileMQ = window.matchMedia("(max-width: 768px)");

    let items = [];
    let ticking = false;

    const collect = () => {
      items = Array.from(document.querySelectorAll("[data-parallax]")).map((el) => ({
        el,
        speed: parseFloat(el.dataset.parallax) || 0,
        axis: el.dataset.parallaxAxis === "x" ? "x" : "y",
        applied: 0,
      }));
    };

    const update = () => {
      ticking = false;

      // Mobile: don't scroll-drive parallax at all. Phones fire scroll events
      // sparsely during momentum/fling scrolling, so the per-frame transform
      // lags the scroll and then snaps — it reads as janky. Leave every element
      // at rest (clearing any transform left over from a wider layout) and let
      // the time-based ambient CSS animations carry the motion instead.
      if (mobileMQ.matches) {
        for (const it of items) {
          if (it.applied !== 0) {
            it.el.style.transform = "";
            it.applied = 0;
          }
        }
        return;
      }

      const vh = window.innerHeight;
      const center = vh / 2;

      // Read pass (measure), then write pass (transform) — avoids layout thrash.
      for (const it of items) {
        const r = it.el.getBoundingClientRect();
        // Skip anything comfortably off-screen.
        if (r.bottom < -vh || r.top > vh * 2) continue;
        // Remove last frame's own shift so the base position is stable.
        const baseTop = r.top - (it.axis === "y" ? it.applied : 0);
        const baseCenter = baseTop + r.height / 2;
        const dist = center - baseCenter; // px from viewport centre
        const shift = dist * it.speed;
        it.applied = shift;
        it.el.style.transform =
          it.axis === "x"
            ? `translate3d(${shift.toFixed(2)}px,0,0)`
            : `translate3d(0,${shift.toFixed(2)}px,0)`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const onResize = () => {
      collect();
      update();
    };

    collect();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Re-collect when the DOM changes (route changes, filtered grids). Debounced
    // through the same rAF gate so rapid mutations don't pile up.
    let moScheduled = false;
    const mo = new MutationObserver(() => {
      if (moScheduled) return;
      moScheduled = true;
      requestAnimationFrame(() => {
        moScheduled = false;
        collect();
        update();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mo.disconnect();
    };
  }, []);

  return null;
}
