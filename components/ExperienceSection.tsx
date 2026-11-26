"use client";

import React, { useState } from "react";
import {
  Activity,
  CheckCircle2,
  Cpu,
  Flame,
  HeartPulse,
  Layers,
  ShieldCheck,
  Sparkles,
  Watch,
} from "lucide-react";
import { Reveal } from "./Reveal";

const EXPERIENCE_MODULES = [
  {
    id: "readiness",
    num: "01",
    shortTitle: "Readiness",
    title: "Adaptive Daily Readiness",
    subtitle: "Know your exact capacity before your first rep.",
    description:
      "Every morning, REVO synthesizes overnight HRV, deep sleep architecture, and cumulative neuromuscular load into a crisp readiness briefing and tailored session plan.",
    highlights: [
      "Morning readiness score calibrated to your 30-day baseline",
      "Automatic intensity scaling when recovery dips",
      "Clear sleep debt & autonomic balance breakdown",
    ],
    badge: "MORNING BRIEFING",
    primaryStat: { label: "Readiness Index", value: "94", unit: "/100" },
    secondaryStats: [
      { label: "Resting HR", value: "46 bpm" },
      { label: "Deep Sleep", value: "2h 18m" },
      { label: "HRV Delta", value: "+14 ms" },
    ],
    statusNote: "Green light for high-output threshold work.",
  },
  {
    id: "live",
    num: "02",
    shortTitle: "Live Coach",
    title: "Live Telemetry Coaching",
    subtitle: "Zero clutter. Pure real-time execution.",
    description:
      "Built for high-contrast glanceability mid-workout. REVO delivers live heart-rate zone locks, tempo audio cues, and dynamic interval adjustments right on your screen and wrist.",
    highlights: [
      "High-contrast OLED workout cockpit with zero distraction",
      "Real-time heart-rate zone & power output pacing",
      "Smart rest timers calibrated to heart-rate recovery drop",
    ],
    badge: "ACTIVE COCKPIT",
    primaryStat: { label: "Live Output", value: "168", unit: "BPM" },
    secondaryStats: [
      { label: "Power", value: "412 W" },
      { label: "Zone", value: "Z4 Lock" },
      { label: "Split", value: "3:52 /km" },
    ],
    statusNote: "Optimal threshold cadence maintained for 14m.",
  },
  {
    id: "lab",
    num: "03",
    shortTitle: "Perf. Lab",
    title: "Performance Lab & Load",
    subtitle: "Visualize how your body evolves over months.",
    description:
      "Go beyond isolated workouts. REVO maps acute-to-chronic workload ratios, strength progression curves, and metabolic adaptations so you peak on schedule without burnout.",
    highlights: [
      "Acute vs. chronic strain balance to prevent overtraining",
      "Muscle-group volume heatmaps & PR trajectory",
      "90-day endurance & power forecasting engine",
    ],
    badge: "ANALYTICS LAB",
    primaryStat: { label: "VO2 Trajectory", value: "58.6", unit: "+4.2" },
    secondaryStats: [
      { label: "Load Ratio", value: "1.14 Opt" },
      { label: "Strength", value: "+14.2%" },
      { label: "Consistency", value: "96%" },
    ],
    statusNote: "Projected 10K threshold improvement: -1m 42s.",
  },
  {
    id: "ecosystem",
    num: "04",
    shortTitle: "Wearables",
    title: "Connected Wearable Sync",
    subtitle: "Your hardware, elevated by REVO OS.",
    description:
      "Whether you train with an Apple Watch Ultra, Garmin, WHOOP, or Oura Ring, REVO unifies every biometric stream into a single intelligent command center.",
    highlights: [
      "Sub-second Bluetooth 5.3 & Apple HealthKit sync",
      "Unified timeline across wearables and smart sensors",
      "Offline session caching with instant cloud reconciliation",
    ],
    badge: "ECOSYSTEM SYNC",
    primaryStat: { label: "Sync Latency", value: "0.4", unit: "ms" },
    secondaryStats: [
      { label: "Watch OS", value: "Linked" },
      { label: "HR Strap", value: "100 Hz" },
      { label: "Encryption", value: "E2E" },
    ],
    statusNote: "3 active sensors streaming encrypted telemetry.",
  },
] as const;

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = EXPERIENCE_MODULES[activeIndex];

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-24 lg:py-36 bg-[#08080B] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Radial Spotlight */}
      <div className="pointer-events-none absolute inset-0 revo-spotlight opacity-80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C8FF00]">
              <span className="h-[1px] w-7 sm:w-8 bg-[#C8FF00]" />
              <span>03 // The App Experience</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-0.025em] leading-[1.03] text-white">
              Designed for focus.
              <br />
              <span className="text-[#8B909A]">Built for speed.</span>
            </h2>
          </div>
        </Reveal>

        {/* Interactive Split Showcase */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Mobile & Tablet Compact 2x2 / 4-col Tab Bar (< lg) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 lg:hidden">
            {EXPERIENCE_MODULES.map((mod, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3.5 py-3 text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#121417] border-[#C8FF00]/60 text-white shadow-[0_0_24px_-10px_rgba(200,255,0,0.3)]"
                      : "bg-[#0B0B0E]/80 border-white/[0.08] text-[#8B909A] hover:text-white"
                  }`}
                >
                  <span
                    className={`block font-mono text-[10px] ${
                      isSelected ? "text-[#C8FF00]" : "text-[#646870]"
                    }`}
                  >
                    {mod.num}
                  </span>
                  <span className="block font-display text-xs sm:text-sm font-semibold mt-0.5 truncate">
                    {mod.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop Vertical Module Selector (lg+) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3">
            {EXPERIENCE_MODULES.map((mod, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-6 border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#121316] border-[#C8FF00]/50 shadow-[0_0_32px_-12px_rgba(200,255,0,0.22)]"
                      : "bg-[#0B0B0E]/70 border-white/[0.07] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs ${
                          isSelected ? "text-[#C8FF00]" : "text-[#646870]"
                        }`}
                      >
                        {mod.num}
                      </span>
                      <h3
                        className={`font-display text-lg font-semibold ${
                          isSelected ? "text-white" : "text-[#B0B5BE]"
                        }`}
                      >
                        {mod.title}
                      </h3>
                    </div>
                    <span
                      className={`h-2 w-2 transition-colors ${
                        isSelected ? "bg-[#C8FF00]" : "bg-white/15"
                      }`}
                    />
                  </div>
                  <p className="mt-2 pl-7 text-sm text-[#8B909A]">
                    {mod.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Live Interactive Preview Stage */}
          <div className="lg:col-span-7 revo-panel p-5 sm:p-8 lg:p-9 relative overflow-hidden">
            {/* Subtle Grid Overlay inside Stage */}
            <div className="pointer-events-none absolute inset-0 bg-revo-grid-sm opacity-45" />

            <div className="relative z-10 space-y-6 sm:space-y-8">
              {/* Top Stage Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 sm:pb-5 border-b border-white/[0.08]">
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 bg-[#C8FF00]" />
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#C8FF00]">
                    {current.badge}
                  </span>
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#7A808B]">
                  REVO OS // MODULE {current.num}
                </span>
              </div>

              {/* Mobile/Tablet Active Module Title */}
              <div className="lg:hidden space-y-1">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8B909A]">
                  {current.subtitle}
                </p>
              </div>

              {/* Dynamic Telemetry Dashboard Mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-stretch">
                {/* Primary Hero Telemetry Card */}
                <div className="sm:col-span-7 bg-[#070709] border border-white/[0.09] p-5 sm:p-6 flex flex-col justify-between gap-5 sm:gap-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8B909A]">
                      {current.primaryStat.label}
                    </span>
                    {current.id === "readiness" && (
                      <Sparkles className="w-4 h-4 text-[#C8FF00]" />
                    )}
                    {current.id === "live" && (
                      <HeartPulse className="w-4 h-4 text-[#C8FF00]" />
                    )}
                    {current.id === "lab" && (
                      <Activity className="w-4 h-4 text-[#C8FF00]" />
                    )}
                    {current.id === "ecosystem" && (
                      <Watch className="w-4 h-4 text-[#C8FF00]" />
                    )}
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                      {current.primaryStat.value}
                    </span>
                    <span className="font-mono text-xs sm:text-sm uppercase text-[#C8FF00]">
                      {current.primaryStat.unit}
                    </span>
                  </div>

                  {/* Animated Progress / Waveform Bar */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-12 gap-1 h-7 sm:h-8 items-end">
                      {[34, 48, 42, 66, 58, 74, 82, 78, 90, 86, 95, 100].map(
                        (h, i) => (
                          <div
                            key={i}
                            className={`transition-all duration-500 ${
                              i >= 9 ? "bg-[#C8FF00]" : "bg-white/15"
                            }`}
                            style={{
                              height: `${
                                ((h + activeIndex * 11) % 70) + 30
                              }%`,
                            }}
                          />
                        )
                      )}
                    </div>
                    <p className="font-mono text-[10px] sm:text-[11px] text-[#A1A6B0] flex items-center gap-2 pt-1">
                      <Flame className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>{current.statusNote}</span>
                    </p>
                  </div>
                </div>

                {/* Secondary Companion Metrics Stack */}
                <div className="sm:col-span-5 grid grid-cols-3 sm:grid-cols-1 gap-2.5 sm:gap-3">
                  {current.secondaryStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[#0B0B0F] border border-white/[0.08] px-3 py-3 sm:px-4 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                    >
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#7A808B]">
                        {stat.label}
                      </span>
                      <span className="font-display text-sm sm:text-base font-semibold text-white">
                        {stat.value}
                      </span>
                    </div>
                  ))}

                  <div className="col-span-3 sm:col-span-1 bg-[#C8FF00]/[0.07] border border-[#C8FF00]/25 px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#C8FF00] shrink-0" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#C8FF00]">
                      Encrypted Biometric Vault
                    </span>
                  </div>
                </div>
              </div>

              {/* Module Explanation & Key Highlights */}
              <div className="pt-1 space-y-4">
                <p className="text-sm sm:text-[15px] text-[#A1A6B0] leading-relaxed">
                  {current.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                  {current.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs text-[#D1D5DC] bg-white/[0.02] border border-white/[0.06] p-3"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Footer Strip */}
              <div className="pt-4 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#646870]">
                <span className="inline-flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#C8FF00]" />
                  REVO Adaptive Core
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C8FF00]" />
                  iOS • Android • Wearables
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
