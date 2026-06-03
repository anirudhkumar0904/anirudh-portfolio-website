"use client";

import { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/lib/data";

const awardAccents = {
  gold: "#f59e0b",
  platinum: "#ef4444",
  silver: "#3b82f6"
};

type AwardStyle = CSSProperties & {
  "--award-accent": string;
};

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements"
          title="Credentialed signals, presented like proof of trajectory."
          description="Awards and certifications that reinforce the same story: AI execution, cloud fluency, and responsible model thinking."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              className="award-card award-shimmer relative overflow-hidden rounded-lg border p-6 shadow-plaque"
              style={{ "--award-accent": awardAccents[achievement.tone as keyof typeof awardAccents] } as AwardStyle}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.65 }}
            >
              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-lg border border-[#ffffff0f] bg-[#080810] text-3xl">
                    <span aria-hidden="true">{achievement.icon}</span>
                  </span>
                  <Award className="h-6 w-6 text-[color:var(--award-accent)]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{achievement.title}</h3>
                <p className="mt-3 text-sm text-[#94a3b8]">{achievement.issuer}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
