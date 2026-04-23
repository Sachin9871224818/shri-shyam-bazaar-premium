import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Shri Shyam Bachat Bazaar | Rajokri & Mahipalpur Delhi" },
      {
        name: "description",
        content:
          "Visit us in Rajokri or Mahipalpur, New Delhi. Call 8860120909 or WhatsApp +91 9599172370 for retail and wholesale enquiries.",
      },
      { property: "og:title", content: "Contact Shri Shyam Bachat Bazaar" },
      {
        property: "og:description",
        content: "Two stores in Delhi. Call, WhatsApp or message us — we're here to help.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  message: z.string().trim().min(5, "Please write a short message").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const msg = `Hello! I'm ${result.data.name} (${result.data.phone}).\n\n${result.data.message}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-ink">
            Contact Us
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-balance md:text-6xl">
            We'd love to <span className="text-brand-red">hear from you</span>
          </h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Have a question, bulk enquiry, or just want to say hi? Reach out — we usually reply
            within minutes on WhatsApp.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="-mt-12 pb-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-3">
          {[
            {
              icon: Phone,
              title: "Call Us",
              lines: SITE.phones,
              href: `tel:${SITE.phones[0]}`,
              cta: "Call now",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              lines: [SITE.whatsappDisplay],
              href: waLink(),
              cta: "Chat now",
            },
            {
              icon: Mail,
              title: "Email Us",
              lines: [SITE.email],
              href: `mailto:${SITE.email}`,
              cta: "Send email",
            },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-brand"
            >
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="font-display text-xl font-bold text-foreground">{c.title}</div>
              <div className="mt-2 space-y-0.5 text-sm text-muted-foreground">
                {c.lines.map((l) => (
                  <div key={l} className="break-all">
                    {l}
                  </div>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center text-sm font-bold text-brand-red">
                {c.cta} →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FORM + LOCATIONS */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          {/* FORM */}
          <div>
            <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
              Send us a message
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fill the form and we'll continue the chat on WhatsApp instantly.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-input bg-white px-4 py-3 text-foreground outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                  placeholder="Enter your name"
                  maxLength={100}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-input bg-white px-4 py-3 text-foreground outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                  placeholder="Your mobile number"
                  maxLength={20}
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-input bg-white px-4 py-3 text-foreground outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                  placeholder="Tell us what you need..."
                  maxLength={1000}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-brand transition-transform hover:scale-105"
              >
                Send via WhatsApp <Send className="h-4 w-4" />
              </button>
              {sent && (
                <p className="text-sm font-semibold text-brand-red">
                  ✓ Opening WhatsApp… we'll reply right away.
                </p>
              )}
            </form>
          </div>

          {/* LOCATIONS */}
          <div>
            <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
              Visit our stores
            </h2>
            <p className="mt-2 text-muted-foreground">
              Open all days · 9:00 AM – 10:00 PM
            </p>

            <div className="mt-8 space-y-5">
              {SITE.branches.map((b) => (
                <div
                  key={b.name}
                  className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-brand-cream">
                    <iframe
                      title={b.name}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(
                        SITE.short + " " + b.address,
                      )}&output=embed`}
                      className="h-full w-full border-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-brand-red" />
                      <div className="font-display text-lg font-bold text-foreground">
                        {b.name}
                      </div>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{b.address}</div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        SITE.short + " " + b.address,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
