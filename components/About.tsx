"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

import { SectionHeading } from "@/components/SectionHeading";
import { stats } from "@/lib/data";

function Counter({
  value,
  suffix,
  prefix = "",
  decimals = 0
}: {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Number(latest.toFixed(decimals)))
    });
    return () => controls.stop();
  }, [decimals, inView, value]);

  return (
    <>
      <span ref={ref} suppressHydrationWarning>
        {prefix}
        {decimals > 0 ? display.toFixed(decimals) : Math.round(display)}
        {suffix}
      </span>
      <noscript>
        <span>
          {prefix}
          {value}
          {suffix}
        </span>
      </noscript>
    </>
  );
}

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Signal in 7 seconds"
          title="Not experimenting with AI. Shipping systems around it."
          description="A 2026 computer science graduate with production instincts, measurable outcomes, and enough product taste to make complex AI feel usable."
        />

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            className="rounded-lg border border-[#ffffff0f] bg-[#0f0f1a] p-6 shadow-2xl backdrop-blur md:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-9 text-[#94a3b8]">
              I&apos;m a CS (IoT & Automation) graduate from SASTRA University. I build AI systems
              that work in production — from biomedical GraphRAG with PubMed-grounded
              fact-checking, to deepfake detection at 98%+ accuracy, to multilingual AWS pipelines
              supporting 9 Indian languages while reducing API costs by 96%.
            </p>
            <p className="mt-6 text-lg leading-9 text-[#94a3b8]">
              At Glacis, I built a 91-node automation platform and normalized 7 webhook formats
              into 30+ event types. The work pattern is consistent: identify the expensive
              bottleneck, design the system around it, then prove the result with metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-lg border border-[#22d3ee]/20 bg-[#0f0f1a] p-5 shadow-[0_18px_70px_rgba(34,211,238,0.08)]"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <div className="font-display text-3xl font-semibold text-[#22d3ee] sm:text-4xl">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-[#94a3b8]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
