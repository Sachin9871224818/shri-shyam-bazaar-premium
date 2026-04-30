import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { SITE, waLink } from "@/lib/site";
import headerLogo from "@/assets/logo-header.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="bg-brand-gradient text-primary-foreground text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <span className="font-medium tracking-wide">🚚 Wholesale & Retail · Delhi NCR</span>
          <a href={`tel:${SITE.phones[0]}`} className="flex items-center gap-1.5 hover:opacity-90">
            <Phone className="h-3.5 w-3.5" /> {SITE.phones[0]} / {SITE.phones[1]}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3 py-2 pl-2 pr-3">
          <img
            src={headerLogo}
            alt={`${SITE.short} logo`}
            width={40}
            height={40}
            decoding="async"
            className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
            style={{ imageRendering: "auto" }}
          />
          <div className="leading-tight">
            <div className="font-display text-base font-extrabold text-foreground sm:text-lg">
              {SITE.short}
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-red">
              {SITE.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-brand-red" }}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-brand-red"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-brand transition-transform hover:scale-105"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-brand-gradient px-5 py-3 text-center text-sm font-bold text-primary-foreground"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
