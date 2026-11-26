import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EcosystemStrip } from "@/components/EcosystemStrip";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { VisionSection } from "@/components/VisionSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F7FA] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <EcosystemStrip />
        <AboutSection />
        <FeaturesSection />
        <ExperienceSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
