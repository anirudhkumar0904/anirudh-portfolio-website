"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { exploring, skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-shell bg-[#0a0a0f]">
      <div className="container">
        <SectionHeading
          eyebrow="Depth Signal Toolkit"
          title="Engineered around core production mastery."
          description="Structured by daily technical execution depth rather than laundry lists of syntax."
        />

        <div className="relative mx-auto max-w-5xl space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              const isCore = group.tier === "core";
              return (
                <motion.div
                  key={group.title}
                  className={`rounded-lg border p-6 shadow-2xl backdrop-blur transition ${
                    isCore
                      ? "border-[#3b82f6]/40 bg-[#0f0f1c] shadow-[0_16px_50px_rgba(59,130,246,0.12)]"
                      : "border-[#ffffff0f] bg-[#0f0f18]"
                  }`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-md border ${
                          isCore
                            ? "border-[#3b82f6]/50 bg-[#3b82f6]/20 text-[#60a5fa]"
                            : "border-[#ffffff18] bg-[#ffffff08] text-[#94a3b8]"
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                    </div>
                    {isCore && (
                      <span className="rounded bg-[#3b82f6]/20 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#60a5fa]">
                        PRIMARY DEPTH
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className={`rounded-md border px-3 py-1.5 font-mono transition ${
                          isCore
                            ? "border-[#3b82f6]/30 bg-[#3b82f6]/12 text-sm font-semibold text-[#93c5fd] shadow-sm hover:border-[#3b82f6]/60 hover:bg-[#3b82f6]/20"
                            : "border-[#ffffff12] bg-[#ffffff05] text-xs text-[#cbd5e1] hover:border-[#ffffff25] hover:bg-[#ffffff10]"
                        }`}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + skillIndex * 0.03 }}
                        whileHover={{ y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-[#ffffff0f] bg-[#0e0e16] p-5 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="flex items-center gap-2 font-display text-sm font-medium text-[#94a3b8]">
              <Sparkles className="h-4 w-4 text-[#3b82f6]" aria-hidden="true" />
              Tier 3 — Currently Exploring & Evaluating:
            </span>
            <div className="flex flex-wrap gap-2">
              {exploring.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[#ffffff0a] bg-[#ffffff04] px-2.5 py-1 font-mono text-xs text-[#94a3b8]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
