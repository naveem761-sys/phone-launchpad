import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] rounded-full bg-primary/8 blur-[100px]" />
      </div>
      <div className="container mx-auto text-center relative z-10 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to go <span className="text-gradient">Ultra</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Pre-order now and be among the first to experience the next generation.
        </p>
        <Button size="lg" className="glow text-base font-semibold px-10">
          Pre-order — $999 <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
