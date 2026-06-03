"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      const timeout = window.setTimeout(() => setVisible(false), 700);
      return () => window.clearTimeout(timeout);
    }

    const ctx = gsap.context(() => {
      gsap.to(ringRef.current, {
        rotate: 360,
        duration: 1.8,
        ease: "power2.inOut",
        repeat: 1
      });
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    });

    const timeout = window.setTimeout(() => setVisible(false), 2300);
    return () => {
      ctx.revert();
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center bg-[#080810]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          aria-label="Loading portfolio"
          role="status"
        >
          <div className="relative flex flex-col items-center gap-6">
            <div ref={ringRef} className="relative h-24 w-24 rounded-full border border-[#6366f1]/20">
              <span className="absolute inset-3 rounded-full border border-[#a855f7]/20" />
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#6366f1] shadow-[0_0_28px_rgba(99,102,241,0.35)]" />
              <span className="absolute inset-0 rounded-full bg-[#6366f1]/10 blur-2xl" />
              <span className="absolute inset-0 grid place-items-center font-display text-3xl font-bold text-white">
                AR
              </span>
            </div>
            <div ref={textRef} className="text-center">
              <p className="font-display text-lg font-semibold text-white">Preparing engineering portfolio</p>
              <p className="mt-2 text-sm text-[#94a3b8]">systems · impact · execution</p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
