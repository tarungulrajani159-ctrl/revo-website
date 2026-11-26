import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "REVO — Your Fitness. Your Evolution.",
  description:
    "Meet REVO — a smarter fitness technology ecosystem designed to help you train, track, improve, and evolve with adaptive intelligence and real-time biometric telemetry.",
  keywords: [
    "REVO",
    "fitness technology",
    "adaptive training",
    "biometric telemetry",
    "performance app",
    "digital fitness ecosystem",
  ],
  openGraph: {
    title: "REVO — Your Fitness. Your Evolution.",
    description:
      "A smarter fitness experience designed to help you train, track, improve, and evolve.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-[#F5F7FA] font-sans selection:bg-[#C8FF00] selection:text-[#050505] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
