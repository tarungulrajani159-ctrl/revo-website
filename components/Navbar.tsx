"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { RevoLogo } from "./RevoLogo";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About REVO", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Experience", href: "#experience" },
  { label: "Our Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08] py-3 sm:py-3.5"
            : "bg-transparent border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={() => setMobileOpen(false)}
            className="group focus:outline-none shrink-0"
            aria-label="REVO Home"
          >
            <RevoLogo className="transition-opacity group-hover:opacity-90" />
          </a>

          {/* Desktop Nav */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#9499A1] hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-3.5 right-3.5 bottom-0.5 h-[1.5px] bg-[#C8FF00] transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Tablet/Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#features"
              className="hidden sm:inline-flex group items-center gap-2 bg-[#C8FF00] text-[#050505] px-4 lg:px-5 py-2.5 text-xs lg:text-[13px] font-semibold tracking-wide uppercase transition-all duration-200 hover:bg-[#d8ff47] hover:shadow-[0_0_28px_-4px_rgba(200,255,0,0.6)]"
            >
              <span>Explore REVO</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-white/15 bg-[#0D0D10]/90 text-white hover:border-[#C8FF00]/60 transition-colors cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile & Tablet Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full pt-24 pb-8 px-6 sm:px-10 max-w-xl mx-auto flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col divide-y divide-white/[0.07]">
            {NAV_LINKS.map((link, idx) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 sm:py-5 flex items-center justify-between text-2xl sm:text-3xl font-display font-medium transition-colors ${
                    isActive
                      ? "text-[#C8FF00]"
                      : "text-white hover:text-[#C8FF00]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#646870]">
                    0{idx + 1}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-white/[0.08] space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C8FF00] text-[#050505] px-6 py-4 text-sm font-semibold tracking-wider uppercase"
            >
              <span>Explore REVO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-center font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#646870]">
              REVO OS v2.4 • Digital Fitness Ecosystem
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
