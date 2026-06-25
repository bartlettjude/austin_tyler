import Link from "next/link";
import { NAV } from "@/data/site";

export default function SiteFooter({ site }) {
  return (
    <footer className="relative bg-coffee text-cream overflow-hidden">
      {/* Big wordmark band */}
      <div className="border-b border-cream/15">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p className="eyebrow !text-tan mb-4">{site.availability} · {site.location}</p>
              <h2 className="display text-[15vw] md:text-[9rem] leading-[0.82] text-cream">
                Let’s<br />
                <span className="italic font-normal text-tan">work.</span>
              </h2>
            </div>
            <Link href="/contact" className="btn btn-outline !border-cream !text-cream shrink-0 self-start md:self-auto">
              <span>Start a project</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Links row */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-10">
        <div className="grid gap-8 md:grid-cols-4 text-sm">
          <div className="md:col-span-2">
            <Link href="/" className="font-display font-black text-2xl text-cream">
              {site.wordmark}<span className="text-gold">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-cream/70 leading-relaxed">
              {site.tagline} from {site.location}. Concerts, artists, dance & country —
              available to tour.
            </p>
          </div>
          <div>
            <p className="eyebrow !text-tan mb-4">Menu</p>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-cream/80 hover:text-gold transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow !text-tan mb-4">Connect</p>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${site.email}`} className="text-cream/80 hover:text-gold transition-colors break-all">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="text-cream/80 hover:text-gold transition-colors">
                  Instagram {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/15 flex flex-col sm:flex-row gap-3 justify-between text-xs text-cream/50">
          <p>© {new Date().getFullYear()} {site.name}. All frames reserved.</p>
          <p>Nashville, Tennessee — available worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
