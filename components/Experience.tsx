"use client";

import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-shell bg-[#0a0a14]">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Internships with real automation surface area."
          description="GTM systems, CRM workflows, APEX modules, PL/SQL logic, dashboards, and operational software shipped against deadlines."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#6366f1] via-[#a855f7] to-transparent md:left-1/2" />
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              className={`relative mb-8 pl-12 md:w-1/2 md:pl-0 ${
                index % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"
              }`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <span
                className={`absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full border border-[#a855f7]/30 bg-[#a855f7]/15 text-white shadow-[0_0_32px_rgba(168,85,247,0.35)] ${
                  index % 2 === 0 ? "md:left-auto md:right-[-1rem]" : "md:left-[-1rem]"
                }`}
              >
                {index + 1}
              </span>

              <div className="rounded-lg border border-[#ffffff0f] bg-[#0f0f1a] p-6 shadow-2xl backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 rounded-md border border-[#a855f7]/20 bg-[#a855f7]/15 px-3 py-1 text-sm text-[#a855f7]">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {item.duration}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-2 text-[#a855f7]">{item.company}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#94a3b8]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#a855f7]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
