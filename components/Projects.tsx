"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Project Proof"
          title="Investor-demo level AI systems, built by one engineer."
          description="These are not coursework thumbnails. They are product-shaped systems with retrieval, automation, cloud pipelines, model architecture, deployment, and measurable business impact."
        />

        <motion.div
          className="mx-auto mb-8 flex max-w-4xl flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="border-[#6366f1]/20 bg-[#6366f1]/10 text-[#818cf8]">RAG verification</Badge>
          <Badge className="border-[#f59e0b]/20 bg-[#f59e0b]/10 text-[#f59e0b]">AWS cost design</Badge>
          <Badge className="border-[#ef4444]/20 bg-[#ef4444]/10 text-[#ef4444]">Research architecture</Badge>
          <Badge className="border-[#22c55e]/20 bg-[#22c55e]/10 text-[#22c55e]">Workflow automation</Badge>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
