import { Waves, BookOpen, Church } from "lucide-react";

const values = [
  {
    icon: Waves,
    title: "Biblical Conversions",
    description:
      "Our mission is to make disciples of all nations. We want people to know the truth and have a biblical conversion that aligns with scripture.",
  },
  {
    icon: BookOpen,
    title: "Biblical Literacy",
    description:
      "We are committed to equipping every disciple with tools to grow in their understanding and application of Scripture."
  },
  {
    icon: Church,
    title: "Biblical Churches",
    description:
      "We partner with local churches to understand their unique challenges and create tools that truly serve their mission.",
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-black/60 uppercase tracking-wider">
            Our Mission
          </span>
          <h2 className="ext-3xl md:text-4xl lg:text-5xl font-bold text-[#30b7f9] mt-4 mb-6">
            Building for the Body of Christ
          </h2>
          <p className="text-lg text-black/60">
            At Biblios Technologies, we believe technology should be a tool to bring people to God. We're a team of disciples dedicated to
            creating tools that empower churches and disciples to live faithfully until the end.
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
