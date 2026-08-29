"use client";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";

const signature = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const IntroSection = () => {
  return (
    <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top meta bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-white/[0.06] text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-500">
          <span>Full Stack · Backend Focused · Bangkok</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#e5e5e5] animate-pulse" />
            Available for work
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_0.75fr] gap-0 items-stretch">
          {/* Left — main intro */}
          <div className="py-12 lg:py-16 xl:py-20 lg:pr-10 xl:pr-12 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 border border-white/[0.06] px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-400 mb-10">
              <span className="w-1.5 h-1.5 bg-[#e5e5e5]" />
              System Design · Microservices · Distributed Systems
            </div>

            {/* F1 signature style — Sai on top, ZAYAR HEIN — hover wheel spin */}
            <div className="relative inline-block mb-6 mt-4 pt-2 group/sai">
              <span
                className={`${signature.className} absolute -top-5 sm:-top-6 lg:-top-7 left-0 sm:-left-2 text-[48px] sm:text-[60px] lg:text-[66px] leading-none text-[#e10600] -rotate-[6deg] select-none cursor-pointer transition-transform duration-300 group-hover/sai:-rotate-[8deg] group-hover/sai:scale-[1.03]`}
                style={{ textShadow: "0 1px 0 rgba(0,0,0,0.4)" }}
              >
                Sai
                {/* F1 wheel — spins + obvious smoke behind & after */}
                <span className="absolute -right-5 sm:-right-6 top-[56%] -translate-y-1/2 opacity-0 group-hover/sai:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {/* smoke plume — behind + after wheel (left trail) */}
                  <span className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-visible">
                    {/* dense behind */}
                    <span className="absolute right-3 w-8 h-3 sm:w-9 sm:h-3.5 bg-white/45 rounded-full blur-[2px] opacity-0 group-hover/sai:opacity-100 group-hover/sai:animate-[smoke-drift_0.75s_ease-out_infinite]" />
                    <span className="absolute right-1 w-6 h-2.5 sm:w-7 sm:h-3 bg-white/35 rounded-full blur-[2px] opacity-0 group-hover/sai:opacity-100 group-hover/sai:animate-[smoke-drift-2_0.9s_ease-out_0.12s_infinite]" />
                    {/* trailing after wheel */}
                    <span className="absolute -left-2 w-10 h-4 sm:w-11 sm:h-5 bg-white/25 rounded-full blur-[3px] opacity-0 group-hover/sai:opacity-100 group-hover/sai:animate-[smoke-drift_1.05s_ease-out_0.18s_infinite]" />
                    <span className="absolute -left-5 w-7 h-2.5 sm:w-8 sm:h-3 bg-white/20 rounded-full blur-[2.5px] opacity-0 group-hover/sai:opacity-100 group-hover/sai:animate-[smoke-drift-2_1.15s_ease-out_0.32s_infinite]" />
                    <span className="absolute -left-8 w-5 h-2 bg-white/15 rounded-full blur-[3px] opacity-0 group-hover/sai:opacity-100 group-hover/sai:animate-[smoke-drift_0.85s_ease-out_0.4s_infinite]" />
                  </span>
                  <span className="block group-hover/sai:animate-spin" style={{ animationDuration: "0.38s" }}>
                    <svg
                      viewBox="0 0 40 40"
                      width="24"
                      height="24"
                      className="sm:w-[28px] sm:h-[28px]"
                      aria-hidden
                    >
                      {/* Pirelli P Zero slick — soft compound */}
                      {/* tire sidewall */}
                      <circle cx="20" cy="20" r="18.2" fill="#050505" stroke="#1a1a1a" strokeWidth="1" />
                      <circle cx="20" cy="20" r="14.2" fill="none" stroke="#222" strokeWidth="1.6" />
                      {/* yellow soft stripe + P ZERO text on sidewall */}
                      <circle cx="20" cy="20" r="15.8" fill="none" stroke="#facc15" strokeWidth="0.9" opacity="0.95" />
                      <g fontFamily="monospace" fontSize="3.2" fontWeight="800" fill="#facc15" textAnchor="middle" letterSpacing="0.6">
                        <text x="20" y="7.8" transform="rotate(0 20 20)">P ZERO</text>
                        <text x="20" y="7.8" transform="rotate(180 20 20)">P ZERO</text>
                      </g>
                      {/* subtle tread */}
                      <circle cx="20" cy="20" r="18.2" fill="none" stroke="#2a2a2a" strokeWidth="0.35" strokeDasharray="0.7 1.1" opacity="0.6" />
                      {/* rim barrel */}
                      <circle cx="20" cy="20" r="10.2" fill="#111" stroke="#2a2a2a" strokeWidth="0.6" />
                      {/* rim face — BBS style 5-spoke */}
                      <circle cx="20" cy="20" r="9.2" fill="#d6d6d6" stroke="#a3a3a3" strokeWidth="0.5" />
                      <circle cx="20" cy="20" r="8.2" fill="none" stroke="#9a9a9a" strokeWidth="0.35" opacity="0.7" />
                      {/* 5 thick spokes */}
                      <g fill="#c2c2c2" stroke="#0a0a0a" strokeWidth="0.35">
                        <path d="M20 11.8 L22.1 11.8 L21 16.6 L19 16.6 Z" />
                        <path d="M20 11.8 L22.1 11.8 L21 16.6 L19 16.6 Z" transform="rotate(72 20 20)" />
                        <path d="M20 11.8 L22.1 11.8 L21 16.6 L19 16.6 Z" transform="rotate(144 20 20)" />
                        <path d="M20 11.8 L22.1 11.8 L21 16.6 L19 16.6 Z" transform="rotate(216 20 20)" />
                        <path d="M20 11.8 L22.1 11.8 L21 16.6 L19 16.6 Z" transform="rotate(288 20 20)" />
                      </g>
                      {/* lug holes */}
                      <g fill="#0a0a0a">
                        <circle cx="20" cy="13.2" r="0.85" />
                        <circle cx="20" cy="13.2" r="0.85" transform="rotate(72 20 20)" />
                        <circle cx="20" cy="13.2" r="0.85" transform="rotate(144 20 20)" />
                        <circle cx="20" cy="13.2" r="0.85" transform="rotate(216 20 20)" />
                        <circle cx="20" cy="13.2" r="0.85" transform="rotate(288 20 20)" />
                      </g>
                      {/* center lock nut — anodized */}
                      <circle cx="20" cy="20" r="3.8" fill="#e10600" stroke="#7f1d1d" strokeWidth="0.6" />
                      <circle cx="20" cy="20" r="2.3" fill="#0a0a0a" />
                      <circle cx="20" cy="20" r="1.1" fill="#e5e5e5" opacity="0.95" />
                    </svg>
                  </span>
                </span>
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.8rem] xl:text-[5.2rem] font-black tracking-[-0.05em] leading-[0.85] text-[#e5e5e5] pt-6 sm:pt-8">
                ZAYAR HEIN
                <span className="align-super text-[11px] tracking-[0.3em] font-mono font-normal text-neutral-500 ml-2 sm:ml-3">
                  / PrimeSlade
                </span>
              </h1>
            </div>

            <div className="h-px w-full bg-white/[0.06] my-6" />

            <p className="text-[14px] sm:text-[15px] leading-7 text-neutral-400 max-w-[60ch] font-mono">
              Full Stack Software Engineer with backend expertise. I work with
              <span className="text-[#60a5fa]"> TypeScript</span>,
              <span className="text-[#fb923c]"> Java</span> and
              <span className="text-[#4ade80]"> Node.js</span> —{" "}
              <span className="text-neutral-500">
                React / Next.js / NestJS / Express / Hono
              </span>
              . Passionate about scalable systems, database optimization and
              robust APIs. Focused on distributed systems and system design.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.12em] uppercase">
              <span className="px-3 py-2 bg-[#e5e5e5] text-[#0a0a0a] font-bold">
                Backend-first
              </span>
              <span className="px-3 py-2 border border-white/[0.08] text-neutral-400">
                System Design
              </span>
              <span className="px-3 py-2 border border-white/[0.08] text-neutral-400">
                Microservices
              </span>
              <span className="px-3 py-2 border border-white/[0.08] text-neutral-400">
                DSA
              </span>
            </div>

            <div className="mt-8 flex gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[#e5e5e5] text-[#0a0a0a] px-6 py-3 text-[12px] tracking-[0.15em] uppercase font-bold hover:bg-white transition-colors"
              >
                View Projects <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/[0.08] text-[#e5e5e5] px-6 py-3 text-[12px] tracking-[0.15em] uppercase font-mono hover:bg-white/5 hover:border-white/10 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right — minimalist info panel */}
          <div className="py-8 lg:py-16 xl:py-20 lg:pl-8 xl:pl-10 flex flex-col gap-3">
            {/* Index card */}
            <div className="border border-white/[0.06] bg-[#111111]">
              <div className="flex items-center px-4 py-2.5 border-b border-white/[0.06]">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                  Index — 001 / Profile
                </span>
              </div>

              {/* Large year mark */}
              <div className="px-4 pt-6 pb-4 flex items-baseline justify-between gap-4 border-b border-white/[0.06]">
                <span className="text-[64px] sm:text-[72px] font-black leading-none tracking-[-0.06em] text-[#e5e5e5]">
                  ’26
                </span>
                <div className="text-right">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                    Est.
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#e5e5e5]">
                    Bangkok
                  </div>
                  <div className="font-mono text-[10px] text-neutral-600 mt-1">
                    Remote — Global
                  </div>
                </div>
              </div>

              {/* Details table */}
              <div className="divide-y divide-white/[0.06] font-mono text-[11px]">
                {[
                  { k: "Role", v: "Full Stack Engineer" },
                  { k: "Focus", v: "Backend · System Design" },
                  { k: "Stack", v: "TS / Java / React / Node.js" },
                  { k: "Status", v: "Available for work" },
                ].map((row) => (
                  <div key={row.k} className="flex">
                    <span className="w-[72px] shrink-0 px-4 py-2.5 tracking-[0.18em] uppercase text-neutral-500 border-r border-white/[0.06] bg-[#0a0a0a]">
                      {row.k}
                    </span>
                    <span className="px-4 py-2.5 text-neutral-300 tracking-[0.06em]">
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats — brutalist 2-col */}
            <div className="grid grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
              {[
                { k: "Projects", v: "07+" },
                { k: "Focus", v: "Backend" },
              ].map((s) => (
                <div key={s.k} className="bg-[#0a0a0a] px-3 py-4 text-center">
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500">
                    {s.k}
                  </div>
                  <div className="font-black text-[18px] tracking-[-0.03em] text-[#e5e5e5] mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Links strip */}
            <div className="border border-white/[0.06] bg-[#0a0a0a] divide-y divide-white/[0.06]">
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
                  className="flex items-center justify-between px-4 py-3 font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-400 hover:bg-white/[0.04] hover:text-[#e5e5e5] transition-colors group"
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    size={12}
                    className="text-neutral-600 group-hover:text-[#e5e5e5] group-hover:translate-x-0.5 transition-all"
                  />
                </Link>
              ))}
            </div>

            {/* Bottom hairline caption */}
            <div className="flex items-center gap-2 px-1 pt-1 font-mono text-[10px] tracking-[0.16em] uppercase text-neutral-600">
              <span className="w-6 h-px bg-white/10" />
              Minimal · Fast · Reliable
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
