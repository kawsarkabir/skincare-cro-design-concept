import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search, User, Heart, ShoppingBag, Menu, X,
  Leaf, Recycle, ShieldCheck, Sparkles, Truck, FlaskConical,
  Star, ArrowRight, ArrowLeft, Play, Gift, Clock, BookOpen,
  Instagram, Facebook, Twitter,
} from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import product1 from "@/assets/CALM-Skincare-Natural-Products-2024-c.jpg";
import product2 from "@/assets/CALM-Skincare-Eco-Refills.jpg";
import product3 from "@/assets/image.png";
import product4 from "@/assets/product4.png";
import product5 from "@/assets/product5.png";
import product6 from "@/assets/product6.png";
import story from "@/assets/story.jpg";
import ing1 from "@/assets/ing-1.jpg";
import ing2 from "@/assets/ing-2.jpg";
import ing3 from "@/assets/ing-3.jpg";
import ing4 from "@/assets/ing-4.jpg";
import ugc1 from "@/assets/ugc-1.jpg";
import ugc2 from "@/assets/ugc-2.jpg";
import ugc3 from "@/assets/ugc-3.jpg";
import ugc4 from "@/assets/ugc-4.jpg";
import ugc5 from "@/assets/ugc-5.jpg";
import ugc6 from "@/assets/ugc-6.jpg";
import sustain from "@/assets/sustain.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import brandLogo from "@/assets/calm-logo.png";
import { VideoStrip } from "@/components/video-slider";

export const Route = createFileRoute("/")({ component: Index });

/* ───────────────── Announcement marquee ───────────────── */

function AnnouncementBanner() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-center">
      <p className="text-xs font-medium tracking-[0.15em] uppercase">
        Free Shipping When You Spend $50 or More
      </p>
    </div>
  );
}

function Announcement() {
  const items = [
    "Free Shipping on $50+",
    "Sustainable Handmade Skincare",
    "Cruelty Free + Eco Friendly",
    "Refill. Reuse. Glow.",
    "Small Batch · Made in Chicago",
  ];
  const loop = [...items, ...items, ...items];
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap py-3">
          {loop.map((t, i) => (
            <span key={i} className="mx-10 flex items-center gap-4 tracking-[0.22em] uppercase font-medium text-sm md:text-base">
              <Leaf className="h-4 w-4" /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────── Header ───────────────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const nav = [
    "Skin Care + Eco Refills",
    "Natural Ingredients",
    "DIY Beauty",
    "Our Story",
    "Our Fans",
    "Give Back",
  ];
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-cream/85 backdrop-blur-xl border-b border-border/60 shadow-[0_2px_30px_-20px_rgba(60,80,60,0.25)]"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#" className={`flex items-center gap-2 transition-colors ${scrolled ? "text-olive" : "text-cream"}`}>
          <img src={brandLogo} alt="CALM logo" className="h-20 w-auto" />
        </a>
        <nav className={`hidden lg:flex items-center gap-7 text-sm transition-colors ${scrolled ? "text-olive/80" : "text-cream/95"}`}>
          {nav.map((n) => (
            <a key={n} href="#" className="relative group">
              <span className={`transition-colors ${scrolled ? "group-hover:text-primary" : "group-hover:text-primary-foreground"}`}>{n}</span>
              <span className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${scrolled ? "bg-primary" : "bg-cream"}`} />
            </a>
          ))}
        </nav>
        <div className={`flex items-center gap-1 md:gap-2 transition-colors ${scrolled ? "text-olive" : "text-cream"}`}>
          <button className="p-2 rounded-full hover:bg-white/15 transition" aria-label="Search"><Search className="h-4 w-4" /></button>
          <button className="p-2 rounded-full hover:bg-white/15 transition hidden md:inline-flex" aria-label="Account"><User className="h-4 w-4" /></button>
          <button className="p-2 rounded-full hover:bg-white/15 transition hidden md:inline-flex" aria-label="Wishlist"><Heart className="h-4 w-4" /></button>
          <button className="p-2 rounded-full hover:bg-white/15 transition relative" aria-label="Cart">
            <ShoppingBag className="h-4 w-4" />

            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center">2</span>
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 lg:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-cream border-t border-border px-6 py-6 space-y-4">
          {nav.map((n) => (
            <a key={n} href="#" className="block text-olive text-lg serif">{n}</a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ───────────────── Hero slider ───────────────── */
const slides = [
  { img: hero1, eyebrow: "New · Spring Edit", title: "Clean Beauty That Loves Your Skin & The Earth", sub: "Handmade sustainable skincare crafted with natural ingredients and eco friendly packaging.", cta: "Shop Best Sellers" },
  { img: hero2, eyebrow: "Eco Refill System", title: "Refill. Reuse. Glow Naturally.", sub: "Reduce waste with sustainable skincare refills designed for modern conscious beauty.", cta: "Explore Eco Refills" },
  { img: hero3, eyebrow: "Gentle · Effective", title: "Gentle Skincare For Every Skin Type", sub: "Minimal ingredients. Maximum nourishment. Handmade in Chicago.", cta: "Find Your Routine" },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative -mt-16 md:-mt-20 h-[100svh] min-h-[640px] overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover slow-zoom" />
          <div className="absolute inset-0 bg-olive/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/40" />
        </div>
      ))}

      <div className="blob gradient-sage h-[420px] w-[420px] -bottom-40 -left-32" />
      <div className="blob bg-beige h-[360px] w-[360px] -top-24 right-0" />

      <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-center text-center pt-20">
        <div key={i} className="max-w-3xl text-cream fade-up mx-auto">
          <p className="eyebrow text-cream/90 mb-5 inline-flex items-center gap-2 justify-center">
            <span className="h-px w-8 bg-cream/70" />
            {slides[i].eyebrow}
            <span className="h-px w-8 bg-cream/70" />
          </p>
          <h1 className="serif font-light text-5xl md:text-6xl leading-[1.02] tracking-tight">
            {slides[i].title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-cream/90 max-w-xl leading-relaxed mx-auto">
            {slides[i].sub}
          </p>
          <div className="mt-9 flex items-center justify-center">
            <button className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-olive transition-all duration-500 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)]">
              {slides[i].cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-[3px] rounded-full transition-all duration-500 ${i === idx ? "w-12 bg-cream" : "w-6 bg-cream/40"}`}
            aria-label={`slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ───────────────── Trust marquee ───────────────── */
function Trust() {
  const items = [
    { icon: Leaf, t: "Cruelty Free" },
    { icon: Sparkles, t: "Organic Ingredients" },
    { icon: Recycle, t: "Sustainable Packaging" },
    { icon: ShieldCheck, t: "Non Toxic" },
    { icon: Truck, t: "Handmade in USA" },
    { icon: FlaskConical, t: "Small Batch" },
  ];
  const loop = [...items, ...items, ...items];
  return (
    <div className="bg-card border-y border-border/60 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap py-6">
        {loop.map((I, idx) => (
          <div key={idx} className="mx-10 flex items-center gap-3 text-olive/70">
            <I.icon className="h-4 w-4 text-primary" />
            <span className="eyebrow">{I.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────── Categories ───────────────── */
const cats = [
  { name: "Skin Care", count: "Cleansers · Toners · Masks", img: product1 },
  { name: "Eco Refills", count: "Refill. Reuse. Glow.", img: product2 },
  { name: "Natural Ingredients", count: "Botanical edits", img: ing1 },
];

function Categories() {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-primary mb-3">Curated For You</p>
            <h2 className="serif text-4xl md:text-6xl font-light text-olive leading-[1.05] max-w-xl">
              Shop by category
            </h2>
          </div>
          <a href="#" className="eyebrow text-olive flex items-center gap-2 group">
            All collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cats.map((c) => (
            <a
              key={c.name}
              href="#"
              className="group relative overflow-hidden rounded-[28px] bg-secondary aspect-[4/5]"
            >
              <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-olive/70 via-olive/10 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end text-cream">
                <p className="eyebrow text-cream/80 mb-2">{c.count}</p>
                <div className="flex items-end justify-between">
                  <h3 className="serif text-3xl md:text-4xl font-light transition-transform duration-500 group-hover:-translate-y-1">{c.name}</h3>
                  <span className="h-10 w-10 rounded-full bg-cream/15 backdrop-blur grid place-items-center transition-all duration-500 group-hover:bg-cream group-hover:text-olive">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Best sellers ───────────────── */
const products = [
  { name: "Sage Gentle Cleanser", tag: "Bestseller", price: 28, old: 34, img: product1, hover: product1 },
  { name: "Calendula Glow Toner", tag: "New", price: 32, old: null, img: product2, hover: product2 },
  { name: "Green Clay Renewal Mask", tag: "−15%", price: 38, old: 45, img: product3, hover: product3 },
  { name: "Botanical Lip Balm", tag: "Refillable", price: 14, old: null, img: product4, hover: product4 },
  { name: "Aloe Hydration Serum", tag: "Bestseller", price: 42, old: 48, img: product5, hover: product5 },
  { name: "Lavender Night Oil", tag: "New", price: 36, old: null, img: product6, hover: product6 },
];

function BestSellers() {
  return (
    <section className="relative py-24 md:py-32 bg-card overflow-hidden">
      <div className="blob gradient-sage h-[500px] w-[500px] -top-40 -right-40 opacity-30" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-primary mb-3">Loved By Thousands</p>
            <h2 className="serif text-4xl md:text-6xl font-light text-olive leading-[1.05] max-w-2xl">
              Best selling rituals
            </h2>
          </div>
          <p className="text-olive/70 max-w-sm">Clean, gentle, effective — the formulas our community keeps coming back for.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p) => (
            <article key={p.name} className="group bg-background rounded-[28px] p-4 md:p-5 border border-border/60 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(60,80,60,0.35)] transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-secondary">
                <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0" />
                <img src={p.hover} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover scale-105 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <span className="absolute top-4 left-4 eyebrow px-3 py-1.5 rounded-full bg-cream/95 backdrop-blur text-olive shadow-sm">
                  {p.tag}
                </span>
                <button aria-label="Wishlist" className="absolute top-4 right-4 h-10 w-10 rounded-full bg-cream/95 backdrop-blur grid place-items-center text-olive hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-5 px-1">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                  <span className="ml-1.5 text-xs text-olive/50">(248)</span>
                </div>
                <h3 className="serif text-xl md:text-2xl text-olive leading-tight">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className="text-olive font-medium text-lg">${p.price}</p>
                  {p.old && <p className="text-olive/40 text-sm line-through">${p.old}</p>}
                </div>
                <button className="mt-4 w-full bg-primary text-primary-foreground py-3.5 rounded-full text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-olive transition-all duration-500 group/btn">
                  Buy Now
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Story ───────────────── */
function Story() {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="blob gradient-sage h-[480px] w-[480px] -bottom-40 -left-40 opacity-40" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[32px] bg-olive shadow-[0_40px_80px_-40px_rgba(60,80,60,0.45)] border border-5 border-primary">
            <iframe
              src="https://www.youtube.com/embed/fNi7swY00jo?rel=0&modestbranding=1"
              title="CALM Skincare story"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          {/* <div className="absolute -bottom-8 -right-4 md:-right-8 glass rounded-2xl px-6 py-5 max-w-[220px] floaty">
            <p className="serif text-4xl text-olive">10k+</p>
            <p className="text-xs text-olive/70 leading-snug mt-1">Plastic containers diverted from landfill since 2021</p>
          </div> */}
          {/* <div className="absolute -top-6 -left-4 md:-left-8 h-16 w-16 rounded-full gradient-sage opacity-80 blur-2xl" /> */}
        </div>

        <div>
          <p className="eyebrow text-primary mb-4">Our Story</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-olive leading-[1.05]">
            Skincare with purpose.
          </h2>
          <p className="mt-6 text-olive/75 text-lg leading-relaxed max-w-lg">
            CALM combines sustainable beauty with gentle natural ingredients designed to nourish skin
            while reducing environmental impact — handmade in small batches from our Chicago studio.
          </p>
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {[
              "Handmade in Chicago",
              "Sustainable Packaging",
              "Natural Ingredients",
              "Eco Refill System",
              "Cruelty Free Always",
              "Sensitive Skin Safe",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-olive">
                <span className="h-7 w-7 rounded-full gradient-sage grid place-items-center text-primary-foreground">
                  <Leaf className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
          <button className="mt-10 inline-flex items-center gap-3 bg-olive text-cream px-7 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-primary transition-all duration-500 group">
            Learn Our Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Benefits (glass cards) ───────────────── */
function Benefits() {
  const items = [
    { icon: Leaf, t: "Natural Ingredients", d: "Safe, gentle, plant-based formulas that respect your skin barrier." },
    { icon: Recycle, t: "Sustainable Packaging", d: "Refillable glass + plastic-free outers, designed to be reused." },
    { icon: FlaskConical, t: "Handmade Quality", d: "Small batch skincare made in our Chicago studio, never mass produced." },
    { icon: ShieldCheck, t: "Sensitive Skin Safe", d: "Free from sulfates, parabens, and synthetic fragrance — every formula." },
  ];
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10 bg-secondary/60 overflow-hidden">
      <div className="blob gradient-sage h-[420px] w-[420px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="mx-auto max-w-7xl relative">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow text-primary mb-3">Why CALM</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-olive leading-[1.05]">
            Beauty that gives back.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((I) => (
            <div key={I.t} className="glass rounded-[24px] p-7 hover:-translate-y-1 transition-transform duration-500">
              <span className="h-12 w-12 rounded-full gradient-sage grid place-items-center text-primary-foreground mb-6">
                <I.icon className="h-5 w-5" />
              </span>
              <h3 className="serif text-2xl text-olive mb-2">{I.t}</h3>
              <p className="text-sm text-olive/70 leading-relaxed">{I.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Video / motion strip ───────────────── */
/* function VideoStrip() {
  const tiles = [hero1, hero3, ugc3, ugc1, hero2, ugc2, ugc4];
  const loop = [...tiles, ...tiles];
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-primary mb-3">In Motion</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-olive leading-[1.05] max-w-xl">
            Experience CALM in motion
          </h2>
        </div>
        <p className="hidden md:block max-w-xs text-olive/70 text-sm">Slow rituals, soft light, real textures. A look behind every bottle.</p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-fast hover:[animation-play-state:paused] flex gap-5 w-max">
          {loop.map((src, i) => (
            <div key={i} className="relative h-[340px] md:h-[420px] w-[260px] md:w-[320px] shrink-0 overflow-hidden rounded-[28px] bg-secondary group">
              <img src={src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-olive/40 to-transparent" />
              <span className="absolute bottom-5 left-5 h-11 w-11 rounded-full bg-cream/90 backdrop-blur grid place-items-center text-olive">
                <Play className="h-4 w-4 fill-olive" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} */


/* ───────────────── Sustainability ───────────────── */
function Sustainability() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden" style={{ background: "linear-gradient(160deg, oklch(0.25 0.03 145) 0%, oklch(0.32 0.04 145) 100%)" }}>
      <div className="blob gradient-sage h-[600px] w-[600px] -top-40 -right-40 opacity-30" />
      <div className="blob bg-beige h-[400px] w-[400px] -bottom-40 -left-20 opacity-20" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center relative">
        <div className="text-cream">
          <p className="eyebrow text-primary-foreground/80 mb-4">The Green Mission</p>
          <h2 className="serif text-4xl md:text-6xl font-light leading-[1.05]">
            Less waste. More glow.
          </h2>
          <p className="mt-6 text-cream/80 text-lg leading-relaxed max-w-lg">
            Every CALM refill keeps another bottle out of the landfill. We design packaging to be reused
            — and rituals to be cherished.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { n: "10k+", l: "Bottles refilled" },
              { n: "100%", l: "Recyclable outers" },
              { n: "0", l: "Single-use plastic" },
            ].map((s) => (
              <div key={s.l}>
                <p className="serif text-4xl md:text-5xl font-light text-primary-foreground">{s.n}</p>
                <p className="text-xs text-cream/60 mt-2 tracking-wider uppercase">{s.l}</p>
              </div>
            ))}
          </div>
          <button className="mt-10 inline-flex items-center gap-3 bg-cream text-olive px-7 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 group">
            Join The Green Mission
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <div className="relative">
          <div className="aspect-[5/6] rounded-[32px] overflow-hidden">
            <img src={sustain} alt="Sustainable refill packaging" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -left-4 md:-left-10 glass rounded-2xl p-5 max-w-[240px] floaty">
            <p className="eyebrow text-primary mb-1">Refill ritual</p>
            <p className="text-olive text-sm leading-snug">Order. Refill. Repeat. Save 20% every time you choose a refill.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
<VideoStrip />
/* ───────────────── Ingredients ───────────────── */
const ingredients = [
  { name: "Calendula", note: "Calming + healing", img: ing1 },
  { name: "Tea Tree", note: "Purifying clarity", img: ing2 },
  { name: "Lavender", note: "Soothing balance", img: ing3 },
  { name: "Aloe Vera", note: "Hydration boost", img: ing4 },
];
function Ingredients() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow text-primary mb-3">From Nature</p>
            <h2 className="serif text-4xl md:text-6xl font-light text-olive leading-[1.05] max-w-xl">
              Featured ingredients
            </h2>
          </div>
          <p className="text-olive/70 max-w-sm">Hand-selected botanicals, ethically sourced and gently formulated for sensitive skin.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {ingredients.map((i) => (
            <article key={i.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-[24px] bg-secondary">
                <img src={i.img} alt={i.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              </div>
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h3 className="serif text-2xl text-olive">{i.name}</h3>
                  <p className="text-sm text-olive/60 mt-1">{i.note}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-olive/40 mt-2 transition-all group-hover:text-primary group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Reviews ───────────────── */
const reviews = [
  { n: "Maya R.", t: "My skin has never felt softer. The refill program is a dream — I'll never buy regular skincare again.", p: "Verified · Sage Cleanser" },
  { n: "Jules K.", t: "Finally a clean brand my sensitive skin actually loves. The clay mask is pure magic.", p: "Verified · Renewal Mask" },
  { n: "Anh T.", t: "Gentle, elegant, and the packaging is gorgeous. Feels like a spa ritual at home.", p: "Verified · Glow Toner" },
  { n: "Priya S.", t: "Honest, gentle, effective. The lavender oil is now my nightly ritual — I sleep better too.", p: "Verified · Lavender Oil" },
  { n: "Sam W.", t: "Refillable, beautiful, and actually works. CALM has replaced my entire bathroom shelf.", p: "Verified · Eco Refill" },
];
function Reviews() {
  const [idx, setIdx] = useState(0);
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const calc = () => setPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  const maxIdx = Math.max(0, reviews.length - perView);
  const safeIdx = Math.min(idx, maxIdx);
  const prev = () => setIdx((p) => Math.max(0, p - 1));
  const next = () => setIdx((p) => Math.min(maxIdx, p + 1));
  return (
    <section className="py-24 md:py-32 bg-secondary/60 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-14 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary mb-3">Reviews</p>
            <h2 className="serif text-4xl md:text-6xl font-light text-olive leading-[1.05]">
              Loved, gently.
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              disabled={safeIdx === 0}
              aria-label="Previous review"
              className="h-12 w-12 rounded-full border border-olive/20 bg-card grid place-items-center text-olive hover:bg-primary hover:text-primary-foreground hover:border-primary transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              disabled={safeIdx >= maxIdx}
              aria-label="Next review"
              className="h-12 w-12 rounded-full border border-olive/20 bg-card grid place-items-center text-olive hover:bg-primary hover:text-primary-foreground hover:border-primary transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${safeIdx * (100 / perView)}%)` }}
          >
            {reviews.map((r) => (
              <div key={r.n} className="shrink-0 px-2.5" style={{ width: `${100 / perView}%` }}>
                <figure className="bg-card rounded-[24px] p-8 border border-border/60 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="serif text-2xl text-olive leading-snug">"{r.t}"</blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                    <span className="text-olive font-medium text-sm">{r.n}</span>
                    <span className="text-xs text-olive/50">{r.p}</span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── UGC gallery ───────────────── */
function UGC() {
  const tiles = [ugc1, ugc2, ugc3, ugc4, ugc5, ugc6];
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="eyebrow text-primary mb-3">@calmskincare</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-olive leading-[1.05]">
            Join the community
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiles.map((src, i) => (
            <a key={i} href="#" className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary">
              <img src={src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-olive/0 group-hover:bg-olive/40 transition-colors duration-500 grid place-items-center">
                <Instagram className="h-5 w-5 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Blog ───────────────── */
const posts = [
  { t: "5 DIY Beauty Tips From Our Studio", c: "Beauty Tips", img: blog1, d: "Mar 12, 2026", read: "4 min read", e: "Simple rituals you can mix at home — using ingredients already in your kitchen." },
  { t: "The Real Guide to Sustainable Skincare", c: "Sustainability", img: blog2, d: "Feb 28, 2026", read: "6 min read", e: "What 'eco' actually means on a label, and how to spot brands that walk the talk." },
  { t: "Best Ingredients for Sensitive Skin", c: "Ingredients", img: blog3, d: "Feb 14, 2026", read: "5 min read", e: "The botanicals our formulators trust for reactive, redness-prone complexions." },
];
function Blog() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-card">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-primary mb-3">Journal</p>
            <h2 className="serif text-4xl md:text-6xl font-light text-olive leading-[1.05] max-w-xl">
              Notes from the studio
            </h2>
          </div>
          <a href="#" className="eyebrow text-olive flex items-center gap-2 group">
            All articles <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((p) => (
            <a key={p.t} href="#" className="group bg-background rounded-[28px] overflow-hidden border border-border/60 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(60,80,60,0.35)] transition-all duration-500 flex flex-col">
              <div className="aspect-[16/11] overflow-hidden bg-secondary relative">
                <img src={p.img} alt={p.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-olive/40 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 eyebrow px-3 py-1.5 rounded-full bg-cream/95 text-olive backdrop-blur shadow-sm">{p.c}</span>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-olive/55 mb-3">
                  <span className="inline-flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /> {p.read}</span>
                  <span className="h-1 w-1 rounded-full bg-olive/30" />
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.d}</span>
                </div>
                <h3 className="serif text-2xl text-olive leading-tight group-hover:text-primary transition-colors">{p.t}</h3>
                <p className="mt-3 text-sm text-olive/65 leading-relaxed flex-1">{p.e}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary font-medium">
                  Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── CTA ───────────────── */
function CTA() {
  return (
    <section className="px-6 lg:px-10 py-12 md:py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] gradient-sage px-6 py-8 md:px-12 md:py-10 shadow-[0_30px_80px_-30px_rgba(60,80,60,0.4)]">
        <div className="blob bg-cream/20 h-[260px] w-[260px] -top-20 -right-10" />
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="text-cream max-w-xl">
            <p className="eyebrow text-cream/85 mb-2">Get 10% Off</p>
            <h2 className="serif text-2xl md:text-4xl font-light leading-tight">
              Start your natural skincare journey
            </h2>
          </div>
          <form className="flex flex-col sm:flex-row items-stretch gap-2 w-full lg:w-auto lg:min-w-[480px] bg-cream rounded-2xl sm:rounded-full p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 min-w-0 w-full bg-transparent px-5 py-3 text-olive placeholder:text-olive/40 outline-none text-sm"
            />
            <button className="w-full sm:w-auto shrink-0 bg-olive text-cream px-7 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500">
              Get 10% Off
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── First-visit email popup ───────────────── */
function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("calm_popup_seen")) return;
    const t = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(t);
  }, []);
  const close = () => {
    setOpen(false);
    try { localStorage.setItem("calm_popup_seen", "1"); } catch { /* ignore */ }
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
      <div className="absolute inset-0 bg-olive/60 backdrop-blur-sm" onClick={close} />
      <div className="relative bg-cream rounded-[28px] overflow-hidden grid md:grid-cols-2 max-w-3xl w-full shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)] animate-scale-in">
        <button onClick={close} aria-label="Close" className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-cream/90 grid place-items-center text-olive hover:bg-primary hover:text-primary-foreground transition">
          <X className="h-4 w-4" />
        </button>
        <div className="relative hidden md:block">
          <img src={hero2} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-olive/30" />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <span className="h-12 w-12 rounded-full gradient-sage grid place-items-center text-primary-foreground mb-5">
            <Gift className="h-5 w-5" />
          </span>
          <p className="eyebrow text-primary mb-2">Welcome to CALM</p>
          <h3 className="serif text-3xl md:text-4xl text-olive leading-tight">
            Get 10% off your first order
          </h3>
          <p className="mt-3 text-sm text-olive/70 leading-relaxed">
            Join our community for skincare rituals, sustainable tips, and members-only offers.
          </p>
          {submitted ? (
            <div className="mt-6 bg-primary/10 border border-primary/30 rounded-2xl p-4 text-sm text-olive">
              Welcome! Check your inbox for your <span className="font-medium">10% off</span> code.
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); try { localStorage.setItem("calm_popup_seen", "1"); } catch { /* ignore */ } }}
              className="mt-6 flex flex-col gap-2"
            >
              <input
                required
                type="email"
                placeholder="your@email.com"
                className="w-full bg-background border border-border rounded-full px-5 py-3.5 text-olive placeholder:text-olive/40 outline-none text-sm focus:border-primary transition"
              />
              <button className="w-full bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-olive transition-all duration-500 inline-flex items-center justify-center gap-2">
                Claim 10% Off <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
          <button onClick={close} className="mt-4 text-xs text-olive/50 hover:text-olive transition self-start">
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}

/* ───────────────── Footer ───────────────── */
function Footer() {
  return (
    <footer className="bg-olive text-cream pt-20 pb-10 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-cream/15">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <img src={brandLogo} alt="CALM logo" className="h-28 w-auto" />
            </div>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Handmade sustainable skincare made with love in Chicago. Eco refills, natural ingredients,
              and rituals that respect your skin and the planet.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter].map((Ic, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-cream/20 grid place-items-center hover:bg-primary hover:border-primary transition">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            { h: "Shop", l: ["All Products", "Best Sellers", "Eco Refills", "Bundles", "Gift Cards"] },
            { h: "Support", l: ["Contact", "Shipping", "Returns", "FAQ", "Wholesale"] },
            { h: "Company", l: ["Our Story", "Sustainability", "Ingredients", "Journal", "Press"] },
          ].map((col) => (
            <div key={col.h}>
              <h4 className="eyebrow text-cream/60 mb-5">{col.h}</h4>
              <ul className="space-y-3 text-sm">
                {col.l.map((i) => (
                  <li key={i}><a href="#" className="text-cream/85 hover:text-primary transition">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} CALM Skin Care. Handmade in Chicago.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-cream transition">Privacy</a>
            <a href="#" className="hover:text-cream transition">Terms</a>
            <a href="#" className="hover:text-cream transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────── Index ───────────────── */
function Index() {
  return (
    <div className="bg-background text-foreground">
      <AnnouncementBanner />
      <Header />
      <main>
        <Hero />
        <Announcement />
        <Categories />
        <BestSellers />
        <Story />
        <Benefits />
        <VideoStrip />
        <Sustainability />
        <Ingredients />
        <Reviews />
        <UGC />
        <Blog />
        <CTA />
      </main>
      <Footer />
      <WelcomePopup />
    </div>
  );
}
