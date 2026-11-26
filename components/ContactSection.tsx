"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Mail,
  Send,
  Smartphone,
} from "lucide-react";
import { Reveal } from "./Reveal";

const FOCUS_OPTIONS = [
  "Hybrid Training",
  "Strength & Power",
  "Endurance & Speed",
  "Recovery & Longevity",
] as const;

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState<string>(FOCUS_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 lg:py-36 bg-[#07070A] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/3 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-[#C8FF00]/[0.05] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Brand Contact & Platform Info */}
          <Reveal className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C8FF00]">
                <span className="h-[1px] w-7 sm:w-8 bg-[#C8FF00]" />
                <span>05 // Contact & Access</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-0.025em] leading-[1.03] text-white">
                Ready to
                <br />
                <span className="text-[#C8FF00]">evolve?</span>
              </h2>
              <p className="text-sm sm:text-base text-[#9499A1] leading-relaxed">
                Request early access to the REVO application, connect with our
                product team, or inquire about digital performance partnerships.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-1">
              <a
                href="mailto:hello@revo.fit"
                className="group revo-panel revo-panel-hover p-4 flex items-center justify-between sm:col-span-2 lg:col-span-1"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 shrink-0 border border-white/10 bg-[#0D0D11] flex items-center justify-center text-[#C8FF00]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#646870]">
                      Direct Inquiries
                    </p>
                    <p className="text-sm font-medium text-white">
                      hello@revo.fit
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#646870] group-hover:text-[#C8FF00] transition-colors" />
              </a>

              <div className="revo-panel p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 shrink-0 border border-white/10 bg-[#0D0D11] flex items-center justify-center text-[#C8FF00]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#646870]">
                    Platform Availability
                  </p>
                  <p className="text-sm font-medium text-white">
                    iOS • Android • Wearables
                  </p>
                </div>
              </div>

              <div className="revo-panel p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 shrink-0 border border-white/10 bg-[#0D0D11] flex items-center justify-center text-[#C8FF00]">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#646870]">
                    Global Digital Ecosystem
                  </p>
                  <p className="text-sm font-medium text-white">
                    Built for athletes everywhere
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Interactive Early Access & Contact Form */}
          <Reveal delayMs={120} className="lg:col-span-7 revo-panel p-5 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="py-10 sm:py-12 text-center space-y-5">
                <div className="mx-auto w-14 h-14 border border-[#C8FF00]/40 bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#C8FF00]">
                    Transmission Confirmed
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Welcome to REVO, {name.split(" ")[0]}.
                  </h3>
                  <p className="max-w-md mx-auto text-sm text-[#9499A1] leading-relaxed">
                    Your request for{" "}
                    <span className="text-white">{focus}</span> has been
                    registered. We&apos;ll reach out to{" "}
                    <span className="text-white">{email}</span> with your next
                    steps.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="inline-flex items-center gap-2 border border-white/15 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:border-[#C8FF00]/60 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                  <span className="font-display text-base sm:text-lg font-semibold text-white">
                    Request Access or Connect
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8FF00]">
                    RESPONSE &lt; 24H
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="revo-name"
                      className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8B909A]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="revo-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full bg-[#09090C] border border-white/[0.1] px-4 py-3.5 text-sm text-white placeholder:text-[#50545E] focus:outline-none focus:border-[#C8FF00] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="revo-email"
                      className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8B909A]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="revo-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@domain.com"
                      className="w-full bg-[#09090C] border border-white/[0.1] px-4 py-3.5 text-sm text-white placeholder:text-[#50545E] focus:outline-none focus:border-[#C8FF00] transition-colors"
                    />
                  </div>
                </div>

                {/* Primary Training Focus Selector */}
                <div className="space-y-2.5">
                  <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8B909A]">
                    Primary Performance Focus
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {FOCUS_OPTIONS.map((option) => {
                      const selected = focus === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFocus(option)}
                          className={`min-h-[44px] px-3.5 py-2.5 text-left text-xs font-medium border transition-all cursor-pointer ${
                            selected
                              ? "border-[#C8FF00] bg-[#C8FF00]/10 text-[#C8FF00]"
                              : "border-white/[0.08] bg-[#09090C] text-[#9499A1] hover:border-white/25 hover:text-white"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="revo-message"
                    className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8B909A]"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="revo-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your training goals or how you want to use REVO..."
                    className="w-full bg-[#09090C] border border-white/[0.1] px-4 py-3.5 text-sm text-white placeholder:text-[#50545E] focus:outline-none focus:border-[#C8FF00] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#C8FF00] text-[#050505] px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-200 hover:bg-[#d8ff47] hover:shadow-[0_0_36px_-6px_rgba(200,255,0,0.6)] cursor-pointer"
                >
                  <span>Request Early Access</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
