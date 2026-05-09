import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BadgeCheck, Building2, FileCheck, Heart, MapPin, Target, TrendingUp, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SITE, waLink } from "@/lib/site";
import founder from "@/assets/founder.jpg";
import aboutBanner from "@/assets/about-supermart-banner.png";
import family from "@/assets/family-shopping.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Shri Shyam Bachat Bazaar | Founded by Nikku Yadav" },
      {
        name: "description",
        content:
          "Founded by Nikku Yadav with 10+ years retail experience and a 30+ year family business legacy. Our mission: affordable, quality products for every Indian household.",
      },
      { property: "og:title", content: "About Shri Shyam Bachat Bazaar" },
      {
        property: "og:description",
        content: "10+ years of retail trust, two Delhi stores, and a wholesale hub for businesses.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-ink">
              About Us
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-balance md:text-6xl">
              A Delhi family business <span className="text-brand-red">built on trust.</span>
            </h1>
            <p className="mt-5 text-muted-foreground md:text-lg">
              {SITE.short} is more than a supermarket — it's a promise to every Indian family that
              quality and savings can go hand in hand.
            </p>
          </div>
          <img
            src={family}
            alt="Family shopping at Shri Shyam"
            width={1280}
            height={960}
            className="rounded-3xl object-cover shadow-brand"
          />
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img
              src={founder}
              alt="Founder Nikku Yadav"
              width={1024}
              height={1280}
              loading="lazy"
              className="rounded-3xl object-cover shadow-brand"
            />
          </div>
          <div className="lg:col-span-3">
            <span className="inline-block rounded-full bg-brand-yellow/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
              Our Founder
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-5xl">
              Mr. {SITE.founder}
            </h2>
            <p className="mt-5 text-muted-foreground">
              With over <strong className="text-foreground">10 years of retail experience</strong>{" "}
              and a powerful{" "}
              <strong className="text-foreground">30+ year family business legacy</strong>, Mr.
              Nikku Yadav started Shri Shyam Bachat Bazaar with a single vision — to make daily
              shopping simple, affordable, and dignified for every Indian household.
            </p>
            <p className="mt-3 text-muted-foreground">
              From learning the trade as a child in his family's business to building a modern
              supermarket and wholesale brand in New Delhi, his journey is rooted in two values:{" "}
              <strong className="text-foreground">honesty in pricing</strong> and{" "}
              <strong className="text-foreground">quality without compromise</strong>.
            </p>
            <p className="mt-3 text-muted-foreground">
              Today, Shri Shyam Bachat Bazaar serves thousands of retail customers and hundreds of
              wholesale partners — from small shopkeepers to restaurants, hotels and caterers.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-brand-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "Deliver affordable, quality products to every household — making smart savings part of daily life.",
              },
              {
                icon: Heart,
                title: "Our Values",
                text: "Honest pricing, genuine products, friendly service, and respect for every customer who walks in.",
              },
              {
                icon: TrendingUp,
                title: "Our Vision",
                text: "Become India's most trusted neighbourhood supermarket & wholesale brand — built family by family.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-white p-8 shadow-soft transition hover:shadow-brand"
              >
                <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-xl bg-brand-gradient text-primary-foreground">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER FOCUS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-yellow/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
              Customer First
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-5xl">
              We treat every shopper like family
            </h2>
            <p className="mt-5 text-muted-foreground">
              Whether you're picking up a single packet of atta or stocking your restaurant's
              kitchen for the month, you'll get the same warm welcome, the same fair pricing, and
              the same commitment to quality.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              {[
                { icon: Award, t: "Hand-picked, quality-checked products" },
                { icon: Users, t: "Trained, friendly in-store staff" },
                { icon: Heart, t: "Genuine after-sales support on every purchase" },
              ].map((p) => (
                <li
                  key={p.t}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-4"
                >
                  <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <span className="text-foreground">{p.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={aboutBanner}
            alt="Shri Shyam storefront"
            width={1280}
            height={800}
            loading="lazy"
            className="rounded-3xl object-cover object-center shadow-brand"
          />
        </div>
      </section>

      {/* GROWTH PLANS */}
      <section className="relative overflow-hidden bg-brand-ink py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-red/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-yellow/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-ink">
              Growing Strong
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">
              Expanding to serve more families
            </h2>
            <p className="mt-4 text-white/80">
              From our two Delhi stores, we're growing into new cities and states — bringing
              "Sasta Bhi, Best Bhi" closer to every home.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { city: "Gurugram", note: "Coming soon" },
              { city: "Rajasthan", note: "Planned expansion" },
              { city: "Uttar Pradesh", note: "Planned expansion" },
            ].map((g) => (
              <div
                key={g.city}
                className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur"
              >
                <MapPin className="h-7 w-7 text-brand-yellow" />
                <div className="mt-4 font-display text-2xl font-bold">{g.city}</div>
                <div className="mt-1 text-sm text-white/70">{g.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold text-foreground md:text-5xl">
            Come visit. We'd love to meet you.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stop by either of our Delhi stores, or message us on WhatsApp to start your savings
            journey today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-brand transition-transform hover:scale-105"
            >
              Find a Store <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-red bg-white px-7 py-3.5 text-sm font-bold text-brand-red transition hover:bg-brand-red hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
