"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, Terminal } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { engineeringNotes } from "@/lib/data";

export function EngineeringNotes() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="notes" className="section-shell bg-[#0a0a0f]">
      <div className="container">
        <SectionHeading
          eyebrow="Architecture & Tradeoffs"
          title="Engineering Notes & System Design."
          description="Detailed breakdowns of real-world bottlenecks, data model tradeoffs, and production scaling decisions."
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {engineeringNotes.map((note, index) => {
            const isOpen = expandedIndex === index;
            return (
              <motion.div
                key={note.title}
                className={`overflow-hidden rounded-lg border transition ${
                  isOpen
                    ? "border-[#3b82f6]/40 bg-[#0f0f1c] shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                    : "border-[#ffffff0c] bg-[#0f0f18] hover:border-[#ffffff20]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded border border-[#3b82f6]/30 bg-[#3b82f6]/12 text-[#60a5fa]">
                      <Terminal className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-[#3b82f6]">
                        {note.tagline}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                        {note.title}
                      </h3>
                      {!isOpen && (
                        <p className="mt-1 line-clamp-1 text-sm text-[#94a3b8]">
                          {note.summary}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded border border-[#ffffff10] bg-[#ffffff05] text-[#94a3b8]">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#3b82f6]" : ""}`}
                    />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-[#ffffff0f] bg-[#090912] p-5 md:p-6">
                        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
                          <BookOpen className="h-3.5 w-3.5 text-[#3b82f6]" />
                          Deep Dive Architecture Log
                        </div>
                        <p className="whitespace-pre-line text-sm leading-7 text-[#cbd5e1] md:text-base">
                          {note.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
