import GradientText from "@/components/ui/GradientText";
import { HeroHeader } from "@/components/headers/HeroHeader";
import { HeroSection } from "@/components/hero/HeroSection";
import FooterSection from "@/components/footer/FooterSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import StatsSection from "@/components/features/StatsSection";

export default function Home() {
  return (

    <div className="relative min-h-screen w-full bg-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage:
            "radial-gradient(120% 80% at 50% 0%, rgba(255, 228, 144,0.55) 0%, rgba(255, 228, 144,0.35) 30%, rgba(255, 228, 144,0.15) 50%, rgba(255,255,255,0) 60%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          pointerEvents: "none",
          // Fade the gradient to transparent before the bottom of the viewport
          // to avoid the footer visually "cutting" the gradient.
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 65%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 65%, rgba(0,0,0,0) 100%)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
      <div className="relative z-10">
        <HeroHeader />
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <FooterSection />
      </div>
    </div>

  );
}
