"use client";

import React, { useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  ChevronDown,
  Flame,
  Heart,
  Play,
  Signal,
  Sparkles,
  Wifi,
  Zap,
} from "lucide-react";

type PhoneTab = "today" | "train" | "metrics";

export function HeroSection() {
  const [phoneTab, setPhoneTab] = useState<PhoneTab>("today");

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 overflow-hidden bg-[#050505]"
    >
      {/* Background Architectural Grid + Atmospheric Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-revo-grid opacity-80" />
      <div className="pointer-events-none absolute inset-0 revo-spotlight-right" />
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full bg-[#C8FF00]/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Main Hero Grid */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-14 lg:gap-8 items-center">
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* System Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 border border-white/[0.1] bg-[#0D0D10]/90 px-3 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#C8FF00]" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8FF00]" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#C8FF00]">
                REVO Performance OS
              </span>
              <span className="hidden xs:inline text-white/20">|</span>
              <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.14em] text-[#9499A1]">
                Digital Fitness Ecosystem
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="font-display font-bold uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2.5rem,9vw,6.1rem)] text-white">
              <span className="block">YOUR FITNESS.</span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F7FA] to-[#C8FF00]">
                YOUR EVOLUTION.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#A1A6B0] font-normal">
              Meet <span className="text-white font-medium">REVO</span> — a
              smarter fitness experience designed to help you train, track,
              improve, and evolve.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
              <a
                href="#features"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#C8FF00] text-[#050505] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-200 hover:bg-[#d7ff45] hover:shadow-[0_0_40px_-6px_rgba(200,255,0,0.65)]"
              >
                <span>Explore REVO</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#experience"
                className="group inline-flex items-center justify-center gap-2.5 border border-white/15 bg-white/[0.02] text-white px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] transition-all duration-200 hover:border-[#C8FF00]/60 hover:bg-white/[0.05]"
              >
                <span>Discover the Experience</span>
                <ArrowRight className="w-4 h-4 text-[#C8FF00] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Technical Proof Strip */}
            <div className="pt-5 sm:pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
              <div>
                <p className="font-display text-xl sm:text-3xl font-bold text-white">
                  99.4<span className="text-[#C8FF00]">%</span>
                </p>
                <p className="mt-1 font-mono text-[9px] sm:text-[11px] uppercase tracking-wider text-[#7A808B]">
                  Biometric Precision
                </p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-3xl font-bold text-white">
                  0.4<span className="text-[#C8FF00]">ms</span>
                </p>
                <p className="mt-1 font-mono text-[9px] sm:text-[11px] uppercase tracking-wider text-[#7A808B]">
                  Live Sync
                </p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-3xl font-bold text-white">
                  24<span className="text-[#C8FF00]">/7</span>
                </p>
                <p className="mt-1 font-mono text-[9px] sm:text-[11px] uppercase tracking-wider text-[#7A808B]">
                  Adaptive AI
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Flagship Smartphone Mockup */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Ambient Lime Halo behind Phone */}
            <div className="pointer-events-none absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-[#C8FF00]/[0.14] blur-[90px]" />

            {/* Floating Left Telemetry HUD Card (Tablet Landscape & Desktop) */}
            <div className="hidden md:flex lg:hidden xl:flex flex-col gap-1 absolute left-2 xl:-left-10 top-16 xl:top-20 z-20 revo-panel px-4 py-3 w-44 animate-float-slow">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B909A]">
                  HRV Index
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-bold text-white">
                  82
                </span>
                <span className="font-mono text-xs text-[#C8FF00]">ms</span>
                <span className="ml-auto font-mono text-[10px] text-[#C8FF00]">
                  +12%
                </span>
              </div>
              <span className="text-[11px] text-[#7A808B]">
                Peak Autonomic Balance
              </span>
            </div>

            {/* Floating Right Telemetry HUD Card (Tablet Landscape & Desktop) */}
            <div
              className="hidden md:flex lg:hidden xl:flex flex-col gap-1.5 absolute right-2 xl:-right-6 bottom-20 xl:bottom-24 z-20 revo-panel px-4 py-3 w-48 animate-float-slow"
              style={{ animationDelay: "1.8s" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B909A]">
                  Adaptive Load
                </span>
                <Zap className="w-3.5 h-3.5 text-[#C8FF00]" />
              </div>
              <div className="w-full h-1.5 bg-white/10 overflow-hidden">
                <div className="h-full w-[82%] bg-[#C8FF00]" />
              </div>
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="text-white">Optimal Zone</span>
                <span className="text-[#C8FF00]">16.4 Strain</span>
              </div>
            </div>

            {/* Smartphone Hardware Frame */}
            <div className="relative z-10 w-full max-w-[304px] sm:max-w-[336px] rounded-[42px] sm:rounded-[46px] p-[9px] sm:p-[10px] bg-gradient-to-b from-[#2A2A32] via-[#121216] to-[#1D1D24] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.12)]">
              {/* Hardware Side Buttons */}
              <div className="absolute -left-[3px] top-24 sm:top-28 h-9 sm:h-10 w-[3px] bg-[#2D2D36] rounded-l" />
              <div className="absolute -left-[3px] top-36 sm:top-42 h-12 sm:h-14 w-[3px] bg-[#2D2D36] rounded-l" />
              <div className="absolute -right-[3px] top-32 sm:top-36 h-14 sm:h-16 w-[3px] bg-[#2D2D36] rounded-r" />

              {/* Inner OLED Screen */}
              <div className="relative rounded-[34px] sm:rounded-[37px] bg-[#070709] overflow-hidden border border-white/[0.06] flex flex-col min-h-[545px] sm:min-h-[600px]">
                {/* Top Status Bar & Dynamic Island */}
                <div className="px-5 sm:px-6 pt-3 pb-2 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/90">
                  <span>9:41</span>
                  <div className="w-20 sm:w-24 h-5 sm:h-6 rounded-full bg-black border border-white/[0.08] flex items-center justify-end pr-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1a2a12] ring-1 ring-[#C8FF00]/40" />
                  </div>
                  <div className="flex items-center gap-1 text-white/80">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <BatteryCharging className="w-3.5 h-3.5 text-[#C8FF00]" />
                  </div>
                </div>

                {/* App Header */}
                <div className="px-4 sm:px-5 pt-2 pb-3 flex items-center justify-between border-b border-white/[0.06]">
                  <div>
                    <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#C8FF00]">
                      REVO // LIVE
                    </p>
                    <p className="font-display text-sm font-semibold text-white">
                      {phoneTab === "today" && "Daily Readiness"}
                      {phoneTab === "train" && "Active Session"}
                      {phoneTab === "metrics" && "Evolution Lab"}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-mono uppercase bg-[#C8FF00]/15 text-[#C8FF00] border border-[#C8FF00]/30">
                    Synced
                  </span>
                </div>

                {/* Dynamic Screen Body */}
                <div className="flex-1 px-4 sm:px-5 py-3.5 sm:py-4 flex flex-col justify-between gap-3.5 sm:gap-4">
                  {phoneTab === "today" && (
                    <>
                      {/* Readiness Ring */}
                      <div className="relative flex flex-col items-center justify-center py-1">
                        <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                          <svg
                            viewBox="0 0 160 160"
                            className="w-full h-full -rotate-90"
                          >
                            <circle
                              cx="80"
                              cy="80"
                              r="68"
                              fill="none"
                              stroke="rgba(255,255,255,0.07)"
                              strokeWidth="8"
                            />
                            <circle
                              cx="80"
                              cy="80"
                              r="68"
                              fill="none"
                              stroke="#C8FF00"
                              strokeWidth="8"
                              strokeLinecap="square"
                              strokeDasharray="427"
                              strokeDashoffset="30"
                              className="transition-all duration-700"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8B909A]">
                              Readiness
                            </span>
                            <span className="font-display text-3xl sm:text-4xl font-bold text-white leading-none mt-1">
                              94
                            </span>
                            <span className="font-mono text-[9px] sm:text-[10px] text-[#C8FF00] mt-1">
                              PEAK STATE
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 3 Biometric Mini Tiles */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-[#111115] border border-white/[0.06] p-2 sm:p-2.5">
                          <p className="font-mono text-[9px] uppercase text-[#7A808B]">
                            Strain
                          </p>
                          <p className="font-display text-sm sm:text-base font-bold text-white mt-0.5">
                            16.4
                          </p>
                          <p className="font-mono text-[9px] text-[#C8FF00]">
                            +1.8
                          </p>
                        </div>
                        <div className="bg-[#111115] border border-white/[0.06] p-2 sm:p-2.5">
                          <p className="font-mono text-[9px] uppercase text-[#7A808B]">
                            HRV
                          </p>
                          <p className="font-display text-sm sm:text-base font-bold text-white mt-0.5">
                            82ms
                          </p>
                          <p className="font-mono text-[9px] text-[#C8FF00]">
                            Optimal
                          </p>
                        </div>
                        <div className="bg-[#111115] border border-white/[0.06] p-2 sm:p-2.5">
                          <p className="font-mono text-[9px] uppercase text-[#7A808B]">
                            Sleep
                          </p>
                          <p className="font-display text-sm sm:text-base font-bold text-white mt-0.5">
                            8h 14m
                          </p>
                          <p className="font-mono text-[9px] text-white/60">
                            96% Eff.
                          </p>
                        </div>
                      </div>

                      {/* Adaptive Session Card */}
                      <div className="bg-gradient-to-br from-[#151812] to-[#0D0D11] border border-[#C8FF00]/25 p-3 sm:p-3.5 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C8FF00]">
                            <Sparkles className="w-3 h-3" /> Adaptive Protocol
                          </span>
                          <span className="font-mono text-[10px] text-[#9499A1]">
                            42 MIN
                          </span>
                        </div>
                        <p className="font-display text-sm font-semibold text-white">
                          Hybrid Threshold + Power
                        </p>
                        <button
                          type="button"
                          onClick={() => setPhoneTab("train")}
                          className="w-full py-2 bg-[#C8FF00] text-[#050505] font-mono text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#d8ff47] transition-colors cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          Start Session
                        </button>
                      </div>
                    </>
                  )}

                  {phoneTab === "train" && (
                    <>
                      {/* Live Heart Rate Telemetry */}
                      <div className="bg-[#111115] border border-white/[0.07] p-3.5 sm:p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase text-[#C8FF00]">
                            <Heart className="w-3.5 h-3.5 animate-telemetry" />
                            Zone 4 • Threshold
                          </span>
                          <span className="font-mono text-xs text-white/70">
                            24:18
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-4xl sm:text-5xl font-bold text-white">
                            168
                          </span>
                          <span className="font-mono text-xs uppercase text-[#8B909A]">
                            BPM
                          </span>
                          <span className="ml-auto font-mono text-xs text-[#C8FF00]">
                            412 W
                          </span>
                        </div>
                        <svg
                          viewBox="0 0 240 44"
                          className="w-full h-10 sm:h-11 overflow-visible"
                        >
                          <polyline
                            fill="none"
                            stroke="#C8FF00"
                            strokeWidth="2"
                            points="0,34 20,30 38,32 56,18 76,22 96,12 116,16 138,8 160,15 182,10 205,14 224,6 240,9"
                          />
                          <circle cx="240" cy="9" r="3.5" fill="#C8FF00" />
                        </svg>
                      </div>

                      {/* Interval Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between font-mono text-[10px] uppercase">
                          <span className="text-[#8B909A]">
                            Interval 4 of 6
                          </span>
                          <span className="text-white">Pace 3:52 /km</span>
                        </div>
                        <div className="grid grid-cols-6 gap-1.5">
                          {[1, 2, 3, 4, 5, 6].map((bar) => (
                            <div
                              key={bar}
                              className={`h-2 ${
                                bar <= 4 ? "bg-[#C8FF00]" : "bg-white/10"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Live Coaching Cue */}
                      <div className="bg-[#101014] border border-white/[0.08] p-3.5 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-[#C8FF00] font-mono text-[10px] uppercase">
                          <Flame className="w-3.5 h-3.5" />
                          REVO AI Cue
                        </div>
                        <p className="text-xs text-[#C8CCD4] leading-relaxed">
                          Cadence locked at 182 spm. Hold output for 90s before
                          active recovery drop.
                        </p>
                      </div>
                    </>
                  )}

                  {phoneTab === "metrics" && (
                    <>
                      {/* Evolution Index */}
                      <div className="bg-[#111115] border border-white/[0.07] p-3.5 sm:p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase text-[#8B909A]">
                            VO2 Max Trend
                          </span>
                          <span className="font-mono text-[10px] text-[#C8FF00]">
                            +4.2 • 30D
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-3xl sm:text-4xl font-bold text-white">
                            58.6
                          </span>
                          <span className="font-mono text-[11px] text-[#7A808B]">
                            mL/kg/min
                          </span>
                        </div>
                        <div className="pt-2 flex items-end justify-between gap-2 h-20 sm:h-24">
                          {[54, 68, 62, 79, 86, 82, 94].map((val, i) => (
                            <div
                              key={i}
                              className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end"
                            >
                              <div
                                className={`w-full transition-all duration-500 ${
                                  i === 6
                                    ? "bg-[#C8FF00]"
                                    : "bg-white/15 hover:bg-white/30"
                                }`}
                                style={{ height: `${val}%` }}
                              />
                              <span className="font-mono text-[9px] text-[#646870]">
                                {["M", "T", "W", "T", "F", "S", "S"][i]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Load Balance */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="bg-[#111115] border border-white/[0.06] p-3">
                          <p className="font-mono text-[9px] uppercase text-[#7A808B]">
                            Strength Load
                          </p>
                          <p className="font-display text-base sm:text-lg font-bold text-white mt-1">
                            +14.2%
                          </p>
                          <p className="font-mono text-[9px] text-[#C8FF00]">
                            Progressive
                          </p>
                        </div>
                        <div className="bg-[#111115] border border-white/[0.06] p-3">
                          <p className="font-mono text-[9px] uppercase text-[#7A808B]">
                            Recovery Rate
                          </p>
                          <p className="font-display text-base sm:text-lg font-bold text-white mt-1">
                            91 / 100
                          </p>
                          <p className="font-mono text-[9px] text-[#C8FF00]">
                            Supercomp.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Interactive Bottom App Tab Bar */}
                <div className="px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#0B0B0E] border-t border-white/[0.07] grid grid-cols-3 gap-1">
                  {(
                    [
                      { id: "today", label: "Today", icon: Sparkles },
                      { id: "train", label: "Train", icon: Activity },
                      { id: "metrics", label: "Metrics", icon: Zap },
                    ] as const
                  ).map((tab) => {
                    const Icon = tab.icon;
                    const active = phoneTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setPhoneTab(tab.id)}
                        className={`py-2 flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                          active
                            ? "text-[#C8FF00] bg-[#C8FF00]/[0.08]"
                            : "text-[#7A808B] hover:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-mono text-[9px] uppercase tracking-wider">
                          {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Interactive Hint for Mobile & Tablet Users */}
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#646870] text-center">
              Tap tabs inside phone to preview REVO OS
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 flex items-center justify-between text-[#646870]">
        <a
          href="#about"
          className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] hover:text-[#C8FF00] transition-colors"
        >
          <ChevronDown className="w-4 h-4 text-[#C8FF00]" />
          <span>Scroll to Explore</span>
        </a>
        <div className="hidden sm:flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em]">
          <span>iOS • watchOS • WearOS</span>
          <span className="text-white/20">/</span>
          <span className="text-white/70">REVO ECOSYSTEM</span>
        </div>
      </div>
    </section>
  );
}
