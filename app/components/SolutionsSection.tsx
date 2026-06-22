import { Zap, Inbox, CalendarCheck, Database, Check } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Lead Follow-Up",
    description:
      "Reply to and chase every inbound lead fast — before it goes cold. We qualify them and book the ready ones straight onto your calendar.",
    features: ["Instant first response", "Automatic qualifying", "Booked, not just captured"],
  },
  {
    icon: Inbox,
    title: "Inquiry Response",
    description:
      "Catch buyer, seller, and customer messages across forms, email, and SMS and respond automatically — so nothing waits in an inbox.",
    features: ["Forms, email & SMS", "Always-on replies", "Human-sounding, on-brand"],
  },
  {
    icon: CalendarCheck,
    title: "Scheduling",
    description:
      "Turn interest into booked calls and appointments without the back-and-forth. The automation handles the scheduling for you.",
    features: ["No more phone tag", "Calendar sync", "Fewer no-shows"],
  },
  {
    icon: Database,
    title: "Data Entry & Busywork",
    description:
      "The repetitive tasks that eat your day — handled automatically. We take the manual work off your plate so you can focus on the business.",
    features: ["Repetitive tasks automated", "Fewer mistakes", "Hours back each week"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-black/60 uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#30b7f9] mt-4 mb-6">
            Automation built around your workflow
          </h2>
          <p className="text-lg text-black/60">
            You already generate more leads and inquiries than you can personally
            keep up with. The gap isn't getting them — it's following up with every
            one. Here's how we close that gap.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
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
