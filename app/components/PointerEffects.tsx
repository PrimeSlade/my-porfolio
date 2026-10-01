"use client";

import { useEffect } from "react";

// Spotlight follows the pointer on any `.spot` element; `.proj` cards also tilt toward it.
const PointerEffects = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last: HTMLElement | null = null;
    const reset = (el: HTMLElement) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(".spot") ?? null;
      if (last && last !== el) reset(last);
      last = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", `${x * 100}%`);
      el.style.setProperty("--my", `${y * 100}%`);
      if (el.classList.contains("proj") && e.pointerType === "mouse") {
        el.style.setProperty("--rx", `${((0.5 - y) * 6).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${((x - 0.5) * 8).toFixed(2)}deg`);
      }
    };

    document.addEventListener("pointermove", onMove);
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
};

export default PointerEffects;
