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

export default function ContactPage() {
  const scrollRef = useScrollReveal();

  return (
    <main ref={scrollRef} className="min-h-screen bg-transparent pt-32 pb-20">
      <section className="relative mx-auto max-w-5xl px-6">
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-100/50 blur-[100px]" />
        <div className="relative">
          <div className="reveal-up text-center">
            <span className="inline-block rounded-full bg-indigo-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
              Get in Touch
            </span>
            <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">We&apos;d Love to Hear From You</h2>
            <p className="mt-4 text-lg text-slate-500">Have questions? Reach out and our team will get back to you shortly.</p>
          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-12">
            <div className="reveal-right flex-1 rounded-3xl bg-slate-900 p-10 text-white shadow-premium">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="mt-4 text-slate-400">Fill up the form and our team will get back to you within 24 hours.</p>
              <div className="mt-10 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-indigo-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-indigo-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-semibold">contact@iims.edu</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="reveal-left flex-[1.5] rounded-3xl border border-slate-200 bg-white p-10 shadow-premium">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/20" />
                </div>
              </div>
              <div className="mt-6">
                <label className="mb-2 block text-sm font-bold text-slate-700">Subject</label>
                <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/20" />
              </div>
              <div className="mt-6">
                <label className="mb-2 block text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/20" />
              </div>
              <button type="submit" className="mt-8 w-full rounded-xl bg-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-indigo-500/50">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
