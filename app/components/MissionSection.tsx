import { Wrench, Sparkles, PhoneCall } from "lucide-react";

const values = [
  {
    icon: Wrench,
    title: "Custom, not off-the-shelf",
    description:
      "We look at your specific business — how leads come in, where they stall — and build to that. No software you have to learn and run yourself.",
  },
  {
    icon: Sparkles,
    title: "Done-for-you",
    description:
      "We build it, wire it up, and run it. The automation plugs into how you already work, so you're never stuck managing tools.",
  },
  {
    icon: PhoneCall,
    title: "Starts with a short call",
    description:
      "Every engagement begins with a no-pressure 15-minute conversation about your needs — not a pitch. We listen first, then build.",
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-black/60 uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#30b7f9] mt-4 mb-6">
            You're the bottleneck. We fix that.
          </h2>
          <p className="text-lg text-black/60">
            New leads land on one desk. Inquiries sit in an inbox while you're out
            doing the actual work, and good prospects drift to whoever answered
            first. Hiring for it is slow and expensive. We automate the
            follow-through so nothing slips — and you stop being the bottleneck.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border hover:border-gold/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl text-[#30b7f9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
