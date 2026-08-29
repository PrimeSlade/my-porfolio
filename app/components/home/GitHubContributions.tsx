"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ArrowUpRight, Github } from "lucide-react";

const GitHubContributions = () => {
  const username = "PrimeSlade";
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => r.json())
      .then((d) => {
        if (d?.total?.lastYear != null) setTotal(d.total.lastYear);
      })
      .catch(() => {});
  }, []);

  // GitHub green — exact GitHub palette, 0 rounded via blockRadius={0}
  const greenTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section id="github" className="bg-black border-t border-white/10">
      {/* Header — linked to profile */}
      <div className="border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-end justify-between gap-4">
          <div>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-500 mb-2 hover:text-white transition-colors"
            >
              <span className="w-6 h-px bg-white/20" />
              github.com/{username} — ↗ profile
            </a>
            <h2 className="text-[32px] sm:text-[42px] font-black tracking-[-0.04em] leading-none text-white flex items-center gap-3">
              <Github size={28} className="text-white" />
              Contributions
            </h2>
            <p className="mt-2 font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500">
              Linked to{" "}
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white"
              >
                github.com/{username}
              </a>{" "}
              — click graph to open
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {total !== null && (
              <div className="hidden lg:block text-right border border-white/10 bg-[#050505] px-4 py-2">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500">
                  Total — Last year
                </div>
                <div className="font-black text-[18px] leading-none tracking-[-0.03em] text-white">
                  {total.toLocaleString()}
                </div>
              </div>
            )}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase font-bold hover:bg-neutral-200 transition-colors"
            >
              View Profile <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="dot-grid">
        <div className="max-w-7xl mx-auto border-x border-white/10 bg-black">
          {/* Total contributions bar — prominent */}
          {total !== null && (
            <div className="grid grid-cols-3 gap-px bg-white/10 border-b border-white/10">
              <div className="bg-black px-4 py-3 flex items-center justify-between sm:justify-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500">
                  Total — Last year
                </span>
                <span className="font-black text-[20px] tracking-[-0.03em] text-white">
                  {total.toLocaleString()}
                </span>
              </div>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black px-4 py-3 flex items-center justify-center gap-2 hover:bg-white group transition-colors"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500 group-hover:text-black">
                  Profile
                </span>
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-white group-hover:text-black hidden sm:inline">
                  @{username}
                </span>
                <ArrowUpRight size={12} className="text-neutral-600 group-hover:text-black" />
              </a>
              <div className="bg-black px-4 py-3 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-[#39d353]" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-400">
                  Green — GitHub style
                </span>
              </div>
            </div>
          )}

          <div className="border-b border-white/10 bg-[#050505] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
              Last 12 months — daily activity
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-neutral-600">
              <span className="hidden sm:inline">Less</span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-[#161b22] border border-white/10" />
                <span className="w-3 h-3 bg-[#0e4429] border border-white/10" />
                <span className="w-3 h-3 bg-[#006d32] border border-white/10" />
                <span className="w-3 h-3 bg-[#26a641] border border-white/10" />
                <span className="w-3 h-3 bg-[#39d353] border border-white/10" />
              </span>
              <span className="hidden sm:inline">More</span>
            </span>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center p-4 sm:p-6 overflow-x-auto scrollbar-thin hover:bg-[#050505] transition-colors"
            title="Open GitHub profile"
          >
            <div className="min-w-[720px] mx-auto">
              <GitHubCalendar
                username={username}
                blockSize={12}
                blockMargin={4}
                blockRadius={0}
                fontSize={11}
                colorScheme="dark"
                theme={greenTheme}
                showColorLegend={false}
                showMonthLabels
                showTotalCount
                labels={{
                  totalCount: `{{count}} contributions in the last year — linked to github.com/${username}`,
                }}
                style={{
                  color: "#a3a3a3",
                }}
              />
            </div>
          </a>
          <div className="sm:hidden px-4 pb-3 font-mono text-[10px] tracking-[0.12em] uppercase text-neutral-600">
            ← scroll →
          </div>

          {/* Link bar */}
          <div className="flex flex-col sm:flex-row gap-px bg-white/10 border-t border-white/10">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-black px-4 py-3 flex items-center justify-between hover:bg-white group transition-colors"
            >
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-neutral-400 group-hover:text-black">
                github.com/{username} — open profile
              </span>
              <ArrowUpRight
                size={14}
                className="text-neutral-600 group-hover:text-black group-hover:translate-x-0.5 transition-all"
              />
            </a>
            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black px-4 py-3 flex items-center gap-2 hover:bg-white group transition-colors border-t sm:border-t-0 sm:border-l border-white/10"
            >
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-neutral-400 group-hover:text-black">
                Repositories
              </span>
              <ArrowUpRight
                size={12}
                className="text-neutral-600 group-hover:text-black"
              />
            </a>
          </div>

          {/* Striped footer like Stack */}
          <div
            className="h-6 bg-[repeating-linear-gradient(-45deg,#0a0a0a_0_8px,#111_8px_16px)] border-t border-white/10"
            aria-hidden
          />
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="max-w-7xl mx-auto px-6 py-4 sm:hidden">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-3 text-[11px] tracking-[0.15em] uppercase font-bold hover:bg-neutral-200 transition-colors"
        >
          View GitHub Profile <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
};

export default GitHubContributions;
