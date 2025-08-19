import GradientText from "@/components/ui/GradientText";
import { HeroHeader } from "@/components/headers/HeroHeader";
import { HeroSection } from "@/components/hero/HeroSection";
import FooterSection from "@/components/footer/FooterSection";
import FeaturesSection from "@/components/features/FeaturesSection";

export default function Home() {
  return (

    <div className="relative min-h-screen w-full bg-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage:
            "radial-gradient(120% 80% at 50% 0%, rgba(255, 228, 144,0.55) 0%, rgba(255, 228, 144,0.35) 35%, rgba(255, 228, 144,0.15) 60%, rgba(255,255,255,0) 85%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10">
        <HeroHeader />
        <HeroSection />
        <FeaturesSection />
        <FooterSection />
      </div>
    </div>

  );
}
