"use client";

import { useEffect, useRef } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const selectors = [".reveal-up", ".reveal-down", ".reveal-left", ".reveal-right", ".reveal-scale"];
    const targets = el.querySelectorAll(selectors.join(", "));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const stats = [
  { num: "500+", label: "Students Enrolled", icon: "🎓" },
  { num: "50+", label: "Courses Available", icon: "📚" },
  { num: "20+", label: "Expert Faculty", icon: "👨‍🏫" },
  { num: "95%", label: "Success Rate", icon: "🏆" },
];

const features = [
  {
    title: "Test for Excellence",
    desc: "We conduct regular daily based and weekend tests to ensure the progress of the students. The weekend test will be based on the lessons taught in that week. Once a month, students are asked to write \"TEST SERIES\" — a monthly test in all subjects to check their level of understanding.",
    accent: "indigo",
    num: "01",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Commitment to Excellence",
    desc: "Our mission is to embrace the pursuit of excellence both inside and outside the classroom. We encourage critical thinking and emphasize the learning process over rote memorization to build lifelong learners.",
    accent: "cyan",
    num: "02",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0" />
      </svg>
    ),
  },
  {
    title: "Students Life",
    desc: "Our student culture plays a key role in the experience at Invent Institute of Mathematics & Science. We've created a safe and accessible environment where students are encouraged to collaborate, share their work and receive feedback with pride.",
    accent: "violet",
    num: "03",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" />
      </svg>
    ),
  },
  {
    title: "Courses Offered",
    desc: "We offer regular and weekend classes to students for all various boards of education. We train students for competitive exams, building a solid foundation for academic success and future excellence.",
    accent: "dark",
    num: "04",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489" />
      </svg>
    ),
  },
];

export default function Home() {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef} className="bg-transparent">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-complex absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-300/40 blur-[100px]" />
          <div className="blob-complex blob-d2 absolute top-1/4 right-0 h-96 w-96 rounded-full bg-cyan-300/40 blur-[80px]" />
          <div className="blob-complex blob-d3 absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-violet-300/30 blur-[90px]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(79,70,229,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(79,70,229,0.2) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom,white,transparent)",
            WebkitMaskImage: "linear-gradient(to bottom,white,transparent)",
          }}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 pt-32 pb-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="anim-right inline-block">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-5 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                </span>
                Join Our Family
              </span>
            </div>
            <h1 className="anim-up text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.2s" }}>
              Invent Institute of{" "}
              <br className="hidden lg:block" />
              <span className="shimmer bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Mathematics &amp; Science
              </span>
            </h1>
            <p className="anim-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0" style={{ animationDelay: "0.4s" }}>
              Creating Innovations — Empowering students with academic excellence, critical thinking, and the confidence to excel in every field.
            </p>
            <div className="anim-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start" style={{ animationDelay: "0.6s" }}>
              <a href="/academics" className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-premium transition-all hover:scale-105 hover:bg-indigo-500 hover:shadow-premium-hover active:scale-95">
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span>Explore Academics</span>
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-200 bg-white/50 px-8 py-4 text-sm font-bold text-slate-700 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-indigo-500 hover:bg-white hover:text-indigo-600 hover:shadow-premium">
                Contact Us
              </a>
            </div>
          </div>

          {/* Institute Image Card */}
          <div className="anim-fade relative w-full max-w-lg lg:ml-auto" style={{ animationDelay: "0.6s" }}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-cyan-400 to-violet-500 opacity-30 blur-3xl scale-105" />
            <div className="glass-panel relative overflow-hidden rounded-3xl shadow-premium border border-white/60">
              <div className="relative h-72 sm:h-80 lg:h-96 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/institute.jpg"
                  alt="Invent Institute of Mathematics & Science building"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">Our Campus</p>
                    <p className="mt-0.5 text-base font-bold text-white">Invent Institute of M&amp;S</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Est. 2010
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-4 divide-x divide-slate-200/50 bg-white/70 backdrop-blur-md">
                {stats.map((s) => (
                  <div key={s.label} className="group flex flex-col items-center py-4 transition-all duration-300 hover:bg-indigo-50/60">
                    <span className="text-xl transition-transform duration-300 group-hover:scale-125">{s.icon}</span>
                    <span className="mt-1 text-base font-black text-slate-900">{s.num}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 text-center leading-tight px-1">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Scroll Down</span>
          <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-slate-300">
            <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-500" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="relative overflow-hidden bg-slate-900 py-10 shadow-inner">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-10" />
        <div className="marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-16 px-8">
              {["Academic Excellence", "Critical Thinking", "Innovation", "Collaboration", "Leadership", "Integrity", "Creativity"].map((word) => (
                <span key={word + i} className="flex items-center gap-6 text-2xl font-bold uppercase tracking-[0.1em] text-white/50 transition-all hover:text-white">
                  {word}
                  <span className="text-indigo-500/50">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Academics / Features — 2×2 Editorial Grid ── */}
      <section id="academics" className="relative bg-transparent py-28 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%,rgba(99,102,241,0.05) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(6,182,212,0.04) 0%,transparent 40%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Section header */}
          <div className="reveal-up mb-16 text-center">
            <span className="inline-block rounded-full border border-indigo-200 bg-white px-5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.25em] text-indigo-500 shadow-sm">
              Academic Span
            </span>
            <h2 className="mt-5 text-4xl font-black text-slate-900 sm:text-5xl">
              What Sets Us <span className="text-indigo-600">Apart</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-slate-500">
              A holistic approach to education that nurtures curiosity and drives academic excellence.
            </p>
          </div>

          {/* 2×2 card grid */}
          <div
            className="grid sm:grid-cols-2 overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 0 0 1px rgba(99,102,241,0.1), 0 25px 60px -20px rgba(99,102,241,0.15), 0 8px 20px -8px rgba(0,0,0,0.06)" }}
          >

            {/* Card 1 — Test for Excellence */}
            <div className="reveal-left group relative overflow-hidden border-b border-r border-slate-200/70 bg-white p-10 transition-all duration-500 hover:bg-indigo-50/30">
              {/* animated left-border accent */}
              <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-r bg-gradient-to-b from-indigo-500 to-indigo-300 transition-transform duration-500 group-hover:scale-y-100" />
              {/* subtle glow */}
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-indigo-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white"
                  style={{ boxShadow: "0 4px 14px rgba(99,102,241,0.15)" }}
                >
                  {features[0].icon}
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-400 transition-colors group-hover:text-indigo-600">{features[0].num}</p>
                <h3 className="mt-1 text-lg font-black uppercase tracking-wide text-slate-900">{features[0].title}</h3>
                <div className="my-4 h-px w-8 bg-indigo-200 transition-all duration-500 group-hover:w-16 group-hover:bg-indigo-500" />
                <p className="text-sm leading-relaxed text-slate-500">{features[0].desc}</p>
              </div>
            </div>

            {/* Card 2 — Commitment to Excellence */}
            <div className="reveal-right group relative overflow-hidden border-b border-slate-200/70 bg-white p-10 transition-all duration-500 hover:bg-cyan-50/30" style={{ transitionDelay: "80ms" }}>
              <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-r bg-gradient-to-b from-cyan-500 to-cyan-300 transition-transform duration-500 group-hover:scale-y-100" />
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-all duration-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white"
                  style={{ boxShadow: "0 4px 14px rgba(6,182,212,0.15)" }}
                >
                  {features[1].icon}
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-400 transition-colors group-hover:text-cyan-600">{features[1].num}</p>
                <h3 className="mt-1 text-lg font-black uppercase tracking-wide text-slate-900">{features[1].title}</h3>
                <div className="my-4 h-px w-8 bg-cyan-200 transition-all duration-500 group-hover:w-16 group-hover:bg-cyan-500" />
                <p className="text-sm leading-relaxed text-slate-500">{features[1].desc}</p>
              </div>
            </div>

            {/* Card 3 — Students Life */}
            <div className="reveal-left group relative overflow-hidden border-r border-slate-200/70 bg-white p-10 transition-all duration-500 hover:bg-violet-50/30" style={{ transitionDelay: "160ms" }}>
              <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-r bg-gradient-to-b from-violet-500 to-violet-300 transition-transform duration-500 group-hover:scale-y-100" />
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-violet-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-all duration-400 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white"
                  style={{ boxShadow: "0 4px 14px rgba(139,92,246,0.15)" }}
                >
                  {features[2].icon}
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-400 transition-colors group-hover:text-violet-600">{features[2].num}</p>
                <h3 className="mt-1 text-lg font-black uppercase tracking-wide text-slate-900">{features[2].title}</h3>
                <div className="my-4 h-px w-8 bg-violet-200 transition-all duration-500 group-hover:w-16 group-hover:bg-violet-500" />
                <p className="text-sm leading-relaxed text-slate-500">{features[2].desc}</p>
              </div>
            </div>

            {/* Card 4 — Courses Offered (dark accent) */}
            <div className="reveal-right group relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 p-10" style={{ transitionDelay: "240ms" }}>
              {/* Decorative rings */}
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full border border-white/10 transition-all duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute -right-4 -bottom-4 h-28 w-28 rounded-full border border-white/10 transition-all duration-700 group-hover:scale-125" />
              <div className="pointer-events-none absolute right-10 bottom-10 h-10 w-10 rounded-full bg-white/5" />
              <div className="relative z-10">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white transition-all duration-400 group-hover:scale-110 group-hover:bg-white/25"
                  style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.25)" }}
                >
                  {features[3].icon}
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-300">{features[3].num}</p>
                <h3 className="mt-1 text-lg font-black uppercase tracking-wide text-white">{features[3].title}</h3>
                <div className="my-4 h-px w-8 bg-white/25 transition-all duration-500 group-hover:w-16 group-hover:bg-white/60" />
                <p className="text-sm leading-relaxed text-indigo-200">{features[3].desc}</p>
                <a
                  href="#admissions"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-indigo-700"
                  style={{ boxShadow: "0 0 0 0 rgba(255,255,255,0)" }}
                >
                  Course Details
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="relative overflow-hidden bg-slate-900 py-16 lg:py-20">
        <div className="animate-bg-pan absolute inset-0 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-900 opacity-80" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="spin-slow h-[400px] w-[400px] rounded-full border border-white/5" />
          <div className="spin-slow h-[600px] w-[600px] rounded-full border border-indigo-500/10" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
          <div className="spin-slow h-[800px] w-[800px] rounded-full border border-white/5" style={{ animationDirection: "reverse", animationDuration: "20s" }} />
        </div>
        <div className="reveal-up relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="glass-panel-dark mx-auto max-w-2xl rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(79,70,229,0.2)]">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-indigo-300 backdrop-blur-md">
              Admissions Open 2026
            </span>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl drop-shadow-md">
              Begin Your Journey
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">With IIMS</span>
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Applications are now open for all programs. Secure your spot and become part of a community dedicated to academic excellence.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-900 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:bg-indigo-50 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer is rendered globally via layout.tsx */}
    </div>
  );
}
