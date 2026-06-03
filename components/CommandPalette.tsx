"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Command, Search, X } from "lucide-react";

import { commandItems, navItems, profile } from "@/lib/data";
import { cn, scrollToSection } from "@/lib/utils";

const allItems = [
  ...commandItems,
  ...navItems.map((item) => ({ ...item, icon: ArrowRight }))
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return allItems;
    return allItems.filter((item) => item.label.toLowerCase().includes(normalized));
  }, [query]);

  const run = (id: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToSection(id), 120);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[111] bg-[#080810]/70 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          onMouseDown={() => setOpen(false)}
        >
          <motion.div
            className="mx-auto mt-24 max-w-xl overflow-hidden rounded-lg border border-[#ffffff0f] bg-[#0f0f1a]/95 shadow-2xl"
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[#ffffff0f] px-4 py-3">
              <Search className="h-4 w-4 text-[#818cf8]" aria-hidden="true" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Jump to projects, skills, contact..."
                className="h-10 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#64748b]"
                aria-label="Search commands"
              />
              <button
                type="button"
                className="rounded-md p-2 text-[#94a3b8] transition hover:bg-[#6366f1]/10 hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Close command palette"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={`${item.id}-${item.label}-${index}`}
                    type="button"
                    onClick={() => run(item.id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm text-[#94a3b8] transition",
                      "hover:bg-[#6366f1]/10 hover:text-white focus:bg-[#6366f1]/10 focus:text-white focus:outline-none"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[#818cf8]" aria-hidden="true" />
                      {item.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#64748b]" aria-hidden="true" />
                  </button>
                );
              })}
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 flex items-center justify-between rounded-md border border-[#ffffff0f] px-3 py-3 text-sm text-[#94a3b8] transition hover:border-[#6366f1]/40 hover:bg-[#6366f1]/10 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <Command className="h-4 w-4 text-[#818cf8]" aria-hidden="true" />
                  Start a recruiter conversation
                </span>
                <ArrowRight className="h-4 w-4 text-[#64748b]" aria-hidden="true" />
              </a>
            </div>
            <div className="border-t border-[#ffffff0f] px-4 py-3 text-xs text-[#64748b]">
              Tip: type <span className="text-[#94a3b8]">hire anirudh</span> anywhere.
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
