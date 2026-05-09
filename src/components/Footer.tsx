import { Link } from "@tanstack/react-router";
import { BadgeCheck, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import logoFooter from "@/assets/logo-footer.png";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <img
            src={logoFooter}
            alt={`${SITE.short} logo`}
            className="h-14 w-auto object-contain"
            style={{ imageRendering: "auto" }}
          />
          <div className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-brand-yellow">
            {SITE.tagline}
          </div>
          <p className="mt-4 text-sm text-white/70">
            Delhi's trusted supermarket & wholesale brand. Lowest prices on groceries, daily
            essentials, and bulk supplies.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-yellow">
            <BadgeCheck className="h-3.5 w-3.5" /> GST Registered
          </div>
          <div className="mt-2 text-[11px] text-white/60">
            GSTIN: <span className="font-mono text-white/85">{SITE.gstin}</span>
          </div>
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
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-brand-yellow">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 text-brand-yellow" />
              <a
                href={`https://wa.me/${SITE.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-yellow"
              >
                WhatsApp: {SITE.whatsappDisplay}
              </a>
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
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-yellow" />
              <span>
                <span className="font-semibold text-white">Head Office</span>
                <br />
                {SITE.headOffice}
              </span>
            </li>
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
            © {new Date().getFullYear()} {SITE.legalName} · GSTIN {SITE.gstin} · All rights reserved.
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
