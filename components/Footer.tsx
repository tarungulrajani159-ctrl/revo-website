import React from "react";
import { RevoLogo } from "./RevoLogo";

const FOOTER_LINKS = {
  Ecosystem: [
    { label: "Home", href: "#home" },
    { label: "About REVO", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Experience", href: "#experience" },
  ],
  Brand: [
    { label: "Our Vision", href: "#vision" },
    { label: "Contact", href: "#contact" },
    { label: "Performance Lab", href: "#experience" },
    { label: "Wearable Sync", href: "#features" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-14 sm:pt-16 pb-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-12 sm:pb-14 border-b border-white/[0.07]">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-6 space-y-4">
            <RevoLogo size="md" />
            <p className="max-w-sm text-sm text-[#8B909A] leading-relaxed">
              REVO is a next-generation fitness technology application and
              digital performance ecosystem engineered to help you train, track,
              improve, and evolve.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8FF00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="col-span-1 md:col-span-3 space-y-3.5">
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/60">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#8B909A] hover:text-[#C8FF00] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#646870] text-center sm:text-left">
          <p className="font-mono">
            © 2026 REVO Technologies. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            YOUR FITNESS. YOUR EVOLUTION.
          </p>
        </div>

        {/* Subtle Oversized Architectural Wordmark */}
        <div
          aria-hidden="true"
          className="mt-8 sm:mt-10 select-none pointer-events-none text-center overflow-hidden"
        >
          <span className="font-display font-bold uppercase tracking-[0.22em] text-[clamp(3.6rem,18vw,13rem)] leading-[0.82] text-white/[0.03] block">
            REVO
          </span>
        </div>
      </div>
    </footer>
  );
}
