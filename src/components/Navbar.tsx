import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Smartphone className="h-5 w-5 text-primary" />
          <span>Nova</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#specs" className="hover:text-foreground transition-colors">Specs</a>
          <a href="#order" className="hover:text-foreground transition-colors">Order</a>
        </div>
        <Button size="sm" className="text-sm font-semibold">Pre-order</Button>
      </div>
    </nav>
  );
};

export default Navbar;
