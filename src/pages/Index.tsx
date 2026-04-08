import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpecsSection from "@/components/SpecsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="features"><FeaturesSection /></div>
      <div id="specs"><SpecsSection /></div>
      <div id="order"><CTASection /></div>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        © 2026 Nova. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
