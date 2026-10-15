"use client";

import { Moon, Sun } from "lucide-react";

export const isDarkTheme = () => {
  const t = document.documentElement.dataset.theme;
  return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// Icons swap through CSS (see .theme-toggle), so nothing here depends on the theme during render.
const ThemeToggle = () => {
  const toggle = () => {
    const next = isDarkTheme() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <button type="button" className="btn btn-ghost btn-icon theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
      <Sun className="sun" aria-hidden="true" />
      <Moon className="moon" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
