"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ArrowUpRight, Github } from "lucide-react";

const GitHubContributions = () => {
  const username = "PrimeSlade";
  const [total, setTotal] = useState<number | null>(null);
  const [blockSize, setBlockSize] = useState(12);
  const [blockMargin, setBlockMargin] = useState(4);
  const [fontSize, setFontSize] = useState(11);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => r.json())
      .then((d) => {
        if (d?.total?.lastYear != null) setTotal(d.total.lastYear);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 380) {
        setBlockSize(7);
        setBlockMargin(2);
        setFontSize(9);
      } else if (w < 640) {
        setBlockSize(9);
        setBlockMargin(3);
        setFontSize(10);
      } else if (w < 1024) {
        setBlockSize(11);
        setBlockMargin(4);
        setFontSize(11);
      } else {
        setBlockSize(12);
        setBlockMargin(4);
        setFontSize(11);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // GitHub green — exact GitHub palette, 0 rounded via blockRadius={0}
  const greenTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section id="github" className="bg-[#0a0a0a] border-t border-white/[0.06]">
      {/* Header — linked to profile */}
      <div className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-end justify-between gap-4">
          <div>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-500 mb-2 hover:text-[#e5e5e5] transition-colors"
            >
              <span className="w-6 h-px bg-white/10" />
              github.com/{username} — ↗ profile
            </a>
            <h2 className="text-[32px] sm:text-[42px] font-black tracking-[-0.04em] leading-none text-[#e5e5e5] flex items-center gap-3">
              <Github size={28} className="text-[#e5e5e5]" />
              Contributions
            </h2>
            <p className="mt-2 font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500">
              Linked to{" "}
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e5e5e5] underline decoration-white/10 underline-offset-4 hover:decoration-white/20"
              >
                github.com/{username}
              </a>{" "}
              — click graph to open
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {total !== null && (
              <div className="hidden lg:block text-right border border-white/[0.06] bg-[#111111] px-4 py-2">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500">
                  Total — Last year
                </div>
                <div className="font-black text-[18px] leading-none tracking-[-0.03em] text-[#e5e5e5]">
                  {total.toLocaleString()}
                </div>
              </div>
            )}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e5e5e5] text-[#0a0a0a] px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase font-bold hover:bg-white transition-colors"
            >
              View Profile <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Graph — responsive box */}
      <div className="dot-grid px-3 sm:px-6">
        <div className="max-w-7xl mx-auto w-full border border-white/[0.06] bg-[#0a0a0a]">
          {/* Total contributions bar — responsive, no truncation */}
          {total !== null && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] border-b border-white/[0.06]">
              <div className="bg-[#0a0a0a] px-4 py-3 flex items-center justify-between sm:justify-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500 whitespace-nowrap">
                  Total — Last year
                </span>
                <span className="font-black text-[18px] sm:text-[20px] tracking-[-0.03em] text-[#e5e5e5]">
                  {total.toLocaleString()}
                </span>
              </div>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a0a0a] px-4 py-3 flex items-center justify-center gap-2 hover:bg-[#e5e5e5] group transition-colors"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500 group-hover:text-[#0a0a0a]">
                  Profile
                </span>
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#e5e5e5] group-hover:text-[#0a0a0a] hidden sm:inline">
                  @{username}
                </span>
                <ArrowUpRight size={12} className="text-neutral-600 group-hover:text-[#0a0a0a]" />
              </a>
              <div className="bg-[#0a0a0a] px-4 py-3 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-[#39d353]" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-400 whitespace-nowrap">
                  Green — GitHub style
                </span>
              </div>
            </div>
          )}

          <div className="border-b border-white/[0.06] bg-[#111111] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
              Last 12 months — daily activity
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-neutral-600">
              <span className="hidden sm:inline">Less</span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-[#161b22] border border-white/[0.06]" />
                <span className="w-3 h-3 bg-[#0e4429] border border-white/[0.06]" />
                <span className="w-3 h-3 bg-[#006d32] border border-white/[0.06]" />
                <span className="w-3 h-3 bg-[#26a641] border border-white/[0.06]" />
                <span className="w-3 h-3 bg-[#39d353] border border-white/10" />
              </span>
              <span className="hidden sm:inline">More</span>
            </span>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center p-3 sm:p-4 lg:p-6 overflow-x-auto scrollbar-thin hover:bg-[#111111]/50 transition-colors"
            title="Open GitHub profile"
          >
            <div className="w-full max-w-full flex justify-center">
              <div className="w-full overflow-hidden flex justify-center">
                <GitHubCalendar
                  username={username}
                  blockSize={blockSize}
                  blockMargin={blockMargin}
                  blockRadius={0}
                  fontSize={fontSize}
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
                    maxWidth: "100%",
                  }}
                />
              </div>
            </div>
          </a>

          {/* Link bar */}
          <div className="flex flex-col sm:flex-row gap-px bg-white/[0.06] border-t border-white/[0.06]">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#0a0a0a] px-4 py-3 flex items-center justify-between hover:bg-[#e5e5e5] group transition-colors"
            >
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-neutral-400 group-hover:text-[#0a0a0a]">
                github.com/{username} — open profile
              </span>
              <ArrowUpRight
                size={14}
                className="text-neutral-600 group-hover:text-[#0a0a0a] group-hover:translate-x-0.5 transition-all"
              />
            </a>
            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0a0a] px-4 py-3 flex items-center gap-2 hover:bg-[#e5e5e5] group transition-colors border-t sm:border-t-0 sm:border-l border-white/[0.06]"
            >
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-neutral-400 group-hover:text-[#0a0a0a]">
                Repositories
              </span>
              <ArrowUpRight
                size={12}
                className="text-neutral-600 group-hover:text-[#0a0a0a]"
              />
            </a>
          </div>

          {/* Striped footer */}
          <div
            className="h-6 bg-[repeating-linear-gradient(-45deg,#080808_0_8px,#0f0f0f_8px_16px)] border-t border-white/[0.06]"
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
          className="w-full inline-flex items-center justify-center gap-2 bg-[#e5e5e5] text-[#0a0a0a] px-5 py-3 text-[11px] tracking-[0.15em] uppercase font-bold hover:bg-white transition-colors"
        >
          View GitHub Profile <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
};

export default GitHubContributions;
