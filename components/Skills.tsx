"use client";

import { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { exploring, skillGroups } from "@/lib/data";

const SKILL_ACCENTS = ["#6366f1", "#22d3ee", "#f59e0b", "#22c55e", "#a855f7"];

type SkillStyle = CSSProperties & {
  "--skill-accent": string;
};

export function Skills() {
  return (
    <section id="skills" className="section-shell bg-[#0a0a14]">
      <div className="container">
        <SectionHeading
          eyebrow="Skill System"
          title="A toolkit for building AI products end to end."
          description="The stack clusters around one theme: connect models to messy business inputs, automate the workflow, and keep the system deployable."
        />

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-lg border border-[#ffffff0f] bg-[#0f0f1a] p-4 shadow-2xl sm:p-6 lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.12),transparent_32rem)]" />
          <div className="absolute left-1/2 top-1/2 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22d3ee]/10 lg:block" />
          <div className="absolute left-1/2 top-1/2 hidden h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a855f7]/10 lg:block" />

          <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  className="skill-card rounded-lg border p-5 shadow-2xl backdrop-blur"
                  style={{ "--skill-accent": SKILL_ACCENTS[index % SKILL_ACCENTS.length] } as SkillStyle}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="skill-category-icon grid h-9 w-9 place-items-center rounded-md border">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="skill-category-title font-display text-base font-semibold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="skill-pill rounded-md border px-2.5 py-1.5 text-xs shadow-sm transition"
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + skillIndex * 0.025 }}
                        whileHover={{ y: -3 }}
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
            className="relative mt-6 flex flex-wrap items-center gap-3 rounded-lg border border-[#22d3ee]/15 bg-[#22d3ee]/[0.06] p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="flex items-center gap-2 text-sm font-medium text-[#22d3ee]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Currently exploring:
            </span>
            {exploring.map((item) => (
              <span key={item} className="rounded-md bg-[#080810] px-2.5 py-1 font-mono text-xs text-[#22d3ee]">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
