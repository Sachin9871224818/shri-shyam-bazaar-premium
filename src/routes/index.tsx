import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Truck,
  Users,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { SITE, waLink } from "@/lib/site";

import hero from "@/assets/hero-supermarket.jpg";
import family from "@/assets/family-shopping.jpg";
import warehouse from "@/assets/wholesale-warehouse.jpg";
import storefront from "@/assets/storefront.jpg";
import catGrocery from "@/assets/cat-grocery.jpg";
import catFruits from "@/assets/cat-fruits.jpg";
import catKitchen from "@/assets/cat-kitchen.jpg";
import catBeauty from "@/assets/cat-beauty.jpg";
import catHousehold from "@/assets/cat-household.jpg";
import catToys from "@/assets/cat-toys.jpg";
import catDryfruits from "@/assets/cat-dryfruits.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shri Shyam Bachat Bazaar — Sasta Bhi, Best Bhi | Delhi Supermarket" },
      {
        name: "description",
        content:
          "Delhi's trusted supermarket & wholesale brand. Lowest prices on groceries, fruits, kitchen essentials, beauty, household items. Retail & bulk supply in Rajokri & Mahipalpur.",
      },
      { property: "og:title", content: "Shri Shyam Bachat Bazaar — Sasta Bhi, Best Bhi" },
      {
        property: "og:description",
        content:
          "Lowest prices on groceries & wholesale supply. Visit our Rajokri & Mahipalpur stores or order on WhatsApp.",
      },
    ],
  }),
  component: HomePage,
});

const categories = [
  { name: "Grocery", img: catGrocery, desc: "Rice, atta, oil, dal & more" },
  { name: "Fruits & Vegetables", img: catFruits, desc: "Fresh & farm-picked daily" },
  { name: "Kitchen Essentials", img: catKitchen, desc: "Spices, masalas, ghee" },
  { name: "Beauty & Personal Care", img: catBeauty, desc: "Trusted brands" },
  { name: "Household Items", img: catHousehold, desc: "Cleaners & home care" },
  { name: "Toys & Decoration", img: catToys, desc: "For kids & festivals" },
  { name: "Dry Fruits & Pooja Items", img: catDryfruits, desc: "Premium quality" },
];

const reasons = [
  { icon: BadgePercent, title: "Lowest Prices Guaranteed", desc: "We beat the market every day." },
  { icon: Truck, title: "Bulk Deals Available", desc: "Special wholesale pricing for businesses." },
  { icon: ShieldCheck, title: "Trusted Brands", desc: "Genuine, sealed, quality-checked products." },
  { icon: Sparkles, title: "Wide Product Range", desc: "10,000+ items under one roof." },
  { icon: Users, title: "10+ Years Experience", desc: "30+ years of family business legacy." },
  { icon: Store, title: "Two Convenient Stores", desc: "Rajokri & Mahipalpur, New Delhi." },
];

const offers = [
  { title: "Up to 40% OFF", sub: "On Daily Grocery", color: "bg-brand-gradient" },
  { title: "Buy More, Save More", sub: "On Bulk Orders", color: "bg-sun-gradient text-brand-ink" },
  { title: "Festive Specials", sub: "Dry Fruits & Pooja", color: "bg-brand-ink" },
];

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Homemaker, Vasant Kunj",
    quote:
      "I do all my monthly grocery from here. The prices are honestly the best in the area, and the staff is very helpful.",
  },
  {
    name: "Ravi Mehta",
    role: "Restaurant Owner",
    quote:
      "We get bulk supply for our restaurant from Shri Shyam. Reliable quality, on-time delivery, and unbeatable rates.",
  },
  {
    name: "Sunita Verma",
    role: "Regular Customer",
    quote:
      "Fresh fruits, clean store, friendly people. 'Sasta Bhi, Best Bhi' is really true. Highly recommended!",
  },
];

function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && (
            <div className="mb-3 inline-block rounded-full bg-brand-yellow/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
              {eyebrow}
            </div>
          )}
          <h2 className="text-balance text-3xl font-extrabold text-foreground md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Shri Shyam Bachat Bazaar supermarket interior"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-start justify-center px-4 py-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-yellow" /> 10+ Years of Trust
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-balance md:text-6xl lg:text-7xl">
              Sasta Bhi, Best Bhi —{" "}
              <span className="text-brand-yellow">Har Ghar Ki Pehli Pasand</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
              Best prices on groceries, daily essentials, and wholesale deals. Shop retail or buy
              in bulk — Delhi's most loved supermarket.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-bold text-brand-ink shadow-brand transition-transform hover:scale-105"
              >
                <Store className="h-4 w-4" /> Visit Our Store
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-brand-ink"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/85">
              {[
                { icon: CheckCircle2, t: "Lowest Prices" },
                { icon: CheckCircle2, t: "Bulk Wholesale" },
                { icon: CheckCircle2, t: "2 Stores in Delhi" },
              ].map((b) => (
                <div key={b.t} className="flex items-center gap-2">
                  <b.icon className="h-4 w-4 text-brand-yellow" />
                  {b.t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="overflow-hidden bg-brand-yellow py-4">
        <div className="flex animate-[shine_20s_linear_infinite] gap-12 whitespace-nowrap font-display text-base font-extrabold uppercase tracking-wider text-brand-ink">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              ⭐ Sasta Bhi, Best Bhi
              <span>•</span>
              Wholesale & Retail
              <span>•</span>
              10,000+ Products
              <span>•</span>
              Trusted by 50,000+ Families
              <span>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <Section
        eyebrow="Shop by Category"
        title="Everything Your Home Needs"
        subtitle="From everyday groceries to festive specials — all under one roof at the lowest prices."
        className="bg-brand-cream"
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-brand"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="font-display text-base font-bold text-foreground md:text-lg">
                  {c.name}
                </div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">{c.desc}</div>
              </div>
            </motion.div>
          ))}
          <a
            href={waLink("Hi! I'd like to know what categories are available in store.")}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-brand-gradient p-8 text-center text-primary-foreground shadow-brand transition-all hover:-translate-y-1"
          >
            <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-1" />
            <div className="font-display text-lg font-extrabold">Ask About More</div>
            <div className="text-xs opacity-90">Chat on WhatsApp</div>
          </a>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section
        eyebrow="Why Choose Us"
        title="Built on Trust, Powered by Savings"
        subtitle="We're not just a store — we're your neighbourhood family of savings, quality, and service."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-soft transition hover:border-brand-red hover:shadow-brand"
            >
              <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-xl bg-brand-yellow/40 text-brand-red transition-colors group-hover:bg-brand-gradient group-hover:text-primary-foreground">
                <r.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WHOLESALE */}
      <section className="relative overflow-hidden bg-brand-ink py-20 text-white md:py-28">
        <img
          src={warehouse}
          alt="Wholesale warehouse"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-ink">
              Wholesale Hub
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-balance md:text-5xl">
              Bulk Kharido, <span className="text-brand-yellow">Aur Zyada Bachaao</span>
            </h2>
            <p className="mt-5 max-w-lg text-white/80">
              Special wholesale pricing for shopkeepers, kirana stores, restaurants, hotels, and
              caterers. Buy more, save more — direct supply from our warehouse with consistent
              stock and reliable service.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              {[
                "Discounted bulk pricing on 10,000+ products",
                "Dedicated business account manager",
                "Flexible quantities — from 10kg to 10 tonnes",
                "Fast supply across Delhi NCR",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={waLink("Hi, I'd like wholesale / bulk pricing for my business.")}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-bold text-brand-ink shadow-brand transition-transform hover:scale-105"
            >
              Contact for Bulk Pricing <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={warehouse}
              alt="Warehouse stock"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-brand"
            />
            <div className="flex flex-col gap-4 pt-10">
              <img
                src={catGrocery}
                alt="Bulk grocery"
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover shadow-brand"
              />
              <div className="rounded-2xl bg-brand-gradient p-6 shadow-brand">
                <div className="font-display text-4xl font-extrabold">B2B</div>
                <div className="mt-1 text-sm text-white/90">
                  Trusted by 500+ businesses across Delhi NCR
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <Section
        eyebrow="Today's Offers"
        title="Deals That Make You Smile"
        subtitle="Fresh discounts every week — visit your nearest store to grab them."
        className="bg-brand-cream"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.title}
              className={`relative overflow-hidden rounded-2xl p-8 text-white shadow-brand transition-transform hover:-translate-y-1 ${o.color}`}
            >
              <div className="text-xs font-bold uppercase tracking-wider opacity-90">
                Limited Time
              </div>
              <div className="mt-3 font-display text-4xl font-extrabold leading-none">
                {o.title}
              </div>
              <div className="mt-2 text-base font-semibold opacity-95">{o.sub}</div>
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15" />
              <div className="absolute -bottom-8 -left-4 h-20 w-20 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative">
            <img
              src={family}
              alt="Indian family shopping"
              width={1280}
              height={960}
              loading="lazy"
              className="rounded-3xl object-cover shadow-brand"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-brand-yellow p-6 shadow-brand md:block">
              <div className="font-display text-4xl font-extrabold text-brand-ink">10+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-ink">
                Years of Service
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block rounded-full bg-brand-yellow/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
              Our Story
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-5xl">
              A family business built on saving every rupee for you
            </h2>
            <p className="mt-5 text-muted-foreground">
              Founded by <strong className="text-foreground">Mr. {SITE.founder}</strong>, with 10+
              years of retail expertise and a 30+ year family business legacy, Shri Shyam Bachat
              Bazaar was built with one simple promise — to give every family the best products at
              the lowest possible prices.
            </p>
            <p className="mt-3 text-muted-foreground">
              Today, we proudly serve thousands of households and hundreds of businesses across
              Delhi NCR through our two stores in Rajokri and Mahipalpur.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-brand transition-transform hover:scale-105"
            >
              Read Our Full Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <Section
        eyebrow="Visit Us"
        title="Two Convenient Locations in Delhi"
        subtitle="Drop by your nearest store — friendly staff, full shelves, and the best prices waiting for you."
        className="bg-brand-cream"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {SITE.branches.map((b) => (
            <div
              key={b.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:shadow-brand"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={storefront}
                  alt={b.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-display text-2xl font-extrabold">{b.name}</div>
                  <div className="flex items-center gap-1 text-sm opacity-90">
                    <MapPin className="h-4 w-4" /> {b.address}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div className="text-sm text-muted-foreground">Open all days · 9 AM – 10 PM</div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    SITE.short + " " + b.address,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-xs font-bold text-primary-foreground"
                >
                  Get Directions <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="Happy Customers"
        title="What Our Customers Say"
        subtitle="Real reviews from real shoppers who save with us every day."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-white p-7 shadow-soft"
            >
              <Quote className="absolute right-5 top-5 h-10 w-10 text-brand-yellow/60" />
              <div className="flex gap-1 text-brand-yellow">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90">"{t.quote}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="font-display font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-brand-gradient py-20 md:py-28">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-yellow/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-balance md:text-6xl">
            Ready to start saving on every purchase?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/85 md:text-lg">
            Visit our store today or message us on WhatsApp — we'll be happy to help you, whether
            it's your monthly grocery or a wholesale order.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-red shadow-brand transition-transform hover:scale-105"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-brand-red"
            >
              Visit Our Stores <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
