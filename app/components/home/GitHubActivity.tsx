import { SiGithub } from "react-icons/si";
import CalendarReveal from "./CalendarReveal";
import { site } from "@/lib/site";
import { getContributions, GITHUB_USERNAME } from "@/lib/github";

const monthFmt = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" });
const dayFmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

const GitHubActivity = async () => {
  const data = await getContributions();

  // One column per week with Sunday on top, like github.com
  const offset = data ? new Date(`${data.days[0].date}T00:00:00Z`).getUTCDay() : 0;
  const months: { col: number; label: string }[] = [];
  let lastMonth = -1;
  data?.days.forEach((d, i) => {
    const dt = new Date(`${d.date}T00:00:00Z`);
    const col = Math.floor((i + offset) / 7) + 1;
    if (dt.getUTCMonth() !== lastMonth && dt.getUTCDate() <= 7 && col < 52) {
      months.push({ col, label: monthFmt.format(dt) });
      lastMonth = dt.getUTCMonth();
    }
  });

  return (
    <section id="github">
      <div className="section-head">
        <div>
          <h2>GitHub activity</h2>
          <p>
            {data
              ? `${data.total.toLocaleString("en-US")} contributions in the last year`
              : "My public contributions on GitHub."}
          </p>
        </div>
        <a className="btn btn-outline btn-sm" href={site.github} target="_blank" rel="noopener noreferrer">
          <SiGithub aria-hidden="true" />@{GITHUB_USERNAME}
        </a>
      </div>
      {data ? (
        <>
          <div className="cal-wrap">
            <div className="cal-inner">
              <div className="months" aria-hidden="true">
                {months.map((m) => (
                  <span key={m.col} style={{ gridColumn: m.col }}>
                    {m.label}
                  </span>
                ))}
              </div>
              <CalendarReveal label={`${data.total} GitHub contributions over the last year`}>
                {Array.from({ length: offset }, (_, i) => (
                  <i key={`pad-${i}`} className="pad" />
                ))}
                {data.days.map((d, i) => (
                  <i
                    key={d.date}
                    data-l={d.level}
                    style={{ "--w": Math.floor((i + offset) / 7) } as React.CSSProperties}
                    title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${dayFmt.format(new Date(`${d.date}T00:00:00Z`))}`}
                  />
                ))}
              </CalendarReveal>
            </div>
          </div>
          <div className="legend" aria-hidden="true">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <i key={l} data-l={l} />
            ))}
            <span>More</span>
          </div>
        </>
      ) : (
        <div className="empty">
          <p>The activity calendar couldn&apos;t load right now. It&apos;s all on GitHub.</p>
        </div>
      )}
    </section>
  );
};

export default GitHubActivity;
