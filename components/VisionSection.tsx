import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const EVOLUTION_STAGES = [
  {
    step: "01",
    label: "CALIBRATE",
    title: "Understand Your Baseline",
    description:
      "REVO maps your autonomic nervous system, recovery velocity, and movement mechanics to establish a living blueprint of your physiology.",
  },
  {
    step: "02",
    label: "EXECUTE",
    title: "Train With Precision",
    description:
      "Every workout adapts dynamically to your readiness window — eliminating wasted volume while maximizing strength, speed, and metabolic output.",
  },
  {
    step: "03",
    label: "EVOLVE",
    title: "Compound Your Potential",
    description:
      "As your body adapts, REVO raises the bar intelligently — turning consistent daily telemetry into sustained, lifelong athletic longevity.",
  },
];

export function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-20 sm:py-28 lg:py-40 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Cinematic Texture */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/revo-vision.jpg"
          alt="REVO futuristic titanium and electric lime telemetry surface"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-[#050505]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Manifesto Block */}
        <Reveal>
          <div className="max-w-4xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C8FF00]">
              <span className="h-[1px] w-7 sm:w-8 bg-[#C8FF00]" />
              <span>04 // Our Vision</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-bold uppercase tracking-[-0.03em] leading-[1.02] text-white">
              The future of human performance
              <span className="text-[#C8FF00]"> isn&apos;t harder.</span>
              <br />
              It&apos;s smarter.
            </h2>

            <p className="max-w-2xl text-sm sm:text-base lg:text-xl text-[#B4B9C2] leading-relaxed font-light">
              We built REVO on a simple conviction: elite sports science
              shouldn&apos;t live behind laboratory doors. By uniting real-time
              biometrics, adaptive intelligence, and distraction-free design,
              REVO gives every dedicated athlete a digital ecosystem that
              evolves with every heartbeat.
            </p>
          </div>
        </Reveal>

        {/* 3-Stage Evolution Pipeline */}
        <div className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {EVOLUTION_STAGES.map((stage, idx) => (
            <Reveal key={stage.step} delayMs={idx * 90}>
              <div className="revo-panel revo-panel-hover p-6 sm:p-8 flex flex-col justify-between gap-5 sm:gap-6 h-full">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 sm:pb-4">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C8FF00]">
                    {stage.label}
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-[#646870]">
                    STAGE {stage.step}
                  </span>
                </div>
                <div className="space-y-2.5 sm:space-y-3">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#9499A1] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Statement Banner */}
        <Reveal delayMs={140}>
          <div className="mt-10 sm:mt-14 border border-white/[0.1] bg-[#0A0A0D]/90 backdrop-blur-xl p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1">
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#C8FF00]">
                REVO Philosophy
              </p>
              <p className="font-display text-lg sm:text-2xl font-medium text-white">
                Precision software for people who refuse to plateau.
              </p>
            </div>
            <a
              href="#contact"
              className="w-full sm:w-auto shrink-0 group inline-flex items-center justify-center gap-2 bg-[#C8FF00] text-[#050505] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all hover:bg-[#d8ff47]"
            >
              <span>Join the Ecosystem</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
