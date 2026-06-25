"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/data/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link href="/" className="group inline-flex items-baseline gap-0.5" aria-label="Austin Tyler — home">
            <span className="font-display font-black text-xl md:text-2xl tracking-tight text-ink">
              {SITE.wordmark}
            </span>
            <span className="font-display font-black text-xl md:text-2xl text-gold transition-transform duration-300 group-hover:rotate-12 inline-block">
              .
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-ink-soft hover:text-ink transition-colors"
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-ink transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 hover:w-full" />
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn btn-dark !py-2.5 !px-5 text-[0.8rem]"
            >
              <span>Book a Shoot</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative z-50 flex flex-col gap-[5px] p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-paper transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col justify-center h-full px-8 gap-1">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display font-black text-5xl tracking-tight text-ink py-2 border-b border-ink/10"
              style={{ animation: open ? `fade-up 0.5s ${0.06 * i + 0.1}s both` : "none" }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-dark mt-8 self-start">
            <span>Book a Shoot</span>
            <span className="btn-arrow">→</span>
          </Link>
          <a href={SITE.instagram} className="mt-6 eyebrow" target="_blank" rel="noreferrer">
            {SITE.instagramHandle}
          </a>
        </nav>
      </div>
    </header>
  );
}
