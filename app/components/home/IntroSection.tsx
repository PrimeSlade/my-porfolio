"use client";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const IntroSection = () => {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top meta bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-white/10 text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-500">
          <span>Full Stack · Backend Focused · Bangkok</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white animate-pulse" />
            Available for work
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_0.75fr] gap-0 items-stretch">
          {/* Left — main intro */}
          <div className="py-12 lg:py-16 xl:py-20 lg:pr-10 xl:pr-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-400 mb-8">
              <span className="w-1.5 h-1.5 bg-white" />
              System Design · Microservices · Distributed Systems
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.8rem] xl:text-[5.2rem] font-black tracking-[-0.04em] leading-[0.85] mb-6">
              Sai Zayar
              <br />
              <span className="text-neutral-600">Hein</span>
              <span className="align-super text-[11px] tracking-[0.3em] font-mono font-normal text-neutral-500 ml-3">
                / PrimeSlade
              </span>
            </h1>

            <div className="h-px w-full bg-white/10 my-6" />

            <p className="text-[14px] sm:text-[15px] leading-7 text-neutral-400 max-w-[60ch] font-mono">
              Full Stack Software Engineer with backend expertise. I work with
              <span className="text-white"> TypeScript</span>,
              <span className="text-white"> Java</span>,
              <span className="text-white"> React</span> and
              <span className="text-white"> Node.js</span> —{" "}
              <span className="text-neutral-500">NestJS / Express / Hono</span>
              . Passionate about scalable systems, database optimization and
              robust APIs. Focused on distributed systems and system design.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.12em] uppercase">
              <span className="px-3 py-2 bg-white text-black font-bold">
                Backend-first
              </span>
              <span className="px-3 py-2 border border-white/15 text-neutral-300">
                System Design
              </span>
              <span className="px-3 py-2 border border-white/15 text-neutral-300">
                Microservices
              </span>
              <span className="px-3 py-2 border border-white/15 text-neutral-300">
                DSA
              </span>
            </div>

            <div className="mt-8 flex gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-neutral-200 transition-colors"
              >
                View Projects <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-[12px] tracking-[0.15em] uppercase font-mono hover:bg-white hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right — minimalist info panel (replaces code window) */}
          <div className="py-8 lg:py-16 xl:py-20 lg:pl-8 xl:pl-10 flex flex-col gap-3">
            {/* Index card */}
            <div className="border border-white/10 bg-[#050505]">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  Index — 001 / Profile
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white border border-white/10 px-1.5 py-0.5">
                  2024 — 2026
                </span>
              </div>

              {/* Large year mark */}
              <div className="px-4 pt-6 pb-4 flex items-baseline justify-between gap-4 border-b border-white/10">
                <span className="text-[64px] sm:text-[72px] font-black leading-none tracking-[-0.06em] text-white">
                  ’26
                </span>
                <div className="text-right">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                    Est.
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-white">
                    Bangkok
                  </div>
                  <div className="font-mono text-[10px] text-neutral-600 mt-1">
                    Remote — Global
                  </div>
                </div>
              </div>

              {/* Details table */}
              <div className="divide-y divide-white/10 font-mono text-[11px]">
                {[
                  { k: "Role", v: "Full Stack Engineer" },
                  { k: "Focus", v: "Backend · System Design" },
                  { k: "Stack", v: "TS / Java / React / Node.js" },
                  { k: "Status", v: "Available for work" },
                ].map((row) => (
                  <div key={row.k} className="flex">
                    <span className="w-[72px] shrink-0 px-4 py-2.5 tracking-[0.18em] uppercase text-neutral-500 border-r border-white/10 bg-black">
                      {row.k}
                    </span>
                    <span className="px-4 py-2.5 text-neutral-300 tracking-[0.06em]">
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats — brutalist 3-col */}
            <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10">
              {[
                { k: "Projects", v: "07+" },
                { k: "Experience", v: "2 Yrs" },
                { k: "Focus", v: "Backend" },
              ].map((s) => (
                <div key={s.k} className="bg-black px-3 py-4 text-center">
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500">
                    {s.k}
                  </div>
                  <div className="font-black text-[18px] tracking-[-0.03em] text-white mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Links strip */}
            <div className="border border-white/10 bg-black divide-y divide-white/10">
              {[
                {
                  label: "GitHub — @PrimeSlade",
                  href: "https://github.com/PrimeSlade",
                  external: true,
                },
                {
                  label: "Email — saib6064@gmail.com",
                  href: "mailto:saib6064@gmail.com",
                  external: false,
                },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  className="flex items-center justify-between px-4 py-3 font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-400 hover:bg-white hover:text-black transition-colors group"
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    size={12}
                    className="text-neutral-600 group-hover:text-black group-hover:translate-x-0.5 transition-all"
                  />
                </Link>
              ))}
            </div>

            {/* Bottom hairline caption */}
            <div className="flex items-center gap-2 px-1 pt-1 font-mono text-[10px] tracking-[0.16em] uppercase text-neutral-600">
              <span className="w-6 h-px bg-white/20" />
              Minimal · Fast · Reliable
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
