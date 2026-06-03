"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply-to: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=AI role conversation&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell bg-[#0a0a14]">
      <div className="container">
        <motion.div
          className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-[#ffffff0f] bg-[#0f0f1a] shadow-2xl backdrop-blur"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
        >
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#ffffff0f] p-6 md:p-8 lg:border-b-0 lg:border-r">
              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#22c55e]/25 bg-[#22c55e]/10 px-3 py-1 text-sm text-[#22c55e]">
                <span className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_16px_rgba(34,197,94,0.8)]" />
                Open to Work
              </div>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Building something with AI? Let&apos;s talk.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#94a3b8]">
                I&apos;m actively looking for full-time roles and internships in AI Engineering,
                Agentic AI, and Full Stack development. I respond within 24 hours.
              </p>

              <div className="mt-8 space-y-4 text-sm text-[#94a3b8]">
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#6366f1]" aria-hidden="true" />
                  {profile.email}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#6366f1]" aria-hidden="true" />
                  {profile.phone}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#6366f1]" aria-hidden="true" />
                  {profile.location}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button type="button" onClick={copyEmail} className="bg-[#6366f1] text-white shadow-[0_0_32px_rgba(99,102,241,0.32)] hover:bg-[#6366f1] hover:shadow-[0_0_42px_rgba(99,102,241,0.44)]">
                  {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                  {copied ? "Copied" : "Copy Email"}
                </Button>
                <Button asChild variant="secondary" className="border-[#3b82f6]/25 bg-[#3b82f6]/10 hover:border-[#3b82f6]/45 hover:bg-[#3b82f6]/15">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="secondary" className="border-[#a855f7]/25 bg-[#a855f7]/10 hover:border-[#a855f7]/45 hover:bg-[#a855f7]/15">
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <form className="p-6 md:p-8" onSubmit={submit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the role, product, or AI system you are building."
                  required
                />
              </div>
              <Button type="submit" className="mt-5 w-full sm:w-auto">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
