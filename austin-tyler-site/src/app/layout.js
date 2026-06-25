import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE } from "@/data/site";

// Both are variable fonts — omit `weight` to load the full weight range
// (Fraunces goes up to 900 for the heavy black headings).
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = {
  title: "Austin Tyler — Nashville Live Music Photographer",
  description:
    "Concert, music artist, dance and country photography by Austin Tyler. Nashville-based, available to tour. View the portfolio and book a shoot.",
  openGraph: {
    title: "Austin Tyler — Nashville Live Music Photographer",
    description:
      "Concert, music artist, dance and country photography. Nashville-based, available to tour.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable}`}>
      <body>
        {/* If JS is disabled, never hide reveal content. */}
        <noscript>
          <style>{`.reveal,.reveal-clip{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <div className="grain" aria-hidden="true" />
        <ScrollReveal />
        <SiteHeader />
        <main id="top">{children}</main>
        <SiteFooter site={SITE} />
      </body>
    </html>
  );
}
