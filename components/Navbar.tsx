"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/lib/data";
import { cn, scrollToSection } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.58);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed left-0 right-0 top-0 z-[90] transition-all duration-500",
          scrolled
            ? "border-b border-[#ffffff0f] bg-[#080810]/70 shadow-2xl backdrop-blur-xl"
            : "bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.7, ease: "easeOut" }}
      >
        <nav className="container flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => go("hero")}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to hero"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md border border-[#6366f1]/30 bg-[#6366f1]/10 font-display text-sm font-bold text-white shadow-[0_0_28px_rgba(99,102,241,0.32)]">
              AR
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-sm font-semibold text-white">{profile.name}</span>
              <span className="block text-xs text-[#64748b]">AI systems engineer</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="rounded-md px-3 py-2 text-sm text-[#94a3b8] transition hover:bg-[#6366f1]/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                Hire signal
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="rounded-md border border-[#ffffff0f] bg-[#0f0f1a] p-2 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-x-3 top-20 z-[91] overflow-hidden rounded-lg border border-[#ffffff0f] bg-[#0f0f1a]/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="block w-full rounded-md px-4 py-3 text-left text-sm text-[#94a3b8] hover:bg-[#6366f1]/10 hover:text-white"
                onClick={() => go(item.id)}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[#ffffff0f] pt-2">
              <Button asChild variant="secondary" size="sm">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="secondary" size="sm">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
