"use client";

import { useEffect, useState } from "react";

// Renders the final number on the server, then counts up from zero once mounted.
const StatCount = ({ value, decimals = 0 }: { value: number; decimals?: number }) => {
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let start: number | null = null;
    const step = (t: number) => {
      start ??= t;
      const k = Math.min(1, (t - start) / 1600);
      setShown(value * (1 - Math.pow(1 - k, 3)));
      if (k < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <>{shown.toFixed(decimals)}</>;
};

export default StatCount;
