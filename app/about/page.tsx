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

export default function AboutPage() {
  const scrollRef = useScrollReveal();

  return (
    <main ref={scrollRef} className="min-h-screen bg-transparent pt-32 pb-24 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Page Header */}
        <div className="reveal-up mb-16 text-center">
          <h1 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">Our Story &amp; Vision</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Discover the origins, the passion, and the core values that drive Invent Institute of Mathematics &amp; Science.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* Section 1: Origin */}
          <section className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="reveal-right relative w-full lg:w-1/2">
              <div className="absolute -inset-4 rounded-3xl bg-indigo-200/50 blur-xl"></div>
              {/* Using local institute image if available, else fallback to a nice building */}
              <img 
                src="/institute.jpg" 
                alt="IIMS Institute Building" 
                className="relative z-10 w-full rounded-2xl object-cover shadow-2xl h-[400px]"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" }}
              />
            </div>
            <div className="reveal-left w-full lg:w-1/2 text-center lg:text-right">
              <h2 className="mb-6 text-2xl font-black uppercase tracking-widest text-indigo-900">Origin of IIMS</h2>
              <div className="flex flex-col gap-4 text-justify text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  Invent Institute of Mathematics &amp; Science was founded with one purpose: to build a space for all students to grow, learn and create with each passing day. Through a unique teaching approach and a truly passionate staff, we help students develop academically and personally to the highest level.
                </p>
                <p>
                  We invite you to explore our site and discover the academics and community Invent Institute of Mathematics &amp; Science provides to each and every student. Get in touch with us today to schedule a tour, learn more about enrollment, or ask any other questions.
                </p>
                <p>
                  Since 2012, we have been conducting intensive &amp; structured coaching programs for 10th, +1, +2, and Engineering students. Our classes are designed to provide a deep insight into the subjects and the much-needed practice to extract the best performance out of our students. Our results in the past reflect our successful performance. Many of our students have done exceptionally well in the board and engineering exams and have joined professional streams in prestigious institutions like Bits Pilani, IITs, Anna University, NITs, and Top MNC&apos;s like Infosys, TCS, CTS, etc., and esteemed Engineering Colleges.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: What We Offer */}
          <section className="flex flex-col-reverse items-center gap-12 lg:flex-row">
            <div className="reveal-right w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="mb-6 text-2xl font-black uppercase tracking-widest text-indigo-900">What We Offer Our Students?</h2>
              <p className="text-justify text-base leading-relaxed text-slate-600">
                Students are our children, our kids. We invent faculties who even care about their psychological or mental health. We often make our students feel stress-free by conducting small, meaningful programs within the institution.
              </p>
            </div>
            <div className="reveal-left relative w-full lg:w-1/2">
              <div className="absolute -inset-4 rounded-3xl bg-cyan-200/50 blur-xl"></div>
              <img 
                src="/classroom.png" 
                alt="Students in a classroom" 
                className="relative z-10 w-full rounded-2xl object-cover shadow-2xl h-[350px]"
              />
            </div>
          </section>

          {/* Section 3: Friendly Conversations */}
          <section className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="reveal-right relative w-full lg:w-1/2">
              <div className="absolute -inset-4 rounded-3xl bg-violet-200/50 blur-xl"></div>
              <img 
                src="/graduation.png" 
                alt="Students throwing graduation caps" 
                className="relative z-10 w-full rounded-2xl object-cover shadow-2xl h-[350px]"
              />
            </div>
            <div className="reveal-left w-full lg:w-1/2 text-center lg:text-right">
              <h2 className="mb-6 text-2xl font-black uppercase tracking-widest text-indigo-900">Friendly Conversations</h2>
              <p className="text-justify text-base leading-relaxed text-slate-600">
                We make students have healthy conversations among themselves about their subjects, creating a way to keep themselves updated. And sometimes, quizzes and hackathons will be conducted to test their critical thinking skills. This makes students overcome their inferiority and gives them more confidence in interactions with others.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
