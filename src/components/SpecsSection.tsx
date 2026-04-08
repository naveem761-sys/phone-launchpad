const specs = [
  { label: "Display", value: '6.9" Super Retina OLED' },
  { label: "Chip", value: "A20 Bionic" },
  { label: "RAM", value: "16 GB" },
  { label: "Storage", value: "256GB / 512GB / 1TB" },
  { label: "Camera", value: "200MP + 48MP + 12MP" },
  { label: "Battery", value: "6000 mAh" },
  { label: "Charging", value: "65W Wired / 25W Wireless" },
  { label: "Weight", value: "185g" },
];

const SpecsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
          Tech <span className="text-gradient">Specs</span>
        </h2>
        <div className="divide-y divide-border">
          {specs.map((s) => (
            <div key={s.label} className="flex justify-between py-5">
              <span className="text-muted-foreground font-medium">{s.label}</span>
              <span className="font-semibold text-right">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
