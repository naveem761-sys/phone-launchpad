import phoneHero from "@/assets/phone-hero.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="text-center lg:text-left space-y-6">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary animate-fade-up">
            Introducing
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight animate-fade-up-delay-1">
            Nova <span className="text-gradient">Ultra</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 animate-fade-up-delay-2">
            Experience the future of mobile technology. Titanium design, AI-powered camera, and all-day battery life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-delay-2">
            <Button size="lg" className="glow text-base font-semibold px-8">
              Pre-order Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base font-semibold px-8">
              Learn More
            </Button>
          </div>
          <p className="text-sm text-muted-foreground animate-fade-up-delay-2">
            Starting at <span className="font-bold text-foreground">$999</span>
          </p>
        </div>

        {/* Phone Image */}
        <div className="flex justify-center animate-float">
          <img
            src={phoneHero}
            alt="Nova Ultra smartphone"
            width={500}
            height={640}
            className="drop-shadow-2xl max-w-[320px] md:max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
