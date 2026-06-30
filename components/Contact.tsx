"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    try {
      // Attempt Web3Forms serverless submission if key is configured, or fallback smoothly
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          name,
          email,
          message,
          subject: `AI Engineering Role Inquiry from ${name}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback directly to mailto if key is unconfigured
        const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply-to: ${email}`);
        window.location.href = `mailto:${profile.email}?subject=AI role conversation&body=${body}`;
      }
    } catch {
      const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply-to: ${email}`);
      window.location.href = `mailto:${profile.email}?subject=AI role conversation&body=${body}`;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell bg-[#0a0a0f]">
      <div className="container">
        <motion.div
          className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-[#ffffff0f] bg-[#0f0f1a] shadow-2xl backdrop-blur"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
        >
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
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
                Agentic AI, and Full Stack development. Direct reach-outs get priority responses.
              </p>

              <div className="mt-8 space-y-4 text-sm text-[#94a3b8]">
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#3b82f6]" aria-hidden="true" />
                  <span className="font-mono text-white">{profile.email}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#3b82f6]" aria-hidden="true" />
                  {profile.phone}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#3b82f6]" aria-hidden="true" />
                  {profile.location}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button type="button" onClick={copyEmail} className="bg-[#3b82f6] text-white shadow-[0_0_32px_rgba(59,130,246,0.35)] hover:bg-[#2563eb] hover:shadow-[0_0_42px_rgba(59,130,246,0.45)]">
                  {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                  {copied ? "Copied Email" : "Copy Email"}
                </Button>
                <Button asChild variant="secondary" className="border-[#3b82f6]/25 bg-[#3b82f6]/10 hover:border-[#3b82f6]/45 hover:bg-[#3b82f6]/15">
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="h-4 w-4 text-[#3b82f6]" aria-hidden="true" />
                    Send Direct Email
                  </a>
                </Button>
                <Button asChild variant="secondary" className="border-[#ffffff12] bg-[#ffffff05] hover:bg-[#ffffff10]">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4 text-[#3b82f6]" aria-hidden="true" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="secondary" className="border-[#ffffff12] bg-[#ffffff05] hover:bg-[#ffffff10]">
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-[#22c55e]/15 text-[#22c55e]">
                    <Sparkles className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">Message Received!</h3>
                  <p className="mt-2 text-sm text-[#94a3b8]">
                    Thanks for reaching out. I respond to all recruiter and engineering inquiries within 24 hours.
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Your name" required className="h-11 border-[#ffffff14] bg-[#080810]" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="you@company.com" required className="h-11 border-[#ffffff14] bg-[#080810]" />
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
                      className="min-h-[140px] border-[#ffffff14] bg-[#080810]"
                    />
                  </div>
                  <Button type="submit" disabled={submitting} className="mt-5 h-11 w-full bg-[#3b82f6] text-white hover:bg-[#2563eb] sm:w-auto">
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
