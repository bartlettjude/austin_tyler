"use client";

import { useEffect } from "react";

/**
 * Single global scroll-reveal observer. Watches every `.reveal` / `.reveal-clip`
 * element (including ones added later, e.g. portfolio filtering) and adds `.is-in`
 * as they enter the viewport. Includes a hard failsafe so content can never get
 * stuck invisible if the observer misbehaves.
 *
 * Mounted once in the root layout. Renders nothing.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reveal = (el) => el.classList.add("is-in");
    const selector =
      ".reveal:not(.is-in), .reveal-clip:not(.is-in), .reveal-mask:not(.is-in)";

    // No IO support → just show everything.
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(selector).forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const observeAll = () =>
      document.querySelectorAll(selector).forEach((el) => io.observe(el));

    observeAll();

    // Re-scan when new reveal elements mount (filters, route changes).
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    // Failsafe: reveal anything still hidden shortly after load.
    const t = setTimeout(() => {
      document.querySelectorAll(selector).forEach(reveal);
    }, 2500);

    return () => {
      io.disconnect();
      mo.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
