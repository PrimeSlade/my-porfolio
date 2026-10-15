"use client";

import { useEffect, useRef } from "react";

// Plays the week-by-week fill animation the first time the calendar scrolls into view.
const CalendarReveal = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("play");
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="cal" role="img" aria-label={label}>
      {children}
    </div>
  );
};

export default CalendarReveal;
