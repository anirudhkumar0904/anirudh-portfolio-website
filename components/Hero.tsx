"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Rocket, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NeuralCanvas } from "@/components/NeuralCanvas";
import { profile, socialLinks, subtitles } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

function Typewriter() {
  const phrase = "Hi, I'm Anirudh Kumar R";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      setText(phrase.slice(0, index + 1));
      index += 1;
      if (index >= phrase.length) window.clearInterval(interval);
    }, 58);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span>
      {text}
      <span className="ml-1 inline-block h-10 w-0.5 translate-y-1 bg-[#818cf8] sm:h-14" aria-hidden="true" />
    </span>
  );
}

export function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 720], [0, 150]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.24]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSubtitleIndex((index) => (index + 1) % subtitles.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  const socialIconMap = useMemo(
    () => ({
      GitHub: Github,
      LinkedIn: Linkedin,
      Email: Mail
    }),
    []
  );

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden hero-radial">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <NeuralCanvas />
      </motion.div>
      <div className="animated-grid absolute inset-0 animate-grid-shift opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080810]/5 via-[#080810]/20 to-[#080810]" aria-hidden="true" />

      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-28 text-center">
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#6366f1]/25 bg-[#6366f1]/10 px-4 py-2 text-sm text-[#c7d2fe] shadow-[0_0_34px_rgba(99,102,241,0.35)] backdrop-blur"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.35, duration: 0.7 }}
        >
          <Sparkles className="h-4 w-4 text-[#818cf8]" aria-hidden="true" />
          AI systems engineer · available May 2026
        </motion.div>

        <motion.h1
          className="max-w-5xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.45, duration: 0.8, ease: "easeOut" }}
        >
          <Typewriter />
        </motion.h1>

        <motion.div
          className="mt-6 h-10 overflow-hidden font-display text-xl font-semibold text-[#818cf8] sm:text-2xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.7 }}
          aria-live="polite"
        >
          <motion.span
            key={subtitles[subtitleIndex]}
            className="inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -22, filter: "blur(10px)" }}
          >
            <Rocket className="h-5 w-5 text-[#818cf8]" aria-hidden="true" />
            {subtitles[subtitleIndex]}
          </motion.span>
        </motion.div>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-8 text-[#94a3b8] sm:text-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.75, duration: 0.7 }}
        >
          {profile.headline}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.7 }}
        >
          <Button size="lg" onClick={() => scrollToSection("projects")}>
            View My Work
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={profile.resume} download>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.05, duration: 0.7 }}
        >
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.label as keyof typeof socialIconMap] ?? Mail;
            return (
              <Button key={link.label} asChild variant="ghost" size="icon" aria-label={link.label}>
                <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            );
          })}
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 z-10 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-[#ffffff0f] bg-[#0f0f1a] text-[#94a3b8] shadow-[0_0_28px_rgba(99,102,241,0.28)] transition hover:border-[#6366f1]/40 hover:text-white"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
