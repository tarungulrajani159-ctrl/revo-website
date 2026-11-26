import React from "react";
import Image from "next/image";
import { Cpu, Layers, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const PILLARS = [
  {
    index: "01",
    icon: Cpu,
    title: "Adaptive Intelligence",
    description:
      "Static plans break down the moment real life intervenes. REVO recalculates your training load, intensity, and recovery targets in real time based on how your body responds.",
  },
  {
    index: "02",
    icon: Layers,
    title: "Unified Digital Ecosystem",
    description:
      "Strength, endurance, sleep architecture, heart-rate variability, and daily strain — unified inside one razor-sharp interface built for clarity under fatigue.",
  },
  {
    index: "03",
    icon: TrendingUp,
    title: "Continuous Evolution",
    description:
      "Every session refines your personal performance model. REVO turns raw biometric signals into decisive daily guidance that compounds week after week.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-36 bg-[#070709] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="pointer-events-none absolute right-0 top-1/4 w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full bg-[#C8FF00]/[0.04] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C8FF00]">
              <span className="h-[1px] w-7 sm:w-8 bg-[#C8FF00]" />
              <span>01 // About REVO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold uppercase tracking-[-0.025em] leading-[1.03] text-white">
              Not another tracker.
              <br />
              <span className="text-[#8B909A]">An evolution engine.</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#9499A1] leading-relaxed max-w-2xl">
              Modern athletes and everyday performers are drowned in
              disconnected data and generic workout routines. REVO replaces
              guesswork with a cohesive fitness technology platform engineered
              to decode your physiology and elevate every session.
            </p>
          </div>
        </Reveal>

        {/* Editorial Split Layout */}
        <div className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: 3 Architectural Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.index} delayMs={i * 90}>
                  <div className="revo-panel revo-panel-hover p-5 sm:p-7 flex gap-4 sm:gap-5 items-start">
                    <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 border border-white/10 bg-[#0D0D11] flex items-center justify-center text-[#C8FF00]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] text-[#C8FF00]">
                          {pillar.index}
                        </span>
                        <h3 className="font-display text-base sm:text-xl font-semibold text-white tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-[15px] text-[#9499A1] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right: Editorial Visual Frame with Telemetry HUD */}
          <Reveal
            delayMs={150}
            className="lg:col-span-6 relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:min-h-full border border-white/[0.1] bg-[#0B0B0E] overflow-hidden group"
          >
            <Image
              src="/images/revo-athlete.jpg"
              alt="REVO performance athlete in dark studio rim lighting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />

            {/* Top-Left HUD Badge */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 bg-[#050505]/85 backdrop-blur-md border border-white/10 px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/90">
                REVO Performance Lab
              </span>
            </div>

            {/* Bottom Telemetry Overlay Strip */}
            <div className="absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 bg-[#070709]/88 backdrop-blur-xl border border-white/10 p-3.5 sm:p-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 mb-2.5 sm:pb-3 sm:mb-3">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#C8FF00]">
                  Live Biometric Synthesis
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#7A808B]">
                  MODEL v2.4
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                <div>
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase text-[#7A808B]">
                    Output Power
                  </p>
                  <p className="font-display text-base sm:text-xl font-bold text-white mt-0.5">
                    418{" "}
                    <span className="text-[11px] font-mono text-[#C8FF00]">
                      W
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase text-[#7A808B]">
                    Efficiency
                  </p>
                  <p className="font-display text-base sm:text-xl font-bold text-white mt-0.5">
                    97.2
                    <span className="text-[11px] font-mono text-[#C8FF00]">
                      %
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase text-[#7A808B]">
                    Recovery
                  </p>
                  <p className="font-display text-base sm:text-xl font-bold text-white mt-0.5">
                    +18
                    <span className="text-[11px] font-mono text-[#C8FF00]">
                      %
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
