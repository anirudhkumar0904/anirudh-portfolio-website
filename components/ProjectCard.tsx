"use client";

import { CSSProperties, MouseEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Layers3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const PROJECT_ACCENTS = ["#6366f1", "#f59e0b", "#ef4444", "#22c55e", "#3b82f6", "#a855f7"];

type ProjectCardStyle = CSSProperties & {
  "--project-accent": string;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [transform, setTransform] = useState("perspective(900px) rotateX(0deg) rotateY(0deg)");
  const isFeatured = project.size === "featured";
  const isLarge = project.size === "large";
  const accent = PROJECT_ACCENTS[index % PROJECT_ACCENTS.length];

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    event.currentTarget.style.setProperty("--x", `${x}px`);
    event.currentTarget.style.setProperty("--y", `${y}px`);
    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`);
  };

  return (
    <motion.article
      className={cn(
        "project-card group spotlight relative overflow-hidden rounded-lg border p-5 shadow-2xl backdrop-blur transition duration-300 sm:p-6",
        isFeatured ? "lg:col-span-12" : isLarge ? "lg:col-span-7" : "lg:col-span-5"
      )}
      style={{ transform, "--project-accent": accent } as ProjectCardStyle}
      onMouseMove={onMove}
      onMouseLeave={() => setTransform("perspective(900px) rotateX(0deg) rotateY(0deg)")}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
    >
      <div className="project-ring pointer-events-none absolute inset-0 rounded-lg opacity-0 ring-1 transition group-hover:opacity-100" />
      <div className="project-corner-glow absolute right-4 top-4 h-24 w-24 rounded-full blur-3xl transition" />

      <div className={cn("relative h-full", isFeatured ? "flex flex-col lg:grid lg:grid-cols-12 lg:gap-8" : "flex flex-col")}>
        <div className={cn("flex flex-col h-full justify-between", isFeatured ? "lg:col-span-7" : "")}>
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="project-icon-shell mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border text-2xl">
                  <span aria-hidden="true">{project.icon}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
                <p className="project-accent-text mt-2 text-sm font-medium">{project.tagline}</p>
              </div>
              <Layers3 className="project-accent-text hidden h-6 w-6 sm:block" aria-hidden="true" />
            </div>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-[#94a3b8]">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="project-dot mt-2 h-1.5 w-1.5 flex-none rounded-full" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="project-pill rounded-md border px-2.5 py-1 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {project.links.map((link) => {
                const Icon = link.icon;
                return (
                  <Button key={link.href} asChild variant="secondary" size="sm" className="project-link-button">
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </Button>
                );
              })}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
                className={cn(isFeatured && "lg:hidden")}
              >
                Case Study
                <ChevronDown
                  className={cn("h-4 w-4 transition", expanded ? "rotate-180" : "rotate-0")}
                  aria-hidden="true"
                />
              </Button>
            </div>

            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  className={cn("mt-6 border-t border-[#ffffff0f] pt-5 text-sm leading-6 text-[#94a3b8]", isFeatured && "lg:hidden")}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="font-semibold text-white">Problem</p>
                      <p className="mt-2 text-[#94a3b8]">{project.caseStudy.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white">System</p>
                      <p className="mt-2 text-[#94a3b8]">{project.caseStudy.system}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Proof</p>
                      <p className="mt-2 text-[#94a3b8]">{project.caseStudy.proof}</p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        {isFeatured ? (
          <div className="hidden lg:flex lg:col-span-5 lg:flex-col lg:justify-between rounded-xl border border-[#ffffff15] bg-[#0c0d16]/80 p-6 shadow-inner backdrop-blur-md">
            <div>
              <div className="mb-4 flex items-center gap-2.5 border-b border-[#ffffff10] pb-3.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#6366f1] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#818cf8] font-semibold">
                  Featured Architecture Showcase
                </span>
              </div>
              <div className="space-y-4 text-sm leading-6 text-[#94a3b8]">
                <div>
                  <p className="font-semibold text-white">Problem</p>
                  <p className="mt-1 text-[#94a3b8]">{project.caseStudy.problem}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">System Architecture</p>
                  <p className="mt-1 text-[#94a3b8]">{project.caseStudy.system}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Production Proof</p>
                  <p className="mt-1 text-[#94a3b8]">{project.caseStudy.proof}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-[#ffffff0a] flex items-center justify-between text-xs font-mono text-[#64748b]">
              <span>Dual-LLM Verification</span>
              <span className="text-[#22c55e]">● Active Trust Score</span>
            </div>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
