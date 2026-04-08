import { Camera, Cpu, Battery, Shield, Wifi, Smartphone } from "lucide-react";

const features = [
  { icon: Camera, title: "200MP Camera", desc: "Capture every detail with our most advanced lens system." },
  { icon: Cpu, title: "A20 Bionic Chip", desc: "Blazing fast performance for everything you do." },
  { icon: Battery, title: "48hr Battery", desc: "Two full days on a single charge. No compromises." },
  { icon: Shield, title: "Titanium Build", desc: "Aerospace-grade titanium. Light yet indestructible." },
  { icon: Wifi, title: "5G Ultra", desc: "Lightning-fast connectivity wherever you go." },
  { icon: Smartphone, title: "6.9\" OLED", desc: "Edge-to-edge display with 120Hz ProMotion." },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Why <span className="text-gradient">Nova Ultra</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Every detail engineered to perfection.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-card p-8 card-shadow border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
