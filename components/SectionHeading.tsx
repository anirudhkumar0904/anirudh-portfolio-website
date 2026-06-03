"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Badge className="mb-5 border-[#6366f1]/20 bg-[#6366f1]/10 text-[#818cf8]">{eyebrow}</Badge>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-[#94a3b8] sm:text-lg">{description}</p>
    </motion.div>
  );
}
