import React from "react";

interface RevoLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

export function RevoLogo({
  className = "",
  showWordmark = true,
  size = "md",
}: RevoLogoProps) {
  const iconDims =
    size === "sm" ? "h-6 w-6" : size === "lg" ? "h-9 w-9" : "h-7 w-7";
  const textSize =
    size === "sm"
      ? "text-base tracking-[0.22em]"
      : size === "lg"
      ? "text-2xl tracking-[0.24em]"
      : "text-lg tracking-[0.22em]";

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconDims}
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="6"
          fill="#0D0D10"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1.2"
        />
        {/* Precision kinetic 'R' chevron mark */}
        <path
          d="M10.5 26V10H19.5C22.8137 10 25.5 12.6863 25.5 16C25.5 18.6132 23.8295 20.8364 21.5 21.6606L26 26H21.2L17.1 21.8H14V26H10.5ZM14 18.6H19.2C20.7464 18.6 22 17.4359 22 16C22 14.5641 20.7464 13.4 19.2 13.4H14V18.6Z"
          fill="#F5F7FA"
        />
        {/* Electric lime kinetic accent slash */}
        <path d="M21.8 26L26 26L23.2 23.1L20.4 24.5L21.8 26Z" fill="#C8FF00" />
        <rect x="27.5" y="10" width="2.2" height="6" fill="#C8FF00" />
      </svg>
      {showWordmark && (
        <span
          className={`font-display font-bold uppercase text-[#F5F7FA] ${textSize}`}
        >
          REVO
        </span>
      )}
    </span>
  );
}
