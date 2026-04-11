"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const selectors = [".reveal-up", ".reveal-down", ".reveal-left", ".reveal-right"];
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
      { threshold: 0.1 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function AcademicsPage() {
  const scrollRef = useScrollReveal();

  const courses = [
    {
      title: "SCHOOL SUBJECTS",
      desc: "General Mathematics, Physics, Chemistry, Biology, Business Mathematics, Accountancy",
    },
    {
      title: "STD. 7-10TH (SCERT, NCERT, IGCSE)",
      desc: "Mathematics & Science",
    },
    {
      title: "STD. 11&12TH (SCERT, NCERT, IGCSE)",
      desc: "General Mathematics, Physics, Chemistry, Biology, Business Mathematics, Accountancy",
    },
    {
      title: "UG Courses Offered",
      desc: "Engineering Mathematics - M1, M2, M3\nProbability and Statistics and other courses",
    },
    {
      title: "Computer Courses",
      desc: "Python, Web development, MERN, Java, Javascript, C++, C, PHP",
    },
  ];

  const features = [
    {
      title: "Worth of this platform",
      image: "/worth_platform.png",
      desc: "This platform enhances the progress of students. Students can able to self-analyze their academics.",
    },
    {
      title: "Experienced staffs",
      image: "/experienced_staff.png",
      desc: "Our experienced and well-trained faculties from reputed institutions who enlights the students from their ignorance and inferiority complex.",
    },
    {
      title: "Orientation For Students Success",
      image: "/orientation_success.png",
      desc: "We toil students to face their shortcomings and helps to crack their competitive exams like NEET and JEE in their respective fields. Skills like LSRW, communication skills, and other skills are developed for all our inventories.",
    },
    {
      title: "Our results",
      image: "/our_results.png",
      desc: "We have prompt and centum results every year and we also provide them a motivation to choose the right path of their success via the Career guidance program.",
    },
  ];

  return (
    <main ref={scrollRef} className="min-h-screen bg-transparent pt-24 pb-20">
      
      {/* ── Hero Section ── */}
      <section className="relative mx-auto mt-4 max-w-7xl px-4 sm:px-6">
        <div className="relative h-[250px] sm:h-[350px] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-premium flex items-center justify-center">
          {/* Abstract blobs matching theme */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-indigo-500 blur-[80px]" />
            <div className="absolute top-1/4 right-0 h-[300px] w-[300px] rounded-full bg-cyan-400 blur-[80px]" />
          </div>
          {/* Overlay pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          {/* Title */}
          <div className="relative z-10 text-center anim-up">
            <h1 className="text-4xl font-extrabold uppercase tracking-[0.2em] text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
              Our Academics
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-indigo-500 opacity-80" />
          </div>
        </div>
      </section>

      {/* ── Offered Courses Section ── */}
      <section className="relative mx-auto mt-24 max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="lg:w-1/3 reveal-up">
            <h2 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-indigo-500">
              Curriculum Map
            </h2>
            <h3 className="mt-3 text-3xl font-black text-slate-900 uppercase">
              Offered Courses
            </h3>
            <p className="mt-4 text-justify text-sm leading-relaxed text-slate-500">
              We offer a wide range of academic subjects and professional skill courses to build a solid foundation and keep you ahead in modern competitive scenarios.
            </p>
          </div>
          <div className="lg:w-2/3">
            <div className="flex flex-col gap-8">
              {courses.map((course, idx) => (
                <div key={idx} className="reveal-left group relative pl-8 border-l-2 border-indigo-100 transition-colors duration-300 hover:border-indigo-400" style={{ transitionDelay: `${idx * 100}ms` }}>
                   <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-slate-50 bg-indigo-200 transition-all duration-300 group-hover:scale-125 group-hover:bg-indigo-500 group-hover:border-indigo-100" />
                   <h4 className="text-lg font-bold text-slate-800 transition-colors group-hover:text-indigo-700">
                     {course.title}
                   </h4>
                   <p className="mt-2 text-justify text-sm leading-relaxed text-slate-600 whitespace-pre-line">
                     {course.desc}
                   </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto my-20 max-w-5xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ── Features Section ── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="reveal-up mb-12 text-center lg:text-left">
          <h2 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-indigo-500">
            Why Choose Us
          </h2>
          <h3 className="mt-3 text-3xl font-black text-slate-900 uppercase">
            Features
          </h3>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="reveal-up group flex flex-col overflow-hidden rounded-3xl bg-white border-2 border-slate-300 hover:border-indigo-400 transition-all duration-500 hover:-translate-y-2"
              style={{ 
                boxShadow: "0 8px 30px -4px rgba(99,102,241,0.18), 0 4px 12px -2px rgba(0,0,0,0.12)",
                transitionDelay: `${idx * 150}ms`
              }}
            >
              {/* Header Title */}
              <div className="bg-slate-50 border-b border-slate-100 flex items-center justify-center py-5 px-6">
                 <h4 className="text-center text-lg font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
                   {feature.title}
                 </h4>
              </div>
              
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Description Body */}
              <div className="flex grow flex-col bg-slate-50 px-8 py-6 items-center justify-center border-t border-slate-100">
                <p className="text-justify text-sm leading-relaxed text-slate-600">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer is rendered globally via layout.tsx */}
    </main>
  );
}
