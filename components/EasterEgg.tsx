"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function EasterEgg() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let buffer = "";
    const handler = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key.length !== 1 && event.key !== "Backspace") return;

      if (event.key === "Backspace") {
        buffer = buffer.slice(0, -1);
      } else {
        buffer = `${buffer}${event.key.toLowerCase()}`.slice(-40);
      }

      if (buffer.includes("hire anirudh")) {
        setUnlocked(true);
        window.setTimeout(() => setUnlocked(false), 3600);
        console.log(
          "%cRecruiter mode unlocked: Anirudh ships AI systems with receipts. Interview recommended.",
          "color:#6366f1;font-weight:700;font-size:14px"
        );
        buffer = "";
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {unlocked ? (
        <motion.div
          className="fixed bottom-5 left-1/2 z-[112] flex -translate-x-1/2 items-center gap-3 rounded-md border border-[#6366f1]/30 bg-[#080810]/90 px-4 py-3 text-sm text-[#c7d2fe] shadow-[0_0_32px_rgba(99,102,241,0.35)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          role="status"
        >
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Recruiter mode unlocked. Interview signal: strong.
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
