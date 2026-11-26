import React from "react";

const TELEMETRY_ITEMS = [
  "ADAPTIVE TRAINING ENGINE",
  "100HZ BIOMETRIC TELEMETRY",
  "APPLE HEALTHKIT & WATCHOS",
  "GARMIN & WHOOP SYNC",
  "REAL-TIME HRV RECOVERY",
  "VO2 MAX FORECASTING",
  "END-TO-END ENCRYPTED",
  "ZERO-LATENCY COACHING",
];

export function EcosystemStrip() {
  return (
    <div
      aria-label="REVO Ecosystem Capabilities"
      className="relative border-y border-white/[0.07] bg-[#08080B] py-4 overflow-hidden select-none"
    >
      {/* Edge Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#08080B] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#08080B] to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center shrink-0">
            {TELEMETRY_ITEMS.map((item) => (
              <div
                key={`${dup}-${item}`}
                className="flex items-center gap-6 sm:gap-8 px-4 sm:px-6"
              >
                <span className="h-1.5 w-1.5 bg-[#C8FF00] shrink-0" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#9499A1] whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
