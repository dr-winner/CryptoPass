import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { CryptoShowcase } from "@/components/sections/crypto-showcase";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CryptoShowcase />
    </div>
  );
}