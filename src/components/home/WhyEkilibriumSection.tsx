import { Target, Wrench, Link as LinkIcon, Code } from "lucide-react";

export function WhyEkilibriumSection() {
  const reasons = [
    {
      icon: Target,
      title: "Rental-First",
      description: "Ekilibrium specializes in rental workflows rather than trying to automate every type of business.",
    },
    {
      icon: Wrench,
      title: "Operator Perspective",
      description: "Technology is designed around actual rental operating problems from hands-on experience.",
    },
    {
      icon: LinkIcon,
      title: "Integration-First",
      description: "Existing systems can be connected instead of replacing everything unnecessarily.",
    },
    {
      icon: Code,
      title: "Build When Necessary",
      description: "When existing rental software cannot solve a workflow, Ekilibrium can create specialized technology.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Rental Technology From an Operator's Perspective.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-8 space-y-4"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-primary">
                  {reason.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}