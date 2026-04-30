import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white p-1">
              <img src={logo} alt={`${SITE.short} logo`} className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="font-display text-base font-extrabold">{SITE.short}</div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-yellow">
                {SITE.tagline}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Delhi's trusted supermarket & wholesale brand. Lowest prices on groceries, daily
            essentials, and bulk supplies.
          </p>
        </div>

        <div>
          <div className="font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Quick Links
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Conditions" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand-yellow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Contact
          </div>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-brand-yellow" />
              <span>
                {SITE.phones[0]}
                <br />
                {SITE.phones[1]}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-brand-yellow" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-brand-yellow">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Our Stores
          </div>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {SITE.branches.map((b) => (
              <li key={b.name} className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-yellow" />
                <span>
                  <span className="font-semibold text-white">{b.name}</span>
                  <br />
                  {b.address}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {SITE.short} Pvt. Ltd. All rights reserved.
          </span>
          <span>Made with ❤️ in New Delhi, India</span>
          <span>
            Powered by{" "}
            <a
              href="https://skdigitaltech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-yellow hover:underline"
            >
              SK DigitalTech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
