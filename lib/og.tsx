import { ImageResponse } from "next/og";
import { site } from "./site";
import { getContributions } from "./github";
import type { SkillCategory } from "@/app/components/home/skills";

export const ogSize = { width: 1200, height: 630 };

// Dark-theme values of the site's colour tokens (globals.css)
const C = {
  bg: "#0a0a0a",
  panel: "#111113",
  ink: "#fafafa",
  muted: "#a1a1aa",
  line: "rgba(255,255,255,0.12)",
  live: "#4ade80",
  gh: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  area: { lang: "#60a5fa", web: "#f472b6", api: "#fb923c", db: "#a78bfa", ops: "#22d3ee" } as Record<SkillCategory, string>,
};

// Geist from Google Fonts; an old user agent makes the CSS point at TTF files, which is what next/og reads.
async function loadFont(family: string, weight: number) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1)" },
  }).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\) format/)?.[1];
  if (!url) throw new Error(`No font file for ${family}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

let fontsPromise: Promise<{ name: string; data: ArrayBuffer; weight: 400 | 600; style: "normal" }[]> | null = null;
function getFonts() {
  fontsPromise ??= Promise.all([
    loadFont("Geist", 400).then((data) => ({ name: "Geist", data, weight: 400 as const, style: "normal" as const })),
    loadFont("Geist", 600).then((data) => ({ name: "Geist", data, weight: 600 as const, style: "normal" as const })),
    loadFont("Geist+Mono", 400).then((data) => ({ name: "Geist Mono", data, weight: 400 as const, style: "normal" as const })),
  ]).catch(() => {
    fontsPromise = null; // try again next time; this render falls back to the default font
    return [];
  });
  return fontsPromise;
}

/** The last 16 weeks as columns of 7 days (Sunday first); days after today are null. */
async function recentWeeks() {
  const data = await getContributions();
  if (!data) return null;
  const lastDow = new Date(`${data.days[data.days.length - 1].date}T00:00:00Z`).getUTCDay();
  const days = data.days.slice(-(15 * 7 + lastDow + 1));
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < 16; i++) {
    weeks.push(Array.from({ length: 7 }, (_, d) => days[i * 7 + d]?.level ?? null));
  }
  return { total: data.total, weeks };
}

const Logo = ({ area }: { area?: SkillCategory }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, fontWeight: 600 }}>
    <div style={{ width: 40, height: 40, background: C.ink, color: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600 }}>
      SZ
    </div>
    Portfolio
    {area && (
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 6, color: C.muted, fontWeight: 400 }}>
        ·
        <div style={{ width: 14, height: 14, background: C.area[area] }} />
        Project
      </div>
    )}
  </div>
);

type Tech = { name: string; area?: SkillCategory };

/**
 * Link-preview card ("option B"): text on the left inside the site's frame rails,
 * a panel on the right with either live GitHub activity or a project's stack.
 */
export async function ogImage({
  title,
  lines,
  subtitle,
  area,
  stack,
}: {
  /** Title lines; the home card splits the name over two lines */
  title?: string;
  lines?: string[];
  subtitle: string[];
  /** A project's area; shows "■ Project" in its colour next to the logo */
  area?: SkillCategory;
  /** Shown in the right panel instead of GitHub activity */
  stack?: Tech[];
}) {
  const [fonts, activity] = await Promise.all([getFonts(), stack ? null : recentWeeks()]);
  const titleLines = lines ?? [title ?? site.name];
  const longest = Math.max(...titleLines.map((l) => l.length));
  const size = longest <= 10 ? 88 : longest <= 16 ? 76 : longest <= 22 ? 64 : 54;
  const cell = 17;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: C.bg, color: C.ink, fontFamily: "Geist", position: "relative" }}>
        <div style={{ position: "absolute", left: 80, top: 0, bottom: 0, width: 1, background: C.line }} />
        <div style={{ position: "absolute", left: 1120, top: 0, bottom: 0, width: 1, background: C.line }} />

        {/* left: name or title */}
        <div style={{ position: "absolute", left: 144, top: 56, bottom: 56, width: 540, display: "flex", flexDirection: "column" }}>
          <Logo area={area} />
          <div style={{ display: "flex", flexDirection: "column", marginTop: 70, fontSize: size, fontWeight: 600, letterSpacing: -size * 0.04, lineHeight: 1 }}>
            {titleLines.map((line, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-end" }}>
                {line}
                {!area && i === titleLines.length - 1 && (
                  <div style={{ width: size * 0.42, height: size * 0.8, background: C.live, marginLeft: size * 0.12, marginBottom: size * 0.06 }} />
                )}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 30, color: C.muted, lineHeight: 1.3 }}>
            {subtitle.map((s) => (
              <div key={s}>{s}</div>
            ))}
          </div>
          <div style={{ marginTop: "auto", fontFamily: "Geist Mono", fontSize: 20, color: C.muted }}>{site.url.replace("https://www.", "")}</div>
        </div>

        {/* right: GitHub activity or the project's stack */}
        <div style={{ position: "absolute", left: 700, right: 80, top: 0, bottom: 0, borderLeft: `1px solid ${C.line}`, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 44px", gap: 18 }}>
          {stack ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontSize: 19, color: C.muted }}>Built with</div>
              <div style={{ display: "flex", flexDirection: "column", border: `1px solid ${C.line}` }}>
                {stack.slice(0, 6).map((t, i) => (
                  <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", fontSize: 24, background: C.panel, borderTop: i ? `1px solid ${C.line}` : "none" }}>
                    <div style={{ width: 12, height: 12, background: t.area ? C.area[t.area] : C.muted }} />
                    {t.name}
                  </div>
                ))}
              </div>
            </div>
          ) : activity ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", gap: 4 }}>
                {activity.weeks.map((week, w) => (
                  <div key={w} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {week.map((level, d) => (
                      <div key={d} style={{ width: cell, height: cell, background: level === null ? "transparent" : C.gh[level] }} />
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1.2 }}>{activity.total.toLocaleString("en-US")}</div>
                <div style={{ fontSize: 19, color: C.muted }}>GitHub contributions in the last year</div>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, width: 300 }}>
              {Object.values(C.area).map((c) => (
                <div key={c} style={{ width: 48, height: 48, background: c }} />
              ))}
            </div>
          )}
        </div>
      </div>
    ),
    { ...ogSize, fonts: fonts.length ? fonts : undefined },
  );
}
