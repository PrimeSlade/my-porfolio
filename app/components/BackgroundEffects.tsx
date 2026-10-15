"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜ0123456789{}<>=/";
const CELL = 16;
const SPOT = 220;

type Column = { x: number; y: number; len: number; every: number; b: number; n: number; chars: string[] };

/**
 * Two background effects, both behind the content:
 * - cursor spotlight: a dot grid that shows only around the mouse, trailing it, swelling with
 *   speed, and rippling on click (drawn by body::before/::after in globals.css)
 * - matrix rain: sparse green glyph columns in the side gutters outside the frame
 */
const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    // ---- spotlight (mouse only) ----
    if (!reduced && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      let tx = -999, ty = -999, cx = -999, cy = -999, sr = SPOT, raf = 0;
      let ripple: number | null = null;
      const tick = (now: number) => {
        const dx = tx - cx, dy = ty - cy;
        cx += dx * 0.14;
        cy += dy * 0.14;
        sr += (SPOT + Math.min(Math.hypot(dx, dy) * 0.9, 120) - sr) * 0.1;
        root.style.setProperty("--mx", `${cx.toFixed(1)}px`);
        root.style.setProperty("--my", `${cy.toFixed(1)}px`);
        root.style.setProperty("--sr", `${sr.toFixed(1)}px`);
        if (ripple !== null) {
          const p = Math.min(1, (now - ripple) / 900);
          root.style.setProperty("--rr", `${((1 - Math.pow(1 - p, 3)) * 520).toFixed(1)}px`);
          root.style.setProperty("--ro", (1 - p).toFixed(3));
          if (p >= 1) ripple = null;
        }
        const moving = Math.abs(dx) + Math.abs(dy) > 0.3 || Math.abs(sr - SPOT) > 0.5;
        raf = moving || ripple !== null ? requestAnimationFrame(tick) : 0;
      };
      const wake = () => {
        if (!raf) raf = requestAnimationFrame(tick);
      };
      const onMove = (e: PointerEvent) => {
        if (cx === -999) {
          cx = e.clientX;
          cy = e.clientY;
        }
        tx = e.clientX;
        ty = e.clientY;
        root.classList.add("spot-on");
        wake();
      };
      const onDown = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        ripple = performance.now();
        root.style.setProperty("--rx", `${e.clientX}px`);
        root.style.setProperty("--ry", `${e.clientY}px`);
        wake();
      };
      const onLeave = () => root.classList.remove("spot-on");
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown);
      root.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerdown", onDown);
        root.removeEventListener("pointerleave", onLeave);
      });
    }

    // ---- matrix rain ----
    const cv = canvasRef.current;
    const ctx = cv?.getContext("2d");
    if (cv && ctx) {
      const pick = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];
      let cols: Column[] = [], rows = 0, W = 0, H = 0;
      let color = "", head = "", alpha = 0.6, font = "";

      const readTheme = () => {
        const s = getComputedStyle(root);
        color = s.getPropertyValue("--rain").trim();
        head = s.getPropertyValue("--rain-head").trim();
        alpha = parseFloat(s.getPropertyValue("--rain-alpha")) || 0.6;
        // next/font renames the family, so read the resolved stack off the canvas element
        font = `${s.getPropertyValue("--rain-weight").trim() || 500} 13px ${getComputedStyle(cv).fontFamily}`;
        ctx.font = font;
      };
      const newDrop = (c: Column) => {
        c.y = -(Math.random() * rows * 1.5) | 0;
        c.len = 6 + ((Math.random() * 18) | 0);
        c.every = 1 + ((Math.random() * 3) | 0);
        c.b = 0.35 + Math.random() * 0.65;
      };
      const layout = () => {
        const dpr = window.devicePixelRatio || 1;
        W = window.innerWidth;
        H = window.innerHeight;
        rows = Math.ceil(H / CELL);
        cv.width = W * dpr;
        cv.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        const frame = document.querySelector(".frame")?.getBoundingClientRect();
        cols = [];
        const add = (x0: number, x1: number) => {
          const n = Math.floor((x1 - x0) / CELL);
          if (n < 3) return;
          // only every third slot gets a column, so the rain stays sparse
          for (let i = (Math.random() * 3) | 0; i < n; i += 3) {
            const c: Column = { x: x0 + i * CELL + CELL / 2, y: 0, len: 0, every: 1, b: 1, n: 0, chars: Array.from({ length: rows }, pick) };
            newDrop(c);
            c.y = ((Math.random() * rows * 1.4) | 0) - ((rows * 0.4) | 0);
            cols.push(c);
          }
        };
        if (frame) {
          add(0, frame.left - 6);
          add(frame.right + 6, W);
        }
        readTheme();
      };
      const draw = () => {
        ctx.clearRect(0, 0, W, H);
        for (const c of cols) {
          for (let k = 0; k < c.len; k++) {
            const r = c.y - k;
            if (r < 0 || r >= rows) continue;
            ctx.globalAlpha = (1 - k / c.len) * c.b * alpha;
            ctx.fillStyle = k === 0 ? head : color;
            ctx.fillText(c.chars[r], c.x, r * CELL);
          }
        }
        ctx.globalAlpha = 1;
      };
      const step = () => {
        for (const c of cols) {
          if (++c.n % c.every) continue;
          c.y++;
          if (Math.random() < 0.3) c.chars[(Math.random() * rows) | 0] = pick();
          if (c.y - c.len > rows) newDrop(c);
        }
        draw();
      };

      const onTheme = () => {
        readTheme();
        draw();
      };
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      let raf = 0, last = 0;
      const loop = (now: number) => {
        if (now - last > 55) {
          last = now;
          step();
        }
        raf = requestAnimationFrame(loop);
      };

      layout();
      document.fonts?.ready.then(onTheme);
      if (reduced) draw();
      else raf = requestAnimationFrame(loop);
      window.addEventListener("resize", layout);
      window.addEventListener("themechange", onTheme);
      mq.addEventListener("change", onTheme);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", layout);
        window.removeEventListener("themechange", onTheme);
        mq.removeEventListener("change", onTheme);
      });
    }

    return () => cleanups.forEach((f) => f());
  }, []);

  return <canvas ref={canvasRef} className="rain" aria-hidden="true" />;
};

export default BackgroundEffects;
