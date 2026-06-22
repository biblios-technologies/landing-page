import { Cpu, Workflow, MapPin } from "lucide-react";

const proofPoints = [
  {
    icon: Workflow,
    title: "Real working systems",
    description:
      "Not slideware. We've built things like an automated lead-discovery and outreach pipeline — find prospects, enrich their contact info, write human-sounding outreach, and send it.",
  },
  {
    icon: Cpu,
    title: "Built on capable AI",
    description:
      "We use current, capable AI (Anthropic's Claude) with real integrations — Gmail, Google Maps, contact enrichment, and more — wired together so it actually runs your work.",
  },
  {
    icon: MapPin,
    title: "Local and focused",
    description:
      "We go deep instead of selling generic \"AI\" to everyone. Pick a vertical, pick a region, and build automation that genuinely fits how that work gets done.",
  },
];

const ProofSection = () => {
  return (
    <section id="why" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-black/60 uppercase tracking-wider">
            Why Biblios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#30b7f9] mt-4 mb-6">
            Practical, proven, and built to last
          </h2>
          <p className="text-lg text-black/60">
            Plenty of people will sell you "AI." We build systems that do the work
            — and we stand behind them.
          </p>
        </div>

        {/* Proof Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {proofPoints.map((point, index) => (
            <div
              key={point.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border hover:border-gold/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl text-[#30b7f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
