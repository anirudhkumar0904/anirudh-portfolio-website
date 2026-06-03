"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(canHover && !prefersReduced && window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };

    const move = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      cursorRef.current?.style.setProperty("opacity", "1");
      dotRef.current?.style.setProperty("opacity", "1");
      dotRef.current?.style.setProperty("transform", `translate3d(${target.x - 3}px, ${target.y - 3}px, 0)`);
    };

    const animate = () => {
      current.x += (target.x - current.x) * 0.16;
      current.y += (target.y - current.y) * 0.16;
      cursorRef.current?.style.setProperty(
        "transform",
        `translate3d(${current.x - 16}px, ${current.y - 16}px, 0)`
      );
      frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[115] h-8 w-8 rounded-full border border-[#6366f1]/40 bg-[#6366f1]/10 opacity-0 shadow-[0_0_32px_rgba(99,102,241,0.35)] mix-blend-screen transition-opacity"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[116] h-1.5 w-1.5 rounded-full bg-[#818cf8] opacity-0 transition-opacity"
        aria-hidden="true"
      />
    </>
  );
}
