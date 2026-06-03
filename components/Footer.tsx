import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#ffffff0f] bg-[#080810]">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-center text-sm text-[#64748b] sm:flex-row sm:text-left">
        <p>© 2026 Anirudh Kumar R — Designed & Built with intention.</p>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="Email Anirudh">
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
