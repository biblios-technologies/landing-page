import { Smartphone, Database, MessageCircle, BarChart3, Check } from "lucide-react";

const solutions = [
  {
    icon: Database,
    title: "Sermon Search Engine",
    description:
      "Improving access to sermons, teachings, and resources through powerful search capabilities.",
    features: ["Website search tool", "Summarizing sermons", "Giving platforms"],
  },
  {
    icon: BarChart3,
    title: "Ministry Analytics",
    description:
      "Gain insights into your church's health and growth to make Spirit-led, data-informed decisions.",
    features: ["Growth metrics", "Engagement tracking", "Reporting tools"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-black/60 uppercase tracking-wider">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#30b7f9] mt-4 mb-6">
            Technology That Serves Your Ministry
          </h2>
          <p className="text-lg text-black/60">
            We don't believe in one-size-fits-all. Every church has unique needs
            and callings. We partner with you to build solutions that fit your
            vision.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-[#30b7f9]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <Check className="w-4 h-4 text-[#30b7f9]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
