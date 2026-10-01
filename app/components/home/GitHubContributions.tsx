"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

// Standard GitHub greens; the calendar picks light or dark from the system setting.
const greenTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const GitHubContributions = () => {
  const username = "PrimeSlade";
  const [total, setTotal] = useState<number | null>(null);
  const [blockSize, setBlockSize] = useState(12);
  const [blockMargin, setBlockMargin] = useState(4);

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
      if (w < 640) {
        setBlockSize(10);
        setBlockMargin(3);
      } else {
        setBlockSize(13);
        setBlockMargin(4);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="section" id="github">
      <div className="sec-head">
        <h2>Coding activity</h2>
        <p>My public GitHub contributions over the last year.</p>
      </div>
      <div className="gh">
        <div className="gh-top">
          <div>
            <b>{total !== null ? total.toLocaleString() : "—"}</b>{" "}
            <span>contributions in the last year</span>
          </div>
          <a
            className="pill"
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{username} on GitHub ↗
          </a>
        </div>
        <div className="cal-scroll">
          <GitHubCalendar
            username={username}
            blockSize={blockSize}
            blockMargin={blockMargin}
            blockRadius={3}
            fontSize={12}
            theme={greenTheme}
            showTotalCount={false}
            showMonthLabels
            style={{ color: "var(--muted)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
