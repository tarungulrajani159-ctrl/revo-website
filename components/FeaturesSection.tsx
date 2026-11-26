import React from "react";
import {
  Activity,
  BarChart3,
  Brain,
  Gauge,
  MoonStar,
  Watch,
} from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    code: "SYS-01",
    icon: Brain,
    title: "Adaptive Training Engine",
    description:
      "Dynamic sessions that recalibrate sets, pacing, and volume automatically based on your daily readiness and recent strain.",
    metricLabel: "Recalibration",
    metricValue: "Real-Time",
    visual: "bars",
  },
  {
    code: "SYS-02",
    icon: Activity,
    title: "Live Biometric Telemetry",
    description:
      "Track heart-rate zones, autonomic stress, VO2 progression, and caloric output with sub-second wearable precision.",
    metricLabel: "Sampling Rate",
    metricValue: "100 Hz",
    visual: "wave",
  },
  {
    code: "SYS-03",
    icon: Gauge,
    title: "Movement & Tempo Precision",
    description:
      "Guided pacing cues, velocity curves, and biomechanical symmetry insights that sharpen form while reducing injury risk.",
    metricLabel: "Symmetry Index",
    metricValue: "98.4%",
    visual: "meter",
  },
  {
    code: "SYS-04",
    icon: MoonStar,
    title: "Recovery & Readiness Score",
    description:
      "Deep sleep staging, HRV baselines, and resting heart-rate trends combined into one actionable readiness number every morning.",
    metricLabel: "Readiness Window",
    metricValue: "24/7 Sync",
    visual: "dots",
  },
  {
    code: "SYS-05",
    icon: Watch,
    title: "Seamless Wearable Ecosystem",
    description:
      "Native two-way sync across Apple Watch, Garmin, WHOOP, Oura, and Bluetooth chest straps — zero friction, zero lock-in.",
    metricLabel: "Integrations",
    metricValue: "12+ Devices",
    visual: "chips",
  },
  {
    code: "SYS-06",
    icon: BarChart3,
    title: "Performance Lab Analytics",
    description:
      "Long-horizon progression curves, muscle-group load balance, and PR forecasting built for athletes who measure what matters.",
    metricLabel: "Forecast Horizon",
    metricValue: "90 Days",
    visual: "trend",
  },
] as const;

function FeatureMicroVisual({
  type,
}: {
  type: (typeof FEATURES)[number]["visual"];
}) {
  if (type === "bars") {
    return (
      <div className="flex items-end gap-1.5 h-8">
        {[35, 55, 48, 72, 65, 92, 84].map((h, i) => (
          <span
            key={i}
            className={`w-1.5 ${i === 5 ? "bg-[#C8FF00]" : "bg-white/15"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    );
  }
  if (type === "wave") {
    return (
      <svg viewBox="0 0 110 28" className="w-24 h-7">
        <polyline
          fill="none"
          stroke="#C8FF00"
          strokeWidth="1.8"
          points="0,20 14,18 24,8 34,24 46,14 60,16 74,5 86,21 98,12 110,14"
        />
      </svg>
    );
  }
  if (type === "meter") {
    return (
      <div className="w-24 space-y-1.5">
        <div className="h-1.5 w-full bg-white/10 overflow-hidden">
          <div className="h-full w-[88%] bg-[#C8FF00]" />
        </div>
        <div className="h-1.5 w-full bg-white/10 overflow-hidden">
          <div className="h-full w-[74%] bg-white/40" />
        </div>
      </div>
    );
  }
  if (type === "dots") {
    return (
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 ${
              i < 8 ? "bg-[#C8FF00]/80" : "bg-white/10"
            }`}
          />
        ))}
      </div>
    );
  }
  if (type === "chips") {
    return (
      <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-[#9499A1]">
        <span className="px-1.5 py-0.5 border border-white/15 bg-white/[0.03] text-white">
          iOS
        </span>
        <span className="px-1.5 py-0.5 border border-[#C8FF00]/40 bg-[#C8FF00]/10 text-[#C8FF00]">
          BLE 5.3
        </span>
      </div>
    );
  }
  return (
    <svg viewBox="0 0 110 28" className="w-24 h-7">
      <polyline
        fill="none"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1.5"
        points="0,24 22,22 44,18 66,14 88,9 110,4"
      />
      <polyline
        fill="none"
        stroke="#C8FF00"
        strokeWidth="2"
        points="44,18 66,14 88,9 110,4"
      />
      <circle cx="110" cy="4" r="2.5" fill="#C8FF00" />
    </svg>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-20 sm:py-24 lg:py-36 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Grid Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-revo-grid opacity-45" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C8FF00]">
                <span className="h-[1px] w-7 sm:w-8 bg-[#C8FF00]" />
                <span>02 // Core Capabilities</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-0.025em] leading-[1.03] text-white">
                Engineered for every rep,
                <br />
                mile, and recovery cycle.
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-[#8B909A] leading-relaxed">
              Every module inside REVO works as a single synchronized system —
              transforming raw effort into measurable, sustainable performance.
            </p>
          </div>
        </Reveal>

        {/* Architectural Feature Grid */}
        <div className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.code} delayMs={(idx % 3) * 80}>
                <div className="group revo-panel revo-panel-hover p-5 sm:p-7 flex flex-col justify-between h-full min-h-[248px] sm:min-h-[285px]">
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 border border-white/10 bg-[#0B0B0E] flex items-center justify-center text-white group-hover:text-[#C8FF00] group-hover:border-[#C8FF00]/40 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#646870] group-hover:text-[#C8FF00]/80 transition-colors">
                        {feature.code}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-white tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#9499A1] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Telemetry Bar */}
                  <div className="mt-6 sm:mt-8 pt-4 border-t border-white/[0.07] flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#646870]">
                        {feature.metricLabel}
                      </p>
                      <p className="font-mono text-xs font-medium text-white mt-0.5">
                        {feature.metricValue}
                      </p>
                    </div>
                    <FeatureMicroVisual type={feature.visual} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
